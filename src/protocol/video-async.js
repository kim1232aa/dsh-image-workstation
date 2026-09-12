/**
 * Built-in video.async adapter — uses shared async.task_id when configured.
 * No nested plugin packs. Never fake success. URLs verbatim.
 */

import { randomUUID } from 'node:crypto'
import { runAsyncTask, defaultVideoAsyncConfig, scrubToken } from './async-task-id.js'

/**
 * @typedef {{
 *   prompt: string,
 *   mode?: 't2v'|'i2v'|'文生视频'|'图生视频',
 *   model?: string,
 *   durationSec?: number,
 *   aspect_ratio?: string,
 *   resolution?: string,
 *   firstFrame?: string,
 *   lastFrame?: string,
 *   refImages?: { url?: string, dataUrl?: string, path?: string }[],
 *   signal?: AbortSignal,
 * }} VideoGenerateRequest
 */

/**
 * @typedef {{
 *   jobId: string,
 *   phase: 'queued'|'submitted'|'polling'|'done'|'failed'|'cancelled',
 *   percent?: number,
 *   elapsedMs: number,
 *   results?: { kind: 'video', url: string, durationSec?: number, mime?: string }[],
 *   error?: string,
 * }} VideoJob
 */

/**
 * @typedef {{
 *   baseUrl?: string,
 *   token?: string,
 *   defaultModel?: string,
 *   submitPath?: string,
 *   pollPath?: string,
 *   pollIntervalMs?: number,
 *   pollTimeoutMs?: number,
 *   provider?: string,
 *   forceStub?: boolean,
 * }} VideoEnv
 */

export const VIDEO_PROTOCOL = 'video.async'

/** Draft settings fields for a video channel (host-held secrets). */
export const VIDEO_CHANNEL_FIELDS = Object.freeze([
  'videoBaseUrl',
  'videoApiKey', // host secret — never to client
  'videoProvider', // e.g. video.async
  'videoDefaultModel',
  'videoPollIntervalMs',
  'videoPollTimeoutMs',
])

/**
 * @param {VideoGenerateRequest} req
 * @param {VideoEnv} videoEnv
 */
function buildSubmitBody(req, videoEnv) {
  const model = String(req.model || videoEnv.defaultModel || '').trim()
  /** @type {Record<string, unknown>} */
  const body = {
    prompt: String(req.prompt || ''),
  }
  if (model) body.model = model
  if (req.durationSec != null && Number.isFinite(Number(req.durationSec))) {
    body.duration = Number(req.durationSec)
  }
  if (req.aspect_ratio) body.aspect_ratio = String(req.aspect_ratio)
  if (req.resolution) body.resolution = String(req.resolution)

  const mode = String(req.mode || '')
  const isI2v = mode === 'i2v' || mode === '图生视频'
  if (isI2v) {
    const refs = Array.isArray(req.refImages) ? req.refImages : []
    const first =
      req.firstFrame ||
      (refs[0] && (refs[0].url || refs[0].dataUrl || refs[0].path)) ||
      null
    if (first) body.first_frame = String(first)
    if (req.lastFrame) body.last_frame = String(req.lastFrame)
  }
  return body
}

/**
 * @param {{ dataDir: string }} resolved
 * @param {VideoEnv | null} [videoEnv]
 */
