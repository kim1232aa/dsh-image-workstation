/**
 * Agent 对话生图 / 图生图 — register dsh tools that call the SAME host
 * mediaProxy.generate / mediaProxy.edit path as studio CTA (no direct upstream).
 *
 * Red lines (docs 01/03 §7.5):
 * - multi-model → ask which (do not auto-pick)
 * - channels not configured → guide to settings (no silent fail)
 * - allowAgentImageGeneration=false → tools refuse; studio CTA unaffected
 *
 * This lands a real register path. Full Agent mode (inline chat UX, slash
 * edit, vision, web search) is NOT claimed Pass here.
 */
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import {
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  mapAgentGenerateRequest,
  mapAgentEditRequest,
  normalizeAgentRefImages,
  pickAgentRefImageSource,
  scrubAgentError,
  listConfiguredAgentModels,
  listImageRefsFromUserMessage,
  findLatestUserPromptMessage,
  resolveEditRefInputs,
  summarizeMessageContentShapes,
  extractImageRefsFromContentBlock,
} from './model-policy.js'

export {
  listConfiguredAgentModels,
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  mapAgentGenerateRequest,
  mapAgentEditRequest,
  normalizeAgentRefImages,
  pickAgentRefImageSource,
  scrubAgentError,
  listImageRefsFromUserMessage,
  findLatestUserPromptMessage,
  resolveEditRefInputs,
  summarizeMessageContentShapes,
  extractImageRefsFromContentBlock,
} from './model-policy.js'

/**
 * Chat-facing tool result parts (dsh ContentBlock text).
 * Prefer markdown image lines for remote URLs — ImageBlock needs attachment
 * refs which mediaProxy result URLs do not provide.
 * Structured JSON remains the execute() return value for machine use.
 *
 * @param {string} toolLabel
 * @param {unknown} _args
 * @param {{ job_id?: string, status?: string, message?: string, error?: string, images?: { url?: string }[] }} value
 * @returns {{ type: 'text', text: string }[]}
 */
export function renderAgentImageOutput(toolLabel, _args, value) {
  const label = String(toolLabel || 'generate_image')
  const jobId = String(value?.job_id || '').trim()
  const status = String(value?.status || '').trim() || 'unknown'
  const message = String(value?.message || '').trim()
  const error = String(value?.error || '').trim()
  const images = Array.isArray(value?.images) ? value.images : []
  const urls = images
    .map((img) => String(img?.url || '').trim())
    .filter(Boolean)

  const lines = []
  lines.push(
    jobId
      ? `${label}: status=${status} job_id=${jobId}`
      : `${label}: status=${status}`,
  )
  if (message) lines.push(message)
  if (error) lines.push(`error: ${error}`)
  if (urls.length === 0) {
    lines.push('(no image URLs)')
  } else {
    urls.forEach((url, i) => {
      const alt = urls.length === 1 ? 'generated' : `generated-${i + 1}`
      // Verbatim URL — no domain rewrite (docs 01/03 red line).
      lines.push(`![${alt}](${url})`)
    })
  }
  return [{ type: 'text', text: lines.join('\n') }]
}

/** @deprecated use renderAgentImageOutput('generate_image', …) */
export function renderGenerateImageOutput(_args, value) {
  return renderAgentImageOutput('generate_image', _args, value)
}

export function renderEditImageOutput(_args, value) {
  return renderAgentImageOutput('edit_image', _args, value)
}

/** Host generate/edit can be slow; cooperative with exec.signal. */
const AGENT_GENERATE_TIMEOUT_MS = 300_000

const RESULT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    job_id: { type: 'string', required: true },
    status: { type: 'string', required: true },
    message: { type: 'string', required: true },
    error: { type: 'string' },
    images: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          url: { type: 'string', required: true },
          local_path: { type: 'string' },
          kind: { type: 'string' },
        },
      },
    },
  },
}

/**
 * Resolve ref to a string mediaProxy.edit / openaiImagesEdit can materialize.
 * dataUrl / local path / file:// pass through; http(s) downloaded to tmp.
 * @param {string} source
 * @param {AbortSignal | undefined} signal
 * @returns {Promise<string>}
 */
