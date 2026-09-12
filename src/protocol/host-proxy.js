/**
 * Host-side media proxy. generate wired to openai.images when media.env present.
 * Token closed over — never returned from methods / describeChannels / errors.
 * Matrix status: ONLY openai.images generate is live; edit/async/video/native adapters = stub.
 */
import { randomUUID } from 'node:crypto'
import { listPhase1Adapters } from './adapters.js'
import { CREDENTIAL_LANES } from './types.js'
import { openaiImagesGenerate, openaiImagesEdit } from './openai-images.js'
import { DEFAULT_IMAGE_MODEL, isMediaModelId } from './defaults.js'

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

  const proxy = {
    lanes: CREDENTIAL_LANES,
    adapters: adapters.map((a) => a.kind),
    /** Honest coverage — do not treat as matrix Pass */
    liveSeats: liveGenerate ? ['openai.images.generate', 'openai.images.edit'] : [],
    stubSeats: [
      'async.task_id',
      'grok.imagine',
      'gemini.image',
      'seedream',
      'qwen.dashscope',
      'zhipu.glm-image',
      'minimax.image-01',
      'video.async',
    ],
    dataDir: resolved.dataDir,
    mediaConfigured: liveGenerate,
    baseUrlSet,
    tokenSet,
    provider: mediaEnv?.provider || 'unknown',
    defaultModel: DEFAULT_IMAGE_MODEL,
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
            model: req.model || DEFAULT_IMAGE_MODEL,
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
            model: req.model || DEFAULT_IMAGE_MODEL,
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

    describeChannels() {
      return [
        {
          id: 'media.env',
          lane: 'images',
          configured: liveGenerate,
          protocol: 'openai.images',
          provider: mediaEnv?.provider || 'unknown',
          defaultModel: DEFAULT_IMAGE_MODEL,
          liveSeats: liveGenerate ? ['openai.images.generate', 'openai.images.edit'] : [],
        },
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
