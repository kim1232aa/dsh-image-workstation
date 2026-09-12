/**
 * Host-side media proxy. generate wired to openai.images when media.env present.
 * Token closed over — never returned from methods / describeChannels / errors.
 * Matrix status: openai.images generate/edit live when media.env set; video.async live when video env set; other adapters stub.
 */
import { randomUUID } from 'node:crypto'
import { appendFileSync } from 'node:fs'

const CTA_HIT_LOG = '/tmp/dsh-cta-hits.log'
function logGenHit(line) {
  try {
    appendFileSync(CTA_HIT_LOG, `${new Date().toISOString()} ${line}\n`)
  } catch {
    /* ignore */
  }
}
import { listPhase1Adapters } from './adapters.js'
import { CREDENTIAL_LANES } from './types.js'
import { openaiImagesGenerate, openaiImagesEdit } from './openai-images.js'
import { DEFAULT_IMAGE_MODEL, isMediaModelId } from './defaults.js'
import { createVideoAsyncAdapter } from './video-async.js'
import { loadVisionEnv, reversePrompt as visionReversePrompt, visionEnvSummary } from './vision-read.js'
import { enhancePrompt as runEnhancePrompt } from './prompt-enhance.js'
import { gifGenerate, ecommerceGenerate } from './gif-ecom.js'
import { canvasGenerate } from './canvas-generate.js'

const NOT_WIRED = (seat) => {
  const err = new Error(`[dsh-image-workstation] host proxy seat "${seat}" not wired`)
  err.code = 'HOST_PROXY_NOT_WIRED'
  return err
}

/**
 * @param {{ dataDir: string }} resolved
 * @param {{ baseUrl?: string, token?: string, provider?: string } | null} [mediaEnv]
 */
