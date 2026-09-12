/**
 * 生图工作台 host — 三栏出图台（历史 | 出图台 | 灵感/对话）。
 * 借鉴形态，自写组件。Labels only from ../ui/labels.js.
 * CTA never disabled / never score-gated. No debug watermark.
 */
import {
  TOP_TABS,
  COLUMNS,
  CTA,
  COMPARE,
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
  HISTORY_ACTIONS,
} from '../ui/labels.js'
import { defaultStudioState } from '../ui/studio-stub.js'

export const STUDIO_HOST = '[data-dsh-ws-studio-host]'

/** Soft photo-noise fallback for broken real images only (not fake content) */
function inspireFallbackSvg(seedIdx = 0) {
  const palettes = [
    ['#141820', '#1a222e', '#2a3340'],
    ['#161a1c', '#1e2428', '#3a4048'],
    ['#121618', '#1a1e22', '#282c32'],
    ['#18141a', '#221c24', '#322830'],
    ['#141816', '#1a201c', '#2a322c'],
    ['#16141c', '#1c1824', '#2a2434'],
    ['#1a1612', '#242018', '#342c20'],
    ['#12161c', '#182028', '#243040'],
  ]
  const [c1, c2, c3] = palettes[seedIdx % palettes.length]
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0%" stop-color="${c1}"/><stop offset="55%" stop-color="${c2}"/><stop offset="100%" stop-color="${c3}"/>` +
    `</linearGradient>` +
    `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/>` +
    `<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .12"/></feComponentTransfer></filter>` +
    `</defs>` +
    `<rect width="300" height="300" fill="url(#g)"/>` +
    `<rect width="300" height="300" filter="url(#n)"/>` +
    `<rect x="0" y="180" width="300" height="120" fill="${c1}" opacity=".35"/>` +
    `</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** 细节档位（界面选项；非 labels 文案） */
const DETAIL_OPTS = Object.freeze(['自动', '标准', '高清'])

const HIST_THUMB = 88

const STAGE_LABEL = '生成结果'
const STAGE_EMPTY_HINT = '生成后显示在这里'
const INSPIRE_EMPTY_HINT = '暂无灵感'
const HISTORY_EMPTY_HINT = '暂无记录'

const DEFAULT_MODEL = 'gpt-image-2'

const ACCENT = '#5b8def'

const css = {
  mode: (on) =>
    `padding:4px 12px;border:1px solid ${on ? '#3a4558' : '#2a3140'};border-radius:999px;background:${on ? '#1c2333' : 'transparent'};color:${on ? '#fff' : '#9aa3b2'};cursor:pointer;font:inherit;font-size:12px;`,
  field:
    'padding:5px 8px;border-radius:7px;border:1px solid #2a3140;background:#10141c;color:inherit;font:inherit;',
  select:
    'padding:4px 8px;border-radius:6px;border:1px solid #2a3140;background:#10141c;color:#c5cad3;font:inherit;font-size:12px;min-height:28px;',
  chip: (on) =>
    `padding:4px 10px;border:1px solid ${on ? '#3a4558' : '#2a3140'};border-radius:999px;background:${on ? '#1c2333' : 'transparent'};color:${on ? '#fff' : '#9aa3b2'};cursor:pointer;font:inherit;font-size:12px;line-height:1.2;`,
  histAction:
    'padding:2px 8px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;',
  /** 出图台 dock 内区块 — 借鉴形态，自写组件 */
  dockBlock:
    'display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#12161f;border:1px solid #1f2430;border-radius:10px;flex:none;',
  paramLabel: 'font-size:11px;font-weight:600;color:#9aa3b2;white-space:nowrap;',
  /** 实心白主 CTA — 始终可点 */
  cta:
    `width:100%;min-height:40px;padding:9px 14px;border:0;border-radius:9px;background:#ffffff;color:#0b0d10;cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 1px 0 rgba(255,255,255,.2), 0 4px 14px rgba(0,0,0,.35);`,
}

