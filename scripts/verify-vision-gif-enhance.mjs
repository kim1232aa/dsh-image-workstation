/**
 * Unit checks: vision not-configured, gif/ecom stubs, enhance mapping via CTA handler.
 * No paid upstream calls.
 */
import { loadVisionEnv, reversePrompt, VISION_NOT_CONFIGURED } from '../src/protocol/vision-read.js'
import { enhancePrompt, ENHANCE_NOT_CONFIGURED } from '../src/protocol/prompt-enhance.js'
import { gifGenerate, ecommerceGenerate, GIF_STUB_NOT_WIRED, ECOM_STUB_NOT_WIRED } from '../src/protocol/gif-ecom.js'
import {
  createCtaRpcHandler,
  mapGenerateRequest,
  CTA_RPC_REVERSE_PROMPT,
  CTA_RPC_ENHANCE_PROMPT,
  CTA_RPC_GIF_GENERATE,
  CTA_RPC_ECOM_GENERATE,
} from '../src/protocol/cta-rpc.js'
import { resolveConfig } from '../src/config.js'
import { resolveMediaBag } from '../src/protocol/resolve-media.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

// Clear vision env for this process
delete process.env.VISION_BASE_URL
delete process.env.VISION_API_KEY
delete process.env.VISION_MODEL
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

try {
  await gifGenerate({ prompt: 'x' })
  fail('gif should throw')
} catch (e) {
  if (e.code !== GIF_STUB_NOT_WIRED) fail(`gif code ${e.code}`)
}

try {
  await ecommerceGenerate({ name: 'x' })
  fail('ecom should throw')
} catch (e) {
  if (e.code !== ECOM_STUB_NOT_WIRED) fail(`ecom code ${e.code}`)
}

// CTA handler stubs + enhance mapping uses mapGenerateRequest fields
const mapped = mapGenerateRequest({ prompt: 'rain', ratio: '16:9', clarity: '2K', modelId: 'm1' })
if (mapped.aspect_ratio !== '16:9' || mapped.resolution !== '2k' || !mapped.size) {
  fail(`mapGenerateRequest ${JSON.stringify(mapped)}`)
}

let enhanceArgs = null
const mediaProxy = {
  mediaConfigured: true,
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
    return gifGenerate(req)
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

const gif = await handler(CTA_RPC_GIF_GENERATE, { prompt: 'x' })
if (gif.ok !== false || gif.error?.code !== GIF_STUB_NOT_WIRED) fail(`rpc gif ${JSON.stringify(gif)}`)

const ecom = await handler(CTA_RPC_ECOM_GENERATE, { name: 'x' })
if (ecom.ok !== false || ecom.error?.code !== ECOM_STUB_NOT_WIRED) fail(`rpc ecom ${JSON.stringify(ecom)}`)

// Channel drift: openai-images alone must NOT select gptimg when only provider set
const cfg = resolveConfig({ mediaProvider: 'openai-images' })
if (cfg.mediaProvider !== 'openai-images') fail(`provider ${cfg.mediaProvider}`)
const cfgDef = resolveConfig({})
if (cfgDef.mediaProvider !== 'anthropic-compat') fail(`default provider ${cfgDef.mediaProvider}`)

console.log('OK verify-vision-gif-enhance')
console.log('- VISION_NOT_CONFIGURED / ENHANCE_NOT_CONFIGURED honest')
console.log('- GIF_STUB_NOT_WIRED / ECOM_STUB_NOT_WIRED')
console.log('- enhance uses mapGenerateRequest aspect_ratio/resolution/size')
console.log('- default mediaProvider=anthropic-compat')
