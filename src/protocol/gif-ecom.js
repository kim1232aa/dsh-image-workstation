/**
 * GIF + ecommerce seats (Nova-aligned).
 * GIF: live-when-configured via openai.images / mediaProxy.generate|edit
 *   — sprite-sheet prompt → grid image URL(s) verbatim; client may encode GIF locally.
 * Ecommerce: Nova has no dedicated seat → honest ECOM_STUB_NOT_WIRED.
 */

import { randomUUID } from 'node:crypto'
import { buildGifPrompt, GIF_GRID } from './gif-prompt.js'
import { openaiImagesGenerate, openaiImagesEdit } from './openai-images.js'

export const GIF_STUB_NOT_WIRED = 'GIF_STUB_NOT_WIRED'
export const GIF_NOT_CONFIGURED = 'GIF_NOT_CONFIGURED'
export const ECOM_STUB_NOT_WIRED = 'ECOM_STUB_NOT_WIRED'
export const ECOM_NOT_CONFIGURED = 'ECOM_NOT_CONFIGURED'

export const CTA_RPC_GIF_GENERATE = 'gifGenerate'
export const CTA_RPC_ECOM_GENERATE = 'ecommerceGenerate'

function seatError(code, message) {
  const err = new Error(message)
  err.code = code
  return err
}

/**
 * @param {Record<string, unknown>} req
 * @param {{
 *   mediaConfigured?: boolean,
 *   forceStub?: boolean,
 *   generate?: (req: Record<string, unknown>) => Promise<any>,
 *   gifEnv?: { baseUrl?: string, token?: string, defaultModel?: string, forceStub?: boolean } | null,
 *   dataDir?: string,
 * }} [deps]
 */
export async function gifGenerate(req = {}, deps = {}) {
  const forceStub = Boolean(deps.forceStub || deps.gifEnv?.forceStub)
  if (forceStub) {
    throw seatError(
      GIF_STUB_NOT_WIRED,
      '[dsh-image-workstation] gifGenerate forceStub — not wired (no fake success)',
    )
  }

  const gifLane = Boolean(deps.gifEnv?.baseUrl && deps.gifEnv?.token)
  const mediaOk = Boolean(deps.mediaConfigured && typeof deps.generate === 'function')
  if (!gifLane && !mediaOk) {
    throw seatError(
      GIF_NOT_CONFIGURED,
      '[dsh-image-workstation] gifGenerate not configured (set media channel or GIF_BASE_URL + GIF_API_KEY; Nova-style grid uses openai.images)',
    )
  }

  const userPrompt = String(req.prompt || '').trim()
  if (!userPrompt) {
    throw seatError('PROMPT_REQUIRED', 'gifGenerate: prompt required')
  }

  const refs = Array.isArray(req.refImages)
    ? req.refImages
        .map((r) => ({
          id: r?.id != null ? String(r.id) : undefined,
          url: r?.url != null ? String(r.url) : r?.dataUrl != null ? String(r.dataUrl) : undefined,
          name: r?.name != null ? String(r.name) : undefined,
        }))
        .filter((r) => r.url)
    : []
  const closedLoop = Boolean(req.closedLoop ?? (req.loop === true || req.loops === 0))
  const finalPrompt = buildGifPrompt({
    userPrompt,
    refImageCount: refs.length,
    loop: Boolean(req.loop ?? true),
    closedLoop,
  })

  const model =
    (req.modelId && String(req.modelId).trim()) ||
    (req.model && String(req.model).trim()) ||
    (deps.gifEnv?.defaultModel && String(deps.gifEnv.defaultModel).trim()) ||
    undefined

  /** @type {Record<string, unknown>} */
  const genReq = {
    prompt: finalPrompt,
    n: 1,
    aspect_ratio: GIF_GRID.aspectRatio,
    resolution: GIF_GRID.resolution,
    size: GIF_GRID.customSize,
    mode: refs.length ? '图生图' : '文生图',
    ...(model ? { model } : {}),
    ...(refs.length ? { refImages: refs } : {}),
    ...(req.signal ? { signal: req.signal } : {}),
  }

  if (mediaOk && !gifLane) {
    return normalizeGifOut(await deps.generate(genReq), req)
  }

  if (gifLane) {
    const cred = { baseUrl: deps.gifEnv.baseUrl, token: deps.gifEnv.token }
    const opts = { dataDir: deps.dataDir || '/tmp', signal: req.signal }
    let out
    if (refs.length) {
      out = await openaiImagesEdit(
        cred,
        {
          prompt: finalPrompt,
          image: refs[0].url,
          size: GIF_GRID.customSize,
          n: 1,
          ...(model ? { model } : {}),
        },
        opts,
      )
    } else {
      out = await openaiImagesGenerate(
        cred,
        {
          prompt: finalPrompt,
          size: GIF_GRID.customSize,
          n: 1,
          aspect_ratio: GIF_GRID.aspectRatio,
          resolution: GIF_GRID.resolution,
          ...(model ? { model } : {}),
        },
        opts,
      )
    }
    return normalizeGifOut(out, req)
  }

  return normalizeGifOut(await deps.generate(genReq), req)
}

