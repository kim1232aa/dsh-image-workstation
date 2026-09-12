/**
 * Offline unit test for async.task_id (mock global fetch — no network).
 * Exit non-zero on any assertion failure.
 */
import {
  runAsyncTask,
  getByPath,
  extractUrls,
  scrubToken,
  defaultVideoAsyncConfig,
} from '../src/protocol/async-task-id.js'

const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}
const ok = (cond, msg) => {
  if (!cond) fail(msg)
}

// --- path helpers ---
ok(getByPath({ data: [{ url: 'https://cdn.example/v.mp4' }] }, 'data[0].url') === 'https://cdn.example/v.mp4', 'getByPath bracket')
ok(getByPath({ output: { video_url: 'https://cdn.example/o.mp4' } }, 'output.video_url') === 'https://cdn.example/o.mp4', 'getByPath dot')
const urls = extractUrls(
  { data: [{ url: 'https://cdn.example/verbatim-URL.mp4?sig=1&x=2' }] },
  ['data[0].url'],
)
ok(urls[0] === 'https://cdn.example/verbatim-URL.mp4?sig=1&x=2', `verbatim extract ${urls[0]}`)
ok(scrubToken('Bearer SECRETTOKEN123 boom', 'SECRETTOKEN123').includes('[redacted]'), 'scrub')
ok(!scrubToken('x SECRETTOKEN123 y', 'SECRETTOKEN123').includes('SECRETTOKEN123'), 'scrub removes token')

// --- mock fetch: success path ---
const phases = []
let pollCount = 0
const VERBATIM = 'https://upstream.example/raw/video.mp4?token=keep-me&sig=abc'

globalThis.fetch = async (url, init) => {
  const u = String(url)
  const method = (init?.method || 'GET').toUpperCase()
  if (method === 'POST' && u.includes('/v1/video/generations')) {
    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ task_id: 'task-abc-1' })
      },
    }
  }
  if (method === 'GET' && u.includes('/v1/tasks/task-abc-1')) {
    pollCount += 1
    if (pollCount === 1) {
      return {
        ok: true,
        status: 200,
        async text() {
          return JSON.stringify({ status: 'RUNNING', progress: 40 })
        },
      }
    }
    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({
          status: 'SUCCEEDED',
          data: [{ url: VERBATIM }],
        })
      },
    }
  }
  fail(`unexpected fetch ${method} ${u}`)
  return { ok: false, status: 500, async text() { return '' } }
}

const success = await runAsyncTask({
  cred: { baseUrl: 'https://api.example', token: 'SECRETTOKEN123' },
  config: defaultVideoAsyncConfig({
    progressField: 'progress',
    pollIntervalMs: 1,
    pollTimeoutMs: 5000,
  }),
  submitBody: { model: 'demo', prompt: 'a cat runs' },
  onProgress: (p) => phases.push(p.phase),
})

ok(success.phase === 'done', `phase done got ${success.phase}`)
ok(success.taskId === 'task-abc-1', `taskId ${success.taskId}`)
ok(success.urls?.[0] === VERBATIM, `verbatim URL got ${success.urls?.[0]}`)
ok(phases.includes('queued'), `phases queued: ${phases}`)
ok(phases.includes('submitted'), `phases submitted: ${phases}`)
ok(phases.includes('polling'), `phases polling: ${phases}`)
ok(phases.includes('done'), `phases done: ${phases}`)
ok(pollCount >= 2, `poll progressing then success count=${pollCount}`)

// --- fail path ---
pollCount = 0
globalThis.fetch = async (url, init) => {
  const method = (init?.method || 'GET').toUpperCase()
  if (method === 'POST') {
    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ task_id: 'task-fail' })
      },
    }
  }
  return {
    ok: true,
    status: 200,
    async text() {
      return JSON.stringify({ status: 'FAILED', message: 'upstream boom SECRETTOKEN123' })
    },
  }
}

let failCaught = null
try {
  await runAsyncTask({
    cred: { baseUrl: 'https://api.example', token: 'SECRETTOKEN123' },
    config: defaultVideoAsyncConfig({ pollIntervalMs: 1, pollTimeoutMs: 2000 }),
    submitBody: { prompt: 'x' },
  })
} catch (e) {
  failCaught = e
}
ok(failCaught, 'expected fail throw')
ok(failCaught?.code === 'ASYNC_UPSTREAM_FAILED', `fail code ${failCaught?.code}`)
ok(!String(failCaught?.message || '').includes('SECRETTOKEN123'), `token leaked in fail: ${failCaught?.message}`)

// --- abort path ---
const ac = new AbortController()
let cancelDelete = 0
globalThis.fetch = async (url, init) => {
  const method = (init?.method || 'GET').toUpperCase()
  if (method === 'POST') {
    return {
      ok: true,
      status: 200,
      async text() {
        return JSON.stringify({ task_id: 'task-abort' })
      },
    }
  }
  if (method === 'DELETE') {
    cancelDelete += 1
    return { ok: true, status: 200, async text() { return '{}' } }
  }
  // hang in poll until abort
  await new Promise((resolve, reject) => {
    const t = setTimeout(resolve, 30_000)
    init?.signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(t)
        const err = new Error('aborted')
        err.name = 'AbortError'
        reject(err)
      },
      { once: true },
    )
  })
  return { ok: true, status: 200, async text() { return JSON.stringify({ status: 'RUNNING' }) } }
}

const abortPhases = []
setTimeout(() => ac.abort(), 20)
let abortCaught = null
try {
  await runAsyncTask({
    cred: { baseUrl: 'https://api.example', token: 'SECRETTOKEN123' },
    config: defaultVideoAsyncConfig({
      pollIntervalMs: 5,
      pollTimeoutMs: 10_000,
      cancelPath: '/v1/tasks/{task_id}',
    }),
    submitBody: { prompt: 'abort-me' },
    signal: ac.signal,
    onProgress: (p) => abortPhases.push(p.phase),
  })
} catch (e) {
  abortCaught = e
}
ok(abortCaught, 'expected abort throw')
ok(
  abortCaught?.code === 'CANCELLED' || abortCaught?.name === 'AbortError',
  `abort code ${abortCaught?.code} name ${abortCaught?.name}`,
)
ok(abortPhases.includes('cancelled') || abortCaught?.code === 'CANCELLED', `abort phases ${abortPhases}`)
ok(cancelDelete >= 1, `expected DELETE cancelPath hit, got ${cancelDelete}`)

if (process.exitCode) {
  console.error('test-async-task-id: FAILED')
  process.exit(1)
}
console.log('test-async-task-id: ok')
