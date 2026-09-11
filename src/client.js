/**
 * Browser half (dsh.client). Rebuild — VisioWork shape only.
 * Owns sidebar「生图」hang point; CTA event → Connection RPC → paint.
 */
import { TOP_TABS, COLUMNS, CTA, SKILL_ENTRIES } from './ui/labels.js'
import { studioTree, defaultStudioState } from './ui/studio-stub.js'
import { mountSidebarEntry } from './client/sidebar-entry.js'
import { createStudioHost } from './client/studio-host.js'
import {
  CLIENT_GENERATE_TIMEOUT_MS,
  formatClientRpcFailure,
  formatHostGenerateError,
  scrubErrorMessage,
} from './protocol/rpc-errors.js'

export const name = 'dsh-image-workstation/client'
export { TOP_TABS, COLUMNS, CTA, SKILL_ENTRIES, studioTree, defaultStudioState }

export const inject = ['slots', 'locale', 'connection', 'sessions', 'conversation']

/** Plugin-owned Connection RPC channel (host registers via connection.rpc.handle). */
export const CTA_RPC_CHANNEL = '/dsh-ws'
export const CTA_RPC_GENERATE = 'generate'

/**
 * @param {any} ctx
 * @param {Record<string, unknown>} [_config]
 */
export function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client — sidebar「生图」+ CTA→${CTA_RPC_CHANNEL}/${CTA_RPC_GENERATE}`,
  )

  const studio = createStudioHost()
  const disposers = []
  let inflight = false

  /**
   * dsh-ws-generate → connection.rpc → paintGenerateResult
   * Prefer host ok:false scrubbed messages over bare browser "Failed to fetch".
   * @param {CustomEvent} ev
   */
  const onGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
    if (inflight) {
      studio.setStatus('已有出图任务进行中…')
      return
    }
    if (!String(detail.prompt || '').trim()) {
      studio.setStatus('请先输入提示词（不选 Skill 也可出图）')
      return
    }
    const rpc = ctx.connection?.rpc
    if (!rpc || typeof rpc.call !== 'function') {
      studio.setStatus('连接不可用，无法出图')
      return
    }
    inflight = true
    studio.setStatus('出图中…')
    const ac = new AbortController()
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS)
    try {
      const result = await rpc.call(
        CTA_RPC_CHANNEL,
        CTA_RPC_GENERATE,
        {
          prompt: detail.prompt,
          negativePrompt: detail.negativePrompt,
          mode: detail.mode,
          skillId: detail.skillId,
          ratio: detail.ratio,
          clarity: detail.clarity,
          count: detail.count,
          detail: detail.detail,
          modelId: detail.modelId,
        },
        ac.signal,
      )
      if (result?.ok) {
        studio.paintGenerateResult(result.value || {})
      } else {
        studio.setStatus(formatHostGenerateError(result?.error || {}))
      }
    } catch (e) {
      studio.setStatus(formatClientRpcFailure(e))
      // Extra scrubbed breadcrumb for console (never tokens)
      console.warn('[dsh-image-workstation] CTA RPC failed:', scrubErrorMessage(e?.message || e))
    } finally {
      clearTimeout(timer)
      inflight = false
    }
  }

  try {
    disposers.push(
      mountSidebarEntry({
        labels: { newSession: '新会话', studio: '生图' },
        onNewSession: () => studio.close(),
        onStudio: () => studio.open(),
      }),
    )
    document.addEventListener('dsh-ws-generate', onGenerate)
    disposers.push(() => document.removeEventListener('dsh-ws-generate', onGenerate))
    disposers.push(() => studio.dispose())
  } catch (error) {
    console.warn('[dsh-image-workstation] sidebar/CTA mount failed:', error)
  }

  // Settings→Plugins card: later; namespace owned by host Config.
  ctx.effect?.(() => () => {
    for (const d of disposers.splice(0)) d()
  }, 'dsh-image-workstation: sidebar+studio+cta-rpc')
}
