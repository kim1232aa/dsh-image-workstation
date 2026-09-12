/**
 * Shared async.task_id adapter: POST submit → poll GET until terminal status.
 * URLs returned verbatim. Never log or echo API tokens.
 * Contract: docs/protocol/02-async-task-id.md
 */

/**
 * @typedef {{
 *   submitPath: string,
 *   pollPath: string,
 *   taskIdField?: string,
 *   statusField?: string,
 *   successValues?: string[],
 *   failValues?: string[],
 *   resultUrlPaths?: string[],
 *   progressField?: string,
 *   pollIntervalMs?: number,
 *   pollTimeoutMs?: number,
 *   cancelPath?: string,
 * }} AsyncTaskConfig
 */

/** @type {Readonly<Required<Pick<AsyncTaskConfig, 'taskIdField'|'statusField'|'successValues'|'failValues'|'resultUrlPaths'|'pollIntervalMs'|'pollTimeoutMs'>>>} */
export const DEFAULT_ASYNC_CONFIG = Object.freeze({
  taskIdField: 'task_id',
  statusField: 'status',
  successValues: Object.freeze(['SUCCEEDED', 'success', 'completed', 'SUCCESS', 'done']),
  failValues: Object.freeze(['FAILED', 'failed', 'ERROR', 'error', 'cancelled', 'CANCELED', 'CANCELLED']),
  resultUrlPaths: Object.freeze(['data[0].url', 'output.video_url', 'output.url', 'result.url', 'url']),
  pollIntervalMs: 2000,
  pollTimeoutMs: 600_000,
})

/**
 * Defaults suited to image async gateways (shorter timeout).
 * @param {Partial<AsyncTaskConfig>} [overrides]
 * @returns {AsyncTaskConfig}
 */
export function defaultImageAsyncConfig(overrides = {}) {
  return {
    submitPath: '/v1/images/generations',
    pollPath: '/v1/tasks/{task_id}',
    taskIdField: DEFAULT_ASYNC_CONFIG.taskIdField,
    statusField: DEFAULT_ASYNC_CONFIG.statusField,
    successValues: [...DEFAULT_ASYNC_CONFIG.successValues],
    failValues: [...DEFAULT_ASYNC_CONFIG.failValues],
    resultUrlPaths: ['data[0].url', 'output.url', 'url'],
    pollIntervalMs: DEFAULT_ASYNC_CONFIG.pollIntervalMs,
    pollTimeoutMs: 120_000,
    ...overrides,
  }
}

/**
 * Defaults suited to video.async (longer timeout).
 * @param {Partial<AsyncTaskConfig>} [overrides]
 * @returns {AsyncTaskConfig}
 */
export function defaultVideoAsyncConfig(overrides = {}) {
  return {
    submitPath: '/v1/video/generations',
    pollPath: '/v1/tasks/{task_id}',
    taskIdField: DEFAULT_ASYNC_CONFIG.taskIdField,
    statusField: DEFAULT_ASYNC_CONFIG.statusField,
    successValues: [...DEFAULT_ASYNC_CONFIG.successValues],
    failValues: [...DEFAULT_ASYNC_CONFIG.failValues],
    resultUrlPaths: [...DEFAULT_ASYNC_CONFIG.resultUrlPaths],
    pollIntervalMs: DEFAULT_ASYNC_CONFIG.pollIntervalMs,
    pollTimeoutMs: DEFAULT_ASYNC_CONFIG.pollTimeoutMs,
    ...overrides,
  }
}

/**
 * @param {string} text
 * @param {string} [token]
 */
export function scrubToken(text, token) {
  let s = String(text || '')
  if (token && token.length >= 4) s = s.split(token).join('[redacted]')
  s = s.replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
  return s.slice(0, 500)
}

/**
 * Simple path helper: supports `data[0].url`, `output.video_url`, bracket + dot.
 * @param {unknown} obj
 * @param {string} path
 */
