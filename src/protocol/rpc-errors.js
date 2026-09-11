/**
 * Shared scrub + client/host failure messaging for CTA RPC.
 * Tokens never leave scrubbed strings.
 */

/** Host-side generate deadline — return ok:false before browser drops the fetch. */
export const HOST_GENERATE_TIMEOUT_MS = 120_000

/** Client abort slightly after host so host scrubbed error wins when possible. */
export const CLIENT_GENERATE_TIMEOUT_MS = 130_000

/**
 * @param {string} msg
 */
export function scrubErrorMessage(msg) {
  return String(msg || 'generate failed')
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/sk-[A-Za-z0-9._-]{8,}/g, '[redacted]')
    .replace(/[A-Za-z0-9_-]{24,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, '[redacted-jwt]')
    .slice(0, 500)
}

/**
 * Merge AbortSignals: abort when either fires.
 * @param {AbortSignal | undefined} a
 * @param {AbortSignal | undefined} b
 */
export function anySignal(a, b) {
  if (!a && !b) return undefined
  if (a && !b) return a
  if (b && !a) return b
  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.any === 'function') {
    return AbortSignal.any([a, b])
  }
  const ac = new AbortController()
  const forward = (sig) => {
    if (sig.aborted) {
      ac.abort(sig.reason)
      return
    }
    sig.addEventListener('abort', () => ac.abort(sig.reason), { once: true })
  }
  forward(a)
  forward(b)
  return ac.signal
}

/**
 * Format browser-side RPC transport failures so studio never stops at bare
 * "Failed to fetch" when we can say more. Prefer host ok:false messages when present.
 *
 * @param {unknown} err
 */
export function formatClientRpcFailure(err) {
  const name = err && typeof err === 'object' && 'name' in err ? String(err.name) : ''
  const raw = scrubErrorMessage(err?.message || err)
  if (name === 'AbortError' || /aborted|AbortError|The operation was aborted/i.test(raw)) {
    return `出图失败：请求超时或已取消（超过 ${Math.round(CLIENT_GENERATE_TIMEOUT_MS / 1000)}s 未从宿主返回）。请重试；若持续超时，检查上游是否挂起/503。`
  }
  if (/Failed to fetch|NetworkError|Load failed|network error/i.test(raw)) {
    return (
      '出图失败：无法完成 host RPC（浏览器报 Failed to fetch / 网络中断，或请求在宿主返回前被断开）。' +
      '这不是笼统“失败”——请看宿主日志里的上游状态；正常上游错误应经 /dsh-ws 以 scrubbed message 返回。'
    )
  }
  if (/transport failure/i.test(raw)) {
    return `出图失败：${raw}（宿主未返回合法 RPC 信封时会出现；请查 host 日志）`
  }
  return `出图失败：${raw}`
}

/**
 * Format host ok:false error for studio status line.
 * @param {{ code?: string, message?: string }} error
 */
export function formatHostGenerateError(error) {
  const code = error?.code ? String(error.code) : ''
  const message = scrubErrorMessage(error?.message || 'unknown')
  if (code === 'GENERATE_TIMEOUT') {
    return `出图失败：宿主等待上游超时（${Math.round(HOST_GENERATE_TIMEOUT_MS / 1000)}s）。${message}${code ? `（${code}）` : ''}`
  }
  if (code === 'UPSTREAM_HTTP' || /HTTP\s*503/i.test(message)) {
    return `出图失败：${message}${code ? `（${code}）` : ''}`
  }
  return `出图失败：${message}${code ? `（${code}）` : ''}`
}
