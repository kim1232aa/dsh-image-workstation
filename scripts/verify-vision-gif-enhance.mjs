/**
 * Unit checks: vision not-configured, gif live-when-configured (mock generate),
 * ecom stub, enhance mapping, canvasGenerate via CTA handler.
 * No paid upstream calls.
 */
import { loadVisionEnv, reversePrompt, VISION_NOT_CONFIGURED } from '../src/protocol/vision-read.js'
import { enhancePrompt, ENHANCE_NOT_CONFIGURED } from '../src/protocol/prompt-enhance.js'
import {
  gifGenerate,
  ecommerceGenerate,
  GIF_NOT_CONFIGURED,
  GIF_STUB_NOT_WIRED,
  ECOM_STUB_NOT_WIRED,
} from '../src/protocol/gif-ecom.js'
import { buildGifPrompt } from '../src/protocol/gif-prompt.js'
import {
  createCtaRpcHandler,
  mapGenerateRequest,
  mapVideoRequest,
  CTA_RPC_REVERSE_PROMPT,
  CTA_RPC_ENHANCE_PROMPT,
  CTA_RPC_VIDEO_GENERATE,
  CTA_RPC_GIF_GENERATE,
  CTA_RPC_ECOM_GENERATE,
  CTA_RPC_CANVAS_GENERATE,
  CTA_RPC_GENERATE,
} from '../src/protocol/cta-rpc.js'
import { createVideoAsyncAdapter } from '../src/protocol/video-async.js'
import { resolveConfig } from '../src/config.js'
import { resolveGifEnvFromMap } from '../src/protocol/load-media-env.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

// Clear vision env for this process
delete process.env.VISION_BASE_URL
delete process.env.VISION_API_KEY
delete process.env.VISION_MODEL
delete process.env.GIF_BASE_URL
delete process.env.GIF_API_KEY
process.env.MEDIA_ENV_PATH = '/tmp/dsh-no-such-media-env-for-verify'

const env = loadVisionEnv()
if (env.configured) fail('vision should not be configured without VISION_*')

try {
  await reversePrompt({ dataUrl: 'data:image/png;base64,xx' })
  fail('reversePrompt should throw VISION_NOT_CONFIGURED')
} catch (e) {
  if (e.code !== VISION_NOT_CONFIGURED) fail(`reverse code ${e.code}`)
}

try {
  await enhancePrompt({ prompt: 'wet street' })
  fail('enhance should throw ENHANCE_NOT_CONFIGURED')
} catch (e) {
  if (e.code !== ENHANCE_NOT_CONFIGURED) fail(`enhance code ${e.code}`)
}

// GIF without media → GIF_NOT_CONFIGURED
try {
  await gifGenerate({ prompt: 'x' }, { mediaConfigured: false })
  fail('gif should throw GIF_NOT_CONFIGURED')
} catch (e) {
  if (e.code !== GIF_NOT_CONFIGURED) fail(`gif code ${e.code}`)
}

// forceStub → GIF_STUB_NOT_WIRED
try {
  await gifGenerate({ prompt: 'x' }, { forceStub: true, mediaConfigured: true, generate: async () => ({}) })
  fail('gif forceStub should throw')
} catch (e) {
  if (e.code !== GIF_STUB_NOT_WIRED) fail(`gif stub code ${e.code}`)
}

// live path with mocked generate (no fetch)
const sheet = buildGifPrompt({ userPrompt: 'rain cat', refImageCount: 0, closedLoop: false })
if (!/sprite sheet|4 columns|rain cat/i.test(sheet)) fail(`buildGifPrompt ${sheet.slice(0, 80)}`)

let gifGenArgs = null
const mockGenerate = async (req) => {
  gifGenArgs = req
  return {
    jobId: 'gif-job-1',
    phase: 'done',
    results: [{ kind: 'image', url: 'https://example.com/grid.png' }],
  }
}
const gifLive = await gifGenerate(
  { prompt: 'rain cat walk', fps: 12 },
  { mediaConfigured: true, generate: mockGenerate },
)
if (!gifLive?.results?.[0]?.url || gifLive.results[0].url !== 'https://example.com/grid.png') {
  fail(`gif live ${JSON.stringify(gifLive)}`)
}
if (!gifGenArgs?.prompt || !/rain cat walk/.test(gifGenArgs.prompt)) fail('gif prompt not composed')
if (gifGenArgs.aspect_ratio !== '4:3') fail(`gif aspect ${gifGenArgs.aspect_ratio}`)

try {
  await ecommerceGenerate({ name: 'x' })
  fail('ecom should throw')
} catch (e) {
  if (e.code !== ECOM_STUB_NOT_WIRED) fail(`ecom code ${e.code}`)
}

const gifMap = resolveGifEnvFromMap({ GIF_API_URL: 'https://gif.example', GIF_API_KEY: 'sekrit' })
if (gifMap.baseUrl !== 'https://gif.example' || !gifMap.token) fail('GIF_API_URL alias')

// CTA handler
const mapped = mapGenerateRequest({ prompt: 'rain', ratio: '16:9', clarity: '2K', modelId: 'm1' })
if (mapped.aspect_ratio !== '16:9' || mapped.resolution !== '2k' || !mapped.size) {
  fail(`mapGenerateRequest ${JSON.stringify(mapped)}`)
}

