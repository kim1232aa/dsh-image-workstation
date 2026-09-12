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
 *   mediaProvider: 'openai-images' | 'anthropic-compat' | 'gptimg',
 *   videoBaseUrl: string,
 *   videoApiKey: string,
 *   videoProvider: string,
 *   videoDefaultModel: string,
 *   videoPollIntervalMs: number,
 *   videoPollTimeoutMs: number,
 *   visionBaseUrl: string,
 *   visionApiKey: string,
 *   visionModel: string,
 * }} WorkstationConfig
 */

/** Cordis Config schema — secret role redacts *ApiKey fields on the wire. */
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
    .description('生图 API 密钥（仅宿主；设置页只显示 Configured / Not configured）。'),
  mediaProvider: Schema.union([
    Schema.const('anthropic-compat'),
    Schema.const('openai-images'),
    Schema.const('gptimg'),
  ])
    .default('anthropic-compat')
    .description('渠道协议：anthropic-compat | openai-images | gptimg'),
  videoBaseUrl: Schema.string()
    .default('')
    .description('视频渠道 API Base URL（built-in video.async；stub 时不打付费 upstream）。'),
  videoApiKey: Schema.string()
    .role('secret')
    .default('')
    .description('视频渠道密钥（仅宿主；设置页只显示 Configured / Not configured）。'),
  videoProvider: Schema.string()
    .default('video.async')
    .description('视频协议：默认 video.async（built-in，非嵌套插件包）。'),
  videoDefaultModel: Schema.string()
    .default('')
    .description('默认视频模型 id（如 grok-imagine-video）。'),
  videoPollIntervalMs: Schema.number()
    .default(2000)
    .description('视频任务轮询间隔（ms）；设置卡不展示。'),
  videoPollTimeoutMs: Schema.number()
    .default(600000)
    .description('视频任务轮询超时（ms）；设置卡不展示。'),
  visionBaseUrl: Schema.string()
    .default('')
    .description('Vision 反推/增强 API Base URL（OpenAI 兼容 chat/completions；与生图密钥分车道）。'),
  visionApiKey: Schema.string()
    .role('secret')
    .default('')
    .description('Vision 车道密钥（仅宿主；设置页只显示 Configured / Not configured）。也可写 media.env VISION_*。'),
  visionModel: Schema.string()
    .default('')
    .description('Vision 模型 id（空 → gpt-4o-mini 或 media.env VISION_MODEL）。'),
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
  let provider = 'anthropic-compat'
  if (config.mediaProvider === 'gptimg') provider = 'gptimg'
  else if (config.mediaProvider === 'openai-images') provider = 'openai-images'
  else if (config.mediaProvider === 'anthropic-compat') provider = 'anthropic-compat'
  const pollInterval = Number(config.videoPollIntervalMs)
  const pollTimeout = Number(config.videoPollTimeoutMs)
  return {
    skillDir: config.skillDir || `${dataDir}/skills`,
    dataDir,
    allowAgentImageGeneration: config.allowAgentImageGeneration !== false,
    agentImageModels,
    mediaBaseUrl: String(config.mediaBaseUrl || '').trim(),
    mediaApiKey: String(config.mediaApiKey || ''),
    mediaProvider: provider,
    videoBaseUrl: String(config.videoBaseUrl || '').trim(),
    videoApiKey: String(config.videoApiKey || ''),
    videoProvider: String(config.videoProvider || '').trim() || 'video.async',
    videoDefaultModel: String(config.videoDefaultModel || '').trim(),
    videoPollIntervalMs: Number.isFinite(pollInterval) && pollInterval > 0 ? pollInterval : 2000,
    videoPollTimeoutMs: Number.isFinite(pollTimeout) && pollTimeout > 0 ? pollTimeout : 600000,
    visionBaseUrl: String(config.visionBaseUrl || '').trim(),
    visionApiKey: String(config.visionApiKey || ''),
    visionModel: String(config.visionModel || '').trim(),
  }
}
