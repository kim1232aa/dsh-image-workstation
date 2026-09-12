/**
 * Pure unit checks for Agent generate_image policy (no dsh runtime, no paid APIs).
 */
import {
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  listConfiguredAgentModels,
} from '../src/agent/model-policy.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

// allowAgentImageGeneration=false refuses
try {
  ensureAgentImageConfigured({ allowAgentImageGeneration: false }, { mediaConfigured: true })
  fail('expected AGENT_GENERATION_DISABLED')
} catch (e) {
  if (e.code !== 'AGENT_GENERATION_DISABLED') fail(`code ${e.code}`)
  if (!/Settings|允许 Agent|生图/.test(e.message)) fail(`msg ${e.message}`)
}

// mediaConfigured false guides settings
try {
  ensureAgentImageConfigured({ allowAgentImageGeneration: true }, { mediaConfigured: false })
  fail('expected IMAGE_API_NOT_CONFIGURED')
} catch (e) {
  if (e.code !== 'IMAGE_API_NOT_CONFIGURED') fail(`code ${e.code}`)
  if (!/Settings|media\.env|配置/.test(e.message)) fail(`guide ${e.message}`)
}

// multi-model requires model arg
process.env.MEDIA_IMAGE_MODELS = ''
process.env.MEDIA_IMAGE_MODEL = ''
const multi = { agentImageModels: ['alpha-img', 'beta-img'] }
if (listConfiguredAgentModels(multi).length !== 2) fail('list multi')
try {
  resolveAgentImageModel(multi, undefined)
  fail('expected MODEL_CHOICE_REQUIRED')
} catch (e) {
  if (e.code !== 'MODEL_CHOICE_REQUIRED') fail(`code ${e.code}`)
  if (!/alpha-img/.test(e.message) || !/beta-img/.test(e.message)) fail('options')
}
if (resolveAgentImageModel(multi, 'beta-img') !== 'beta-img') fail('pick')

// configured path does not throw (still no network)
ensureAgentImageConfigured({ allowAgentImageGeneration: true }, { mediaConfigured: true })

console.log('OK verify-agent-generate-image')
console.log('- allowAgentImageGeneration=false → AGENT_GENERATION_DISABLED')
console.log('- mediaConfigured false → IMAGE_API_NOT_CONFIGURED (settings guide)')
console.log('- multi-model → MODEL_CHOICE_REQUIRED')
console.log('- no paid APIs called')