export function createVideoAsyncAdapter(resolved, videoEnv = null) {
  /** @type {Map<string, VideoJob & { abort?: AbortController, upstreamTaskId?: string }>} */
  const jobs = new Map()
  const configured = Boolean(videoEnv?.baseUrl && videoEnv?.token)
  const forceStub = Boolean(videoEnv?.forceStub)
  const live = configured && !forceStub

  return {
    kind: VIDEO_PROTOCOL,
    live,
    configured,
    defaultModel: videoEnv?.defaultModel || '',
    /** @param {VideoGenerateRequest} req */
    async generate(req) {
      if (forceStub) {
        const err = new Error(
          '[dsh-image-workstation] video.async stub — not wired to paid upstream (built-in seat only)',
        )
        err.code = 'VIDEO_STUB_NOT_WIRED'
        throw err
      }
      if (!configured || !videoEnv?.baseUrl || !videoEnv?.token) {
        const err = new Error(
          '[dsh-image-workstation] video.async not configured (set VIDEO_BASE_URL + VIDEO_API_KEY or settings videoBaseUrl/videoApiKey)',
        )
        err.code = 'VIDEO_NOT_CONFIGURED'
        throw err
      }
      if (!req?.prompt || !String(req.prompt).trim()) {
        const err = new Error('video.async: prompt required')
        err.code = 'PROMPT_REQUIRED'
        throw err
      }

      const jobId = randomUUID()
      const ac = new AbortController()
      const started = Date.now()
      /** @type {VideoJob & { abort?: AbortController, upstreamTaskId?: string }} */
      const job = {
        jobId,
        phase: 'queued',
        elapsedMs: 0,
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

      const config = defaultVideoAsyncConfig({
        submitPath: videoEnv.submitPath || '/v1/video/generations',
        pollPath: videoEnv.pollPath || '/v1/tasks/{task_id}',
        pollIntervalMs: videoEnv.pollIntervalMs || 2000,
        pollTimeoutMs: videoEnv.pollTimeoutMs || 600_000,
        successValues: ['SUCCEEDED', 'success', 'completed', 'SUCCESS', 'done'],
        failValues: ['FAILED', 'failed', 'ERROR', 'error', 'cancelled', 'CANCELED', 'CANCELLED'],
        resultUrlPaths: ['data[0].url', 'output.video_url', 'output.url', 'result.url', 'video_url', 'url'],
        progressField: 'progress',
      })

      try {
        const out = await runAsyncTask({
          cred: { baseUrl: videoEnv.baseUrl, token: videoEnv.token },
          config,
          submitBody: buildSubmitBody(req, videoEnv),
          signal: ac.signal,
          onProgress: (p) => {
            if (job.phase === 'cancelled') return
            if (p.phase === 'queued' || p.phase === 'submitted' || p.phase === 'polling') {
              job.phase = p.phase
            } else if (p.phase === 'done' || p.phase === 'failed' || p.phase === 'cancelled') {
              job.phase = p.phase
            }
            if (p.percent != null) job.percent = p.percent
            job.elapsedMs = p.elapsedMs ?? Date.now() - started
            if (p.taskId) job.upstreamTaskId = String(p.taskId)
          },
        })

        if (job.phase === 'cancelled') {
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }

        const results = (out.urls || []).map((url) => ({
          kind: /** @type {'video'} */ ('video'),
          url, // verbatim
          ...(req.durationSec != null ? { durationSec: Number(req.durationSec) } : {}),
        }))
        job.phase = 'done'
        job.percent = 100
        job.elapsedMs = out.elapsedMs ?? Date.now() - started
        job.results = results
        job.abort = undefined
        return { jobId, phase: job.phase, results }
      } catch (e) {
        if (job.phase === 'cancelled' || e?.name === 'AbortError' || e?.code === 'CANCELLED' || e?.code === 'ABORT_ERR') {
          job.phase = 'cancelled'
          job.elapsedMs = Date.now() - started
          const err = new Error('cancelled')
          err.code = 'CANCELLED'
          err.jobId = jobId
          throw err
        }
        job.phase = 'failed'
        job.elapsedMs = Date.now() - started
        const msg = scrubToken(String(e?.message || e), videoEnv.token)
        job.error = msg
        const err = new Error(msg)
        err.code = e?.code || 'VIDEO_GENERATE_FAILED'
        err.jobId = jobId
        throw err
      } finally {
        if (req.signal) req.signal.removeEventListener('abort', onOuterAbort)
      }
    },
    /** @param {string} jobId */
    async status(jobId) {
      const job = jobs.get(jobId)
      if (!job) {
        const err = new Error('video job not found')
        err.code = 'VIDEO_JOB_MISSING'
        throw err
      }
      return {
        jobId: job.jobId,
        phase: job.phase,
        percent: job.percent,
        elapsedMs: job.elapsedMs,
        error: job.error,
        ...(job.results ? { results: job.results } : {}),
      }
    },
    /** @param {string} jobId */
    async cancel(jobId) {
      const job = jobs.get(jobId)
      if (!job) {
        const err = new Error('video job not found')
        err.code = 'VIDEO_JOB_MISSING'
        throw err
      }
      job.phase = 'cancelled'
      try {
        job.abort?.abort()
      } catch {
        /* ignore */
      }
      return { jobId: job.jobId, phase: job.phase }
    },
    /** Client-safe channel draft — no secrets */
    describe() {
      return {
        id: 'video.env',
        lane: 'video',
        protocol: VIDEO_PROTOCOL,
        configured,
        live,
        fields: VIDEO_CHANNEL_FIELDS.filter((f) => f !== 'videoApiKey'),
        note: live
          ? 'built-in video.async live; URL verbatim; no nested plugin packs'
          : 'built-in video.async; URL verbatim when live; no nested plugin packs',
        ...(videoEnv?.defaultModel ? { defaultModel: videoEnv.defaultModel } : {}),
      }
    },
  }
}

/** Placeholder job factory for future poll loop tests (no network). */
export function createStubVideoJob() {
  const jobId = randomUUID()
  return {
    jobId,
    phase: /** @type {const} */ ('queued'),
    elapsedMs: 0,
  }
}
