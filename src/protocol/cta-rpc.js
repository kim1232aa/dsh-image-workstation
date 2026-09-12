import { readdirSync, statSync } from 'node:fs'
import path from 'node:path'
/**
 * CTA → host Connection RPC → mediaProxy.generate
 * Channel is plugin-owned (not /api Typert). Token never crosses this boundary.
 */
import {
  scrubErrorMessage as scrubMessage,
  HOST_GENERATE_TIMEOUT_MS,
  HOST_EDIT_TIMEOUT_MS,
  HOST_VIDEO_TIMEOUT_MS,
  anySignal,
} from './rpc-errors.js'
import {
  handleGifEcomRpc,
  CTA_RPC_GIF_GENERATE,
  CTA_RPC_ECOM_GENERATE,
} from './gif-ecom.js'

export const CTA_RPC_CHANNEL = '/dsh-ws'
export const CTA_RPC_GENERATE = 'generate'
export const CTA_RPC_PROBE = 'probe'
export const CTA_RPC_REVERSE_PROMPT = 'reversePrompt'
export const CTA_RPC_ENHANCE_PROMPT = 'enhancePrompt'
export const CTA_RPC_VIDEO_GENERATE = 'videoGenerate'
export { CTA_RPC_GIF_GENERATE, CTA_RPC_ECOM_GENERATE }
export const CTA_RPC_STORAGE_PATHS = 'storage.paths'
export const CTA_RPC_STORAGE_LIST = 'storage.list'

/**
 * Map studio CTA detail → mediaProxy.generate request (no prompt rewrite).
 * @param {Record<string, unknown>} detail
 * @param {AbortSignal} [signal]
 */
export function mapGenerateRequest(detail, signal) {
  const prompt = String(detail?.prompt ?? '')
  const ratio = detail?.ratio && detail.ratio !== '自动' ? String(detail.ratio) : '1:1'
  const clarityRaw = detail?.clarity && detail.clarity !== '自动' ? String(detail.clarity) : '1K'
  const resolution = clarityRaw.toLowerCase() // 1k|2k|4k
  const n = Math.min(Math.max(Number(detail?.count) || 1, 1), 4)
  const model = detail?.modelId ? String(detail.modelId).trim() : undefined
  const size = sizeFromRatio(ratio, clarityRaw)
  /** @type {Record<string, unknown>} */
  const req = {
    prompt,
    n,
    aspect_ratio: ratio,
    resolution,
    size,
  }
  if (model) req.model = model
  if (signal) req.signal = signal
  // negativePrompt retained on wire for future adapters — not merged into prompt
  if (detail?.negativePrompt != null) req.negativePrompt = String(detail.negativePrompt)
  if (detail?.skillId != null) req.skillId = detail.skillId
  if (detail?.mode != null) req.mode = detail.mode
  if (Array.isArray(detail?.refImages)) {
    req.refImages = detail.refImages
      .map((r) => ({
        id: r?.id != null ? String(r.id) : undefined,
        url: r?.url != null ? String(r.url) : r?.dataUrl != null ? String(r.dataUrl) : undefined,
        name: r?.name != null ? String(r.name) : undefined,
      }))
      .filter((r) => r.url)
  }
  return req
}

/**
 * Map video CTA detail → mediaProxy.videoGenerate request.
 * @param {Record<string, unknown>} detail
 * @param {AbortSignal} [signal]
 */