export function createHostProxy(resolved, mediaEnv = null) {
  /** @type {Map<string, { jobId: string, kind: 'image'|'video', phase: string, results?: unknown, error?: string, abort?: AbortController }>} */
  const jobs = new Map()
  const adapters = listPhase1Adapters()
  const baseUrlSet = Boolean(mediaEnv?.baseUrl)
  const tokenSet = Boolean(mediaEnv?.token)
  const _token = mediaEnv?.token || ''
  const _baseUrl = mediaEnv?.baseUrl || ''
  const liveGenerate = baseUrlSet && tokenSet
  const videoAdapter = createVideoAsyncAdapter(resolved, mediaEnv?.video || null)
  const videoLive = Boolean(videoAdapter?.live)
  const visionEnv = mediaEnv?.vision && typeof mediaEnv.vision === 'object'
    ? mediaEnv.vision
    : loadVisionEnv()
  const visionConfigured = Boolean(visionEnv?.configured)

  const proxy = {
    lanes: CREDENTIAL_LANES,
    adapters: adapters.map((a) => a.kind),
    /** Honest coverage — do not treat as matrix Pass */
    liveSeats: [
      ...(liveGenerate ? ['openai.images.generate', 'openai.images.edit', 'canvas.generate'] : []),
      ...(videoLive ? ['video.async'] : []),
      ...(visionConfigured ? ['vision.reversePrompt', 'vision.enhancePrompt'] : []),
      ...(gifConfigured ? ['gif.generate'] : []),
    ],
    stubSeats: [
      'async.task_id',
      'grok.imagine',
      'gemini.image',
      'seedream',
      'qwen.dashscope',
      'zhipu.glm-image',
      'minimax.image-01',
      ...(!videoLive ? ['video.async'] : []),
      ...(!visionConfigured ? ['vision.reversePrompt', 'vision.enhancePrompt'] : []),
      ...(!gifConfigured ? ['gif.generate'] : []),
      'ecommerce.generate',
      ...(!liveGenerate ? ['canvas.generate'] : []),
    ],
    dataDir: resolved.dataDir,
    mediaConfigured: liveGenerate,
    baseUrlSet,
    tokenSet,
    provider: mediaEnv?.provider || 'unknown',
    activeId: mediaEnv?.activeId || '',
    defaultModel: mediaEnv?.defaultModel || DEFAULT_IMAGE_MODEL,
    live: liveGenerate,

    /**
     * @param {{ prompt: string, size?: string, n?: number, model?: string, quality?: string, signal?: AbortSignal, aspect_ratio?: string, resolution?: string }} req
     */
    async generate(req) {
      if (!liveGenerate) throw NOT_WIRED('media.generate')
      const mode = String(req.mode || '')
      const refs = Array.isArray(req.refImages) ? req.refImages : []
      const firstRef =
        req.image ||
        (refs[0] && (refs[0].url || refs[0].dataUrl || refs[0].path)) ||
        null
      const wantsEdit = mode === '图生图' || mode === 'i2i' || mode === 'edit'
      if (wantsEdit) {
        if (!firstRef) {
          const err = new Error('图生图需要参考图（refImages）')
          err.code = 'REF_REQUIRED'
          throw err
        }
        return proxy.edit({
          prompt: req.prompt,
          image: String(firstRef),
          mask: req.mask,
          size: req.size,
          n: req.n,
          model: req.model,
          signal: req.signal,
        })
      }
      const jobId = randomUUID()
      const ac = new AbortController()
      const job = {
        jobId,
        kind: /** @type {'image'} */ ('image'),
        phase: 'submitted',
        abort: ac,
      }
      jobs.set(jobId, job)
      const _t0 = Date.now()
      logGenHit(`gen-timing start jobId=${jobId} model=${String(req.model || mediaEnv?.defaultModel || '')} promptLen=${String(req.prompt || '').trim().length}`)

      const onOuterAbort = () => {
        try {
          ac.abort()
        } catch {
          /* ignore */
        }
      }
      if (req.signal) {
        if (req.signal.aborted) onOuterAbort()
        else req.signal.addEventListener('abort', onOuterAbort, { once: true })
      }

      try {
        const results = await openaiImagesGenerate(
          { baseUrl: _baseUrl, token: _token },
          {
            prompt: req.prompt,
            size: req.size,
            n: req.n || 1,
            model: req.model || mediaEnv?.defaultModel || DEFAULT_IMAGE_MODEL,
            quality: req.quality,
            aspect_ratio: req.aspect_ratio || '1:1',
            resolution: req.resolution || '1k',
          },
          { dataDir: resolved.dataDir, signal: ac.signal },
        )
        if (job.phase === 'cancelled') {
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }
        job.phase = 'done'
        job.results = results
        job.abort = undefined
        const url0 = Array.isArray(results) && results[0]?.url ? String(results[0].url).slice(0, 120) : ''
        logGenHit(`gen-timing ok jobId=${jobId} ms=${Date.now() - _t0} n=${Array.isArray(results) ? results.length : 0} url0=${url0}`)
        return { jobId, phase: job.phase, results }
      } catch (e) {
        if (job.phase === 'cancelled' || e?.name === 'AbortError' || e?.code === 'ABORT_ERR') {
          job.phase = 'cancelled'
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }
        job.phase = 'failed'
        const msg = String(e?.message || e)
        job.error = _token && _token.length >= 8 ? msg.split(_token).join('[redacted]') : msg
        const err = new Error(job.error)
        err.code = e?.code || 'GENERATE_FAILED'
        err.jobId = jobId
        logGenHit(`gen-timing fail jobId=${jobId} ms=${Date.now() - _t0} code=${err.code} message=${String(job.error).slice(0, 160)}`)
        throw err
      } finally {
        if (req.signal) req.signal.removeEventListener('abort', onOuterAbort)
      }
    },

    /**
     * @param {{ prompt: string, image: string, mask?: string, size?: string, n?: number, model?: string, signal?: AbortSignal }} req
     */
    async edit(req) {
      if (!liveGenerate) throw NOT_WIRED('media.edit')
      const jobId = randomUUID()
      const ac = new AbortController()
      const job = { jobId, kind: /** @type {'image'} */ ('image'), phase: 'submitted', abort: ac }
      jobs.set(jobId, job)
      const onOuterAbort = () => {
        try {
          ac.abort()
        } catch {
          /* ignore */
        }
      }
      if (req.signal) {
        if (req.signal.aborted) onOuterAbort()
        else req.signal.addEventListener('abort', onOuterAbort, { once: true })
      }
      try {
        const results = await openaiImagesEdit(
          { baseUrl: _baseUrl, token: _token },
          {
            prompt: req.prompt,
            image: req.image,
            mask: req.mask,
            size: req.size || '1024x1024',
            n: req.n || 1,
            model: req.model || mediaEnv?.defaultModel || DEFAULT_IMAGE_MODEL,
          },
          { dataDir: resolved.dataDir, signal: ac.signal },
        )
        if (job.phase === 'cancelled') {
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }
        job.phase = 'done'
        job.results = results
        job.abort = undefined
        return { jobId, phase: job.phase, results }
      } catch (e) {
        if (job.phase === 'cancelled' || e?.name === 'AbortError' || e?.code === 'ABORT_ERR') {
          job.phase = 'cancelled'
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }
        job.phase = 'failed'
        const msg = String(e?.message || e)
        job.error = _token && _token.length >= 8 ? msg.split(_token).join('[redacted]') : msg
        const err = new Error(job.error)
        err.code = e?.code || 'EDIT_FAILED'
        err.jobId = jobId
        throw err
      } finally {
        if (req.signal) req.signal.removeEventListener('abort', onOuterAbort)
      }
    },

    async status(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.status')
      return { jobId: job.jobId, kind: job.kind, phase: job.phase, error: job.error }
    },

    /** Abort in-flight upstream fetch; not UI-only. */
    async cancel(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.cancel')
      job.phase = 'cancelled'
      try {
        job.abort?.abort()
      } catch {
        /* ignore */
      }
      return { jobId: job.jobId, kind: job.kind, phase: job.phase }
    },

    async detectModels(_channel) {
      if (!liveGenerate) throw NOT_WIRED('media.detectModels')
      const base = String(_baseUrl || '').replace(/\/$/, '')
      if (!base) throw NOT_WIRED('media.detectModels')
      // try /v1/models then /models
      const paths = [`${base}/v1/models`, `${base}/models`]
      let lastErr
      for (const url of paths) {
        try {
          const res = await fetch(url, {
            method: 'GET',
            headers: {
              authorization: `Bearer ${_token}`,
              accept: 'application/json',
            },
          })
          const text = await res.text()
          let body
          try {
            body = text ? JSON.parse(text) : {}
          } catch {
            body = {}
          }
          if (!res.ok) {
            lastErr = body?.error?.message || body?.message || text || res.status
            continue
          }
          const data = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : []
          const all = data
            .map((m) => (typeof m === 'string' ? m : m?.id))
            .filter((id) => typeof id === 'string' && id.trim())
            .map((id) => id.trim())
          const models = all.filter(isMediaModelId)
          return {
            ok: true,
            models,
            count: models.length,
            filteredOut: Math.max(0, all.length - models.length),
            defaultModel: DEFAULT_IMAGE_MODEL,
          }
        } catch (e) {
          lastErr = e?.message || e
        }
      }
      const msg = _token
        ? String(lastErr || 'detect failed').split(_token).join('[redacted]')
        : String(lastErr || 'detect failed')
      const err = new Error(msg.slice(0, 400))
      err.code = 'DETECT_FAILED'
      throw err
    },

    video: videoAdapter,
    async videoGenerate(req) {
      return videoAdapter.generate(req)
    },
    async videoStatus(jobId) {
      return videoAdapter.status(jobId)
    },
    async videoCancel(jobId) {
      return videoAdapter.cancel(jobId)
    },

    /** Vision lane reverse-prompt (settings vision* or VISION_*). Alias: visionReversePrompt. */
    async reversePrompt(req) {
      return visionReversePrompt(req || {}, visionEnv)
    },
    async visionReversePrompt(req) {
      return proxy.reversePrompt(req)
    },

    /** 提示词增强 — same vision lane as reversePrompt. */
    async enhancePrompt(req) {
      return runEnhancePrompt(req || {}, visionEnv)
    },

    /** GIF grid — Nova-aligned; live when media or GIF_* configured */
    async gifGenerate(req) {
      return gifGenerate(req || {}, {
        mediaConfigured: liveGenerate,
        generate: (r) => proxy.generate(r),
        gifEnv: mediaEnv?.gif || null,
        dataDir: resolved.dataDir,
      })
    },

    /** Ecommerce — honest stub (Nova has no dedicated ecom seat) */
    async ecommerceGenerate(req) {
      return ecommerceGenerate(req || {})
    },

    /** Canvas tiles — same openai.images generate/edit path */
    async canvasGenerate(req) {
      return canvasGenerate(req || {}, proxy)
    },

    visionSummary() {
      return visionEnvSummary(visionEnv)
    },

    describeChannels() {
      const liveSeats = [
        ...(liveGenerate ? ['openai.images.generate', 'openai.images.edit', 'canvas.generate'] : []),
        ...(videoLive ? ['video.async'] : []),
        ...(visionConfigured ? ['vision.reversePrompt', 'vision.enhancePrompt'] : []),
        ...(gifConfigured ? ['gif.generate'] : []),
      ]
      const fromEnv = Array.isArray(mediaEnv?.channels) ? mediaEnv.channels : []
      if (fromEnv.length) {
        return [
          ...fromEnv.map((c) => ({
            id: c.id,
            lane: 'images',
            label: c.label,
            configured: Boolean(c.baseUrl && c.token),
            protocol: 'openai.images',
            provider: c.provider,
            defaultModel: c.defaultModel,
            active: c.id === (mediaEnv?.activeId || ''),
            liveSeats,
          })),
          videoAdapter.describe(),
        ]
      }
      return [
        {
          id: mediaEnv?.activeId || 'media.env',
          lane: 'images',
          configured: liveGenerate,
          protocol: 'openai.images',
          provider: mediaEnv?.provider || 'unknown',
          defaultModel: mediaEnv?.defaultModel || DEFAULT_IMAGE_MODEL,
          active: true,
          liveSeats,
        },
        videoAdapter.describe(),
      ]
    },
  }
  return proxy
}

/**
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {{ dataDir: string }} resolved
 * @param {{ baseUrl?: string, token?: string } | null} [mediaEnv]
 */
export function attachHostProxy(ctx, resolved, mediaEnv = null) {
  const proxy = createHostProxy(resolved, mediaEnv)
  const bag = ctx.get('dshImageWorkstation')
  if (bag && typeof bag === 'object') bag.mediaProxy = proxy
  ctx.logger?.info?.(
    `[dsh-image-workstation] media host-proxy seats ready (liveSeats=${proxy.liveSeats.join(',') || 'none'}; defaultModel=${proxy.defaultModel})`,
  )
  return proxy
}
