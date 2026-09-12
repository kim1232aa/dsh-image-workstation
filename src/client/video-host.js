/**
 * 视频生成 page shell — independent of 普通生图 dock.
 * VisioWork-shaped density only; original CSS via --dsw-* host tokens.
 * Labels exact from ../ui/labels.js. CTA → dsh-ws-video-generate → host videoGenerate.
 */
import {
  COLUMNS,
  RATIOS,
  CLARITY,
  HISTORY_ACTIONS,
  VIDEO_MODE_TABS,
  VIDEO_FRAMES,
  VIDEO_PARAMS,
  VIDEO_CTA,
  VIDEO_RESULT_ACTIONS,
  PROMPT_FIELDS,
} from '../ui/labels.js'

export const VIDEO_PAGE = '视频生成'
export const IMAGE_PAGE = '普通生图'

/** Channel-tier duration chips (UI options; not label strings) */
export const VIDEO_DURATIONS = Object.freeze(['5秒', '10秒'])

const MODE_TXT = VIDEO_MODE_TABS[0]
const MODE_IMG = VIDEO_MODE_TABS[1]

const STAGE_LABEL = '生成结果'
const STAGE_EMPTY_HINT = '生成后显示在这里'
const HISTORY_EMPTY_HINT = '暂无记录'
const FRAME_HINT = '上传 / 拖拽 / 粘贴'

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Shared token map — same semantic --dsw-* keys as studio-host.
 * @typedef {Record<string, string>} TokenMap
 */

/**
 * @param {TokenMap} T
 * @param {{ mode: (on: boolean) => string, chip: (on: boolean) => string, field: string, select: string, pill: (opts?: object) => string, cta: string, paramLabel: string, dockBlock: string, histAction: string }} css
 */
