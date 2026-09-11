import Schema from '@deepseek-ai/schemastery'

/**
 * @typedef {{ skillDir: string, dataDir: string }} WorkstationConfig
 */

/** Cordis Config schema — must expose `.validate` (Schemastery). */
export const Config = Schema.object({
  skillDir: Schema.string()
    .default('')
    .description('Local FANTASY skill root (folders with SKILL.md). Empty → ${dataDir}/skills.'),
  dataDir: Schema.string()
    .default('')
    .description('Local data root. Empty → ~/.dsh/dsh-image-workstation/'),
})

/**
 * @param {Partial<WorkstationConfig>} [config]
 * @returns {WorkstationConfig}
 */
export function resolveConfig(config = {}) {
  const home = process.env.HOME || process.env.USERPROFILE || '/tmp'
  const dshHome = process.env.DSH_HOME || `${home}/.dsh`
  const dataDir = config.dataDir || `${dshHome}/dsh-image-workstation`
  return {
    skillDir: config.skillDir || `${dataDir}/skills`,
    dataDir,
  }
}
