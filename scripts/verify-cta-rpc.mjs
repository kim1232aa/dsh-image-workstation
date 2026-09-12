/**
 * Mock/spy check: CTA detail → handler → mediaProxy.generate (no upstream).
 * Exit 0 only if the bridge calls generate with mapped fields and paints-shaped value.
 */
import { createCtaRpcHandler, mapGenerateRequest, CTA_RPC_GENERATE } from '../src/protocol/cta-rpc.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

const mapped = mapGenerateRequest({
  prompt: 'rainy neon street at night, 35mm',
  ratio: '16:9',
  clarity: '1K',
  count: 2,
  modelId: '',
  negativePrompt: 'blur',
})
if (mapped.prompt !== 'rainy neon street at night, 35mm') fail('prompt rewritten')
if (mapped.aspect_ratio !== '16:9') fail(`aspect ${mapped.aspect_ratio}`)
if (mapped.n !== 2) fail(`n ${mapped.n}`)
if (mapped.resolution !== '1k') fail(`resolution ${mapped.resolution}`)

let called = null
const mediaProxy = {
  mediaConfigured: true,
  async generate(req) {
    called = req
    return {
      jobId: 'job-test-1',
      phase: 'done',
      results: [{ kind: 'image', url: 'https://example.com/x.png' }],
    }
  },
}

const handler = createCtaRpcHandler(mediaProxy)
const empty = await handler(CTA_RPC_GENERATE, { prompt: '   ' })
if (empty.ok !== false || empty.error?.code !== 'PROMPT_REQUIRED') fail(`empty prompt ${JSON.stringify(empty)}`)

const unknown = await handler('nope', { prompt: 'x' })
if (unknown.ok !== false || unknown.error?.code !== 'UNKNOWN_ENDPOINT') fail(`unknown ${JSON.stringify(unknown)}`)

const ok = await handler(CTA_RPC_GENERATE, {
  prompt: 'cinematic still, rainy neon street, shallow DOF',
  ratio: '1:1',
  clarity: '自动',
  count: 1,
})
if (!ok.ok) fail(`generate ${JSON.stringify(ok)}`)
if (!called || called.prompt !== 'cinematic still, rainy neon street, shallow DOF') {
  fail(`spy prompt ${JSON.stringify(called)}`)
}
if (called.aspect_ratio !== '1:1' || called.n !== 1) fail(`spy mapped ${JSON.stringify(called)}`)
if (ok.value?.results?.[0]?.url !== 'https://example.com/x.png') fail(`value ${JSON.stringify(ok.value)}`)

const wire = JSON.stringify(ok)
if (/sk-|Bearer\s+\S+|token/i.test(wire) && /sk-[A-Za-z0-9]{10,}/.test(wire)) {
  fail('token-like string in wire result')
}

// failure path scrub
const boom = createCtaRpcHandler({
  mediaConfigured: true,
  async generate() {
    const err = new Error('upstream 401 Bearer SECRETTOKEN123 failed')
    err.code = 'UPSTREAM_HTTP'
    throw err
  },
})
const bad = await boom(CTA_RPC_GENERATE, { prompt: 'x' })
if (bad.ok !== false) fail('expected failure')
if (String(bad.error?.message || '').includes('SECRETTOKEN123')) fail('token leaked in error')


// host timeout surfaces as GENERATE_TIMEOUT (not a bare throw)
const hang = createCtaRpcHandler({
  mediaConfigured: true,
  async generate(req) {
    if (req.signal?.aborted) {
      const e = new Error(req.signal.reason?.message || 'aborted')
      e.name = 'AbortError'
      e.code = req.signal.reason?.code || 'GENERATE_ABORTED'
      throw e
    }
    await new Promise((resolve, reject) => {
      const t = setTimeout(resolve, 60_000)
      req.signal?.addEventListener('abort', () => {
        clearTimeout(t)
        const e = new Error(req.signal.reason?.message || 'aborted')
        e.name = 'AbortError'
        e.code = req.signal.reason?.code || 'GENERATE_ABORTED'
        reject(e)
      })
    })
    return { jobId: 'x', phase: 'done', results: [] }
  },
})
const ac = new AbortController()
const te = new Error('host generate timed out after 120s waiting for upstream')
te.code = 'GENERATE_TIMEOUT'
ac.abort(te)
const timed = await hang(CTA_RPC_GENERATE, { prompt: 'timeout probe rainy street' }, ac.signal)
if (timed.ok !== false) fail(`timeout ok ${JSON.stringify(timed)}`)
if (!String(timed.error?.message || '')) fail('timeout message empty')
if (String(timed.error?.message || '').includes('SECRET')) fail('timeout leaked')
// Prefer host timeout code when reason carries it
if (timed.error?.code !== 'GENERATE_TIMEOUT' && timed.error?.code !== 'GENERATE_ABORTED') {
  fail(`timeout code ${timed.error?.code}`)
}

console.log('- GENERATE_TIMEOUT / abort path returns ok:false scrubbed message')

console.log('OK verify-cta-rpc')
console.log('- mapGenerateRequest ratio/clarity/count')
console.log('- handler spies mediaProxy.generate (no upstream)')
console.log('- result shape for studio paint; error scrubbed')

// storage.paths — client-safe dirs, no secrets
const pathsHandler = createCtaRpcHandler(
  { mediaConfigured: false },
  { dataDir: '/tmp/dsh-ws-data' },
)
const paths = await pathsHandler('storage.paths', {})
if (!paths.ok) fail(`storage.paths ${JSON.stringify(paths)}`)
if (paths.value?.generated !== 'media/generated') fail('generated path')
if (paths.value?.gallery !== 'media/gallery') fail('gallery path')
if (paths.value?.history !== 'media/history') fail('history path')
if (paths.value?.dataDir !== '/tmp/dsh-ws-data') fail('dataDir')
const pathsWire = JSON.stringify(paths)
if (/sk-|Bearer\s+\S+/i.test(pathsWire)) fail('secret-like in storage.paths')
console.log('- storage.paths returns client-safe media dirs')

console.log('OK verify-cta-rpc (extended)')