export function videoHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="video"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="视频生成"] [data-ws-page="video"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="视频生成"] [data-ws-page="image"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-cols] {
  display:flex; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host] [data-ws-frame-slots] {
  display:none; flex-direction:column; gap:6px;
}
[data-dsh-ws-studio-host] [data-ws-frame-slots][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-frame-row] {
  display:grid; grid-template-columns:1fr 1fr; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-frame-slot] {
  display:flex; flex-direction:column; gap:6px; padding:8px 10px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-frame-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;
  padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-frame-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-frame-preview] {
  display:none; position:relative; width:100%; aspect-ratio:16/9; max-height:120px;
  border-radius:8px; overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-frame-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-frame-preview] img {
  width:100%; height:100%; object-fit:cover; display:block;
}
[data-dsh-ws-studio-host] [data-ws-frame-preview] button {
  position:absolute; top:4px; right:4px; width:20px; height:20px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:12px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-video-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-video-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-video-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
/* Idle: stage absorbs leftover (quiet muted fill). Dock+CTA pack as one bottom
   block — never margin-top:auto on CTA (that IS the white void between params
   and 「开始生成」). Override studio-host [data-ws-cta-footer] margin-top:auto. */
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage] {
  flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:4px;
  margin:0; padding:8px 12px; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform);
  border-bottom:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-busy] {
  flex:1.2 1 0; min-height:96px; padding:8px 12px; gap:6px;
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-has-results] {
  flex:2.6 1 0; min-height:160px; padding:8px 12px; gap:8px;
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-dock],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-dock] {
  flex:0 0 auto; display:flex; flex-direction:column; gap:4px;
  padding:8px 12px 0; background: var(--dsw-alias-bg-base);
  border-top:0; max-height:none; overflow:auto; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"]:has([data-ws-video-stage][data-has-results]) [data-ws-dock],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"]:has([data-ws-video-stage][data-busy]) [data-ws-dock] {
  flex:0 0 auto; max-height:40%;
  border-top:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-cta-footer],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-cta-footer] {
  flex:none; margin-top:0; position:sticky; bottom:0; z-index:2;
  padding:6px 12px 10px; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid var(--dsw-alias-border-l2);
}
`
}

/**
 * Default video UI state (shell only).
 */
export function defaultVideoState() {
  return {
    mode: MODE_TXT,
    prompt: '',
    duration: VIDEO_DURATIONS[0],
    clarity: CLARITY[0],
    ratio: RATIOS[5] || RATIOS[0], // prefer 16:9 when present
    modelId: '',
    firstFrame: null,
    lastFrame: null,
    task: null,
  }
}

/**
 * Build video page markup (history + video studio). No forced right column.
 * @param {TokenMap} T
 * @param {object} css
 * @param {{ history?: number }} paneWidths
 * @param {ReturnType<typeof defaultVideoState>} state
 */
export function buildVideoPageHtml(T, css, paneWidths, state) {
  const histW = paneWidths?.history || 264
  const chipButtonsHtml = (param, values, selected) =>
    values
      .map((v) => {
        const val = String(v)
        const on = val === String(selected)
        return `<button type="button" data-ws-video-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? 'true' : 'false'}" style="${css.chip(on)}">${escapeHtml(val)}</button>`
      })
      .join('')

  const resultActionBtns = VIDEO_RESULT_ACTIONS.filter((a) => a !== '取消' && a !== '重试')
    .map((a) => `<button type="button" data-ws-video-result-action="${a}">${a}</button>`)
    .join('')

  return `
<div data-ws-page="video" data-ws-video-cols role="region" aria-label="${VIDEO_PAGE}">
  <aside data-ws-col="history" data-ws-video-history style="width:${histW}px;flex-shrink:0;border-right:1px solid ${T.border2};padding:8px;overflow:auto;background:${T.sidebar};display:flex;flex-direction:column;gap:6px;">
    <div style="font-size:13px;font-weight:600;color:${T.fg};">${COLUMNS.history}</div>
    <input type="search" placeholder="搜索历史" aria-label="搜索历史" style="width:100%;${css.field};font-size:12px;" />
    <div style="display:flex;gap:6px;">
      <select aria-label="全部模型" style="flex:1;${css.select}"><option>全部模型</option></select>
      <select aria-label="全部比例" style="flex:1;${css.select}"><option>全部比例</option></select>
    </div>
    <div data-ws-video-history-list style="display:flex;flex-direction:column;gap:6px;flex:1;min-height:0;">
      <div data-ws-history-empty style="padding:8px 4px;font-size:12px;color:${T.fg3};">${HISTORY_EMPTY_HINT}</div>
    </div>
    <button type="button" data-ws-video-history-clear style="align-self:flex-start;${css.pill({ color: T.fg3 })}">${HISTORY_ACTIONS.clear}</button>
  </aside>
  <div data-ws-pane-drag="video-history" title="拖拽调整历史栏宽度"></div>

  <section data-ws-col="studio" data-ws-video-studio style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:${T.layer2};">
    <div data-ws-video-stage aria-label="视频生成台">
      <div data-ws-stage-head>
        <strong>${STAGE_LABEL}</strong>
        <span data-ws-video-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
      </div>
      <div data-ws-progress data-ws-video-progress>
        <div data-ws-progress-meta>
          <span data-ws-progress-label>等待宿主进度</span>
          <span data-ws-progress-elapsed>耗时 0s</span>
          <span data-ws-progress-phase style="color:${T.fg3};"></span>
          <span style="flex:1"></span>
          <button type="button" data-ws-video-cancel style="${css.pill()}">${VIDEO_RESULT_ACTIONS.includes('取消') ? '取消' : '取消'}</button>
        </div>
        <div data-ws-progress-bar><i></i></div>
      </div>
      <div data-ws-fail data-ws-video-fail>
        <div data-ws-fail-reason>原因：视频通道未接</div>
        <button type="button" data-ws-video-retry style="align-self:flex-start;${css.pill({ pad: '4px 12px', size: '12px', fill: T.active, color: T.fg })}">重试</button>
      </div>
      <div data-ws-video-results hidden style="display:none;"></div>
      <div data-ws-result-actions data-ws-video-result-actions>
        ${resultActionBtns}
      </div>
    </div>

    <div data-ws-dock data-ws-video-dock>
      <div style="display:flex;gap:6px;align-items:center;" role="tablist" aria-label="视频模式">
        ${VIDEO_MODE_TABS.map(
          (m, i) =>
            `<button type="button" data-ws-video-mode="${m}" aria-pressed="${i === 0 ? 'true' : 'false'}" style="${css.mode(i === 0)}">${m}</button>`,
        ).join('')}
      </div>

      <div data-ws-frame-slots aria-label="帧图">
        <div data-ws-frame-row>
          <div data-ws-frame-slot data-frame="first">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="${css.paramLabel}">${VIDEO_FRAMES.first}</span>
              <span data-ws-frame-hint style="font-size:11px;color:${T.fg3};">${FRAME_HINT}</span>
              <span style="flex:1"></span>
              <button type="button" data-ws-frame-upload="first" style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
              <input type="file" data-ws-frame-file="first" accept="image/*" hidden />
            </div>
            <div data-ws-frame-drop="first" tabindex="0">点击、拖入或 Ctrl+V 粘贴</div>
            <div data-ws-frame-preview data-frame="first"><img alt="${VIDEO_FRAMES.first}" /><button type="button" data-ws-frame-clear="first" aria-label="移除">×</button></div>
          </div>
          <div data-ws-frame-slot data-frame="last">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="${css.paramLabel}">${VIDEO_FRAMES.last}</span>
              <span data-ws-frame-hint style="font-size:11px;color:${T.fg3};">可选</span>
              <span style="flex:1"></span>
              <button type="button" data-ws-frame-upload="last" style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
              <input type="file" data-ws-frame-file="last" accept="image/*" hidden />
            </div>
            <div data-ws-frame-drop="last" tabindex="0">点击、拖入或 Ctrl+V 粘贴</div>
            <div data-ws-frame-preview data-frame="last"><img alt="${VIDEO_FRAMES.last}" /><button type="button" data-ws-frame-clear="last" aria-label="移除">×</button></div>
          </div>
        </div>
      </div>

      <div style="${css.dockBlock}">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
          </div>
          <textarea data-ws-video-prompt rows="2" placeholder="描述你想生成的视频" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
        </div>
      </div>

      <div data-ws-param-row data-ws-video-params>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${VIDEO_PARAMS.duration}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.duration}">
            ${chipButtonsHtml('duration', VIDEO_DURATIONS, state.duration)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${VIDEO_PARAMS.clarity}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.clarity}">
            ${chipButtonsHtml('clarity', CLARITY, state.clarity)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${VIDEO_PARAMS.ratio}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.ratio}">
            ${chipButtonsHtml('ratio', RATIOS, state.ratio)}
          </div>
        </div>
      </div>

      <div data-ws-model-row>
        <span style="${css.paramLabel}">${VIDEO_PARAMS.model}</span>
        <input data-ws-video-param="model" placeholder="选择模型" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;flex:0 1 10rem;min-width:5rem;width:10rem;" />
      </div>
    </div>

    <div data-ws-cta-footer data-ws-video-cta-footer>
      <button type="button" data-ws-video-cta style="${css.cta}">${VIDEO_CTA}</button>
      <p data-ws-video-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
    </div>
  </section>
</div>
`
}