const HOST_STYLES = `
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:8px; align-items:flex-start;
  padding:5px; border:1px solid #1a1f2a; border-radius:9px;
  background:#12161f; flex:none; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover { border-color:#2a3140; }
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] { border-color:${ACCENT}; }
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:8px; align-items:center;
  padding:5px; border:1px solid #1a1f2a; border-radius:9px;
  background:#12161f; opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:${HIST_THUMB}px; height:${HIST_THUMB}px; border-radius:7px; object-fit:cover; flex:none; background:#0b0d10;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-meta {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:3px;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] .ws-hist-line,
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-line {
  min-width:0; font-size:11px; line-height:1.35; color:#c5cad3;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-model {
  font-size:10.5px; color:#6b7280; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-actions {
  display:flex; gap:4px; flex-wrap:wrap; margin-top:2px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid #1f2430; border-radius:10px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color:${ACCENT}; transform:translateY(-2px);
  box-shadow:0 6px 18px rgba(0,0,0,.28);
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; background:#12161f;
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-direction:column; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-param-group] {
  display:flex; flex-direction:column; gap:4px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-chips] {
  display:flex; flex-wrap:wrap; gap:5px; align-items:center;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value] {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px;
  background:transparent; color:#9aa3b2; cursor:pointer; font:inherit; font-size:12px; line-height:1.2;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value][aria-current="true"] {
  background:#1c2333; color:#fff; border-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-model-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-model-row] [data-ws-param="model"] {
  flex:0 1 10rem; min-width:5rem; width:10rem;
}
[data-dsh-ws-studio-host] [data-ws-conn-status] {
  padding:0 10px; height:26px; border:1px solid #2a3140; border-radius:999px;
  background:#12161f; color:#9aa3b2; font:inherit; font-size:12px;
  display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage] {
  flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:8px;
  margin:0; padding:10px 12px; overflow:hidden;
  background:#0b0d10; border-bottom:1px solid #1a1f2a;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] {
  display:flex; align-items:baseline; gap:10px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] strong {
  font-size:13px; font-weight:650; color:#e8eaed;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint] {
  font-size:12px; color:#6b7280; font-weight:400;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-stage-samples] {
  display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:minmax(0,1.7fr) minmax(0,1fr);
  gap:8px; flex:1; min-height:0; align-content:stretch;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples] [data-ws-stage-tile]:first-child {
  grid-column:1 / -1;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples][hidden],
[data-dsh-ws-studio-host] [data-ws-results][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-results] {
  display:flex; flex-wrap:wrap; gap:10px; align-content:start; flex:1; min-height:0; overflow:auto;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] {
  position:relative; min-height:0; height:100%; border-radius:10px; overflow:hidden;
  border:1px solid #1f2430; background:#12161f; cursor:pointer; padding:0; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] .ws-stage-cap {
  position:absolute; inset:auto 0 0 0; z-index:1; padding:14px 8px 7px;
  background:linear-gradient(transparent, rgba(0,0,0,.72));
  color:#fff; font-size:11px; line-height:1.3; text-align:left;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color:#9aa3b2; font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary:hover {
  color:#c5cad3; border-bottom-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary [data-ws-neg-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) [data-ws-clear-negative] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { filter:brightness(1.06); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color:#6b7280; opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-dock] {
  flex:0 0 auto; display:flex; flex-direction:column; gap:6px;
  padding:8px 12px 0; background:#0b0d10; border-top:1px solid #1a1f2a;
  max-height:none; overflow:visible;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] {
  display:flex; align-items:center; gap:6px; flex-wrap:wrap; min-width:0; min-height:28px;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] > label {
  display:inline-flex; align-items:center; gap:5px; min-width:0; flex:none; margin:0;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] [data-ws-param="skill"] {
  flex:1 1 8rem; min-width:0; max-width:14rem;
}
[data-dsh-ws-studio-host] [data-ws-cta-footer] {
  flex:none; position:sticky; bottom:0; z-index:2;
  padding:6px 12px 10px; background:#0b0d10;
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid #1a1f2a;
}
[data-dsh-ws-studio-host] [data-ws-advanced] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-advanced] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color:#9aa3b2; font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary:hover {
  color:#c5cad3; border-bottom-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-adv-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-advanced][open] > summary [data-ws-adv-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-advanced][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-advanced]:not([open]) { margin:0; }
`

/**
 * Host sidebar column (whale / +新 / Workspace) — never mount studio under or over this.
 * @returns {HTMLElement | undefined}
 */
function resolveSidebarColumn() {
  const el =
    document.querySelector('[data-pane="sidebar"]') ||
    document.querySelector('[class*="sidebarCol"]')
  return el instanceof HTMLElement ? el : undefined
}

/**
 * Prefer host main content pane (sibling of sidebar) — never cover sidebar.
 * @returns {HTMLElement | undefined}
 */
function resolveMainContentPane() {
  const direct =
    document.querySelector('[data-pane="main"]') ||
    document.querySelector('[data-pane="content"]') ||
    document.querySelector('[class*="mainCol"]') ||
    document.querySelector('[class*="contentCol"]') ||
    document.querySelector('[class*="mainPane"]') ||
    document.querySelector('[class*="contentPane"]') ||
    document.querySelector('[class*="workspaceMain"]') ||
    document.querySelector('main')
  if (direct instanceof HTMLElement && !direct.closest('[data-pane="sidebar"],[class*="sidebarCol"]')) {
    return direct
  }

  const sidebar = resolveSidebarColumn()
  if (!(sidebar instanceof HTMLElement) || !sidebar.parentElement) return undefined

  const siblings = Array.from(sidebar.parentElement.children).filter((el) => el !== sidebar)
  const named = siblings.find(
    (el) =>
      el instanceof HTMLElement &&
      (el.getAttribute('data-pane') === 'main' ||
        el.getAttribute('data-pane') === 'content' ||
        /main|content|workspace|session|conversation/i.test(String(el.className || ''))),
  )
  if (named instanceof HTMLElement) return named
  // Largest non-sidebar sibling usually is the content column
  let best
  let bestArea = 0
  for (const el of siblings) {
    if (!(el instanceof HTMLElement)) continue
    const r = el.getBoundingClientRect()
    const area = Math.max(0, r.width) * Math.max(0, r.height)
    if (area >= bestArea) {
      bestArea = area
      best = el
    }
  }
  return best
}

