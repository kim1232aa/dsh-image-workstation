import { writeFileSync } from 'node:fs'
import { Config, resolveConfig } from './config.js'
import { loadMediaEnv, mediaEnvSummary } from './protocol/load-media-env.js'
import { createHostProxy } from './protocol/host-proxy.js'
import { attachCtaRpc, CTA_RPC_CHANNEL } from './protocol/cta-rpc.js'

export const name = 'dsh-image-workstation'
export { Config }

/** connection for RPC API; webServer mounted via nested inject (caller fiber for handle). */
export const inject = ['connection']

/**
 * Host half: media bag + CTA RPC /dsh-ws → mediaProxy.generate
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {Record<string, unknown>} [config]
 */
export function apply(ctx, config) {
  const resolved = resolveConfig(config)
  const media = loadMediaEnv()
  const mediaProxy = createHostProxy(resolved, media)
  const mediaSummary = mediaEnvSummary(media)

  ctx.provide('dshImageWorkstation', {
    dataDir: resolved.dataDir,
    skillDir: resolved.skillDir,
    mediaEnv: mediaSummary,
    mediaProxy,
  })

  // rpc.handle uses *caller* ctx (Cordis tracker). Mount from a fiber that has webServer.
  ctx.inject(['webServer'], (webCtx) => {
    let rpcOk = false
    let rpcErr = ''
    try {
      attachCtaRpc(webCtx, mediaProxy)
      rpcOk = true
    } catch (e) {
      rpcErr = String(e?.stack || e)
      webCtx.logger?.error?.(`[dsh-image-workstation] CTA RPC attach failed: ${e?.message || e}`)
    }
    try {
      writeFileSync(
        '/tmp/dsh-ws-apply.log',
        JSON.stringify(
          {
            at: new Date().toISOString(),
            rpcOk,
            rpcErr: rpcErr.slice(0, 800),
            channel: CTA_RPC_CHANNEL,
            hasWebServer: Boolean(webCtx.webServer),
            hasConnection: Boolean(webCtx.connection),
            mediaConfigured: mediaProxy.mediaConfigured,
          },
          null,
          2,
        ),
      )
    } catch {
      /* ignore */
    }
  })

  ctx.logger?.info?.(
    `[dsh-image-workstation] host apply dataDir=${resolved.dataDir} skillDir=${resolved.skillDir || '(unset)'} mediaEnv ${JSON.stringify(mediaSummary)} configured=${mediaProxy.mediaConfigured} rpc=${CTA_RPC_CHANNEL}/generate`,
  )
}