async function resolveEditImageMaterial(source, signal) {
  const s = String(source || '').trim()
  if (!s) {
    const err = new Error('图生图需要参考图（refImages：url / dataUrl / path）')
    err.code = 'REF_REQUIRED'
    throw err
  }
  if (s.startsWith('data:') || s.startsWith('file://')) return s
  if (existsSync(s)) return s
  if (/^https?:\/\//i.test(s)) {
    const res = await fetch(s, { signal })
    if (!res.ok) {
      const err = new Error(`ref image download failed: HTTP ${res.status}`)
      err.code = 'BAD_REF_IMAGE'
      throw err
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const ct = res.headers.get('content-type') || ''
    const ext = ct.includes('jpeg') || ct.includes('jpg') ? 'jpg' : 'png'
    const dir = '/tmp/dsh-agent-refs'
    mkdirSync(dir, { recursive: true })
    const file = join(dir, `${randomUUID()}.${ext}`)
    writeFileSync(file, buf)
    return file
  }
  // Relative path under cwd — last resort
  if (existsSync(s)) return s
  const err = new Error(
    'ref image not usable (need dataUrl, local path, or http(s) url)',
  )
  err.code = 'BAD_REF_IMAGE'
  throw err
}

/**
 * Turn a session ImageAttachmentRef into a path/dataUrl for mediaProxy.edit.
 * @param {any} ref
 * @param {any} attachments ctx.attachments store
 * @param {AbortSignal | undefined} signal
 */
async function materializeSessionImageRef(ref, attachments, signal) {
  if (!ref) {
    const err = new Error('session attachment unavailable')
    err.code = 'REF_REQUIRED'
    throw err
  }
  // URL / dataUrl / path carried on the parsed message ref
  if (ref.url || ref._kind === 'url') {
    return resolveEditImageMaterial(String(ref.url || ''), signal)
  }
  if (!attachments) {
    const err = new Error('session attachment unavailable')
    err.code = 'REF_REQUIRED'
    throw err
  }
  const kind = String(ref._kind || 'image')
  if (kind === 'file') {
    try {
      const hostPath =
        typeof attachments.fileHostPath === 'function' ? attachments.fileHostPath(ref) : undefined
      if (hostPath && existsSync(String(hostPath))) return String(hostPath)
    } catch {
      /* fall through */
    }
    if (typeof attachments.readFileStream === 'function') {
      const chunks = []
      for await (const chunk of attachments.readFileStream(ref, signal)) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
      }
      const buf = Buffer.concat(chunks)
      if (buf.length === 0) {
        const err = new Error('chat file attachment has no bytes')
        err.code = 'BAD_REF_IMAGE'
        throw err
      }
      const mime = ref.mediaType || 'image/png'
      return `data:${mime};base64,${buf.toString('base64')}`
    }
  }
  try {
    const hostPath =
      typeof attachments.imageHostPath === 'function' ? attachments.imageHostPath(ref) : undefined
    if (hostPath && existsSync(String(hostPath))) return String(hostPath)
  } catch {
    /* fall through to readImage */
  }
  if (typeof attachments.readImage !== 'function') {
    const err = new Error('attachments.readImage unavailable for chat image')
    err.code = 'BAD_REF_IMAGE'
    throw err
  }
  const stored = await attachments.readImage(ref, signal)
  const bytes = stored?.data
  if (!bytes || !(bytes instanceof Uint8Array || Buffer.isBuffer(bytes))) {
    const err = new Error('chat attachment has no image bytes')
    err.code = 'BAD_REF_IMAGE'
    throw err
  }
  const mime =
    stored?.ref?.mediaType || ref.mediaType || 'image/png'
  return `data:${mime};base64,${Buffer.from(bytes).toString('base64')}`
}

/**
 * @param {any} out mediaProxy result
 * @param {string} okMessage
 */
function mapProxyResult(out, okMessage) {
  const images = Array.isArray(out?.results)
    ? out.results.map((r) => ({
        url: String(r.url || ''),
        ...(r.localPath ? { local_path: String(r.localPath) } : {}),
        kind: r.kind || 'image',
      }))
    : []
  return {
    job_id: String(out?.jobId || ''),
    status: String(out?.phase || 'done'),
    message:
      images.length > 0 ? okMessage : 'Generation returned no images.',
    images,
  }
}

