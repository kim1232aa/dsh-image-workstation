/**
 * Built-in video.async adapter — skeleton only.
 * No nested plugin packs. No paid upstream calls in stub mode.
 */

import { randomUUID } from 'node:crypto'

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
 * Fake provider stub — always NOT_WIRED for live; exposes shape for CTA/tools later.
 * @param {{ dataDir: string }} resolved
 * @param {{ baseUrl?: string, token?: string, defaultModel?: string } | null} [videoEnv]
 */
export function createVideoAsyncAdapter(resolved, videoEnv = null) {
  /** @type {Map<string, VideoJob & { abort?: AbortController }>} */
  const jobs = new Map()
  const configured = Boolean(videoEnv?.baseUrl && videoEnv?.token)

  return {
    kind: VIDEO_PROTOCOL,
    live: false,
    configured,
    defaultModel: videoEnv?.defaultModel || '',
    /** @param {VideoGenerateRequest} _req */
    async generate(_req) {
      const err = new Error(
        '[dsh-image-workstation] video.async stub — not wired to paid upstream (built-in seat only)',
      )
      err.code = 'VIDEO_STUB_NOT_WIRED'
      throw err
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
        live: false,
        fields: VIDEO_CHANNEL_FIELDS.filter((f) => f !== 'videoApiKey'),
        note: 'built-in video.async; URL verbatim when live; no nested plugin packs',
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
