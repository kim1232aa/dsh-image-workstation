/**
 * CTA → host Connection RPC → mediaProxy.generate
 * Channel is plugin-owned (not /api Typert). Token never crosses this boundary.
 */
export const CTA_RPC_CHANNEL = '/dsh-ws'
export const CTA_RPC_GENERATE = 'generate'

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
 * Scrub accidental secrets from error strings before wire.
 * @param {string} msg
 */
function scrubMessage(msg) {
  return String(msg || 'generate failed')
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/sk-[A-Za-z0-9._-]{8,}/g, '[redacted]')
    .slice(0, 500)
}

/**
 * @param {{ generate: (req: any) => Promise<any>, mediaConfigured?: boolean }} mediaProxy
 */
export function createCtaRpcHandler(mediaProxy) {
  return async (endpoint, payload, signal) => {
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
    try {
      const req = mapGenerateRequest(detail, signal)
      // Only forward fields mediaProxy.generate understands today
      const out = await mediaProxy.generate({
        prompt: req.prompt,
        n: req.n,
        size: req.size,
        aspect_ratio: req.aspect_ratio,
        resolution: req.resolution,
        ...(req.model ? { model: req.model } : {}),
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
      return {
        ok: false,
        error: {
          code: e?.code || 'GENERATE_FAILED',
          message: scrubMessage(e?.message || e),
          details: {},
        },
      }
    }
  }
}

/**
 * Register `/dsh-ws` Connection RPC channel on host.
 * @param {any} ctx Cordis context with connection
 * @param {{ generate: Function, mediaConfigured?: boolean }} mediaProxy
 */
export function attachCtaRpc(ctx, mediaProxy) {
  if (!ctx?.connection?.rpc?.handle) {
    throw new Error('[dsh-image-workstation] connection.rpc.handle unavailable')
  }
  const handler = createCtaRpcHandler(mediaProxy)
  return ctx.connection.rpc.handle(CTA_RPC_CHANNEL, handler)
}
