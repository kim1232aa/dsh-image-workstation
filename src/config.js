import Schema from '@deepseek-ai/schemastery'

export { SETTINGS_NAMESPACE } from './shared/ns.js'

/**
 * @typedef {{
 *   skillDir: string,
 *   dataDir: string,
 *   allowAgentImageGeneration: boolean,
 *   agentImageModels: string[],
 *   mediaBaseUrl: string,
 *   mediaApiKey: string,
 *   mediaProvider: 'openai-images' | 'anthropic-compat',
 * }} WorkstationConfig
 */

/** Cordis Config schema — secret role redacts mediaApiKey on the wire. */
export const Config = Schema.object({
  skillDir: Schema.string()
    .default('')
    .description('Local FANTASY skill root (folders with SKILL.md). Empty → ${dataDir}/skills.'),
  dataDir: Schema.string()
    .default('')
    .description('Local data root. Empty → ~/.dsh/dsh-image-workstation/'),
  allowAgentImageGeneration: Schema.boolean()
    .default(true)
    .description('允许 Agent 调用生图。关闭后 Agent 无法生图；工作台 CTA 不受影响。'),
  agentImageModels: Schema.array(Schema.string())
    .default([])
    .description('Agent 可见生图模型 id。空 = 宿主默认。'),
  mediaBaseUrl: Schema.string()
    .default('')
    .description('生图 API Base URL（OpenAI 兼容 /images 或 anthropic-compat）。'),
  mediaApiKey: Schema.string()
    .role('secret')
    .default('')
    .description('生图 API 密钥（仅宿主；设置页只显示已配置/未配置）。'),
  mediaProvider: Schema.union([
    Schema.const('openai-images'),
    Schema.const('anthropic-compat'),
  ])
    .default('openai-images')
    .description('渠道协议：openai-images | anthropic-compat'),
})

/**
 * @param {Partial<WorkstationConfig>} [config]
 * @returns {WorkstationConfig}
 */
export function resolveConfig(config = {}) {
  const home = process.env.HOME || process.env.USERPROFILE || '/tmp'
  const dshHome = process.env.DSH_HOME || `${home}/.dsh`
  const dataDir = config.dataDir || `${dshHome}/dsh-image-workstation`
  const agentImageModels = Array.isArray(config.agentImageModels)
    ? config.agentImageModels.map((m) => String(m || '').trim()).filter(Boolean)
    : []
  const provider =
    config.mediaProvider === 'anthropic-compat' ? 'anthropic-compat' : 'openai-images'
  return {
    skillDir: config.skillDir || `${dataDir}/skills`,
    dataDir,
    allowAgentImageGeneration: config.allowAgentImageGeneration !== false,
    agentImageModels,
    mediaBaseUrl: String(config.mediaBaseUrl || '').trim(),
    mediaApiKey: String(config.mediaApiKey || ''),
    mediaProvider: provider,
  }
}