function normalizeGifOut(out, req) {
  const jobId = out?.jobId || randomUUID()
  const raw = Array.isArray(out) ? out : Array.isArray(out?.results) ? out.results : []
  const results = raw.map((r) => ({
    kind: r.kind || 'image',
    url: r.url,
    ...(r.localPath ? { localPath: r.localPath } : {}),
    ...(r.mime ? { mime: r.mime } : {}),
    meta: {
      seat: 'gif.grid',
      frameCount: Number(req.frameCount) || GIF_GRID.frameCount,
      fps: Number(req.fps) || undefined,
      note: 'grid image; client-side GIF encode (Nova gifenc pattern)',
    },
  }))
  return { jobId, phase: out?.phase || 'done', results, seat: 'gif.grid' }
}

/** Ecommerce — Nova has no dedicated generation seat. Honest stub only. */
export async function ecommerceGenerate(_req = {}, _deps = {}) {
  throw seatError(
    ECOM_STUB_NOT_WIRED,
    '[dsh-image-workstation] ecommerceGenerate stub — Nova has no dedicated ecom seat; plan→confirm batch not wired (no fake success)',
  )
}

/**
 * @param {string} endpoint
 * @param {Record<string, unknown>} payload
 * @param {{ gifGenerate?: Function, ecommerceGenerate?: Function }} [mediaProxy]
 */
export async function handleGifEcomRpc(endpoint, payload, mediaProxy) {
  if (endpoint === CTA_RPC_GIF_GENERATE) {
    try {
      const fn = mediaProxy?.gifGenerate || ((p) => gifGenerate(p || {}))
      const out = await fn.call(mediaProxy || null, payload || {})
      return {
        ok: true,
        value: {
          jobId: out.jobId,
          phase: out.phase || 'done',
          results: Array.isArray(out.results) ? out.results : [],
          seat: out.seat || 'gif.grid',
        },
      }
    } catch (e) {
      return {
        ok: false,
        error: {
          code: e?.code || GIF_NOT_CONFIGURED,
          message: String(e?.message || e).slice(0, 500),
          details: {},
        },
      }
    }
  }
  if (endpoint === CTA_RPC_ECOM_GENERATE) {
    try {
      const fn = mediaProxy?.ecommerceGenerate || ((p) => ecommerceGenerate(p || {}))
      await fn.call(mediaProxy || null, payload || {})
      return {
        ok: false,
        error: {
          code: ECOM_STUB_NOT_WIRED,
          message: 'ecommerceGenerate returned unexpectedly',
          details: {},
        },
      }
    } catch (e) {
      return {
        ok: false,
        error: {
          code: e?.code || ECOM_STUB_NOT_WIRED,
          message: String(e?.message || e).slice(0, 500),
          details: {},
        },
      }
    }
  }
  return null
}
