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
  resolveEditRefInputs,
  listImageRefsFromUserMessage,
  findLatestUserPromptMessage,
  extractImageRefsFromContentBlock,
  summarizeMessageContentShapes,
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

// message attachments win over workspace path args
{
  const decided = resolveEditRefInputs({
    argRefs: ['/workspace/other-city.jpg'],
    messageImageRefs: [{ attachmentId: 'att-1', name: 'user-upload.png', bytes: 12 }],
  })
  if (decided.source !== 'message_attachment') fail('expected message_attachment')
  if (decided.refs[0]?.attachmentId !== 'att-1') fail('wrong ref')
  if (decided.ignoredArgCount !== 1) fail('ignoredArgCount')
}
{
  const decided = resolveEditRefInputs({
    argRefs: ['/workspace/only.jpg'],
    messageImageRefs: [],
  })
  if (decided.source !== 'tool_args') fail('expected tool_args')
  if (decided.refs[0] !== '/workspace/only.jpg') fail('arg passthrough')
}
{
  const msg = {
    role: 'user',
    source: { kind: 'user' },
    content: [
      { type: 'text', text: 'edit this' },
      { type: 'image', attachment: { attachmentId: 'a', name: 'shot.png' } },
    ],
  }
  const refs = listImageRefsFromUserMessage(msg)
  if (refs.length !== 1 || refs[0].name !== 'shot.png') fail('listImageRefs')
}
{
  const agent = {
    session: {
      surface: { nodes: [1, 2] },
      eventAt(seq) {
        if (seq === 2)
          return {
            type: 'user/message',
            data: {
              role: 'user',
              source: { kind: 'user' },
              content: [{ type: 'image', attachment: { attachmentId: 'cur' } }],
            },
          }
        if (seq === 1)
          return {
            type: 'user/message',
            data: {
              role: 'user',
              source: { kind: 'plugin', plugin: 'x' },
              content: [{ type: 'image', attachment: { attachmentId: 'old' } }],
            },
          }
        return null
      },
    },
  }
  const latest = findLatestUserPromptMessage(agent)
  if (listImageRefsFromUserMessage(latest)[0]?.attachmentId !== 'cur') fail('latest user prompt')
}

// Prefer human message that still carries images when a later text-only human exists
{
  const agent = {
    session: {
      surface: { nodes: [1, 2, 3] },
      eventAt(seq) {
        if (seq === 3)
          return {
            type: 'user/message',
            data: {
              role: 'user',
              source: { kind: 'user' },
              content: [{ type: 'text', text: 'go' }],
            },
          }
        if (seq === 2)
          return {
            type: 'user/message',
            data: {
              role: 'user',
              source: { kind: 'plugin', plugin: 'x' },
              content: [{ type: 'text', text: 'ctx' }],
            },
          }
        if (seq === 1)
          return {
            type: 'user/message',
            data: {
              role: 'user',
              source: { kind: 'user' },
              content: [
                { type: 'image', attachment: { attachmentId: 'img-1', name: 'a.png', mediaType: 'image/png' } },
                { type: 'text', text: 'edit' },
              ],
            },
          }
        return null
      },
    },
  }
  const latest = findLatestUserPromptMessage(agent)
  if (listImageRefsFromUserMessage(latest)[0]?.attachmentId !== 'img-1') fail('prefer image-bearing user')
}

// file / image_url / bare attachment_id shapes
{
  const fileMsg = {
    content: [
      {
        type: 'file',
        attachment: { attachmentId: 'f1', name: 'shot.jpg', bytes: 9 },
      },
    ],
  }
  const fileRefs = listImageRefsFromUserMessage(fileMsg)
  if (fileRefs.length !== 1 || fileRefs[0].attachmentId !== 'f1' || fileRefs[0]._kind !== 'file')
    fail('file image-like')

  const urlMsg = {
    content: [{ type: 'image_url', image_url: { url: 'https://example.com/a.png' } }],
  }
  const urlRefs = listImageRefsFromUserMessage(urlMsg)
  if (urlRefs.length !== 1 || urlRefs[0].url !== 'https://example.com/a.png') fail('image_url')

  const idMsg = {
    content: [{ type: 'image', attachment_id: 'sha256:abc', name: 'x.png', mediaType: 'image/png' }],
  }
  const idRefs = extractImageRefsFromContentBlock(idMsg.content[0])
  if (idRefs.length !== 1 || idRefs[0].attachmentId !== 'sha256:abc') fail('attachment_id')

  const shapes = summarizeMessageContentShapes(fileMsg)
  if (!shapes[0]?.hasAttachment) fail('summarize shapes')

  const decided = resolveEditRefInputs({
    argRefs: ['/home/box/1/city-night-street-cinematic.jpg'],
    messageImageRefs: fileRefs,
  })
  if (decided.source !== 'message_attachment') fail('file refs must override tool path')
}

console.log('OK verify-agent-generate-image')
console.log('- allowAgentImageGeneration=false → AGENT_GENERATION_DISABLED')
console.log('- mediaConfigured false → IMAGE_API_NOT_CONFIGURED (settings guide)')
console.log('- multi-model → MODEL_CHOICE_REQUIRED')
console.log('- allowAgent default ON')
console.log('- render generate/edit → job_id/status + markdown ![…](url)')
console.log('- refImages normalize / pick / mapAgentEditRequest')
console.log('- no paid APIs called')
