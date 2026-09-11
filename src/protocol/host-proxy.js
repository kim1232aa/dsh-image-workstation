/**
 * Host-side media proxy. generate wired to openai.images when media.env present.
 * Token closed over — never returned from methods / describeChannels / errors.
 */
import { randomUUID } from 'node:crypto'
import { listPhase1Adapters } from './adapters.js'
import { CREDENTIAL_LANES } from './types.js'
import { openaiImagesGenerate } from './openai-images.js'

const NOT_WIRED = (seat) => {
  const err = new Error(`[dsh-image-workstation] host proxy seat "${seat}" not wired`)
  err.code = 'HOST_PROXY_NOT_WIRED'
  return err
}

/**
 * @param {{ dataDir: string }} resolved
 * @param {{ baseUrl?: string, token?: string } | null} [mediaEnv]
 */
export function createHostProxy(resolved, mediaEnv = null) {
  /** @type {Map<string, { jobId: string, kind: 'image'|'video', phase: string, results?: unknown, error?: string }>} */
  const jobs = new Map()
  const adapters = listPhase1Adapters()
  const baseUrlSet = Boolean(mediaEnv?.baseUrl)
  const tokenSet = Boolean(mediaEnv?.token)
  const _token = mediaEnv?.token || ''
  const _baseUrl = mediaEnv?.baseUrl || ''
  const liveGenerate = baseUrlSet && tokenSet

  return {
    lanes: CREDENTIAL_LANES,
    adapters: adapters.map((a) => a.kind),
    dataDir: resolved.dataDir,
    mediaConfigured: liveGenerate,
    baseUrlSet,
    tokenSet,
    provider: mediaEnv?.provider || 'unknown',
    live: liveGenerate,

    /**
     * @param {{ prompt: string, size?: string, n?: number, model?: string, quality?: string, signal?: AbortSignal }} req
     */
    async generate(req) {
      if (!liveGenerate) throw NOT_WIRED('media.generate')
      const jobId = randomUUID()
      const job = { jobId, kind: /** @type {'image'} */ ('image'), phase: 'submitted' }
      jobs.set(jobId, job)
      try {
        const results = await openaiImagesGenerate(
          { baseUrl: _baseUrl, token: _token },
          {
            prompt: req.prompt,
            size: req.size,
            n: req.n || 1,
            model: req.model || process.env.MEDIA_IMAGE_MODEL || 'gpt-image-2',
            quality: req.quality,
            aspect_ratio: req.aspect_ratio || '1:1',
            resolution: req.resolution || '1k',
          },
          { dataDir: resolved.dataDir, signal: req.signal },
        )
        job.phase = 'done'
        job.results = results
        return { jobId, phase: job.phase, results }
      } catch (e) {
        job.phase = 'failed'
        const msg = String(e?.message || e)
        job.error = _token ? msg.split(_token).join('[redacted]') : msg
        const err = new Error(job.error)
        err.code = e?.code || 'GENERATE_FAILED'
        err.jobId = jobId
        throw err
      }
    },

    async edit(_req) {
      throw NOT_WIRED('media.edit')
    },

    async status(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.status')
      return { jobId: job.jobId, kind: job.kind, phase: job.phase, error: job.error }
    },

    async cancel(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.cancel')
      job.phase = 'cancelled'
      return job
    },

    async detectModels(_channel) {
      throw NOT_WIRED('media.detectModels')
    },

    describeChannels() {
      return [
        {
          id: 'media.env',
          lane: 'images',
          configured: liveGenerate,
          protocol: 'openai.images',
          provider: mediaEnv?.provider || 'unknown',
        },
      ]
    },
  }
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
    `[dsh-image-workstation] media host-proxy seats ready (adapters=${proxy.adapters.join(',')}; live=${proxy.live})`,
  )
  return proxy
}
