/**
 * Minimal studio host shell — labels from ui stubs; no protocol calls.
 * Red-line UX: prompt alone can fire CTA; negative visible+clearable; score never locks CTA.
 */
import { TOP_TABS, COLUMNS, CTA, PROMPT_FIELDS, MODE_TABS, CHROME } from '../ui/labels.js'
import { defaultStudioState } from '../ui/studio-stub.js'

export const STUDIO_HOST = '[data-dsh-ws-studio-host]'

/**
 * @returns {{ open: () => void, close: () => void, dispose: () => void, isOpen: () => boolean }}
 */
export function createStudioHost() {
  let host
  let open = false
  /** @type {ReturnType<typeof defaultStudioState>} */
  let state = defaultStudioState()

  const paintChat = () => {
    const chat = host?.querySelector('[data-ws-col="chat"]')
    const toggle = host?.querySelector('[data-ws-chat-toggle]')
    if (!chat || !toggle) return
    chat.style.display = state.chatCollapsed ? 'none' : 'block'
    toggle.textContent = state.chatCollapsed ? CHROME.expandChat : '收起对话'
  }

  const syncFields = () => {
    const promptEl = host?.querySelector('[data-ws-prompt]')
    const negEl = host?.querySelector('[data-ws-negative]')
    if (promptEl instanceof HTMLTextAreaElement) promptEl.value = state.prompt
    if (negEl instanceof HTMLTextAreaElement) negEl.value = state.negativePrompt
  }

  const ensure = () => {
    if (host) return host
    state = defaultStudioState()
    host = document.createElement('div')
    host.dataset.dshWsStudioHost = ''
    host.setAttribute('role', 'main')
    host.setAttribute('aria-label', '生图')
    host.style.cssText =
      'display:none;position:fixed;inset:0 0 0 56px;z-index:40;background:var(--dsh-bg, #111);color:var(--dsh-fg, #eee);flex-direction:column;'
    host.innerHTML = `
      <header style="display:flex;gap:8px;padding:10px 16px;border-bottom:1px solid #333;align-items:center;">
        ${TOP_TABS.map((t, i) => `<button type="button" data-ws-top="${t}" style="padding:6px 10px;border:0;background:${i === 0 ? '#333' : 'transparent'};color:inherit;cursor:pointer;border-radius:6px;">${t}</button>`).join('')}
        <span style="flex:1"></span>
        <button type="button" data-ws-chat-toggle style="padding:6px 10px;border:0;background:transparent;color:inherit;cursor:pointer;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:inherit;cursor:pointer;">关闭</button>
      </header>
      <div style="display:flex;flex:1;min-height:0;">
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;border-right:1px solid #333;padding:12px;overflow:auto;">
          <strong>${COLUMNS.history}</strong>
        </aside>
        <section data-ws-col="studio" style="flex:1;padding:12px;overflow:auto;display:flex;flex-direction:column;gap:12px;">
          <strong>${COLUMNS.studio}</strong>
          <div style="display:flex;gap:8px;">
            ${MODE_TABS.map((m, i) => `<button type="button" data-ws-mode="${m}" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:${i === 0 ? '#333' : 'transparent'};color:inherit;cursor:pointer;">${m}</button>`).join('')}
          </div>
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span>${PROMPT_FIELDS.prompt}</span>
            <textarea data-ws-prompt rows="4" placeholder="写一句想法即可出图，不必选 Skill" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span style="display:flex;align-items:center;gap:8px;">
              ${PROMPT_FIELDS.negative}
              <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#333;color:inherit;cursor:pointer;font:inherit;">${PROMPT_FIELDS.clearNegative}</button>
            </span>
            <textarea data-ws-negative rows="2" placeholder="Skill 预填负面词会出现在这里，可改可清" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <button type="button" data-ws-cta style="align-self:flex-start;padding:8px 16px;border:0;border-radius:8px;background:#3b82f6;color:#fff;cursor:pointer;font:inherit;">${CTA}</button>
          <p data-ws-status style="opacity:.7;font-size:12px;min-height:1.2em;"></p>
          <p style="opacity:.5;font-size:11px;">stub — 协议未接线；不选 Skill 也可点「${CTA}」；评分不锁出图</p>
        </section>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;border-left:1px solid #333;padding:12px;display:none;">
          <strong>${COLUMNS.chat}</strong>
        </aside>
      </div>
    `

    host.querySelector('[data-ws-close]')?.addEventListener('click', () => api.close())
    host.querySelector('[data-ws-chat-toggle]')?.addEventListener('click', () => {
      state.chatCollapsed = !state.chatCollapsed
      paintChat()
    })
    host.querySelector('[data-ws-prompt]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLTextAreaElement} */ (e.target)
      state.prompt = t.value
    })
    host.querySelector('[data-ws-negative]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLTextAreaElement} */ (e.target)
      state.negativePrompt = t.value
    })
    host.querySelector('[data-ws-clear-negative]')?.addEventListener('click', () => {
      state.negativePrompt = ''
      syncFields()
      const status = host.querySelector('[data-ws-status]')
      if (status) status.textContent = '已清除负面词'
    })
    host.querySelectorAll('[data-ws-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mode = btn.getAttribute('data-ws-mode') || MODE_TABS[0]
        host.querySelectorAll('[data-ws-mode]').forEach((b) => {
          b.style.background = b === btn ? '#333' : 'transparent'
        })
      })
    })
    host.querySelector('[data-ws-cta]')?.addEventListener('click', () => {
      // 【必须】不要求 skill；selfCheck 永不禁用
      const status = host.querySelector('[data-ws-status]')
      const skillNote = state.skillId ? `skill=${state.skillId}` : '无 Skill'
      if (status) {
        status.textContent = `已触发「${CTA}」（${skillNote}；提示词 ${state.prompt.length} 字；负面词 ${state.negativePrompt.length} 字）— 协议未接线`
      }
      host.dispatchEvent(
        new CustomEvent('dsh-ws-generate', {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            ratio: state.ratio,
          },
        }),
      )
    })

    document.body.appendChild(host)
    paintChat()
    return host
  }

  const api = {
    open() {
      ensure().style.display = 'flex'
      open = true
    },
    close() {
      if (host) host.style.display = 'none'
      open = false
    },
    isOpen() {
      return open
    },
    /** @param {string} text skill 预填负面词 */
    setNegativePrompt(text) {
      ensure()
      state.negativePrompt = text || ''
      syncFields()
    },
    dispose() {
      host?.remove()
      host = undefined
      open = false
    },
  }
  return api
}
