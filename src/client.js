/**
 * Browser half (dsh.client). Rebuild — VisioWork shape only.
 * Owns sidebar「生图」hang point; CTA event → Connection RPC → paint.
 */
import { TOP_TABS, COLUMNS, CTA, SKILL_ENTRIES } from './ui/labels.js'
import { studioTree, defaultStudioState } from './ui/studio-stub.js'
import { mountSidebarEntry } from './client/sidebar-entry.js'
import { createStudioHost } from './client/studio-host.js'

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
      studio.setStatus('connection.rpc 不可用 — 无法到达 host mediaProxy')
      return
    }
    inflight = true
    studio.setStatus('出图中…（RPC → host mediaProxy.generate）')
    try {
      const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GENERATE, {
        prompt: detail.prompt,
        negativePrompt: detail.negativePrompt,
        mode: detail.mode,
        skillId: detail.skillId,
        ratio: detail.ratio,
        clarity: detail.clarity,
        count: detail.count,
        detail: detail.detail,
        modelId: detail.modelId,
      })
      if (result?.ok) {
        studio.paintGenerateResult(result.value || {})
      } else {
        const err = result?.error || {}
        studio.setStatus(
          `出图失败：${err.message || 'unknown'}${err.code ? `（${err.code}）` : ''}`,
        )
      }
    } catch (e) {
      studio.setStatus(`出图 RPC 失败：${e?.message || e}`)
    } finally {
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