export function mapVideoRequest(detail, signal) {
  const prompt = String(detail?.prompt ?? '')
  const mode = String(detail?.mode || '文生视频')
  const durationRaw = detail?.durationSec != null ? detail.durationSec : detail?.duration
  let durationSec
  if (durationRaw != null && durationRaw !== '') {
    const n = Number.parseInt(String(durationRaw).replace(/[^\d]/g, ''), 10)
    if (Number.isFinite(n) && n > 0) durationSec = n
  }
  const ratio =
    detail?.ratio && detail.ratio !== '自动' ? String(detail.ratio) : '16:9'
  const clarityRaw =
    detail?.clarity && detail.clarity !== '自动' ? String(detail.clarity) : '1K'
  const resolution = String(clarityRaw).toLowerCase()
  const model = detail?.modelId ? String(detail.modelId).trim() : undefined

  const frameUrl = (f) => {
    if (!f) return undefined
    if (typeof f === 'string') return f
    return f.url || f.dataUrl || f.path || undefined
  }
  const firstFrame = frameUrl(detail?.firstFrame)
  const lastFrame = frameUrl(detail?.lastFrame)
  /** @type {Record<string, unknown>} */
  const req = {
    prompt,
    mode,
    aspect_ratio: ratio,
    resolution,
  }
  if (durationSec != null) req.durationSec = durationSec
  if (model) req.model = model
  if (firstFrame) req.firstFrame = String(firstFrame)
  if (lastFrame) req.lastFrame = String(lastFrame)
  if (Array.isArray(detail?.refImages)) {
    req.refImages = detail.refImages
      .map((r) => ({
        id: r?.id != null ? String(r.id) : undefined,
        url: r?.url != null ? String(r.url) : r?.dataUrl != null ? String(r.dataUrl) : undefined,
        name: r?.name != null ? String(r.name) : undefined,
      }))
      .filter((r) => r.url)
  }
  if (signal) req.signal = signal
  return req
}

/**
 * @param {string} ratio
 * @param {string} clarity
 */
function sizeFromRatio(ratio, clarity) {
  const long = clarity === '4K' ? 2048 : clarity === '2K' ? 1536 : 1024
  const short = Math.round(long * 0.75)
  switch (ratio) {
    case '1:1':
      return `${long}x${long}`
    case '3:4':
    case '2:3':
      return `${short}x${long}`
    case '4:3':
    case '3:2':
      return `${long}x${short}`
    case '9:16':
      return `${Math.round(long * 9 / 16)}x${long}`
    case '16:9':
      return `${long}x${Math.round(long * 9 / 16)}`
    case '21:9':
      return `${long}x${Math.round(long * 9 / 21)}`
    default:
      return `${long}x${long}`
  }
}


/**
 * @param {{ generate: (req: any) => Promise<any>, mediaConfigured?: boolean }} mediaProxy
 * @param {{ getDataDir?: () => string, dataDir?: string }} [opts]
 */

const MEDIA_IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.mp4', '.webm', '.mov'])

/**
 * List image/video files under dataDir/relativeSeat (non-recursive).
 * @param {string} dataDir
 * @param {string} relativeSeat
 */
function listMediaSeat(dataDir, relativeSeat) {
  const root = String(dataDir || '').trim()
  const seat = String(relativeSeat || '').trim().replace(/^\/+/, '')
  if (!root || !seat) return []
  const abs = path.join(root, seat)
  let names = []
  try {
    names = readdirSync(abs)
  } catch {
    return []
  }
  const out = []
  for (const name of names) {
    const ext = path.extname(name).toLowerCase()
    if (!MEDIA_IMAGE_EXT.has(ext)) continue
    const full = path.join(abs, name)
    let st
    try {
      st = statSync(full)
    } catch {
      continue
    }
    if (!st.isFile()) continue
    const kind = ['.mp4', '.webm', '.mov'].includes(ext) ? 'video' : 'image'
    out.push({
      id: `${seat}/${name}`,
      name,
      relativePath: `${seat}/${name}`,
      seat,
      kind,
      createdAt: Math.floor((st.mtimeMs || Date.now())),
      // No file:// URLs — client cannot display them; localPath for host later
      localPath: full,
      url: '',
    })
  }
  out.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  return out
}