/**
 * Register Agent-facing generate_image + edit_image on ctx.tools.
 * @param {any} ctx Cordis ctx with tools
 * @param {{ generate: Function, edit?: Function, mediaConfigured?: boolean }} mediaProxy
 * @param {() => { allowAgentImageGeneration?: boolean, agentImageModels?: string[] }} resolveConfig
 * @returns {() => void} disposer
 */
export async function registerAgentImageTools(ctx, mediaProxy, resolveConfig) {
  const getAttachments = () => {
    try {
      return typeof ctx?.get === 'function' ? ctx.get('attachments') : null
    } catch {
      return null
    }
  }

  if (!ctx?.tools?.register) {
    throw new Error('[dsh-image-workstation] ctx.tools.register unavailable')
  }
  let defineTool
  try {
    ;({ defineTool } = await import('@deepseek-ai/dsh-tools'))
  } catch (e) {
    throw new Error(
      `[dsh-image-workstation] @deepseek-ai/dsh-tools unavailable: ${e?.message || e}`,
    )
  }

  const commonParams = {
    model: {
      type: 'string',
      description:
        'Configured image model id. Required when multiple models are configured — ask the user first.',
    },
    size: {
      type: 'string',
      description: 'Aspect ratio such as 1:1, 16:9, 9:16, or WxH pixels. Defaults to 1:1.',
    },
    quality: {
      type: 'string',
      description: 'auto, 1k, 2k, or 4k. Defaults to 1k.',
    },
    count: {
      type: 'integer',
      description: 'Number of images, 1 to 4. Defaults to 1.',
    },
  }

  const disposeGenerate = ctx.tools.register(
    defineTool({
      name: 'generate_image',
      description:
        'Generate an image via the dsh-image-workstation host mediaProxy (same path as the studio CTA text-to-image). ' +
        'When multiple image models are configured, you MUST ask the user which model to use and pass it as model — do not pick silently. ' +
        'If channels are not configured, tell the user to open Settings → Plugins → dsh-image-workstation (or host media.env). ' +
        'For image-to-image / 图生图 with a reference, use edit_image instead. ' +
        'On success, return job_id and the image URL(s) verbatim in your reply (include the markdown image lines from the tool result).',
      parameters: {
        prompt: {
          type: 'string',
          required: true,
          description: 'Image-generation prompt (do not rewrite unless the user asked).',
        },
        ...commonParams,
      },
      output: {
        schema: RESULT_SCHEMA,
        render: renderGenerateImageOutput,
      },
      timeoutMs: AGENT_GENERATE_TIMEOUT_MS,
      async execute(args, exec) {
        const config = typeof resolveConfig === 'function' ? resolveConfig() : {}
        ensureAgentImageConfigured(config, mediaProxy)
        if (!String(args?.prompt || '').trim()) {
          const err = new Error('prompt required')
          err.code = 'PROMPT_REQUIRED'
          throw err
        }
        const model = resolveAgentImageModel(config, args.model)
        const req = mapAgentGenerateRequest(args, model, exec?.signal)
        hitAgentToolLog({
          at: new Date().toISOString(),
          status: 'invoke',
          tool: 'generate_image',
          promptLen: String(req.prompt || '').length,
          model: req.model || null,
          n: req.n,
        })
        try {
          const out = await mediaProxy.generate({
            prompt: req.prompt,
            n: req.n,
            size: req.size,
            aspect_ratio: req.aspect_ratio,
            resolution: req.resolution,
            ...(req.model ? { model: req.model } : {}),
            signal: req.signal,
          })
          const result = mapProxyResult(
            out,
            'Generation completed via host mediaProxy.generate.',
          )
          hitAgentToolLog({
            at: new Date().toISOString(),
            status: 'done',
            tool: 'generate_image',
            job_id: result.job_id,
            phase: result.status,
            urlCount: result.images.length,
            urls: result.images.map((i) => i.url).filter(Boolean),
          })
          return result
        } catch (e) {
          const err = new Error(scrubAgentError(e?.message || e))
          err.code = e?.code || 'GENERATE_FAILED'
          hitAgentToolLog({
            at: new Date().toISOString(),
            status: 'error',
            tool: 'generate_image',
            code: err.code,
            message: err.message,
          })
          throw err
        }
      },
    }),
  )

  const disposeEdit = ctx.tools.register(
    defineTool({
      name: 'edit_image',
      description:
        'Image-to-image (图生图) via the dsh-image-workstation host mediaProxy.edit — same /v1/images/edits path as the studio CTA when refImages are present. ' +
        'Prefer the image(s) attached to the CURRENT user message. Do NOT silently pick another jpg from the workspace when the user already attached a reference. ' +
        'Pass refImages/image only when the message has no attachment (url, dataUrl, or explicit path). ' +
        'Skill auto-match must NOT block 图生图 when the user did not name a skill — call this tool whenever the user provides a reference image and wants an edit. ' +
        'When multiple image models are configured, ask which model to use and pass model. ' +
        'If channels are not configured, tell the user to open Settings → Plugins → dsh-image-workstation (or host media.env). ' +
        'On success, return job_id and the image URL(s) verbatim (include markdown image lines from the tool result).',
      parameters: {
        prompt: {
          type: 'string',
          required: true,
          description: 'Edit prompt describing the desired change (do not rewrite unless asked).',
        },
        refImages: {
          type: 'array',
          description:
            'Reference image(s) from chat attachments. Prefer strings: http(s) url, dataUrl, or local path. Objects {url|dataUrl|path} also accepted by the host.',
          items: { type: 'string' },
        },
        image: {
          type: 'string',
          description:
            'Single reference shortcut (url / dataUrl / path). Provide refImages and/or image — at least one required.',
        },
        ...commonParams,
      },
      output: {
        schema: RESULT_SCHEMA,
        render: renderEditImageOutput,
      },
      timeoutMs: AGENT_GENERATE_TIMEOUT_MS,
      async execute(args, exec) {
        const config = typeof resolveConfig === 'function' ? resolveConfig() : {}
        ensureAgentImageConfigured(config, mediaProxy)
        if (!String(args?.prompt || '').trim()) {
          const err = new Error('prompt required')
          err.code = 'PROMPT_REQUIRED'
          throw err
        }
        if (typeof mediaProxy?.edit !== 'function') {
          const err = new Error('mediaProxy.edit unavailable')
          err.code = 'HOST_PROXY_NOT_WIRED'
          throw err
        }
        const argRaw =
          Array.isArray(args?.refImages) && args.refImages.length
            ? args.refImages
            : args?.image
              ? [args.image]
              : []
        const latestUser =
          findLatestUserPromptMessage(exec?.agent) ||
          findLatestUserPromptMessage(exec)
        const messageImageRefs = listImageRefsFromUserMessage(latestUser)
        if (messageImageRefs.length === 0) {
          hitAgentToolLog({
            at: new Date().toISOString(),
            status: 'ref_scan_empty',
            tool: 'edit_image',
            hasAgent: Boolean(exec?.agent),
            hasSession: Boolean(exec?.agent?.session || exec?.session),
            contentShapes: summarizeMessageContentShapes(latestUser),
            argCount: argRaw.length,
          })
        }
        const decided = resolveEditRefInputs({
          argRefs: argRaw,
          messageImageRefs,
        })
        let material
        let refKind
        let refBase = null
        let refBytes = null
        let sourceHint = decided.source
        if (decided.source === 'message_attachment') {
          const attachments =
            (typeof getAttachments === 'function' ? getAttachments() : null) ||
            (typeof ctx?.get === 'function' ? ctx.get('attachments') : null)
          if (!attachments) {
            const err = new Error(
              '当前消息有附图，但 attachments 服务不可用，无法读取会话附件。',
            )
            err.code = 'REF_REQUIRED'
            throw err
          }
          const firstRef = decided.refs[0]
          material = await materializeSessionImageRef(firstRef, attachments, exec?.signal)
          refKind = 'message_attachment'
          refBase = firstRef?.name || firstRef?.attachmentId || null
          refBytes = typeof firstRef?.bytes === 'number' ? firstRef.bytes : null
          if (decided.ignoredArgCount > 0) {
            hitAgentToolLog({
              at: new Date().toISOString(),
              status: 'ref_override',
              tool: 'edit_image',
              reason: 'prefer_current_message_attachment',
              ignoredArgCount: decided.ignoredArgCount,
              messageRefName: refBase,
            })
          }
        } else {
          const refs = normalizeAgentRefImages(decided.refs)
          const source = pickAgentRefImageSource(refs)
          if (!source) {
            const err = new Error(
              '图生图需要参考图：请在当前消息附带图片，或传入 refImages/image（url / dataUrl / path）。禁止静默改用工作区其它文件。',
            )
            err.code = 'REF_REQUIRED'
            throw err
          }
          material = await resolveEditImageMaterial(source, exec?.signal)
          const srcStr = String(source || '')
          refKind = srcStr.startsWith('data:')
            ? 'dataUrl'
            : /^https?:\/\//i.test(srcStr)
              ? 'url'
              : 'path'
          if (refKind === 'path') {
            try {
              refBase = srcStr.split(/[\\/]/).pop() || null
            } catch {
              refBase = null
            }
          } else if (refKind === 'dataUrl') {
            const m = /^data:[^;]+;base64,(.+)$/i.exec(srcStr)
            refBytes = m ? Math.floor((m[1].length * 3) / 4) : null
          }
        }
        const model = resolveAgentImageModel(config, args.model)
        const req = mapAgentEditRequest(args, model, material, exec?.signal)
        hitAgentToolLog({
          at: new Date().toISOString(),
          status: 'invoke',
          tool: 'edit_image',
          promptLen: String(req.prompt || '').length,
          model: req.model || null,
          n: req.n,
          refKind,
          refBase,
          refBytes,
          refSource: sourceHint,
        })
        try {
          // Prefer direct edit (CTA 图生图 seat). Also mirrors wantsEdit → edit.
          const out = await mediaProxy.edit({
            prompt: req.prompt,
            image: req.image,
            n: req.n,
            size: req.size,
            ...(req.model ? { model: req.model } : {}),
            signal: req.signal,
          })
          const result = mapProxyResult(
            out,
            'Edit completed via host mediaProxy.edit (/v1/images/edits).',
          )
          hitAgentToolLog({
            at: new Date().toISOString(),
            status: 'done',
            tool: 'edit_image',
            job_id: result.job_id,
            phase: result.status,
            urlCount: result.images.length,
            urls: result.images.map((i) => i.url).filter(Boolean),
          })
          return result
        } catch (e) {
          const err = new Error(scrubAgentError(e?.message || e))
          err.code = e?.code || 'EDIT_FAILED'
          hitAgentToolLog({
            at: new Date().toISOString(),
            status: 'error',
            tool: 'edit_image',
            code: err.code,
            message: err.message,
          })
          throw err
        }
      },
    }),
  )

  return () => {
    if (typeof disposeGenerate === 'function') disposeGenerate()
    if (typeof disposeEdit === 'function') disposeEdit()
  }
}