export function getByPath(obj, path) {
  if (obj == null || !path) return undefined
  const normalized = String(path)
    .replace(/\[(\d+)\]/g, '.$1')
    .replace(/^\./, '')
  const parts = normalized.split('.').filter(Boolean)
  let cur = obj
  for (const p of parts) {
    if (cur == null) return undefined
    if (typeof cur !== 'object') return undefined
    cur = cur[p]
  }
  return cur
}

/**
 * @param {unknown} body
 * @param {string} [field]
 */
function extractTaskId(body, field = 'task_id') {
  if (!body || typeof body !== 'object') return ''
  const preferred = field || 'task_id'
  const direct = /** @type {any} */ (body)[preferred]
  if (direct != null && String(direct).trim()) return String(direct).trim()
  for (const k of ['task_id', 'taskId', 'id', 'job_id', 'jobId']) {
    const v = /** @type {any} */ (body)[k]
    if (v != null && String(v).trim()) return String(v).trim()
  }
  // nested data.task_id
  const nested = getByPath(body, 'data.task_id') || getByPath(body, 'data.id')
  if (nested != null && String(nested).trim()) return String(nested).trim()
  return ''
}

/**
 * @param {string} pollPath
 * @param {string} taskId
 */
function fillPollPath(pollPath, taskId) {
  return String(pollPath || '')
    .replace(/\{task_id\}/g, encodeURIComponent(taskId))
    .replace(/\{taskId\}/g, encodeURIComponent(taskId))
    .replace(/\{id\}/g, encodeURIComponent(taskId))
}

/**
 * @param {string} baseUrl
 * @param {string} path
 */
function joinUrl(baseUrl, path) {
  const base = String(baseUrl || '').replace(/\/+$/, '')
  const p = String(path || '')
  if (/^https?:\/\//i.test(p)) return p
  if (!p.startsWith('/')) return `${base}/${p}`
  return `${base}${p}`
}

/**
 * @param {unknown} body
 * @param {string[]} paths
 * @returns {string[]}
 */
export function extractUrls(body, paths) {
  /** @type {string[]} */
  const out = []
  const list = Array.isArray(paths) && paths.length ? paths : DEFAULT_ASYNC_CONFIG.resultUrlPaths
  for (const path of list) {
    const v = getByPath(body, path)
    if (typeof v === 'string' && v.trim()) {
      out.push(v) // verbatim — no rewrite
      continue
    }
    if (Array.isArray(v)) {
      for (const item of v) {
        if (typeof item === 'string' && item.trim()) out.push(item)
        else if (item && typeof item === 'object' && typeof item.url === 'string' && item.url.trim()) {
          out.push(item.url)
        }
      }
    }
  }
  return [...new Set(out)]
}

/**
 * @param {AsyncTaskConfig} config
 * @returns {Required<AsyncTaskConfig>}
 */
function normalizeConfig(config) {
  const c = config || /** @type {AsyncTaskConfig} */ ({})
  return {
    submitPath: c.submitPath || '/v1/tasks',
    pollPath: c.pollPath || '/v1/tasks/{task_id}',
    taskIdField: c.taskIdField || DEFAULT_ASYNC_CONFIG.taskIdField,
    statusField: c.statusField || DEFAULT_ASYNC_CONFIG.statusField,
    successValues: Array.isArray(c.successValues) && c.successValues.length
      ? c.successValues
      : [...DEFAULT_ASYNC_CONFIG.successValues],
    failValues: Array.isArray(c.failValues) && c.failValues.length
      ? c.failValues
      : [...DEFAULT_ASYNC_CONFIG.failValues],
    resultUrlPaths: Array.isArray(c.resultUrlPaths) && c.resultUrlPaths.length
      ? c.resultUrlPaths
      : [...DEFAULT_ASYNC_CONFIG.resultUrlPaths],
    progressField: c.progressField,
    pollIntervalMs:
      Number.isFinite(Number(c.pollIntervalMs)) && Number(c.pollIntervalMs) > 0
        ? Number(c.pollIntervalMs)
        : DEFAULT_ASYNC_CONFIG.pollIntervalMs,
    pollTimeoutMs:
      Number.isFinite(Number(c.pollTimeoutMs)) && Number(c.pollTimeoutMs) > 0
        ? Number(c.pollTimeoutMs)
        : DEFAULT_ASYNC_CONFIG.pollTimeoutMs,
    cancelPath: c.cancelPath || '',
  }
}

/**
 * @param {number} ms
 * @param {AbortSignal} [signal]
 */
function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      const err = new Error('aborted')
      err.name = 'AbortError'
      err.code = 'CANCELLED'
      reject(err)
      return
    }
    const t = setTimeout(resolve, ms)
    const onAbort = () => {
      clearTimeout(t)
      const err = new Error('aborted')
      err.name = 'AbortError'
      err.code = 'CANCELLED'
      reject(err)
    }
    signal?.addEventListener('abort', onAbort, { once: true })
  })
}