export function createCtaRpcHandler(mediaProxy, opts = {}) {
  return async (endpoint, payload, signal) => {
    if (endpoint === CTA_RPC_STORAGE_PATHS || endpoint === CTA_RPC_STORAGE_LIST) {
      const dataDir = String(
        (typeof opts.getDataDir === 'function' ? opts.getDataDir() : opts.dataDir) || '',
      )
      const paths = {
        dataDir,
        generated: 'media/generated',
        gallery: 'media/gallery',
        history: 'media/history',
      }
      if (endpoint === CTA_RPC_STORAGE_PATHS) {
        return { ok: true, value: paths }
      }
      // storage.list — read gallery + history seats (honest empty if none)
      const galleryItems = listMediaSeat(dataDir, paths.gallery)
      const historyItems = listMediaSeat(dataDir, paths.history)
      return {
        ok: true,
        value: {
          ...paths,
          galleryItems,
          historyItems,
          items: [...galleryItems, ...historyItems],
        },
      }
    }
    if (endpoint === CTA_RPC_PROBE) {
      try {
        if (typeof mediaProxy?.detectModels !== 'function') {
          return {
            ok: false,
            error: { code: 'HOST_PROXY_NOT_WIRED', message: 'detectModels not available', details: {} },
          }
        }
        const out = await mediaProxy.detectModels(payload || {})
        return {
          ok: true,
          value: {
            models: Array.isArray(out?.models) ? out.models.slice(0, 200) : [],
            count: Number(out?.count) || 0,
          },
        }
      } catch (e) {
        return {
          ok: false,
          error: {
            code: e?.code || 'DETECT_FAILED',
            message: scrubMessage(e?.message || e),
            details: {},
          },
        }
      }
    }
    // Vision reverse-prompt
    if (endpoint === CTA_RPC_REVERSE_PROMPT) {
      try {
        if (typeof mediaProxy?.reversePrompt !== 'function' && typeof mediaProxy?.visionReversePrompt !== 'function') {
          return {
            ok: false,
            error: { code: 'HOST_PROXY_NOT_WIRED', message: 'reversePrompt not available', details: {} },
          }
        }
        const detail = payload && typeof payload === 'object' ? payload : {}
        const imageUrl =
          (detail.imageUrl && String(detail.imageUrl)) ||
          (detail.dataUrl && String(detail.dataUrl)) ||
          (Array.isArray(detail.refImages) &&
            detail.refImages[0] &&
            (detail.refImages[0].url || detail.refImages[0].dataUrl)) ||
          ''
        if (!imageUrl) {
          return {
            ok: false,
            error: { code: 'IMAGE_REQUIRED', message: 'reversePrompt needs imageUrl, dataUrl, or refImages[0]', details: {} },
          }
        }
        const fn = mediaProxy.reversePrompt || mediaProxy.visionReversePrompt
        const out = await fn.call(mediaProxy, {
          imageUrl: String(imageUrl),
          dataUrl: detail.dataUrl ? String(detail.dataUrl) : undefined,
          instruction: detail.instruction != null ? String(detail.instruction) : undefined,
          signal,
        })
        return { ok: true, value: { prompt: String(out?.prompt || '') } }
      } catch (e) {
        return {
          ok: false,
          error: {
            code: e?.code || 'REVERSE_PROMPT_FAILED',
            message: scrubMessage(e?.message || e),
            details: e?.visionCode ? { visionCode: e.visionCode } : {},
          },
        }
      }
    }

    // 提示词增强 — reuse mapGenerateRequest for ratio/clarity → aspect_ratio/resolution/size
    if (endpoint === CTA_RPC_ENHANCE_PROMPT) {
      try {
        if (typeof mediaProxy?.enhancePrompt !== 'function') {
          return {
            ok: false,
            error: { code: 'HOST_PROXY_NOT_WIRED', message: 'enhancePrompt not available', details: {} },
          }
        }
        const detail = payload && typeof payload === 'object' ? payload : {}
        if (!String(detail.prompt || '').trim()) {
          return {
            ok: false,
            error: { code: 'PROMPT_REQUIRED', message: 'prompt required', details: {} },
          }
        }
        const mapped = mapGenerateRequest(detail, signal)
        const out = await mediaProxy.enhancePrompt({
          prompt: mapped.prompt,
          modelId: detail.modelId ? String(detail.modelId) : mapped.model,
          aspect_ratio: mapped.aspect_ratio,
          resolution: mapped.resolution,
          size: mapped.size,
          signal: mapped.signal || signal,
        })
        return { ok: true, value: { prompt: String(out?.prompt || '') } }
      } catch (e) {
        return {
          ok: false,
          error: {
            code: e?.code || 'ENHANCE_FAILED',
            message: scrubMessage(e?.message || e),
            details: e?.visionCode ? { visionCode: e.visionCode } : {},
          },
        }
      }
    }

    // Video.async — live when VIDEO_* ; else VIDEO_NOT_CONFIGURED
    if (endpoint === CTA_RPC_VIDEO_GENERATE) {
      try {
        if (typeof mediaProxy?.videoGenerate !== 'function') {
          return {
            ok: false,
            error: { code: 'HOST_PROXY_NOT_WIRED', message: 'videoGenerate not available', details: {} },
          }
        }
        const detail = payload && typeof payload === 'object' ? payload : {}
        if (!String(detail.prompt || '').trim()) {
          return {
            ok: false,
            error: { code: 'PROMPT_REQUIRED', message: 'prompt required', details: {} },
          }
        }
        const mode = String(detail.mode || '')
        const isI2v = mode === '图生视频' || mode === 'i2v'
        const first =
          (detail.firstFrame && (detail.firstFrame.url || detail.firstFrame.dataUrl || detail.firstFrame)) ||
          (Array.isArray(detail.refImages) && detail.refImages[0] && (detail.refImages[0].url || detail.refImages[0].dataUrl))
        if (isI2v && !first) {
          return {
            ok: false,
            error: {
              code: 'REF_REQUIRED',
              message: '图生视频需要首帧图',
              details: {},
            },
          }
        }
        const timeoutMs = HOST_VIDEO_TIMEOUT_MS
        const timeoutAc = new AbortController()
        const timer = setTimeout(() => {
          const te = new Error(
            `host videoGenerate timed out after ${Math.round(timeoutMs / 1000)}s waiting for upstream`,
          )
          te.code = 'VIDEO_GENERATE_TIMEOUT'
          timeoutAc.abort(te)
        }, timeoutMs)
        try {
          const fused = anySignal(signal, timeoutAc.signal)
          const req = mapVideoRequest(detail, fused)
          const out = await mediaProxy.videoGenerate(req)
          const results = Array.isArray(out?.results)
            ? out.results.map((r) => ({
                kind: r.kind || 'video',
                url: r.url,
                ...(r.localPath ? { localPath: r.localPath } : {}),
                ...(r.mime ? { mime: r.mime } : {}),
                ...(r.durationSec != null ? { durationSec: r.durationSec } : {}),
              }))
            : []
          return {
            ok: true,
            value: {
              jobId: out.jobId,
              phase: out.phase || 'done',
              results,
            },
          }
        } catch (e) {
          const timeoutHit =
            timeoutAc.signal.aborted && timeoutAc.signal.reason?.code === 'VIDEO_GENERATE_TIMEOUT'
          const reasonCode = e?.code || timeoutAc.signal.reason?.code || signal?.reason?.code
          const code = timeoutHit
            ? 'VIDEO_GENERATE_TIMEOUT'
            : reasonCode || (e?.name === 'AbortError' ? 'CANCELLED' : 'VIDEO_GENERATE_FAILED')
          const message = scrubMessage(
            timeoutHit
              ? timeoutAc.signal.reason?.message || e?.message || e
              : e?.message || e,
          )
          return {
            ok: false,
            error: {
              code,
              message,
              details: {},
            },
          }
        } finally {
          clearTimeout(timer)
        }
      } catch (e) {
        return {
          ok: false,
          error: {
            code: e?.code || 'VIDEO_GENERATE_FAILED',
            message: scrubMessage(e?.message || e),
            details: {},
          },
        }
      }
    }

    // GIF / ecommerce stubs
    {
      const stub = await handleGifEcomRpc(endpoint, payload && typeof payload === 'object' ? payload : {})
      if (stub) return stub
    }

    if (endpoint !== CTA_RPC_GENERATE) {
      return {
        ok: false,
        error: {
          code: 'UNKNOWN_ENDPOINT',
          message: `dsh-ws endpoint ${JSON.stringify(endpoint)} unknown`,
          details: {},
        },
      }
    }
    const detail = payload && typeof payload === 'object' ? payload : {}
    const mode = String(detail.mode || '')
    const refs = Array.isArray(detail.refImages) ? detail.refImages : []
    if ((mode === '图生图' || mode === 'i2i') && !refs.some((r) => r && (r.url || r.dataUrl))) {
      return {
        ok: false,
        error: {
          code: 'REF_REQUIRED',
          message: '图生图需要至少一张参考图',
          details: {},
        },
      }
    }
    if (!String(detail.prompt || '').trim()) {
      return {
        ok: false,
        error: {
          code: 'PROMPT_REQUIRED',
          message: 'prompt required',
          details: {},
        },
      }
    }
    if (!mediaProxy?.mediaConfigured && typeof mediaProxy?.generate !== 'function') {
      return {
        ok: false,
        error: {
          code: 'HOST_PROXY_NOT_WIRED',
          message: 'media.generate not configured (media.env)',
          details: {},
        },
      }
    }
    const isEdit = mode === '图生图' || mode === 'i2i'
    const timeoutMs = isEdit ? HOST_EDIT_TIMEOUT_MS : HOST_GENERATE_TIMEOUT_MS
    const timeoutAc = new AbortController()
    const timer = setTimeout(() => {
      const te = new Error(
        `host generate timed out after ${Math.round(timeoutMs / 1000)}s waiting for upstream`,
      )
      te.code = 'GENERATE_TIMEOUT'
      timeoutAc.abort(te)
    }, timeoutMs)
    try {
      const fused = anySignal(signal, timeoutAc.signal)
      const req = mapGenerateRequest(detail, fused)
      // Only forward fields mediaProxy.generate understands today
      const out = await mediaProxy.generate({
        prompt: req.prompt,
        n: req.n,
        size: req.size,
        aspect_ratio: req.aspect_ratio,
        resolution: req.resolution,
        mode: req.mode,
        ...(req.model ? { model: req.model } : {}),
        ...(req.negativePrompt != null && String(req.negativePrompt).trim()
          ? { negativePrompt: String(req.negativePrompt) }
          : {}),
        ...(Array.isArray(req.refImages) && req.refImages.length ? { refImages: req.refImages } : {}),
        signal: req.signal,
      })
      const results = Array.isArray(out?.results)
        ? out.results.map((r) => ({
            kind: r.kind || 'image',
            url: r.url,
            ...(r.localPath ? { localPath: r.localPath } : {}),
            ...(r.mime ? { mime: r.mime } : {}),
          }))
        : []
      return {
        ok: true,
        value: {
          jobId: out.jobId,
          phase: out.phase || 'done',
          results,
        },
      }
    } catch (e) {
      const timeoutHit = timeoutAc.signal.aborted && timeoutAc.signal.reason?.code === 'GENERATE_TIMEOUT'
      const reasonCode = e?.code || timeoutAc.signal.reason?.code || signal?.reason?.code
      const code = timeoutHit
        ? 'GENERATE_TIMEOUT'
        : reasonCode || (e?.name === 'AbortError' ? 'GENERATE_ABORTED' : 'GENERATE_FAILED')
      const message = scrubMessage(
        timeoutHit
          ? timeoutAc.signal.reason?.message || e?.message || e
          : e?.message || e,
      )
      return {
        ok: false,
        error: {
          code,
          message,
          details: {},
        },
      }
    } finally {
      clearTimeout(timer)
    }
  }
}

