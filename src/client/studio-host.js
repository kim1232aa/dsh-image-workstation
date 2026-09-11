/**
 * Minimal studio host shell — labels from ui stubs; no protocol calls.
 * Red-line UX: prompt alone can fire CTA; negative visible+clearable; score never locks CTA.
 */
import {
  TOP_TABS,
  COLUMNS,
  CTA,
  PROMPT_FIELDS,
  PROMPT_ACTIONS,
  MODE_TABS,
  CHROME,
  RATIOS,
  CLARITY,
  COUNTS,
  PARAM_LABELS,
  SKILL_ENTRIES,
  EMPTY,
} from '../ui/labels.js'
import { defaultStudioState } from '../ui/studio-stub.js'

export const STUDIO_HOST = '[data-dsh-ws-studio-host]'

/**
 * @returns {{ open: () => void, close: () => void, dispose: () => void, isOpen: () => boolean, setNegativePrompt: (text: string) => void }}
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
    const ratio = host?.querySelector('[data-ws-param="ratio"]')
    const clarity = host?.querySelector('[data-ws-param="clarity"]')
    const count = host?.querySelector('[data-ws-param="count"]')
    if (ratio instanceof HTMLSelectElement) ratio.value = state.ratio
    if (clarity instanceof HTMLSelectElement) clarity.value = state.clarity
    if (count instanceof HTMLSelectElement) count.value = String(state.count)
    host?.querySelectorAll('[data-ws-skill]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-skill') === state.skillId
      btn.style.background = on ? '#333' : 'transparent'
      btn.setAttribute('aria-pressed', on ? 'true' : 'false')
    })
  }

  const setStatus = (text) => {
    const status = host?.querySelector('[data-ws-status]')
    if (status) status.textContent = text
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
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <button type="button" data-ws-action="enhance" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.enhance}</button>
            <button type="button" data-ws-action="templates" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.templates}</button>
            <button type="button" data-ws-action="skill" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.skill}</button>
          </div>
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span style="display:flex;align-items:center;gap:8px;">
              ${PROMPT_FIELDS.negative}
              <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#333;color:inherit;cursor:pointer;font:inherit;">${PROMPT_FIELDS.clearNegative}</button>
            </span>
            <textarea data-ws-negative rows="2" placeholder="Skill 预填负面词会出现在这里，可改可清" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <div data-ws-skill-row style="display:flex;flex-wrap:wrap;gap:6px;">
            ${SKILL_ENTRIES.map((s) => `<button type="button" data-ws-skill="${s}" aria-pressed="false" style="padding:4px 8px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${s}</button>`).join('')}
          </div>
          <div data-ws-param-row style="display:flex;flex-wrap:wrap;gap:12px;align-items:end;">
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.ratio}</span>
              <select data-ws-param="ratio" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${RATIOS.map((r) => `<option value="${r}">${r}</option>`).join('')}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.clarity}</span>
              <select data-ws-param="clarity" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${CLARITY.map((c) => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.count}</span>
              <select data-ws-param="count" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${COUNTS.map((n) => `<option value="${n}">${n}</option>`).join('')}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.detail}</span>
              <input data-ws-param="detail" value="自动" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;width:6rem;" />
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="未配置渠道" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;width:10rem;" />
            </label>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <button type="button" data-ws-cta style="align-self:flex-start;padding:8px 16px;border:0;border-radius:8px;background:#3b82f6;color:#fff;cursor:pointer;font:inherit;">${CTA}</button>
            <button type="button" data-ws-empty="inspiration" style="padding:6px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.inspiration}</button>
            <button type="button" data-ws-empty="shuffle" style="padding:6px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <p data-ws-status style="opacity:.7;font-size:12px;min-height:1.2em;"></p>
          <p style="opacity:.5;font-size:11px;">host-proxy generate 已接线（media.env）；不选 Skill 也可点「${CTA}」；评分不锁出图；三联封面≠电影海报</p>
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
      setStatus('已清除负面词')
    })
    host.querySelectorAll('[data-ws-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mode = btn.getAttribute('data-ws-mode') || MODE_TABS[0]
        host.querySelectorAll('[data-ws-mode]').forEach((b) => {
          b.style.background = b === btn ? '#333' : 'transparent'
        })
      })
    })
    host.querySelectorAll('[data-ws-skill]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-ws-skill')
        // optional — toggle; never required for CTA
        state.skillId = state.skillId === id ? null : id
        // aspect hint only; user can still change ratio
        if (state.skillId === '三联封面') state.ratio = '3:4'
        if (state.skillId === '电影海报') state.ratio = '9:16'
        if (state.skillId === '电影三联') state.ratio = '21:9'
        syncFields()
        setStatus(state.skillId ? `已选「${state.skillId}」（可选；出图仍不强制）` : '已取消 Skill')
      })
    })
    host.querySelector('[data-ws-param="ratio"]')?.addEventListener('change', (e) => {
      const t = /** @type {HTMLSelectElement} */ (e.target)
      state.ratio = t.value
    })
    host.querySelector('[data-ws-param="clarity"]')?.addEventListener('change', (e) => {
      const t = /** @type {HTMLSelectElement} */ (e.target)
      state.clarity = t.value
    })
    host.querySelector('[data-ws-param="count"]')?.addEventListener('change', (e) => {
      const t = /** @type {HTMLSelectElement} */ (e.target)
      state.count = Number(t.value) || 1
    })
    host.querySelector('[data-ws-param="detail"]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLInputElement} */ (e.target)
      state.detail = t.value
    })
    host.querySelector('[data-ws-param="model"]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLInputElement} */ (e.target)
      state.modelId = t.value
    })
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener('click', () => {
      // only rewrite when user clicks — stub marks intent, no auto rewrite
      setStatus(`已请求「${PROMPT_ACTIONS.enhance}」（stub；未改写原文）`)
    })
    host.querySelector('[data-ws-action="templates"]')?.addEventListener('click', () => {
      setStatus(`「${PROMPT_ACTIONS.templates}」未接线`)
    })
    host.querySelector('[data-ws-action="skill"]')?.addEventListener('click', () => {
      setStatus(`「${PROMPT_ACTIONS.skill}」— 下方六入口可选；三联封面≠电影海报`)
    })
    host.querySelector('[data-ws-empty="inspiration"]')?.addEventListener('click', () => {
      state.prompt = '一只在窗台晒太阳的猫'
      syncFields()
      setStatus(`已填入${EMPTY.inspiration}`)
    })
    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener('click', () => {
      const samples = ['雨夜霓虹街道', '山间云海日出', '静物咖啡杯特写', '未来都市天际线']
      state.prompt = samples[Math.floor(Math.random() * samples.length)]
      syncFields()
      setStatus(`已${EMPTY.shuffle}`)
    })
    // 【必须】CTA never score-locked; never set disabled; no skill required
    const cta = host.querySelector('[data-ws-cta]')
    if (cta instanceof HTMLButtonElement) {
      cta.disabled = false
      cta.removeAttribute('disabled')
    }
    cta?.addEventListener('click', () => {
      const skillNote = state.skillId ? `skill=${state.skillId}` : '无 Skill'
      setStatus(
        `已触发「${CTA}」（${skillNote}；提示词 ${state.prompt.length} 字；负面词 ${state.negativePrompt.length} 字；${state.ratio}/${state.clarity}/×${state.count}）— 已发 dsh-ws-generate（host-proxy 侧 generate 已接线）`,
      )
      host.dispatchEvent(
        new CustomEvent('dsh-ws-generate', {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            ratio: state.ratio,
            clarity: state.clarity,
            count: state.count,
            detail: state.detail,
            modelId: state.modelId,
            // selfCheck never gates
            selfCheck: state.selfCheck,
          },
        }),
      )
    })

    document.body.appendChild(host)
    paintChat()
    syncFields()
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
