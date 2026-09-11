/**
 * Agent tool registration contracts (no live upstream, no invented Pass).
 */
import {
  listConfiguredAgentModels,
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  mapAgentGenerateRequest,
} from '../src/agent/model-policy.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

// not configured → guide
try {
  ensureAgentImageConfigured({ allowAgentImageGeneration: true }, { mediaConfigured: false })
  fail('expected IMAGE_API_NOT_CONFIGURED')
} catch (e) {
  if (e.code !== 'IMAGE_API_NOT_CONFIGURED') fail(`code ${e.code}`)
  if (!/Settings|media\.env|配置/.test(e.message)) fail(`guide text ${e.message}`)
}

// disabled → refuse; studio unaffected is a product claim — tool just refuses
try {
  ensureAgentImageConfigured({ allowAgentImageGeneration: false }, { mediaConfigured: true })
  fail('expected AGENT_GENERATION_DISABLED')
} catch (e) {
  if (e.code !== 'AGENT_GENERATION_DISABLED') fail(`code ${e.code}`)
}

// multi-model must ask
process.env.MEDIA_IMAGE_MODELS = ''
process.env.MEDIA_IMAGE_MODEL = ''
const multi = { agentImageModels: ['model-a', 'model-b'] }
if (listConfiguredAgentModels(multi).length !== 2) fail('list multi')
try {
  resolveAgentImageModel(multi, undefined)
  fail('expected MODEL_CHOICE_REQUIRED')
} catch (e) {
  if (e.code !== 'MODEL_CHOICE_REQUIRED') fail(`code ${e.code}`)
  if (!/model-a/.test(e.message) || !/model-b/.test(e.message)) fail('options missing')
}
if (resolveAgentImageModel(multi, 'model-b') !== 'model-b') fail('pick model-b')

// single may omit
if (resolveAgentImageModel({ agentImageModels: ['only-one'] }, undefined) !== 'only-one') {
  fail('single default')
}

// host-default seat: no invented id
const none = resolveAgentImageModel({ agentImageModels: [] }, undefined)
if (none !== undefined) fail(`invented default model ${none}`)

const mapped = mapAgentGenerateRequest({ prompt: 'rainy street', count: 2, size: '16:9' }, 'only-one')
if (mapped.prompt !== 'rainy street' || mapped.n !== 2 || mapped.model !== 'only-one') {
  fail(`map ${JSON.stringify(mapped)}`)
}
if (/sk-|Bearer\s+\S+/i.test(JSON.stringify(mapped))) fail('token in mapped req')

console.log('OK verify-agent-tools')
console.log('- not-configured guides to settings')
console.log('- allowAgentImageGeneration=false refuses')
console.log('- multi-model MODEL_CHOICE_REQUIRED')
console.log('- mapAgentGenerateRequest → mediaProxy fields')
