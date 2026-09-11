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
 * Mount `/dsh-ws` on webServer directly (same shape as Connection's `/api`).
 * Do NOT use connection.rpc.handle — its owner fiber is Connection's, which
 * lacks webServer, so the route never sticks and SPA fallback returns 405.
 *
 * @param {any} ctx Cordis context with connection + webServer
 * @param {{ generate: Function, mediaConfigured?: boolean }} mediaProxy
 */
export function attachCtaRpc(ctx, mediaProxy) {
  if (!ctx?.webServer?.register) {
    throw new Error('[dsh-image-workstation] webServer.register unavailable')
  }
  if (!ctx?.connection?.requestRejection) {
    throw new Error('[dsh-image-workstation] connection.requestRejection unavailable')
  }
  const rpcHandler = createCtaRpcHandler(mediaProxy)
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
        res.writeHead(500)
        res.end(`handler failure: ${String(error)}`)
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