let enhanceArgs = null
let canvasCalled = null
const mediaProxy = {
  mediaConfigured: true,
  async generate(req) {
    canvasCalled = req
    return {
      jobId: 'c1',
      phase: 'done',
      results: [{ kind: 'image', url: 'https://example.com/canvas.png' }],
    }
  },
  async reversePrompt() {
    const err = new Error('vision not configured')
    err.code = VISION_NOT_CONFIGURED
    throw err
  },
  async enhancePrompt(req) {
    enhanceArgs = req
    const err = new Error('vision not configured')
    err.code = ENHANCE_NOT_CONFIGURED
    err.visionCode = VISION_NOT_CONFIGURED
    throw err
  },
  async gifGenerate(req) {
    return gifGenerate(req, { mediaConfigured: true, generate: mockGenerate })
  },
  async ecommerceGenerate(req) {
    return ecommerceGenerate(req)
  },
}

const handler = createCtaRpcHandler(mediaProxy)
const rev = await handler(CTA_RPC_REVERSE_PROMPT, { dataUrl: 'data:image/png;base64,xx' })
if (rev.ok !== false || rev.error?.code !== VISION_NOT_CONFIGURED) fail(`rpc reverse ${JSON.stringify(rev)}`)

const enh = await handler(CTA_RPC_ENHANCE_PROMPT, {
  prompt: 'rainy neon street',
  ratio: '16:9',
  clarity: '2K',
  modelId: 'm1',
})
if (enh.ok !== false || enh.error?.code !== ENHANCE_NOT_CONFIGURED) fail(`rpc enhance ${JSON.stringify(enh)}`)
if (!enhanceArgs || enhanceArgs.aspect_ratio !== '16:9' || enhanceArgs.resolution !== '2k') {
  fail(`enhanceArgs not from mapGenerateRequest ${JSON.stringify(enhanceArgs)}`)
}
if (enhanceArgs.size !== mapped.size) fail(`size mismatch ${enhanceArgs.size} vs ${mapped.size}`)

// videoGenerate not configured → VIDEO_NOT_CONFIGURED
const videoAdapter = createVideoAsyncAdapter({ dataDir: '/tmp' }, null)
mediaProxy.videoGenerate = (req) => videoAdapter.generate(req)
const mappedV = mapVideoRequest({
  prompt: 'rain street',
  duration: '5秒',
  ratio: '16:9',
  clarity: '1K',
  mode: '文生视频',
})
if (mappedV.durationSec !== 5 || mappedV.aspect_ratio !== '16:9') {
  fail(`mapVideoRequest ${JSON.stringify(mappedV)}`)
}
const vid = await handler(CTA_RPC_VIDEO_GENERATE, {
  prompt: 'wet dusk street',
  duration: '5秒',
  mode: '文生视频',
})
if (vid.ok !== false || vid.error?.code !== 'VIDEO_NOT_CONFIGURED') {
  fail(`rpc video ${JSON.stringify(vid)}`)
}

const gif = await handler(CTA_RPC_GIF_GENERATE, { prompt: 'x' })
if (!gif.ok || gif.value?.results?.[0]?.url !== 'https://example.com/grid.png') {
  fail(`rpc gif ${JSON.stringify(gif)}`)
}

const ecom = await handler(CTA_RPC_ECOM_GENERATE, { name: 'x' })
if (ecom.ok !== false || ecom.error?.code !== ECOM_STUB_NOT_WIRED) fail(`rpc ecom ${JSON.stringify(ecom)}`)

// canvasGenerate reuses generate
const canvas = await handler(CTA_RPC_CANVAS_GENERATE, {
  prompt: 'canvas tile rainy street',
  ratio: '1:1',
  clarity: '1K',
  count: 1,
})
if (!canvas.ok || canvas.value?.results?.[0]?.url !== 'https://example.com/canvas.png') {
  fail(`rpc canvas ${JSON.stringify(canvas)}`)
}
if (!canvasCalled || canvasCalled.prompt !== 'canvas tile rainy street') fail('canvas did not call generate')

// canvas edit path when refImages
canvasCalled = null
const canvasEdit = await handler(CTA_RPC_CANVAS_GENERATE, {
  prompt: 'edit tile',
  mode: '图生图',
  ratio: '1:1',
  refImages: [{ url: 'https://example.com/ref.png' }],
})
if (!canvasEdit.ok) fail(`canvas edit ${JSON.stringify(canvasEdit)}`)
if (!canvasCalled?.refImages?.length) fail('canvas edit missing refImages')

// Channel drift: openai-images alone must NOT select gptimg when only provider set
const cfg = resolveConfig({ mediaProvider: 'openai-images' })
if (cfg.mediaProvider !== 'openai-images') fail(`provider ${cfg.mediaProvider}`)
const cfgDef = resolveConfig({})
if (cfgDef.mediaProvider !== 'anthropic-compat') fail(`default provider ${cfgDef.mediaProvider}`)

console.log('OK verify-vision-gif-enhance')
console.log('- VISION_NOT_CONFIGURED / ENHANCE_NOT_CONFIGURED honest')
console.log('- VIDEO_NOT_CONFIGURED via videoGenerate RPC')
console.log('- gifGenerate live-when-configured (mock generate); GIF_NOT_CONFIGURED / forceStub')
console.log('- ECOM_STUB_NOT_WIRED')
console.log('- canvasGenerate → generate/edit (mock)')
console.log('- enhance uses mapGenerateRequest aspect_ratio/resolution/size')
console.log('- default mediaProvider=anthropic-compat')
console.log('- no paid APIs')
