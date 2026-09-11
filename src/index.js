import { Config, resolveConfig } from './config.js'
import { loadMediaEnv, mediaEnvSummary } from './protocol/load-media-env.js'
import { createHostProxy } from './protocol/host-proxy.js'

export const name = 'dsh-image-workstation'
export { Config }

/**
 * Host half: data paths + host-only media bag. No paid API calls here.
 * Provides `dshImageWorkstation` via Cordis provide (never bare ctx.foo assign).
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {Record<string, unknown>} [config]
 */
export function apply(ctx, config) {
  const resolved = resolveConfig(config)
  const media = loadMediaEnv()
  const mediaProxy = createHostProxy(resolved)

  // Host-only bag — token stays here; never register a client-facing RPC that returns mediaEnv.token
  ctx.provide('dshImageWorkstation', {
    dataDir: resolved.dataDir,
    skillDir: resolved.skillDir,
    mediaEnv: media,
    mediaProxy,
  })

  ctx.logger?.info?.(
    `[dsh-image-workstation] host apply dataDir=${resolved.dataDir} skillDir=${resolved.skillDir || '(unset)'} mediaEnv ${JSON.stringify(mediaEnvSummary(media))} proxy adapters=${mediaProxy.adapters.join(',')}`,
  )
}