/** Append one JSON line for smoke observability (no secrets). */
function hitAgentToolLog(payload) {
  try {
    writeFileSync('/tmp/dsh-agent-tools.log', `${JSON.stringify(payload)}\n`, { flag: 'a' })
  } catch {
    /* ignore */
  }
}

/**
 * Soft-attach on a fiber that has tools. Logs and skips if tools missing.
 * @param {any} ctx
 * @param {{ generate: Function, edit?: Function, mediaConfigured?: boolean }} mediaProxy
 * @param {() => object} resolveConfig
 */
export function attachAgentImageTools(ctx, mediaProxy, resolveConfig) {
  if (!ctx?.inject) {
    ctx?.logger?.warn?.(
      '[dsh-image-workstation] ctx.inject unavailable — Agent generate_image/edit_image not registered',
    )
    hitAgentToolLog({ status: 'inject_unavailable' })
    return
  }
  ctx.inject(['tools'], (tctx) => {
    Promise.resolve()
      .then(() => registerAgentImageTools(tctx, mediaProxy, resolveConfig))
      .then((dispose) => {
        tctx.effect?.(() => dispose, 'dsh-image-workstation: agent generate_image/edit_image')
        const regMsg =
          '[dsh-image-workstation] Agent tools registered: generate_image → mediaProxy.generate; edit_image → mediaProxy.edit'
        tctx.logger?.info?.(regMsg)
        console.info(regMsg)
        hitAgentToolLog({
          at: new Date().toISOString(),
          status: 'registered',
          tools: ['generate_image', 'edit_image'],
        })
      })
      .catch((e) => {
        const message = scrubAgentError(e?.message || e)
        tctx.logger?.error?.(
          `[dsh-image-workstation] Agent tool register failed: ${message}`,
        )
        hitAgentToolLog({ status: 'register_failed', message })
      })
  })
}
