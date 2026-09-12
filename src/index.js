import { writeFileSync } from 'node:fs'
import { Config, resolveConfig, SETTINGS_NAMESPACE } from './config.js'
import { mediaEnvSummary } from './protocol/load-media-env.js'
import { resolveMediaBag } from './protocol/resolve-media.js'
import { createHostProxy } from './protocol/host-proxy.js'
import { attachCtaRpc, CTA_RPC_CHANNEL } from './protocol/cta-rpc.js'
import { attachAgentImageTools } from './agent/image-tools.js'
import {
  discoverSkills,
  SKILL_ENTRY_LABELS,
  ATTRIBUTION,
  planSkill,
  editPlan,
  selfCheckDisplay,
  stitchTriptych,
  redoPosterComposite,
  loadSkillMd,
  RUNTIME_CAPABILITIES,
  runPosterValidateAndBuild,
} from './skills/index.js'

export const name = 'dsh-image-workstation'
export { Config, SETTINGS_NAMESPACE }

/** connection for RPC; webServer via nested inject; settings optional for Plugins card */
export const inject = ['connection']

/**
 * @param {import('@deepseek-ai/cordis').Context} ctx
 * @param {Record<string, unknown>} [config]
 */
export function apply(ctx, config) {
  /** @type {{ proxy: ReturnType<typeof createHostProxy>, resolved: ReturnType<typeof resolveConfig> }} */
  const runtime = {
    resolved: resolveConfig(config),
    proxy: /** @type {any} */ (null),
  }

  const rebuild = (cfg) => {
    runtime.resolved = resolveConfig(cfg)
    const media = resolveMediaBag(runtime.resolved)
    runtime.proxy = createHostProxy(runtime.resolved, media)
    return mediaEnvSummary(media)
  }

  let mediaSummary = rebuild(config)

  /** Facade so CTA / Agent always hit current proxy after settings onChange */
  const mediaFacade = {
    get mediaConfigured() {
      return runtime.proxy.mediaConfigured
    },
    get adapters() {
      return runtime.proxy.adapters
    },
    get live() {
      return runtime.proxy.live
    },
    generate: (req) => runtime.proxy.generate(req),
    detectModels: (ch) => runtime.proxy.detectModels(ch),
    describeChannels: () => runtime.proxy.describeChannels(),
    status: (id) => runtime.proxy.status(id),
    cancel: (id) => runtime.proxy.cancel(id),
  }

  const listSkills = () => discoverSkills(runtime.resolved.skillDir)

  ctx.provide('dshImageWorkstation', {
    dataDir: runtime.resolved.dataDir,
    skillDir: runtime.resolved.skillDir,
    get mediaEnv() {
      return mediaSummary
    },
    mediaProxy: mediaFacade,
    get allowAgentImageGeneration() {
      return runtime.resolved.allowAgentImageGeneration
    },
    get agentImageModels() {
      return runtime.resolved.agentImageModels
    },
    skillEntryLabels: SKILL_ENTRY_LABELS,
    skillAttribution: ATTRIBUTION,
    listSkills,
    runPosterScripts: (skillFolder, opts) => runPosterValidateAndBuild(skillFolder, opts),
    loadSkillMd: (folder) => loadSkillMd(folder),
    planSkill: (req) => planSkill({ ...req, skillDir: runtime.resolved.skillDir }),
    editPlan,
    selfCheckDisplay,
    stitchTriptych,
    redoPosterComposite: (folder, args) => redoPosterComposite(folder, args),
    skillRuntimeCapabilities: RUNTIME_CAPABILITIES,
    settingsNamespace: SETTINGS_NAMESPACE,
  })

  // Settings→Plugins namespace (secret fields redacted on wire)
  ctx.inject(['settings'], (settingsCtx) => {
    let getSection = () => config
    try {
      settingsCtx.settings.installSection(ctx, SETTINGS_NAMESPACE, Config, config, {
        setSource: (get) => {
          getSection = get
        },
        onChange: () => {
          try {
            const next = getSection()
            mediaSummary = rebuild(next && typeof next === 'object' ? next : {})
            ctx.logger?.info?.(
              `[dsh-image-workstation] settings changed media ${JSON.stringify(mediaSummary)} configured=${mediaFacade.mediaConfigured}`,
            )
          } catch (e) {
            ctx.logger?.error?.(
              `[dsh-image-workstation] settings onChange failed: ${e?.message || e}`,
            )
          }
        },
      })
      ctx.logger?.info?.(
        `[dsh-image-workstation] settings section installed ns=${SETTINGS_NAMESPACE}`,
      )
    } catch (e) {
      ctx.logger?.error?.(
        `[dsh-image-workstation] settings.installSection failed: ${e?.message || e}`,
      )
    }
  })

  ctx.inject(['webServer'], (webCtx) => {
    let rpcOk = false
    let rpcErr = ''
    try {
      attachCtaRpc(webCtx, mediaFacade)
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
            settingsNs: SETTINGS_NAMESPACE,
            hasWebServer: Boolean(webCtx.webServer),
            hasConnection: Boolean(webCtx.connection),
            mediaConfigured: mediaFacade.mediaConfigured,
          },
          null,
          2,
        ),
      )
    } catch {
      /* ignore */
    }
  })

  attachAgentImageTools(ctx, mediaFacade, () => ({
    allowAgentImageGeneration: runtime.resolved.allowAgentImageGeneration,
    agentImageModels: runtime.resolved.agentImageModels,
  }))

  ctx.logger?.info?.(
    `[dsh-image-workstation] host apply dataDir=${runtime.resolved.dataDir} skillDir=${runtime.resolved.skillDir || '(unset)'} media ${JSON.stringify(mediaSummary)} configured=${mediaFacade.mediaConfigured} rpc=${CTA_RPC_CHANNEL}/generate|probe settings=${SETTINGS_NAMESPACE} agentImage=${runtime.resolved.allowAgentImageGeneration} skills=${listSkills().length}`,
  )
}
