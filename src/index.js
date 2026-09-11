import { Config, resolveConfig } from './config.js'
import { loadMediaEnv, mediaEnvSummary } from './protocol/load-media-env.js'
import { attachHostProxy } from './protocol/host-proxy.js'

export const name = 'dsh-image-workstation'
export { Config }

/**
 * Host half: data paths, future tools/queue. No paid API calls here.
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {Record<string, unknown>} [config]
 */
export function apply(ctx, config) {
  const resolved = resolveConfig(config)
  ctx.logger?.info?.(
    `[dsh-image-workstation] host apply dataDir=${resolved.dataDir} skillDir=${resolved.skillDir || '(unset)'}`,
  )
  const media = loadMediaEnv()
  ctx.dshImageWorkstation = ctx.dshImageWorkstation || {}
  ctx.dshImageWorkstation.mediaEnv = media // host-only; never send token to client
  ctx.logger?.info?.(`[dsh-image-workstation] mediaEnv ${JSON.stringify(mediaEnvSummary(media))}`)
  // Protocol seats only — no live upstream / no tools.register yet
  attachHostProxy(ctx, resolved)
}
