import Schema from '@deepseek-ai/schemastery'

/**
 * @typedef {{
 *   skillDir: string,
 *   dataDir: string,
 *   allowAgentImageGeneration: boolean,
 *   agentImageModels: string[],
 * }} WorkstationConfig
 */

/** Cordis Config schema — must expose `.validate` (Schemastery). */
export const Config = Schema.object({
  skillDir: Schema.string()
    .default('')
    .description('Local FANTASY skill root (folders with SKILL.md). Empty → ${dataDir}/skills.'),
  dataDir: Schema.string()
    .default('')
    .description('Local data root. Empty → ~/.dsh/dsh-image-workstation/'),
  allowAgentImageGeneration: Schema.boolean()
    .default(true)
    .description(
      '允许 Agent 调用生图（generate_image 工具）。关闭后 Agent 无法生图；工作台页面 CTA 不受影响。',
    ),
  agentImageModels: Schema.array(Schema.string())
    .default([])
    .description(
      'Agent 可见的生图模型 id 列表（显式配置，勿填未验证的假 id）。≥2 个时 Agent 必须先问用户用哪个。空 = 仅宿主默认（MEDIA_IMAGE_MODEL / mediaProxy default）。也可用环境变量 MEDIA_IMAGE_MODELS。',
    ),
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
  return {
    skillDir: config.skillDir || `${dataDir}/skills`,
    dataDir,
    allowAgentImageGeneration: config.allowAgentImageGeneration !== false,
    agentImageModels,
  }
}
