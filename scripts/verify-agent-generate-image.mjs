/**
 * Pure unit checks for Agent generate_image / edit_image policy (no dsh runtime, no paid APIs).
 */
import {
  ensureAgentImageConfigured,
  resolveAgentImageModel,
  listConfiguredAgentModels,
  normalizeAgentRefImages,
  pickAgentRefImageSource,
  mapAgentEditRequest,
} from '../src/agent/model-policy.js'
import {
  renderGenerateImageOutput,
  renderEditImageOutput,
} from '../src/agent/image-tools.js'
import { resolveConfig } from '../src/config.js'

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
  if (!/Settings → Plugins → dsh-image-workstation/.test(e.message)) fail(`settings path ${e.message}`)
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

// allowAgent default ON (undefined / missing !== false)
{
  const r = resolveConfig({})
  if (r.allowAgentImageGeneration !== true) fail(`default allowAgent ${r.allowAgentImageGeneration}`)
  ensureAgentImageConfigured(
    { allowAgentImageGeneration: r.allowAgentImageGeneration },
    { mediaConfigured: true },
  )
}

// render generate: short status + markdown image lines (verbatim URLs)
{
  const url = 'https://example.x.ai/generated/city-night.png'
  const parts = renderGenerateImageOutput(
    {},
    {
      job_id: 'job-demo-1',
      status: 'done',
      message: 'Generation completed via host mediaProxy.generate.',
      images: [{ url, kind: 'image' }],
    },
  )
  if (!Array.isArray(parts) || parts.length !== 1 || parts[0].type !== 'text') fail('render parts shape')
  const t = parts[0].text
  if (!/job_id=job-demo-1/.test(t)) fail(`job_id line ${t}`)
  if (!/status=done/.test(t)) fail(`status line ${t}`)
  if (!t.includes(`![generated](${url})`)) fail(`markdown image ${t}`)
  if (/apple|robot/i.test(t)) fail('banned demo seed in render')
  if (!t.includes(url)) fail('verbatim url missing')
}

// refImages normalize + pick
{
  const refs = normalizeAgentRefImages([
    { url: 'https://cdn.example/a.png' },
    { dataUrl: 'data:image/png;base64,aaa' },
    '/tmp/ref.png',
    'https://cdn.example/b.jpg',
  ])
  if (refs.length !== 4) fail(`normalize len ${refs.length}`)
  if (pickAgentRefImageSource(refs) !== 'data:image/png;base64,aaa') {
    fail(`pick prefer dataUrl got ${pickAgentRefImageSource(refs)}`)
  }
  if (pickAgentRefImageSource([{ url: 'https://x/y.png' }]) !== 'https://x/y.png') {
    fail('pick url')
  }
  const mapped = mapAgentEditRequest(
    { prompt: '城市夜景，霓虹更亮', count: 1, size: '1:1' },
    'grok-imagine-image',
    '/tmp/ref.png',
  )
  if (mapped.prompt !== '城市夜景，霓虹更亮' || mapped.image !== '/tmp/ref.png') {
    fail(`map edit ${JSON.stringify(mapped)}`)
  }
  if (mapped.model !== 'grok-imagine-image') fail('map edit model')
}

// render edit
{
  const url = 'https://imgen.x.ai/xai-imgen/edit-demo.jpeg'
  const parts = renderEditImageOutput(
    {},
    {
      job_id: 'job-edit-1',
      status: 'done',
      message: 'Edit completed via host mediaProxy.edit (/v1/images/edits).',
      images: [{ url }],
    },
  )
  const t = parts[0].text
  if (!t.startsWith('edit_image:')) fail(`edit label ${t}`)
  if (!t.includes(`![generated](${url})`)) fail(`edit markdown ${t}`)
  if (!/job_id=job-edit-1/.test(t)) fail('edit job')
}

console.log('OK verify-agent-generate-image')
console.log('- allowAgentImageGeneration=false → AGENT_GENERATION_DISABLED')
console.log('- mediaConfigured false → IMAGE_API_NOT_CONFIGURED (settings guide)')
console.log('- multi-model → MODEL_CHOICE_REQUIRED')
console.log('- allowAgent default ON')
console.log('- render generate/edit → job_id/status + markdown ![…](url)')
console.log('- refImages normalize / pick / mapAgentEditRequest')
console.log('- no paid APIs called')