/**
 * Ensure a content-column mount that sits beside the sidebar (never full-viewport overlay).
 * @returns {HTMLElement}
 */
function ensureContentMount() {
  const pane = resolveMainContentPane()
  if (pane) {
    try {
      const cs = window.getComputedStyle(pane)
      if (cs.position === 'static') pane.style.position = 'relative'
    } catch (_) {
      pane.style.position = 'relative'
    }
    return pane
  }

  const sidebar = resolveSidebarColumn()
  if (sidebar instanceof HTMLElement && sidebar.parentElement) {
    let wrap = sidebar.parentElement.querySelector('[data-dsh-ws-content-mount]')
    if (!(wrap instanceof HTMLElement)) {
      wrap = document.createElement('div')
      wrap.dataset.dshWsContentMount = ''
      wrap.style.cssText =
        'position:relative;flex:1 1 auto;min-width:0;min-height:0;align-self:stretch;overflow:hidden;'
      // Place after sidebar so we fill remaining column
      if (sidebar.nextSibling) sidebar.parentElement.insertBefore(wrap, sidebar.nextSibling)
      else sidebar.parentElement.appendChild(wrap)
    }
    return wrap
  }

  // Absolute last resort: measured right-of-sidebar fixed shell (live width, not guessed 56px)
  let shell = document.querySelector('[data-dsh-ws-content-mount="measured"]')
  if (!(shell instanceof HTMLElement)) {
    shell = document.createElement('div')
    shell.dataset.dshWsContentMount = 'measured'
    document.body.appendChild(shell)
  }
  const sb = resolveSidebarColumn()
  let left = 0
  if (sb) {
    try {
      left = Math.round(sb.getBoundingClientRect().right)
    } catch (_) {
      left = Math.round(sb.offsetWidth || 0)
    }
  }
  shell.style.cssText = `position:fixed;left:${left}px;top:0;right:0;bottom:0;z-index:39;pointer-events:none;`
  return shell
}

/**
 * Mount studio into main content column only (absolute fill). Re-parents if needed.
 * @param {HTMLElement} hostEl
 */
function mountStudioHostEl(hostEl) {
  const mount = ensureContentMount()
  if (hostEl.parentElement !== mount) mount.appendChild(hostEl)
  hostEl.style.pointerEvents = 'auto'
  // Fill mount only — never position:fixed with guessed inset over sidebar
  hostEl.style.position = 'absolute'
  hostEl.style.inset = '0'
  hostEl.style.left = '0'
  hostEl.style.right = '0'
  hostEl.style.top = '0'
  hostEl.style.bottom = '0'
  hostEl.style.width = 'auto'
  hostEl.style.height = 'auto'
}

/**
 * @returns {{ open: () => void, close: () => void, dispose: () => void, isOpen: () => boolean, setNegativePrompt: (text: string) => void, paintGenerateResult: (value: any) => void, setStatus: (text: string) => void, getHostEl: () => HTMLElement | undefined }}
 */