/**
 * Mount video page into host (after image cols). Wire mode/params/frames/CTA → RPC event.
 * @param {HTMLElement} host
 * @param {{ T: TokenMap, css: object, paneWidths: { history: number }, getStatusEl?: () => Element | null }} opts
 * @returns {{ state: ReturnType<typeof defaultVideoState>, setPage: (tab: string) => void, dispose: () => void }}
 */
export function mountVideoPage(host, opts) {
  const { T, css, paneWidths } = opts
  const state = defaultVideoState()

  // Ensure image cols marked as image page
  const imageCols = host.querySelector('[data-ws-cols]')
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute('data-ws-page')) {
    imageCols.setAttribute('data-ws-page', 'image')
  }

  // Inject video styles once
  let styleEl = host.querySelector('style[data-ws-video-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-video-styles', '')
    styleEl.textContent = videoHostStyles()
    host.appendChild(styleEl)
  }

  // Remove prior video page if re-ensure
  host.querySelector('[data-ws-page="video"]')?.remove()

  const wrap = document.createElement('div')
  wrap.innerHTML = buildVideoPageHtml(T, css, paneWidths, state).trim()
  const page = wrap.firstElementChild
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {}, dispose: () => {} }
  }

  // Insert after image cols (or append)
  if (imageCols?.parentElement) {
    imageCols.parentElement.appendChild(page)
  } else {
    host.appendChild(page)
  }

  const setStatus = (text) => {
    const el = page.querySelector('[data-ws-video-status]')
    if (el) el.textContent = text
  }

  const paintMode = () => {
    page.querySelectorAll('[data-ws-video-mode]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-video-mode') === state.mode
      if (btn instanceof HTMLElement) {
        btn.style.cssText = css.mode(on)
        btn.setAttribute('aria-pressed', on ? 'true' : 'false')
      }
    })
    const slots = page.querySelector('[data-ws-frame-slots]')
    if (slots instanceof HTMLElement) {
      if (state.mode === MODE_IMG) slots.setAttribute('data-visible', '')
      else slots.removeAttribute('data-visible')
    }
  }

  const paintChips = () => {
    const sync = (param, value) => {
      page.querySelectorAll(`[data-ws-video-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute('data-value') === String(value)
        btn.setAttribute('aria-current', on ? 'true' : 'false')
        if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on)
      })
    }
    sync('duration', state.duration)
    sync('clarity', state.clarity)
    sync('ratio', state.ratio)
    const model = page.querySelector('[data-ws-video-param="model"]')
    if (model instanceof HTMLInputElement) model.value = state.modelId || ''
    paintMode()
  }

  const paintFrame = (which) => {
    const ref = which === 'first' ? state.firstFrame : state.lastFrame
    const preview = page.querySelector(`[data-ws-frame-preview][data-frame="${which}"]`)
    const drop = page.querySelector(`[data-ws-frame-drop="${which}"]`)
    if (!(preview instanceof HTMLElement)) return
    const img = preview.querySelector('img')
    if (ref?.url && img instanceof HTMLImageElement) {
      img.src = ref.url
      preview.setAttribute('data-filled', '')
      if (drop instanceof HTMLElement) drop.style.display = 'none'
    } else {
      preview.removeAttribute('data-filled')
      if (img instanceof HTMLImageElement) img.removeAttribute('src')
      if (drop instanceof HTMLElement) drop.style.display = ''
    }
  }

  const setFrameFromFile = (which, file) => {
    if (!(file instanceof File) || !file.type.startsWith('image/')) return
    // Stub only — object URL preview; no compress / protocol dig
    const url = URL.createObjectURL(file)
    const prev = which === 'first' ? state.firstFrame : state.lastFrame
    if (prev?.url?.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(prev.url)
      } catch (_) {}
    }
    const entry = { id: `${which}-${Date.now()}`, url, name: file.name }
    if (which === 'first') state.firstFrame = entry
    else state.lastFrame = entry
    paintFrame(which)
    setStatus(`已添加${which === 'first' ? VIDEO_FRAMES.first : VIDEO_FRAMES.last}`)
  }

  // Mode tabs
  page.querySelectorAll('[data-ws-video-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.mode = btn.getAttribute('data-ws-video-mode') || MODE_TXT
      paintMode()
      setStatus(state.mode === MODE_IMG ? '已切换到图生视频' : '已切换到文生视频')
    })
  })

  // Prompt
  page.querySelector('[data-ws-video-prompt]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLTextAreaElement} */ (e.target)
    state.prompt = t.value
  })

  // Param chips
  page.querySelector('[data-ws-video-params]')?.addEventListener('click', (e) => {
    const t =
      e.target instanceof Element ? e.target.closest('[data-ws-video-param][data-value]') : null
    if (!t) return
    const param = t.getAttribute('data-ws-video-param')
    const value = t.getAttribute('data-value')
    if (!param || value == null) return
    if (param === 'duration') state.duration = value
    else if (param === 'clarity') state.clarity = value
    else if (param === 'ratio') state.ratio = value
    paintChips()
  })

  page.querySelector('[data-ws-video-param="model"]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLInputElement} */ (e.target)
    state.modelId = t.value
  })

  // Frame upload / drag stubs
  ;['first', 'last'].forEach((which) => {
    const fileInput = page.querySelector(`[data-ws-frame-file="${which}"]`)
    const uploadBtn = page.querySelector(`[data-ws-frame-upload="${which}"]`)
    const drop = page.querySelector(`[data-ws-frame-drop="${which}"]`)
    uploadBtn?.addEventListener('click', () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click()
    })
    fileInput?.addEventListener('change', (e) => {
      const input = /** @type {HTMLInputElement} */ (e.target)
      const f = input.files?.[0]
      if (f) setFrameFromFile(which, f)
      input.value = ''
    })
    drop?.addEventListener('click', () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click()
    })
    ;['dragenter', 'dragover'].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (drop instanceof HTMLElement) drop.setAttribute('data-dragover', '')
      })
    })
    ;['dragleave', 'drop'].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (drop instanceof HTMLElement) drop.removeAttribute('data-dragover')
      })
    })
    drop?.addEventListener('drop', (e) => {
      const f = /** @type {DragEvent} */ (e).dataTransfer?.files?.[0]
      if (f) setFrameFromFile(which, f)
    })
    page.querySelector(`[data-ws-frame-clear="${which}"]`)?.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const prev = which === 'first' ? state.firstFrame : state.lastFrame
      if (prev?.url?.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(prev.url)
        } catch (_) {}
      }
      if (which === 'first') state.firstFrame = null
      else state.lastFrame = null
      paintFrame(which)
      setStatus('已移除帧图')
    })
  })

  // Paste → first frame when 图生视频
  page.addEventListener('paste', (e) => {
    if (state.mode !== MODE_IMG) return
    const items = Array.from(e.clipboardData?.items || [])
    for (const it of items) {
      if (it.type.startsWith('image/')) {
        const f = it.getAsFile()
        if (f) {
          setFrameFromFile('first', f)
          e.preventDefault()
          break
        }
      }
    }
  })

  // History clear (local empty only)
  page.querySelector('[data-ws-video-history-clear]')?.addEventListener('click', () => {
    const list = page.querySelector('[data-ws-video-history-list]')
    if (list) {
      list.innerHTML = `<div data-ws-history-empty style="padding:8px 4px;font-size:12px;color:${T.fg3};">${HISTORY_EMPTY_HINT}</div>`
    }
    setStatus('已清空历史')
  })

  // CTA → client.js → /dsh-ws videoGenerate (never fake success)
  const cta = page.querySelector('[data-ws-video-cta]')
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false
    cta.removeAttribute('disabled')
  }

  const clearFail = () => {
    const fail = page.querySelector('[data-ws-video-fail]')
    if (fail) fail.removeAttribute('data-visible')
  }

  const showBusy = () => {
    const stage = page.querySelector('[data-ws-video-stage]')
    const prog = page.querySelector('[data-ws-video-progress]')
    const hint = page.querySelector('[data-ws-video-stage-empty-hint]')
    const results = page.querySelector('[data-ws-video-results]')
    const actions = page.querySelector('[data-ws-video-result-actions]')
    clearFail()
    if (results instanceof HTMLElement) {
      results.innerHTML = ''
      results.hidden = true
      results.style.display = 'none'
    }
    if (actions) actions.removeAttribute('data-visible')
    if (hint instanceof HTMLElement) hint.hidden = true
    if (stage instanceof HTMLElement) {
      stage.setAttribute('data-busy', '')
      stage.removeAttribute('data-has-results')
    }
    if (prog) {
      prog.setAttribute('data-visible', '')
      const label = prog.querySelector('[data-ws-progress-label]')
      if (label) label.textContent = '等待宿主进度'
      const elapsed = prog.querySelector('[data-ws-progress-elapsed]')
      if (elapsed) elapsed.textContent = '耗时 0s'
      const phase = prog.querySelector('[data-ws-progress-phase]')
      if (phase) phase.textContent = ''
      const barWrap = prog.querySelector('[data-ws-progress-bar]')
      if (barWrap) barWrap.setAttribute('data-indeterminate', '')
    }
    setStatus('等待宿主进度…')
  }

  const showStubFailure = (message) => {
    const msg = message || 'VIDEO_NOT_CONFIGURED'
    const stage = page.querySelector('[data-ws-video-stage]')
    const prog = page.querySelector('[data-ws-video-progress]')
    const fail = page.querySelector('[data-ws-video-fail]')
    const hint = page.querySelector('[data-ws-video-stage-empty-hint]')
    const results = page.querySelector('[data-ws-video-results]')
    const actions = page.querySelector('[data-ws-video-result-actions]')
    if (prog) prog.removeAttribute('data-visible')
    if (stage instanceof HTMLElement) {
      stage.removeAttribute('data-busy')
      stage.removeAttribute('data-has-results')
    }
    if (results instanceof HTMLElement) {
      results.innerHTML = ''
      results.hidden = true
      results.style.display = 'none'
    }
    if (actions) actions.removeAttribute('data-visible')
    if (hint instanceof HTMLElement) hint.hidden = true
    if (fail instanceof HTMLElement) {
      fail.setAttribute('data-visible', '')
      const reason = fail.querySelector('[data-ws-fail-reason]')
      if (reason) reason.textContent = `原因：${msg}`
    }
    setStatus(msg)
  }

  /**
   * @param {{ phase?: string, error?: string, results?: Array<{ url?: string, kind?: string }>, elapsedMs?: number, jobId?: string }} value
   */
  const paintVideoResult = (value) => {
    const phase = String(value?.phase || '')
    const err = value?.error != null ? String(value.error) : ''
    if (phase === 'failed' || phase === 'error') {
      showStubFailure(err || 'VIDEO_GENERATE_FAILED')
      return
    }
    if (phase === 'cancelled') {
      const prog = page.querySelector('[data-ws-video-progress]')
      const stage = page.querySelector('[data-ws-video-stage]')
      if (prog) prog.removeAttribute('data-visible')
      if (stage) stage.removeAttribute('data-busy')
      clearFail()
      setStatus('已取消')
      return
    }
    const list = Array.isArray(value?.results) ? value.results : []
    const urls = list.map((r) => r?.url).filter((u) => typeof u === 'string' && u)
    if (!urls.length) {
      showStubFailure(err || 'VIDEO_GENERATE_FAILED')
      return
    }
    const stage = page.querySelector('[data-ws-video-stage]')
    const prog = page.querySelector('[data-ws-video-progress]')
    const fail = page.querySelector('[data-ws-video-fail]')
    const hint = page.querySelector('[data-ws-video-stage-empty-hint]')
    const results = page.querySelector('[data-ws-video-results]')
    const actions = page.querySelector('[data-ws-video-result-actions]')
    if (prog) prog.removeAttribute('data-visible')
    if (fail) fail.removeAttribute('data-visible')
    if (hint instanceof HTMLElement) hint.hidden = true
    if (stage instanceof HTMLElement) {
      stage.removeAttribute('data-busy')
      stage.setAttribute('data-has-results', '')
    }
    if (results instanceof HTMLElement) {
      results.hidden = false
      results.style.display = 'grid'
      results.style.gridTemplateColumns = 'repeat(auto-fill, minmax(160px, 1fr))'
      results.style.gap = '8px'
      results.innerHTML = urls
        .map(
          (url) =>
            `<div data-ws-video-result-card style="border-radius:8px;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);">` +
            `<video src="${escapeHtml(url)}" controls playsinline style="width:100%;display:block;max-height:220px;background:#000;"></video>` +
            `</div>`,
        )
        .join('')
    }
    if (actions) actions.setAttribute('data-visible', '')
    const elapsed = value?.elapsedMs != null ? Math.round(Number(value.elapsedMs) / 1000) : null
    setStatus(elapsed != null ? `视频生成完成 · ${elapsed}s` : '视频生成完成')
  }

  /**
   * @param {{ phase?: string, elapsedMs?: number, status?: string }} value
   */
  const setVideoProgress = (value) => {
    const prog = page.querySelector('[data-ws-video-progress]')
    const stage = page.querySelector('[data-ws-video-stage]')
    if (!(prog instanceof HTMLElement)) return
    prog.setAttribute('data-visible', '')
    if (stage instanceof HTMLElement) stage.setAttribute('data-busy', '')
    clearFail()
    const label = prog.querySelector('[data-ws-progress-label]')
    if (label) label.textContent = value?.status === 'running' ? '生成中…' : '等待宿主进度'
    const elapsed = prog.querySelector('[data-ws-progress-elapsed]')
    if (elapsed && value?.elapsedMs != null) {
      elapsed.textContent = `耗时 ${Math.max(0, Math.round(Number(value.elapsedMs) / 1000))}s`
    }
    const phase = prog.querySelector('[data-ws-progress-phase]')
    if (phase && value?.phase) phase.textContent = String(value.phase)
  }

  cta?.addEventListener('click', () => {
    if (!String(state.prompt || '').trim()) {
      showStubFailure('请先输入提示词')
      return
    }
    if (state.mode === MODE_IMG && !state.firstFrame?.url) {
      showStubFailure('图生视频需要首帧图')
      return
    }
    showBusy()
    host.dispatchEvent(
      new CustomEvent('dsh-ws-video-generate', {
        bubbles: true,
        detail: {
          mode: state.mode,
          prompt: state.prompt,
          duration: state.duration,
          clarity: state.clarity,
          ratio: state.ratio,
          modelId: state.modelId,
          firstFrame: state.firstFrame,
          lastFrame: state.lastFrame,
        },
      }),
    )
  })

  page.querySelector('[data-ws-video-cancel]')?.addEventListener('click', () => {
    const prog = page.querySelector('[data-ws-video-progress]')
    const stage = page.querySelector('[data-ws-video-stage]')
    if (prog) prog.removeAttribute('data-visible')
    if (stage) stage.removeAttribute('data-busy')
    setStatus('已取消')
    host.dispatchEvent(
      new CustomEvent('dsh-ws-video-cancel', { bubbles: true, detail: { reason: 'user' } }),
    )
  })

  page.querySelector('[data-ws-video-retry]')?.addEventListener('click', () => {
    cta?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  page.querySelector('[data-ws-video-result-actions]')?.addEventListener('click', (e) => {
    const btn =
      e.target instanceof Element ? e.target.closest('[data-ws-video-result-action]') : null
    if (!btn) return
    const action = btn.getAttribute('data-ws-video-result-action') || ''
    setStatus(`「${action}」未接线`)
  })

  // Sync history width with image pane when dragging video-history
  page.querySelector('[data-ws-pane-drag="video-history"]')?.addEventListener('mousedown', (ev) => {
    ev.preventDefault()
    const handle = /** @type {HTMLElement} */ (ev.currentTarget)
    handle.setAttribute('data-active', '')
    const hist = page.querySelector('[data-ws-video-history]')
    const startX = /** @type {MouseEvent} */ (ev).clientX
    const startW = hist instanceof HTMLElement ? hist.getBoundingClientRect().width : 264
    const onMove = (e) => {
      const dx = e.clientX - startX
      const w = Math.max(180, Math.min(480, startW + dx))
      if (hist instanceof HTMLElement) hist.style.width = `${w}px`
    }
    const onUp = () => {
      handle.removeAttribute('data-active')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  })

  paintChips()
  paintFrame('first')
  paintFrame('last')

  const setPage = (tab) => {
    const name = String(tab || IMAGE_PAGE)
    host.setAttribute('data-ws-top-page', name)
    // aria on top tabs already handled by caller
  }

  // Default: image page
  setPage(IMAGE_PAGE)

  return {
    state,
    setPage,
    showStubFailure,
    showBusy,
    paintVideoResult,
    setVideoProgress,
    setStatus,
    dispose() {
      ;['first', 'last'].forEach((which) => {
        const ref = which === 'first' ? state.firstFrame : state.lastFrame
        if (ref?.url?.startsWith('blob:')) {
          try {
            URL.revokeObjectURL(ref.url)
          } catch (_) {}
        }
      })
      page.remove()
      styleEl?.remove()
    },
  }
}
