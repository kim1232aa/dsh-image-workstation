/**
 * Agent 对话生图 — register dsh tools that call the SAME host mediaProxy.generate
 * path as CTA RPC (no fake button, no browser direct upstream).
 *
 * Red lines (docs 01/03 §7.5):
 * - multi-model → ask which (do not auto-pick)
 * - channels not configured → guide to settings (no silent fail)
 * - allowAgentImageGeneration=false → tools refuse; studio CTA unaffected
 *
 * This lands a real register path. Full Agent mode (inline chat UX, slash
 * edit, vision, web search) is NOT claimed Pass here.
 */
import {
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  mapAgentGenerateRequest,
  scrubAgentError,
  listConfiguredAgentModels,
} from './model-policy.js'

export {
  listConfiguredAgentModels,
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  mapAgentGenerateRequest,
  scrubAgentError,
} from './model-policy.js'

/** Host generate can be slow; cooperative with exec.signal. */
const AGENT_GENERATE_TIMEOUT_MS = 300_000

/**
 * Register Agent-facing generate_image on ctx.tools.
 * @param {any} ctx Cordis ctx with tools
 * @param {{ generate: Function, mediaConfigured?: boolean }} mediaProxy
 * @param {() => { allowAgentImageGeneration?: boolean, agentImageModels?: string[] }} resolveConfig
 * @returns {() => void} disposer
 */
export async function registerAgentImageTools(ctx, mediaProxy, resolveConfig) {
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

  const dispose = ctx.tools.register(
    defineTool({
      name: 'generate_image',
      description:
        'Generate an image via the dsh-image-workstation host mediaProxy (same path as the studio CTA). ' +
        'When multiple image models are configured, you MUST ask the user which model to use and pass it as model — do not pick silently. ' +
        'If channels are not configured, tell the user to open Settings → Plugins → dsh-image-workstation (or host media.env).',
      parameters: {
        prompt: {
          type: 'string',
          required: true,
          description: 'Image-generation prompt (do not rewrite unless the user asked).',
        },
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
      },
      output: {
        schema: {
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
        },
        render: (_args, value) => [{ type: 'text', text: JSON.stringify(value) }],
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
              images.length > 0
                ? 'Generation completed via host mediaProxy.generate.'
                : 'Generation returned no images.',
            images,
          }
        } catch (e) {
          const err = new Error(scrubAgentError(e?.message || e))
          err.code = e?.code || 'GENERATE_FAILED'
          throw err
        }
      },
    }),
  )

  return typeof dispose === 'function' ? dispose : () => {}
}

/**
 * Soft-attach on a fiber that has tools. Logs and skips if tools missing.
 * @param {any} ctx
 * @param {{ generate: Function, mediaConfigured?: boolean }} mediaProxy
 * @param {() => object} resolveConfig
 */
export function attachAgentImageTools(ctx, mediaProxy, resolveConfig) {
  if (!ctx?.inject) {
    ctx?.logger?.warn?.(
      '[dsh-image-workstation] ctx.inject unavailable — Agent generate_image not registered',
    )
    return
  }
  ctx.inject(['tools'], (tctx) => {
    Promise.resolve()
      .then(() => registerAgentImageTools(tctx, mediaProxy, resolveConfig))
      .then((dispose) => {
        tctx.effect?.(() => dispose, 'dsh-image-workstation: agent generate_image')
        tctx.logger?.info?.(
          '[dsh-image-workstation] Agent tool registered: generate_image → mediaProxy.generate',
        )
      })
      .catch((e) => {
        tctx.logger?.error?.(
          `[dsh-image-workstation] Agent tool register failed: ${scrubAgentError(e?.message || e)}`,
        )
      })
  })
}