export function createStudioHost() {
  let host
  let open = false
  /** @type {ReturnType<typeof defaultStudioState> & { compareModels?: boolean }} */
  let state = defaultStudioState()
  /** @type {string | null} */
  let activeHistoryId = null
  /** @type {Map<string, { snapshot: Record<string, unknown>, value: any }>} */
  const historyStore = new Map()

  const paintChat = () => {
    const chat = host?.querySelector('[data-ws-col="chat"]')
    const wall = host?.querySelector('[data-ws-inspire-wall]')
    const toggle = host?.querySelector('[data-ws-chat-toggle]')
    if (!toggle) return
    if (state.chatCollapsed) {
      if (chat) chat.style.display = 'none'
      if (wall) wall.style.display = 'flex'
      toggle.textContent = CHROME.expandChat
    } else {
      if (chat) chat.style.display = 'flex'
      if (wall) wall.style.display = 'none'
      toggle.textContent = '收起对话'
    }
  }

  const paintChips = () => {
    if (!host) return
    const syncChipGroup = (param, value) => {
      const want = value == null ? '' : String(value)
      host.querySelectorAll(`[data-ws-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute('data-value') === want
        btn.setAttribute('aria-current', on ? 'true' : 'false')
        if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on)
      })
    }
    syncChipGroup('ratio', state.ratio)
    syncChipGroup('clarity', state.clarity)
    syncChipGroup('count', state.count)
    syncChipGroup('detail', state.detail)
    const skillSel = host.querySelector('[data-ws-param="skill"]')
    if (skillSel instanceof HTMLSelectElement) {
      skillSel.value = state.skillId == null ? '' : String(state.skillId)
      if (state.skillId) skillSel.setAttribute('data-ws-skill', state.skillId)
      else skillSel.removeAttribute('data-ws-skill')
    }
    host.querySelectorAll('[data-ws-mode]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-mode') === state.mode
      btn.style.cssText = css.mode(on)
      btn.setAttribute('aria-pressed', on ? 'true' : 'false')
    })
    const cmp = host.querySelector('[data-ws-compare]')
    if (cmp instanceof HTMLInputElement) cmp.checked = !!state.compareModels
  }

  const captureParamSnapshot = () => ({
    prompt: state.prompt,
    negativePrompt: state.negativePrompt,
    mode: state.mode,
    skillId: state.skillId,
    ratio: state.ratio,
    clarity: state.clarity,
    count: state.count,
    detail: state.detail,
    modelId: state.modelId,
    compareModels: !!state.compareModels,
  })

  const applyParamSnapshot = (snap) => {
    if (!snap || typeof snap !== 'object') return
    state.prompt = snap.prompt != null ? String(snap.prompt) : ''
    state.negativePrompt = snap.negativePrompt != null ? String(snap.negativePrompt) : ''
    state.mode = snap.mode || MODE_TABS[0]
    state.skillId = snap.skillId || null
    state.ratio = snap.ratio || RATIOS[0]
    state.clarity = snap.clarity || CLARITY[0]
    state.count = Number(snap.count) || COUNTS[0]
    state.detail = snap.detail || DETAIL_OPTS[0]
    state.modelId = snap.modelId != null ? String(snap.modelId) : ''
    state.compareModels = !!snap.compareModels
    syncFields()
  }

  const chipButtonsHtml = (param, values, selected) =>
    values
      .map((v) => {
        const val = String(v)
        const on = val === String(selected)
        return `<button type="button" data-ws-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? 'true' : 'false'}" style="${css.chip(on)}">${escapeHtml(val)}</button>`
      })
      .join('')

  const syncNegClearBtn = () => {
    const details = host?.querySelector('[data-ws-neg-details]')
    const btn = host?.querySelector('[data-ws-clear-negative]')
    if (!(btn instanceof HTMLElement)) return
    const open = details instanceof HTMLDetailsElement && details.open
    const hasText = !!(state.negativePrompt && String(state.negativePrompt).trim())
    btn.style.display = open && hasText ? '' : 'none'
  }

  const syncFields = () => {
    const promptEl = host?.querySelector('[data-ws-prompt]')
    const negEl = host?.querySelector('[data-ws-negative]')
    if (promptEl instanceof HTMLTextAreaElement) promptEl.value = state.prompt
    if (negEl instanceof HTMLTextAreaElement) negEl.value = state.negativePrompt
    const model = host?.querySelector('[data-ws-param="model"]')
    if (model instanceof HTMLInputElement || model instanceof HTMLSelectElement) {
      model.value = state.modelId || ''
    }
    syncNegClearBtn()
    paintChips()
  }

  const setStatus = (text) => {
    const status = host?.querySelector('[data-ws-status]')
    if (status) status.textContent = text
  }

  /** First paint / empty: empty stage + hint only (no fake sample tiles). */
  const paintStageIdle = () => {
    const samples = host?.querySelector('[data-ws-stage-samples]')
    const resultsEl = host?.querySelector('[data-ws-results]')
    const hint = host?.querySelector('[data-ws-stage-empty-hint]')
    if (resultsEl) {
      resultsEl.innerHTML = ''
      resultsEl.hidden = true
    }
    if (samples) {
      samples.innerHTML = ''
      samples.hidden = true
    }
    if (hint) {
      hint.hidden = false
      hint.textContent = STAGE_EMPTY_HINT
    }
  }

  const showResultStage = () => {
    const samples = host?.querySelector('[data-ws-stage-samples]')
    const resultsEl = host?.querySelector('[data-ws-results]')
    const hint = host?.querySelector('[data-ws-stage-empty-hint]')
    if (samples) {
      samples.innerHTML = ''
      samples.hidden = true
    }
    if (resultsEl) resultsEl.hidden = false
    if (hint) {
      hint.hidden = true
      hint.textContent = STAGE_EMPTY_HINT
    }
  }

  /** Inspire wall: quiet empty — no stock photos */
  const paintInspiration = () => {
    const grid = host?.querySelector('[data-ws-inspire-grid]')
    if (!grid) return
    grid.innerHTML = ''
    const empty = document.createElement('div')
    empty.dataset.wsInspireEmpty = ''
    empty.style.cssText =
      'grid-column:1/-1;padding:28px 10px;text-align:center;font-size:12px;color:#6b7280;line-height:1.5;'
    empty.textContent = INSPIRE_EMPTY_HINT
    grid.appendChild(empty)
  }

  /** True empty history only — no ghost placeholder rows */
  const paintHistoryEmpty = () => {
    const histEl = host?.querySelector('[data-ws-history-list]')
    if (!histEl) return
    if (histEl.querySelector('[data-ws-history-item]')) {
      histEl.querySelector('[data-ws-history-empty]')?.remove()
      return
    }
    if (histEl.querySelector('[data-ws-history-empty]')) return
    const empty = document.createElement('div')
    empty.dataset.wsHistoryEmpty = ''
    empty.style.cssText = 'padding:8px 4px;font-size:12px;color:#6b7280;'
    empty.textContent = HISTORY_EMPTY_HINT
    histEl.appendChild(empty)
  }

  /**
   * Paint generate RPC result into stage + history thumbs.
   * @param {{ jobId?: string, phase?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
   */
  const applyGenerateResult = (value) => {
    const results = Array.isArray(value?.results) ? value.results : []
    const resultsEl = host?.querySelector('[data-ws-results]')
    const histEl = host?.querySelector('[data-ws-history-list]')
    if (resultsEl) {
      resultsEl.innerHTML = ''
      if (!results.length) {
        paintStageIdle()
      } else {
        showResultStage()
        for (const r of results) {
          const src = pickDisplayUrl(r)
          const card = document.createElement('div')
          card.dataset.wsResultCard = ''
          card.style.cssText =
            'border:1px solid #2a3140;border-radius:10px;padding:4px;background:#10141c;max-width:min(48%,280px);overflow:hidden;'
          if (src) {
            const img = document.createElement('img')
            img.src = src
            img.alt = '生成结果'
            img.dataset.wsResult = ''
            img.style.cssText = 'display:block;width:100%;max-height:320px;border-radius:6px;object-fit:cover;'
            img.addEventListener('error', () => {
              if (img.dataset.failed) return
              img.dataset.failed = '1'
              img.src = inspireFallbackSvg(0)
            })
            card.appendChild(img)
          } else {
            const note = document.createElement('div')
            note.style.cssText = 'font-size:11px;opacity:.8;word-break:break-all;padding:4px;'
            note.textContent = r?.url || r?.localPath || '无可用预览'
            card.appendChild(note)
          }
          resultsEl.appendChild(card)
        }
      }
    }
    if (histEl && results.length) {
      histEl.querySelector('[data-ws-history-empty]')?.remove()
      const jobId = value?.jobId || `local-${Date.now()}`
      // Avoid duplicate seed rows for same demo job
      const existing = Array.from(histEl.querySelectorAll('[data-ws-history-item]')).find(
        (el) => el.getAttribute('data-ws-history-item') === jobId,
      )
      if (existing) {
        const prev = historyStore.get(jobId)
        historyStore.set(jobId, {
          snapshot: prev?.snapshot || captureParamSnapshot(),
          value,
        })
        markHistoryActive(jobId)
      } else {
        historyStore.set(jobId, { snapshot: captureParamSnapshot(), value })
        const item = document.createElement('div')
        item.dataset.wsHistoryItem = jobId
        const thumb = pickDisplayUrl(results[0])
        const snippet =
          (state.prompt || '').trim().slice(0, 18) || '生成结果'
        const line = `${snippet} · ${state.ratio || '1:1'}`
        const modelLine = state.modelId || DEFAULT_MODEL
        item.innerHTML =
          (thumb
            ? `<img src="${escapeHtml(thumb)}" alt="" width="${HIST_THUMB}" height="${HIST_THUMB}" />`
            : `<span style="width:${HIST_THUMB}px;height:${HIST_THUMB}px;border-radius:7px;background:#1a2030;flex:none;"></span>`) +
          `<div class="ws-hist-meta">` +
          `<div class="ws-hist-line" title="${escapeHtml(state.prompt || '生成结果')}">${escapeHtml(line)}</div>` +
          `<div class="ws-hist-model">${escapeHtml(modelLine)}</div>` +
          `<div class="ws-hist-actions">` +
          `<button type="button" data-ws-history-restore style="${css.histAction}">${HISTORY_ACTIONS.restore}</button>` +
          `<button type="button" data-ws-history-delete style="${css.histAction}">${HISTORY_ACTIONS.remove}</button>` +
          `</div></div>`
        const himg = item.querySelector('img')
        if (himg) {
          himg.addEventListener('error', () => {
            if (himg.dataset.failed) return
            himg.dataset.failed = '1'
            himg.src = inspireFallbackSvg(1)
          })
        }
        item.querySelector('[data-ws-history-restore]')?.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()
          const stored = historyStore.get(jobId)
          if (stored?.snapshot) applyParamSnapshot(stored.snapshot)
          markHistoryActive(jobId)
          if (stored?.value) applyGenerateResult(stored.value)
          setStatus('已恢复参数')
        })
        item.querySelector('[data-ws-history-delete]')?.addEventListener('click', (e) => {
          e.preventDefault()
          e.stopPropagation()
          historyStore.delete(jobId)
          item.remove()
          if (activeHistoryId === jobId) activeHistoryId = null
          paintHistoryEmpty()
          setStatus('已删除记录')
        })
        item.addEventListener('click', (e) => {
          if (e.target instanceof Element && e.target.closest('[data-ws-history-restore],[data-ws-history-delete]'))
            return
          markHistoryActive(jobId)
          const stored = historyStore.get(jobId)
          if (stored?.value) applyGenerateResult(stored.value)
          else applyGenerateResult(value)
          setStatus('已从历史载入结果')
        })
        histEl.insertBefore(item, histEl.firstChild)
        markHistoryActive(jobId)
      }
    }
    setStatus(
      results.length
        ? `生成完成 ×${results.length}${value?.jobId ? ` · job ${String(value.jobId).slice(0, 8)}` : ''}`
        : `生成完成但无图${value?.phase ? ` (${value.phase})` : ''}`,
    )
  }


  const markHistoryActive = (id) => {
    activeHistoryId = id
    host?.querySelectorAll('[data-ws-history-item]').forEach((el) => {
      if (el.getAttribute('data-ws-history-item') === id) el.setAttribute('data-active', '')
      else el.removeAttribute('data-active')
    })
  }

  const ensure = () => {
    if (host) return host
    state = defaultStudioState()
    state.compareModels = false
    // 三栏宽度：历史 ~264（88px 缩略）/ 对话·灵感 ~318 — 借鉴形态，自写组件
    state.paneWidths = { ...state.paneWidths, history: 264, chat: 318 }
    host = document.createElement('div')
    host.dataset.dshWsStudioHost = ''
    host.setAttribute('role', 'main')
    host.setAttribute('aria-label', '生图')
    // Fill the host *main content pane* only — never fixed left-inset over sidebar
    host.style.cssText =
      'display:none;position:absolute;inset:0;z-index:40;width:auto;height:auto;background:#0b0d10;color:#e8eaed;flex-direction:column;font:13px/1.4 system-ui,sans-serif;overflow:hidden;'

    const styleEl = document.createElement('style')
    styleEl.textContent = HOST_STYLES
    host.appendChild(styleEl)

    const frame = document.createElement('div')
    frame.style.cssText = 'display:flex;flex-direction:column;flex:1;min-height:0;width:100%;'
    frame.innerHTML = `
      <header data-ws-top-bar style="display:flex;gap:4px;padding:7px 12px;border-bottom:1px solid #1a1f2a;align-items:center;background:#0b0d10;flex-shrink:0;">
        ${TOP_TABS.map(
          (t, i) =>
            `<button type="button" data-ws-top="${t}" style="padding:6px 11px;border:0;background:${i === 0 ? '#1c2333' : 'transparent'};color:${i === 0 ? '#fff' : '#9aa3b2'};cursor:pointer;border-radius:7px;font:inherit;font-size:12.5px;">${t}</button>`,
        ).join('')}
        <span style="flex:1"></span>
        <span data-ws-conn-status title="${CHROME.connected}">${CHROME.connected}</span>
        <button type="button" data-ws-chat-toggle style="padding:0 10px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;">关闭</button>
      </header>
      <div style="display:flex;flex:1;min-height:0;">
        <!-- LEFT: 历史记录 -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid #1a1f2a;padding:8px;overflow:auto;background:#0b0d10;display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;font-weight:600;color:#e8eaed;">${COLUMNS.history}</div>
          <input type="search" placeholder="搜索历史" aria-label="搜索历史" style="width:100%;${css.field};font-size:12px;" />
          <div style="display:flex;gap:6px;">
            <select aria-label="全部模型" style="flex:1;${css.select}">
              <option>全部模型</option>
            </select>
            <select aria-label="全部比例" style="flex:1;${css.select}">
              <option>全部比例</option>
            </select>
          </div>
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:6px;flex:1;min-height:0;"></div>
          <button type="button" data-ws-history-clear style="align-self:flex-start;padding:2px 8px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#6b7280;cursor:pointer;font:inherit;font-size:11.5px;">${HISTORY_ACTIONS.clear}</button>
        </aside>

        <!-- CENTER: 出图台 — stage (samples/results) + compact dock + sticky CTA -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:#0b0d10;border-left:0;border-right:0;">
          <div data-ws-stage aria-label="出图台">
            <div data-ws-stage-head>
              <strong>${STAGE_LABEL}</strong>
              <span data-ws-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
            </div>
            <div data-ws-stage-samples></div>
            <div data-ws-results hidden></div>
          </div>

          <div data-ws-dock>
            <div style="display:flex;gap:6px;align-items:center;" role="tablist">
              ${MODE_TABS.map(
                (m, i) =>
                  `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? 'true' : 'false'}" style="${css.mode(i === 0)}">${m}</button>`,
              ).join('')}
            </div>

            <div style="${css.dockBlock}">
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
                  <span style="flex:1"></span>
                  <button type="button" data-ws-action="templates" style="padding:0 10px;height:24px;border:1px solid ${ACCENT};border-radius:999px;background:rgba(91,141,239,.12);color:${ACCENT};cursor:pointer;font:inherit;font-size:11px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 9px;height:24px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#9aa3b2;cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="3" placeholder="写一句想法即可出图，不必选 Skill" style="resize:vertical;min-height:92px;padding:8px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;line-height:1.5;font-size:12.5px;"></textarea>
              </div>
              <details data-ws-neg-details>
                <summary>
                  <span data-ws-neg-chev aria-hidden="true">▸</span>
                  <span>${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:1px 7px;border:0;border-radius:4px;background:#1c2333;color:#c5cad3;cursor:pointer;font:inherit;font-size:10.5px;">${PROMPT_FIELDS.clearNegative}</button>
                </summary>
                <textarea data-ws-negative rows="1" placeholder="Skill 预填负面词会出现在这里，可改可清" style="width:100%;resize:vertical;padding:5px 8px;border-radius:7px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;font-size:12px;"></textarea>
              </details>
            </div>

            <div data-ws-param-row>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.ratio}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.ratio}">
                  ${chipButtonsHtml('ratio', RATIOS, state.ratio)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.clarity}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.clarity}">
                  ${chipButtonsHtml('clarity', CLARITY, state.clarity)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.count}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.count}">
                  ${chipButtonsHtml('count', COUNTS, state.count)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.detail}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.detail}">
                  ${chipButtonsHtml('detail', DETAIL_OPTS, state.detail)}
                </div>
              </div>
            </div>

            <div data-ws-model-row>
              <span style="${css.paramLabel}">${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="选择模型" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid #2a3140;background:#12161f;color:#c5cad3;font:inherit;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:#9aa3b2;cursor:pointer;user-select:none;margin:0;">
                <input type="checkbox" data-ws-compare style="accent-color:${ACCENT};" />
                ${COMPARE}
              </label>
            </div>

            <details data-ws-advanced>
              <summary>
                <span data-ws-adv-chev aria-hidden="true">▸</span>
                <span>高级</span>
              </summary>
              <div data-ws-skill-model-row>
                <label>
                  <span style="${css.paramLabel}">${PROMPT_ACTIONS.skill}</span>
                  <select data-ws-param="skill" aria-label="${PROMPT_ACTIONS.skill}" style="${css.select}">
                    <option value="">（不使用 Skill）</option>
                    ${SKILL_ENTRIES.map((s) => `<option value="${s}">${s}</option>`).join('')}
                  </select>
                </label>
              </div>
            </details>
          </div>

          <div data-ws-cta-footer>
            <button type="button" data-ws-cta style="${css.cta}">${CTA}</button>
            <p data-ws-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
          </div>
        </section>

        <!-- RIGHT: 灵感墙 -->
        <aside data-ws-inspire-wall style="width:318px;flex-shrink:0;border-left:1px solid #1a1f2a;padding:8px;display:flex;flex-direction:column;gap:8px;background:#0b0d10;overflow:auto;min-height:0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="font-size:13px;font-weight:650;">${EMPTY.inspiration}</strong>
            <span style="flex:1"></span>
            <button type="button" data-ws-empty="shuffle" style="padding:3px 9px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <div data-ws-inspire-grid style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;flex:1;"></div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1a1f2a;padding:8px;display:none;flex-direction:column;background:#0b0d10;">
          <strong style="font-size:13px;">${COLUMNS.chat}</strong>
          <p style="margin:8px 0 0;font-size:12px;color:#6b7280;">对话线程（可内联出图）</p>
        </aside>
      </div>
    `
    host.appendChild(frame)

    host.querySelector('[data-ws-close]')?.addEventListener('click', () => api.close())
    host.querySelector('[data-ws-chat-toggle]')?.addEventListener('click', () => {
      state.chatCollapsed = !state.chatCollapsed
      paintChat()
    })
    host.querySelectorAll('[data-ws-top]').forEach((btn) => {
      btn.addEventListener('click', () => {
        host.querySelectorAll('[data-ws-top]').forEach((b) => {
          const on = b === btn
          b.style.background = on ? '#1c2333' : 'transparent'
          b.style.color = on ? '#fff' : '#9aa3b2'
        })
      })
    })
    host.querySelector('[data-ws-prompt]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLTextAreaElement} */ (e.target)
      state.prompt = t.value
    })
    host.querySelector('[data-ws-negative]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLTextAreaElement} */ (e.target)
      state.negativePrompt = t.value
      syncNegClearBtn()
    })
    host.querySelector('[data-ws-neg-details]')?.addEventListener('toggle', () => {
      syncNegClearBtn()
    })
    host.querySelector('[data-ws-clear-negative]')?.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      state.negativePrompt = ''
      syncFields()
      setStatus('已清除负面词')
    })
    host.querySelectorAll('[data-ws-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.mode = btn.getAttribute('data-ws-mode') || MODE_TABS[0]
        paintChips()
      })
    })
    const applySkillSideEffects = (id) => {
      if (id === '三联封面') state.ratio = '3:4'
      if (id === '电影海报') state.ratio = '9:16'
      if (id === '电影三联') state.ratio = '21:9'
    }
    host.querySelector('[data-ws-param="skill"]')?.addEventListener('change', (e) => {
      const t = /** @type {HTMLSelectElement} */ (e.target)
      const id = t.value || null
      state.skillId = id
      if (id) applySkillSideEffects(id)
      syncFields()
      setStatus(id ? `已选「${id}」（可选；出图仍不强制）` : '已取消 Skill')
    })
    host.querySelector('[data-ws-param-row]')?.addEventListener('click', (e) => {
      const t = /** @type {HTMLElement | null} */ (
        e.target instanceof Element ? e.target.closest('[data-ws-param][data-value]') : null
      )
      if (!t) return
      const param = t.getAttribute('data-ws-param')
      const value = t.getAttribute('data-value')
      if (!param || value == null) return
      if (param === 'ratio') state.ratio = value || RATIOS[0]
      else if (param === 'clarity') state.clarity = value || CLARITY[0]
      else if (param === 'count') state.count = Number(value) || 1
      else if (param === 'detail') state.detail = value || DETAIL_OPTS[0]
      paintChips()
    })
    host.querySelector('[data-ws-history-clear]')?.addEventListener('click', () => {
      const histEl = host.querySelector('[data-ws-history-list]')
      if (histEl) histEl.innerHTML = ''
      historyStore.clear()
      activeHistoryId = null
      paintHistoryEmpty()
      paintStageIdle()
      setStatus('已清空历史')
    })
    host.querySelector('[data-ws-param="model"]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLInputElement} */ (e.target)
      state.modelId = t.value
    })
    host.querySelector('[data-ws-compare]')?.addEventListener('change', (e) => {
      const t = /** @type {HTMLInputElement} */ (e.target)
      state.compareModels = !!t.checked
    })
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener('click', () => {
      setStatus(`已请求「${PROMPT_ACTIONS.enhance}」`)
    })
    host.querySelector('[data-ws-action="templates"]')?.addEventListener('click', () => {
      setStatus(`「${PROMPT_ACTIONS.templates}」`)
    })

    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener('click', () => {
      // No stock wall — shuffle is a quiet no-op over empty state
      paintInspiration()
      setStatus(`已${EMPTY.shuffle}`)
    })

    // 【必须】CTA never score-locked; never set disabled; no skill required
    const cta = host.querySelector('[data-ws-cta]')
    if (cta instanceof HTMLButtonElement) {
      cta.disabled = false
      cta.removeAttribute('disabled')
    }
    cta?.addEventListener('click', () => {
      setStatus('出图中…')
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
            compareModels: !!state.compareModels,
            // selfCheck never gates
            selfCheck: state.selfCheck,
          },
        }),
      )
    })

    mountStudioHostEl(host)
    paintChat()
    syncFields()
    paintInspiration()
    paintStageIdle()
    paintHistoryEmpty()
    return host
  }

  const api = {
    open() {
      const el = ensure()
      // Re-resolve content pane on each open (sidebar width / layout may change)
      mountStudioHostEl(el)
      el.style.display = 'flex'
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
      const details = host?.querySelector('[data-ws-neg-details]')
      if (details instanceof HTMLDetailsElement && state.negativePrompt) details.open = true
    },
    /** @param {string} text */
    setStatus(text) {
      ensure()
      setStatus(text)
    },
    getHostEl() {
      return host
    },
    /**
     * Paint generate RPC result into stage + history thumbs.
     * @param {{ jobId?: string, phase?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure()
      applyGenerateResult(value)
    },
    dispose() {
      host?.remove()
      host = undefined
      open = false
      historyStore.clear()
      activeHistoryId = null
    },
  }
  return api
}

/** @param {{ url?: string, localPath?: string }} r */
function pickDisplayUrl(r) {
  const url = r?.url ? String(r.url) : ''
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('data:')) return url
  if (url.startsWith('blob:')) return url
  // Relative / media paths the host can serve (never file:// as <img src>)
  if (/^file:/i.test(url)) return ''
  return url
}

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