/**
 * Best-effort DELETE cancel when cancelPath is configured.
 * @param {{ baseUrl: string, token: string }} cred
 * @param {string} cancelPath
 * @param {string} taskId
 * @param {AbortSignal} [signal]
 */
async function tryCancelUpstream(cred, cancelPath, taskId, signal) {
  if (!cancelPath || !taskId) return
  const path = fillPollPath(cancelPath, taskId)
  const url = joinUrl(cred.baseUrl, path)
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${cred.token}`,
        Accept: 'application/json',
      },
      signal,
    })
  } catch {
    /* best-effort */
  }
}

/**
 * Run submit + poll loop.
 *
 * Phases: queued → submitted → polling → done | failed | cancelled
 *
 * @param {{
 *   cred: { baseUrl: string, token: string },
 *   config: AsyncTaskConfig,
 *   submitBody: Record<string, unknown>,
 *   signal?: AbortSignal,
 *   onProgress?: (p: { phase: string, percent?: number, elapsedMs: number, taskId?: string, message?: string }) => void,
 * }} opts
 * @returns {Promise<{ phase: 'done', taskId: string, urls: string[], elapsedMs: number, raw?: unknown }>}
 */
export async function runAsyncTask({ cred, config, submitBody, signal, onProgress }) {
  const cfg = normalizeConfig(config)
  const token = String(cred?.token || '')
  const baseUrl = String(cred?.baseUrl || '').replace(/\/+$/, '')
  if (!baseUrl || !token) {
    const err = new Error('async.task_id: baseUrl or token missing')
    err.code = 'ASYNC_CRED_MISSING'
    throw err
  }

  const started = Date.now()
  const elapsed = () => Date.now() - started
  /** @param {string} phase @param {Record<string, unknown>} [extra] */
  const report = (phase, extra = {}) => {
    try {
      onProgress?.({ phase, elapsedMs: elapsed(), ...extra })
    } catch {
      /* ignore listener errors */
    }
  }

  const throwScrubbed = (message, code, extra = {}) => {
    const err = new Error(scrubToken(message, token))
    err.code = code
    Object.assign(err, extra)
    throw err
  }

  if (signal?.aborted) {
    report('cancelled')
    throwScrubbed('cancelled', 'CANCELLED')
  }

  report('queued')

  const submitUrl = joinUrl(baseUrl, cfg.submitPath)
  let submitRes
  try {
    submitRes = await fetch(submitUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submitBody || {}),
      signal,
    })
  } catch (e) {
    if (e?.name === 'AbortError' || signal?.aborted || e?.code === 'CANCELLED') {
      report('cancelled')
      throwScrubbed('cancelled', 'CANCELLED')
    }
    throwScrubbed(`async.task_id: submit fetch failed ${e?.message || e}`, 'ASYNC_SUBMIT_FETCH')
  }

  const submitText = await submitRes.text()
  let submitJson
  try {
    submitJson = submitText ? JSON.parse(submitText) : {}
  } catch {
    submitJson = {}
  }
  if (!submitRes.ok) {
    const msg =
      submitJson?.error?.message ||
      submitJson?.message ||
      submitText ||
      `HTTP ${submitRes.status}`
    throwScrubbed(`async.task_id: submit failed ${msg}`, 'ASYNC_SUBMIT_HTTP', {
      status: submitRes.status,
    })
  }

  const taskId = extractTaskId(submitJson, cfg.taskIdField)
  if (!taskId) {
    throwScrubbed('async.task_id: submit response missing task id', 'ASYNC_TASK_ID_MISSING')
  }

  report('submitted', { taskId })

  const deadline = started + cfg.pollTimeoutMs
  let lastBody = submitJson

  while (true) {
    if (signal?.aborted) {
      await tryCancelUpstream(cred, cfg.cancelPath, taskId)
      report('cancelled', { taskId })
      throwScrubbed('cancelled', 'CANCELLED', { taskId })
    }
    if (Date.now() > deadline) {
      throwScrubbed(
        `async.task_id: poll timed out after ${cfg.pollTimeoutMs}ms`,
        'ASYNC_POLL_TIMEOUT',
        { taskId },
      )
    }

    const pollUrl = joinUrl(baseUrl, fillPollPath(cfg.pollPath, taskId))
    let pollRes
    try {
      pollRes = await fetch(pollUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
        signal,
      })
    } catch (e) {
      if (e?.name === 'AbortError' || signal?.aborted || e?.code === 'CANCELLED') {
        await tryCancelUpstream(cred, cfg.cancelPath, taskId)
        report('cancelled', { taskId })
        throwScrubbed('cancelled', 'CANCELLED', { taskId })
      }
      throwScrubbed(`async.task_id: poll fetch failed ${e?.message || e}`, 'ASYNC_POLL_FETCH', {
        taskId,
      })
    }

    const pollText = await pollRes.text()
    let pollJson
    try {
      pollJson = pollText ? JSON.parse(pollText) : {}
    } catch {
      pollJson = {}
    }
    lastBody = pollJson

    if (!pollRes.ok) {
      const msg =
        pollJson?.error?.message || pollJson?.message || pollText || `HTTP ${pollRes.status}`
      throwScrubbed(`async.task_id: poll failed ${msg}`, 'ASYNC_POLL_HTTP', {
        taskId,
        status: pollRes.status,
      })
    }

    const statusRaw = getByPath(pollJson, cfg.statusField)
    const status = statusRaw != null ? String(statusRaw) : ''
    let percent
    if (cfg.progressField) {
      const p = Number(getByPath(pollJson, cfg.progressField))
      if (Number.isFinite(p)) percent = Math.max(0, Math.min(100, p))
    }

    const successHit = cfg.successValues.some((v) => v === status || String(v).toLowerCase() === status.toLowerCase())
    const failHit = cfg.failValues.some((v) => v === status || String(v).toLowerCase() === status.toLowerCase())

    if (successHit) {
      const urls = extractUrls(pollJson, cfg.resultUrlPaths)
      if (!urls.length) {
        throwScrubbed('async.task_id: success but no result URL paths matched', 'ASYNC_NO_URL', {
          taskId,
        })
      }
      report('done', { taskId, percent: percent ?? 100 })
      return {
        phase: /** @type {'done'} */ ('done'),
        taskId,
        urls,
        elapsedMs: elapsed(),
        raw: lastBody,
      }
    }

    if (failHit) {
      const msg =
        pollJson?.error?.message ||
        pollJson?.message ||
        pollJson?.fail_reason ||
        pollJson?.failure_reason ||
        status ||
        'upstream failed'
      report('failed', { taskId, message: scrubToken(msg, token) })
      throwScrubbed(`async.task_id: upstream ${msg}`, 'ASYNC_UPSTREAM_FAILED', { taskId })
    }

    report('polling', { taskId, percent, message: status || undefined })

    try {
      await sleep(cfg.pollIntervalMs, signal)
    } catch (e) {
      if (e?.name === 'AbortError' || signal?.aborted || e?.code === 'CANCELLED') {
        await tryCancelUpstream(cred, cfg.cancelPath, taskId)
        report('cancelled', { taskId })
        throwScrubbed('cancelled', 'CANCELLED', { taskId })
      }
      throw e
    }
  }
}