/**
 * Mount `/dsh-ws` on webServer directly (same shape as Connection's `/api`).
 * Do NOT use connection.rpc.handle — its owner fiber is Connection's, which
 * lacks webServer, so the route never sticks and SPA fallback returns 405.
 *
 * @param {any} ctx Cordis context with connection + webServer
 * @param {{ generate: Function, mediaConfigured?: boolean }} mediaProxy
 * @param {{ getDataDir?: () => string, dataDir?: string }} [opts]
 */
export function attachCtaRpc(ctx, mediaProxy, opts = {}) {
  if (!ctx?.webServer?.register) {
    throw new Error('[dsh-image-workstation] webServer.register unavailable')
  }
  if (!ctx?.connection?.requestRejection) {
    throw new Error('[dsh-image-workstation] connection.requestRejection unavailable')
  }
  const rpcHandler = createCtaRpcHandler(mediaProxy, opts)
  const route = {
    kind: 'prefix',
    path: CTA_RPC_CHANNEL,
    handler: async (req, res) => {
      const rejection = ctx.connection.requestRejection(req)
      if (rejection !== undefined) {
        res.writeHead(rejection)
        res.end(rejection === 401 ? 'unauthorized' : 'forbidden')
        return
      }
      const url = new URL(req.url ?? '/', 'http://dsh.internal')
      const endpoint = endpointFromChannel(CTA_RPC_CHANNEL, url.pathname)
      if (req.method !== 'POST' || endpoint === undefined) {
        res.writeHead(404)
        res.end('not found')
        return
      }
      const ctype = String(req.headers['content-type'] || '')
        .split(';', 1)[0]
        .trim()
        .toLowerCase()
      if (ctype !== 'application/json') {
        res.writeHead(415)
        res.end('content type must be application/json')
        return
      }
      let raw = Buffer.alloc(0)
      for await (const chunk of req) {
        raw = Buffer.concat([raw, chunk])
        if (raw.byteLength > 2 * 1024 * 1024) {
          res.writeHead(413)
          res.end()
          req.destroy()
          return
        }
      }
      let body
      try {
        body = JSON.parse(raw.length ? raw.toString('utf8') : '{}')
      } catch {
        res.writeHead(400)
        res.end('body is not JSON')
        return
      }
      const rpcId = typeof body?.rpcId === 'string' ? body.rpcId : 'invalid'
      if (body?.type !== 'client-request' || body?.method !== endpoint) {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(
          JSON.stringify({
            type: 'server-response',
            rpcId,
            result: {
              ok: false,
              error: {
                code: 'gateway/bad-request',
                message: 'invalid client-request envelope or method mismatch',
                details: { issues: [] },
              },
            },
          }),
        )
        return
      }
      try {
        const result = await rpcHandler(endpoint, body.payload, req.signal ?? undefined)
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({ type: 'server-response', rpcId, result }))
      } catch (error) {
        // Always return a Connection RPC envelope so the studio can show a
        // scrubbed host message instead of bare HTTP 500 / Failed to fetch.
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(
          JSON.stringify({
            type: 'server-response',
            rpcId,
            result: {
              ok: false,
              error: {
                code: 'HANDLER_FAILURE',
                message: scrubMessage(error?.message || error),
                details: {},
              },
            },
          }),
        )
      }
    },
  }
  return ctx.effect(() => ctx.webServer.register(route), 'dsh-image-workstation: /dsh-ws rpc')
}

/**
 * @param {string} channel
 * @param {string} pathname
 */
function endpointFromChannel(channel, pathname) {
  if (!pathname.startsWith(`${channel}/`)) return undefined
  const endpoint = pathname.slice(channel.length + 1)
  if (!endpoint || endpoint.includes('/') || endpoint.includes('..')) return undefined
  return endpoint
}
