/**
 * Host-side media proxy seats. No upstream HTTP — interface only.
 * Client must not call provider APIs; register these on host (tools/RPC later).
 */

import { listPhase1Adapters } from './adapters.js'
import { CREDENTIAL_LANES } from './types.js'

const NOT_WIRED = (seat) => {
  const err = new Error(`[dsh-image-workstation] host proxy seat "${seat}" not wired (no live upstream)`)
  err.code = 'HOST_PROXY_NOT_WIRED'
  return err
}

/**
 * @typedef {{ jobId: string, kind: 'image'|'video', phase: string }} JobStub
 */

/**
 * Build host proxy API bound to resolved config. Secrets never returned.
 * @param {{ dataDir: string }} resolved
 */
export function createHostProxy(resolved) {
  /** @type {Map<string, JobStub>} */
  const jobs = new Map()
  const adapters = listPhase1Adapters()

  return {
    lanes: CREDENTIAL_LANES,
    adapters: adapters.map((a) => a.kind),
    dataDir: resolved.dataDir,

    /** @param {Record<string, unknown>} _req */
    async generate(_req) {
      throw NOT_WIRED('media.generate')
    },

    /** @param {Record<string, unknown>} _req */
    async edit(_req) {
      throw NOT_WIRED('media.edit')
    },

    /** @param {string} jobId */
    async status(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.status')
      return job
    },

    /** @param {string} jobId */
    async cancel(jobId) {
      const job = jobs.get(jobId)
      if (!job) throw NOT_WIRED('media.job.cancel')
      job.phase = 'cancelled'
      return job
    },

    /** @param {Record<string, unknown>} _channel */
    async detectModels(_channel) {
      throw NOT_WIRED('media.detectModels')
    },

    /** Client-safe channel summary — never includes apiKey */
    describeChannels() {
      return []
    },
  }
}

/**
 * Legacy helper — prefer createHostProxy + ctx.provide in apply.
 * Mutates an already-provided bag via ctx.get (requires inject/provide).
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {{ dataDir: string }} resolved
 */
export function attachHostProxy(ctx, resolved) {
  const proxy = createHostProxy(resolved)
  const bag = ctx.get('dshImageWorkstation')
  if (bag && typeof bag === 'object') bag.mediaProxy = proxy
  ctx.logger?.info?.(
    `[dsh-image-workstation] media host-proxy seats ready (adapters=${proxy.adapters.join(',')}; live=false)`,
  )
  return proxy
}
