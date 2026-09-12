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
  RESULT_ACTIONS,
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
const PANE_WIDTHS_KEY = 'dsh-ws-pane-widths'
const MODE_TXT = MODE_TABS[0]
const MODE_IMG = MODE_TABS[1]
const DEFAULT_PANE_WIDTHS = Object.freeze({ history: 264, studio: null, chat: 318 })


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

[data-dsh-ws-studio-host] [data-ws-ref-slot] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  background:#12161f; border:1px dashed #2a3140; border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ref-slot][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ref-drop] {
  min-height:72px; border-radius:8px; border:1px dashed #3a4558;
  background:#0e1218; display:flex; align-items:center; justify-content:center;
  gap:8px; flex-wrap:wrap; padding:8px; color:#9aa3b2; font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ref-drop][data-dragover] { border-color:#5b8def; color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-ref-thumbs] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] {
  position:relative; width:64px; height:64px; border-radius:8px; overflow:hidden;
  border:1px solid #2a3140; background:#0b0d10;
}
[data-dsh-ws-studio-host] [data-ws-ref-thumb] img { width:100%; height:100%; object-fit:cover; display:block; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] button {
  position:absolute; top:2px; right:2px; width:18px; height:18px; border:0; border-radius:999px;
  background:rgba(0,0,0,.7); color:#fff; cursor:pointer; font-size:11px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-progress] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; border:1px solid #1f2430;
  border-radius:10px; background:#12161f; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-progress][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-progress-bar] {
  height:6px; border-radius:999px; background:#1a1f2a; overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar] > i {
  display:block; height:100%; width:0%; background:#5b8def; border-radius:999px; transition:width .2s ease;
}
[data-dsh-ws-studio-host] [data-ws-progress-meta] {
  display:flex; align-items:center; gap:10px; font-size:12px; color:#c5cad3; flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-fail] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; border:1px solid #3a2a2a;
  border-radius:10px; background:#1a1214; flex:none; color:#e8b4b4; font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-fail][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] {
  display:none; flex-wrap:wrap; gap:6px; padding:4px 0 2px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] button {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; background:#12161f;
  border:1px solid #1f2430; border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] button {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-actions] button[data-primary] {
  border-color:#3a4558; background:#1c2333; color:#fff; font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag] {
  flex:0 0 5px; width:5px; cursor:col-resize; background:transparent; position:relative; z-index:2;
  align-self:stretch;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag]:hover,
[data-dsh-ws-studio-host] [data-ws-pane-drag][data-active] { background:rgba(91,141,239,.35); }
[data-dsh-ws-studio-host] [data-ws-cols] { display:flex; flex:1; min-height:0; }
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
  // Prefer 插件工 mount hints — conversation / centerCol / content-mount first
  const preferred = [
    document.querySelector('[data-pane="conversation"]'),
    document.querySelector('[class*="centerCol"]'),
    document.querySelector('[data-dsh-ws-content-mount]:not([data-dsh-ws-content-mount="measured"])'),
    document.querySelector('[data-pane="main"]'),
    document.querySelector('[data-pane="content"]'),
    document.querySelector('[class*="mainCol"]'),
    document.querySelector('[class*="contentCol"]'),
    document.querySelector('[class*="mainPane"]'),
    document.querySelector('[class*="contentPane"]'),
    document.querySelector('[class*="workspaceMain"]'),
    document.querySelector('main'),
  ]
  for (const el of preferred) {
    if (el instanceof HTMLElement && !el.closest('[data-pane="sidebar"],[class*="sidebarCol"]')) {
      return el
    }
  }

  const sidebar = resolveSidebarColumn()
  if (!(sidebar instanceof HTMLElement) || !sidebar.parentElement) return undefined

  const siblings = Array.from(sidebar.parentElement.children).filter((el) => el !== sidebar)
  const named = siblings.find(
    (el) =>
      el instanceof HTMLElement &&
      (el.getAttribute('data-pane') === 'conversation' ||
        el.getAttribute('data-pane') === 'main' ||
        el.getAttribute('data-pane') === 'content' ||
        /centerCol|main|content|workspace|session|conversation/i.test(String(el.className || ''))),
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
 * @returns {{ open: () => void, close: () => void, dispose: () => void, isOpen: () => boolean, setNegativePrompt: (text: string) => void, paintGenerateResult: (value: any) => void, setProgress: (value: any) => void, setStatus: (text: string) => void, setConnected: (on: boolean) => void, getHostEl: () => HTMLElement | undefined }}
 */
export function createStudioHost() {
  let host
  let open = false
  /** @type {ReturnType<typeof defaultStudioState> & { compareModels?: boolean, refImages?: Array<{ id: string, url: string, name?: string }>, task?: any }} */
  let state = defaultStudioState()
  /** @type {string | null} */
  let activeHistoryId = null
  /** @type {Map<string, { snapshot: Record<string, unknown>, value: any }>} */
  const historyStore = new Map()
  /** @type {number | null} */
  let progressTimer = null
  /** @type {number} */
  let progressStartedAt = 0

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

  const loadPaneWidths = () => {
    try {
      const raw = localStorage.getItem(PANE_WIDTHS_KEY)
      if (!raw) return { ...DEFAULT_PANE_WIDTHS }
      const parsed = JSON.parse(raw)
      return {
        history: Math.max(180, Math.min(480, Number(parsed.history) || DEFAULT_PANE_WIDTHS.history)),
        studio: null,
        chat: Math.max(220, Math.min(520, Number(parsed.chat) || DEFAULT_PANE_WIDTHS.chat)),
      }
    } catch (_) {
      return { ...DEFAULT_PANE_WIDTHS }
    }
  }

  const savePaneWidths = () => {
    try {
      localStorage.setItem(
        PANE_WIDTHS_KEY,
        JSON.stringify({
          history: state.paneWidths.history,
          chat: state.paneWidths.chat,
        }),
      )
    } catch (_) {
      /* ignore quota / private mode */
    }
  }

  const formatElapsed = (ms) => {
    const s = Math.max(0, Math.floor((ms || 0) / 1000))
    const m = Math.floor(s / 60)
    const r = s % 60
    return m > 0 ? `${m}:${String(r).padStart(2, '0')}` : `${r}s`
  }

  const stopProgressClock = () => {
    if (progressTimer != null) {
      clearInterval(progressTimer)
      progressTimer = null
    }
  }

  const paintConnStatus = (connected) => {
    const el = host?.querySelector('[data-ws-conn-status]')
    if (!(el instanceof HTMLElement)) return
    const on = connected !== false
    el.textContent = on ? CHROME.connected : CHROME.disconnected
    el.title = el.textContent
    el.style.color = on ? '#9aa3b2' : '#e8b4b4'
    el.dataset.connected = on ? '1' : '0'
  }

  const paintRefSlot = () => {
    const slot = host?.querySelector('[data-ws-ref-slot]')
    if (!(slot instanceof HTMLElement)) return
    const show = state.mode === MODE_IMG
    if (show) slot.setAttribute('data-visible', '')
    else slot.removeAttribute('data-visible')
    const thumbs = slot.querySelector('[data-ws-ref-thumbs]')
    if (!(thumbs instanceof HTMLElement)) return
    thumbs.innerHTML = ''
    const refs = Array.isArray(state.refImages) ? state.refImages : []
    for (const ref of refs) {
      const wrap = document.createElement('div')
      wrap.dataset.wsRefThumb = ''
      wrap.dataset.refId = ref.id
      const img = document.createElement('img')
      img.src = ref.url
      img.alt = ref.name || '参考图'
      const rm = document.createElement('button')
      rm.type = 'button'
      rm.setAttribute('aria-label', '移除参考图')
      rm.textContent = '×'
      rm.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        state.refImages = (state.refImages || []).filter((r) => r.id !== ref.id)
        paintRefSlot()
      })
      wrap.append(img, rm)
      thumbs.appendChild(wrap)
    }
    const hint = slot.querySelector('[data-ws-ref-hint]')
    if (hint) hint.textContent = refs.length ? `已选 ${refs.length} 张参考图` : '上传 / 拖拽 / 粘贴参考图'
  }

  const paintSkillPlan = () => {
    const panel = host?.querySelector('[data-ws-plan-panel]')
    if (!(panel instanceof HTMLElement)) return
    if (state.skillId) panel.setAttribute('data-visible', '')
    else panel.removeAttribute('data-visible')
    const ta = panel.querySelector('[data-ws-plan-text]')
    if (ta instanceof HTMLTextAreaElement) {
      const planText =
        typeof state.skillPlan === 'string'
          ? state.skillPlan
          : state.skillPlan?.text != null
            ? String(state.skillPlan.text)
            : state.skillPlan
              ? JSON.stringify(state.skillPlan, null, 2)
              : ''
      if (ta.value !== planText && document.activeElement !== ta) ta.value = planText
    }
  }

  const paintProgressUi = () => {
    const prog = host?.querySelector('[data-ws-progress]')
    const fail = host?.querySelector('[data-ws-fail]')
    const task = state.task
    if (prog instanceof HTMLElement) {
      const running =
        task &&
        (task.status === 'running' ||
          task.status === 'queued' ||
          task.status === 'submitted' ||
          task.status === 'polling' ||
          task.status === 'downloading')
      if (running) prog.setAttribute('data-visible', '')
      else prog.removeAttribute('data-visible')
      const pct = Math.max(0, Math.min(100, Number(task?.progress) || 0))
      const bar = prog.querySelector('[data-ws-progress-bar] > i')
      if (bar instanceof HTMLElement) bar.style.width = `${pct}%`
      const label = prog.querySelector('[data-ws-progress-label]')
      if (label) label.textContent = `进度 ${pct}%`
      const elapsed = prog.querySelector('[data-ws-progress-elapsed]')
      if (elapsed) elapsed.textContent = `耗时 ${formatElapsed(task?.elapsedMs || 0)}`
      const phase = prog.querySelector('[data-ws-progress-phase]')
      if (phase) phase.textContent = task?.phase || task?.status || ''
    }
    if (fail instanceof HTMLElement) {
      if (task?.status === 'failed') {
        fail.setAttribute('data-visible', '')
        const reason = fail.querySelector('[data-ws-fail-reason]')
        if (reason) reason.textContent = task.error ? `原因：${task.error}` : '原因：出图失败'
      } else {
        fail.removeAttribute('data-visible')
      }
    }
  }

  const paintResultActions = (show) => {
    const bar = host?.querySelector('[data-ws-result-actions]')
    if (!(bar instanceof HTMLElement)) return
    if (show) bar.setAttribute('data-visible', '')
    else bar.removeAttribute('data-visible')
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
    paintRefSlot()
    paintSkillPlan()
  }

  const captureParamSnapshot = () => ({
    prompt: state.prompt,
    negativePrompt: state.negativePrompt,
    mode: state.mode,
    skillId: state.skillId,
    skillPlan: state.skillPlan,
    ratio: state.ratio,
    clarity: state.clarity,
    count: state.count,
    detail: state.detail,
    modelId: state.modelId,
    compareModels: !!state.compareModels,
    refImages: Array.isArray(state.refImages) ? state.refImages.map((r) => ({ ...r })) : [],
  })

  const applyParamSnapshot = (snap) => {
    if (!snap || typeof snap !== 'object') return
    state.prompt = snap.prompt != null ? String(snap.prompt) : ''
    state.negativePrompt = snap.negativePrompt != null ? String(snap.negativePrompt) : ''
    state.mode = snap.mode || MODE_TABS[0]
    state.skillId = snap.skillId || null
    state.skillPlan = snap.skillPlan ?? null
    state.ratio = snap.ratio || RATIOS[0]
    state.clarity = snap.clarity || CLARITY[0]
    state.count = Number(snap.count) || COUNTS[0]
    state.detail = snap.detail || DETAIL_OPTS[0]
    state.modelId = snap.modelId != null ? String(snap.modelId) : ''
    state.compareModels = !!snap.compareModels
    state.refImages = Array.isArray(snap.refImages) ? snap.refImages.map((r) => ({ ...r })) : []
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
    paintResultActions(false)
    if (state.task?.status !== 'failed' && state.task?.status !== 'running') {
      state.task = null
      paintProgressUi()
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
   * Apply progress / phase updates from host or local CTA click.
   * @param {{ progress?: number, elapsedMs?: number, phase?: string, status?: string, error?: string, id?: string }} value
   */
  const applyProgress = (value) => {
    const v = value && typeof value === 'object' ? value : {}
    const status = v.status || v.phase || 'running'
    const normalized =
      status === 'done' || status === 'completed'
        ? 'done'
        : status === 'failed' || status === 'error'
          ? 'failed'
          : status === 'cancelled' || status === 'canceled'
            ? 'cancelled'
            : status === 'queued' ||
                status === 'submitted' ||
                status === 'polling' ||
                status === 'downloading' ||
                status === 'running'
              ? status === 'running'
                ? 'running'
                : status
              : 'running'
    state.task = {
      id: v.id || state.task?.id || `task-${Date.now()}`,
      status: normalized === 'done' ? 'done' : normalized,
      progress: v.progress != null ? Number(v.progress) : state.task?.progress || 0,
      elapsedMs:
        v.elapsedMs != null
          ? Number(v.elapsedMs)
          : progressStartedAt
            ? Date.now() - progressStartedAt
            : state.task?.elapsedMs || 0,
      phase: v.phase || normalized,
      error: v.error != null ? String(v.error) : state.task?.error,
    }
    paintProgressUi()
    if (normalized === 'running' || normalized === 'queued' || normalized === 'submitted' || normalized === 'polling' || normalized === 'downloading') {
      paintResultActions(false)
      const hint = host?.querySelector('[data-ws-stage-empty-hint]')
      if (hint) hint.hidden = true
    }
    if (normalized === 'cancelled') {
      stopProgressClock()
      setStatus('已取消')
    }
  }

  const beginLocalProgress = () => {
    stopProgressClock()
    progressStartedAt = Date.now()
    state.task = {
      id: `local-${progressStartedAt}`,
      status: 'running',
      progress: 8,
      elapsedMs: 0,
      phase: 'running',
    }
    paintProgressUi()
    paintResultActions(false)
    const fail = host?.querySelector('[data-ws-fail]')
    if (fail) fail.removeAttribute('data-visible')
    const hint = host?.querySelector('[data-ws-stage-empty-hint]')
    if (hint) hint.hidden = true
    progressTimer = window.setInterval(() => {
      if (!state.task || state.task.status === 'done' || state.task.status === 'failed' || state.task.status === 'cancelled') {
        stopProgressClock()
        return
      }
      const elapsed = Date.now() - progressStartedAt
      const bump = Math.min(92, (state.task.progress || 8) + 2)
      state.task = { ...state.task, elapsedMs: elapsed, progress: bump }
      paintProgressUi()
    }, 500)
  }

  /**
   * Paint generate RPC result into stage + history thumbs.
   * Phases: queued|submitted|polling|downloading|running → progress; failed → fail UI; done → results.
   * @param {{ jobId?: string, phase?: string, status?: string, progress?: number, elapsedMs?: number, error?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
   */
  const applyGenerateResult = (value) => {
    const phase = value?.phase || value?.status || ''
    const results = Array.isArray(value?.results) ? value.results : []
    const failed =
      phase === 'failed' ||
      phase === 'error' ||
      (!!value?.error && !results.length && phase !== 'done' && phase !== 'completed' && phase !== 'cancelled')
    const cancelled = phase === 'cancelled' || phase === 'canceled'
    const inProgress =
      !results.length &&
      !failed &&
      !cancelled &&
      (phase === 'queued' ||
        phase === 'submitted' ||
        phase === 'polling' ||
        phase === 'downloading' ||
        phase === 'running')

    if (inProgress) {
      applyProgress({
        id: value?.jobId,
        progress: value?.progress,
        elapsedMs: value?.elapsedMs,
        phase,
        status: phase || 'running',
      })
      setStatus(`出图中… ${phase || ''}`.trim())
      return
    }

    if (cancelled) {
      stopProgressClock()
      state.task = {
        id: value?.jobId || state.task?.id,
        status: 'cancelled',
        progress: state.task?.progress || 0,
        elapsedMs: value?.elapsedMs ?? state.task?.elapsedMs ?? 0,
        phase: 'cancelled',
      }
      paintProgressUi()
      setStatus('已取消')
      return
    }

    if (failed) {
      stopProgressClock()
      const errText = value?.error != null ? String(value.error) : '出图失败'
      state.task = {
        id: value?.jobId || state.task?.id,
        status: 'failed',
        progress: state.task?.progress || 0,
        elapsedMs: value?.elapsedMs ?? state.task?.elapsedMs ?? 0,
        phase: 'failed',
        error: errText,
      }
      paintProgressUi()
      paintResultActions(false)
      setStatus(errText)
      return
    }

    stopProgressClock()
    state.task = {
      id: value?.jobId || state.task?.id,
      status: 'done',
      progress: 100,
      elapsedMs: value?.elapsedMs ?? (progressStartedAt ? Date.now() - progressStartedAt : 0),
      phase: 'done',
    }
    paintProgressUi()

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
        paintResultActions(true)
      }
    }
    if (histEl && results.length) {
      histEl.querySelector('[data-ws-history-empty]')?.remove()
      const jobId = value?.jobId || `local-${Date.now()}`
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
    state.refImages = Array.isArray(state.refImages) ? state.refImages : []
    state.skillPlan = state.skillPlan ?? null
    state.task = null
    // 三栏宽度：历史 ~264（88px 缩略）/ 对话·灵感 ~318 — 可拖，记忆 localStorage
    state.paneWidths = { ...DEFAULT_PANE_WIDTHS, ...loadPaneWidths() }
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
      <div data-ws-cols>
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
        <div data-ws-pane-drag="history" title="拖拽调整历史栏宽度"></div>

        <!-- CENTER: 出图台 — stage (samples/results) + compact dock + sticky CTA -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:#0b0d10;border-left:0;border-right:0;">
          <div data-ws-stage aria-label="出图台">
            <div data-ws-stage-head>
              <strong>${STAGE_LABEL}</strong>
              <span data-ws-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
            </div>
            <div data-ws-progress>
              <div data-ws-progress-meta>
                <span data-ws-progress-label>进度 0%</span>
                <span data-ws-progress-elapsed>耗时 0s</span>
                <span data-ws-progress-phase style="color:#6b7280;"></span>
                <span style="flex:1"></span>
                <button type="button" data-ws-cancel style="padding:2px 10px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:11.5px;">${RESULT_ACTIONS[0]}</button>
              </div>
              <div data-ws-progress-bar><i></i></div>
            </div>
            <div data-ws-fail>
              <div data-ws-fail-reason>原因：出图失败</div>
              <button type="button" data-ws-retry style="align-self:flex-start;padding:4px 12px;border:1px solid #3a4558;border-radius:999px;background:#1c2333;color:#fff;cursor:pointer;font:inherit;font-size:12px;">${RESULT_ACTIONS[1]}</button>
            </div>
            <div data-ws-stage-samples></div>
            <div data-ws-results hidden></div>
            <div data-ws-result-actions>
              ${RESULT_ACTIONS.filter((a) => a !== '取消' && a !== '重试')
                .map(
                  (a) =>
                    `<button type="button" data-ws-result-action="${a}">${a}</button>`,
                )
                .join('')}
            </div>
          </div>

          <div data-ws-dock>
            <div style="display:flex;gap:6px;align-items:center;" role="tablist">
              ${MODE_TABS.map(
                (m, i) =>
                  `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? 'true' : 'false'}" style="${css.mode(i === 0)}">${m}</button>`,
              ).join('')}
            </div>

            <div data-ws-ref-slot aria-label="参考图">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="${css.paramLabel}">参考图</span>
                <span data-ws-ref-hint style="font-size:11px;color:#6b7280;">上传 / 拖拽 / 粘贴参考图</span>
                <span style="flex:1"></span>
                <button type="button" data-ws-ref-upload style="padding:2px 10px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;">上传</button>
                <input type="file" data-ws-ref-file accept="image/*" multiple hidden />
              </div>
              <div data-ws-ref-drop tabindex="0">点击、拖入或 Ctrl+V 粘贴</div>
              <div data-ws-ref-thumbs></div>
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

            <div data-ws-plan-panel>
              <div style="${css.paramLabel}">创作方案（可编辑；评分只提示，永不锁出图）</div>
              <textarea data-ws-plan-text rows="3" placeholder="点「想方案」后方案会出现在这里，可改" style="width:100%;resize:vertical;min-height:72px;padding:8px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
              <div data-ws-plan-actions>
                <button type="button" data-ws-plan-action="plan">${PROMPT_ACTIONS.plan}</button>
                <button type="button" data-ws-plan-action="replan">${PROMPT_ACTIONS.replan}</button>
                <button type="button" data-ws-plan-action="accept" data-primary>${PROMPT_ACTIONS.acceptPlan}</button>
              </div>
            </div>
          </div>

          <div data-ws-cta-footer>
            <button type="button" data-ws-cta style="${css.cta}">${CTA}</button>
            <p data-ws-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
          </div>
        </section>

        <div data-ws-pane-drag="chat" title="拖拽调整灵感/对话栏宽度"></div>
        <!-- RIGHT: 灵感墙 -->
        <aside data-ws-inspire-wall style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1a1f2a;padding:8px;display:flex;flex-direction:column;gap:8px;background:#0b0d10;overflow:auto;min-height:0;">
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
        setStatus(state.mode === MODE_IMG ? '已切换到图生图' : '已切换到文生图')
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
      else state.skillPlan = null
      syncFields()
      paintSkillPlan()
      // Open advanced when skill chosen so plan is visible nearby
      const adv = host.querySelector('[data-ws-advanced]')
      if (adv instanceof HTMLDetailsElement && id) adv.open = true
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

    const dispatchGenerate = (extra = {}) => {
      beginLocalProgress()
      setStatus('出图中…')
      host.dispatchEvent(
        new CustomEvent('dsh-ws-generate', {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            skillPlan: state.skillPlan,
            ratio: state.ratio,
            clarity: state.clarity,
            count: state.count,
            detail: state.detail,
            modelId: state.modelId,
            compareModels: !!state.compareModels,
            refImages: Array.isArray(state.refImages) ? state.refImages : [],
            // selfCheck never gates — score never disables CTA
            selfCheck: state.selfCheck,
            ...extra,
          },
        }),
      )
    }

    cta?.addEventListener('click', () => dispatchGenerate())

    const addRefFromFile = (file) => {
      if (!(file instanceof File) || !file.type.startsWith('image/')) return
      const id = `ref-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
      const url = URL.createObjectURL(file)
      const reader = new FileReader()
      reader.onload = () => {
        const dataUrl = typeof reader.result === 'string' ? reader.result : url
        state.refImages = [...(state.refImages || []), { id, url: dataUrl, name: file.name }]
        try {
          URL.revokeObjectURL(url)
        } catch (_) {}
        paintRefSlot()
        setStatus(`已添加参考图「${file.name || 'image'}」`)
      }
      reader.onerror = () => {
        state.refImages = [...(state.refImages || []), { id, url, name: file.name }]
        paintRefSlot()
      }
      reader.readAsDataURL(file)
    }

    const refFile = host.querySelector('[data-ws-ref-file]')
    const refUpload = host.querySelector('[data-ws-ref-upload]')
    const refDrop = host.querySelector('[data-ws-ref-drop]')
    refUpload?.addEventListener('click', () => {
      if (refFile instanceof HTMLInputElement) refFile.click()
    })
    refFile?.addEventListener('change', (e) => {
      const input = /** @type {HTMLInputElement} */ (e.target)
      for (const f of Array.from(input.files || [])) addRefFromFile(f)
      input.value = ''
    })
    refDrop?.addEventListener('click', () => {
      if (refFile instanceof HTMLInputElement) refFile.click()
    })
    ;['dragenter', 'dragover'].forEach((evName) => {
      refDrop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (refDrop instanceof HTMLElement) refDrop.setAttribute('data-dragover', '')
      })
    })
    ;['dragleave', 'drop'].forEach((evName) => {
      refDrop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (refDrop instanceof HTMLElement) refDrop.removeAttribute('data-dragover')
      })
    })
    refDrop?.addEventListener('drop', (e) => {
      const dt = /** @type {DragEvent} */ (e).dataTransfer
      for (const f of Array.from(dt?.files || [])) addRefFromFile(f)
    })
    host.addEventListener('paste', (e) => {
      if (state.mode !== MODE_IMG) return
      const items = Array.from(e.clipboardData?.items || [])
      let found = false
      for (const it of items) {
        if (it.type.startsWith('image/')) {
          const f = it.getAsFile()
          if (f) {
            addRefFromFile(f)
            found = true
          }
        }
      }
      if (found) e.preventDefault()
    })

    host.querySelector('[data-ws-plan-text]')?.addEventListener('input', (e) => {
      const t = /** @type {HTMLTextAreaElement} */ (e.target)
      state.skillPlan = t.value
    })
    host.querySelectorAll('[data-ws-plan-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-ws-plan-action')
        if (action === 'plan' || action === 'replan') {
          const draft =
            (state.prompt || '').trim() ||
            `围绕「${state.skillId || '创作'}」的一版方案`
          state.skillPlan =
            `${draft}\n\n构图：主体清晰、层次分明\n光影：自然主光 + 柔和环境光\n风格：与所选 Skill「${state.skillId || ''}」对齐\n（可编辑；评分只提示，不锁出图）`
          paintSkillPlan()
          host.dispatchEvent(
            new CustomEvent('dsh-ws-plan', {
              bubbles: true,
              detail: { action, skillId: state.skillId, prompt: state.prompt, skillPlan: state.skillPlan },
            }),
          )
          setStatus(action === 'replan' ? '已重新想一版（可继续改）' : '已想方案（可编辑后出图）')
        } else if (action === 'accept') {
          // Never disable from score — just generate with current plan
          dispatchGenerate({ fromPlan: true })
        }
      })
    })

    host.querySelector('[data-ws-cancel]')?.addEventListener('click', () => {
      stopProgressClock()
      state.task = {
        ...(state.task || {}),
        status: 'cancelled',
        phase: 'cancelled',
        elapsedMs: progressStartedAt ? Date.now() - progressStartedAt : state.task?.elapsedMs || 0,
      }
      paintProgressUi()
      setStatus('已取消')
      host.dispatchEvent(
        new CustomEvent('dsh-ws-cancel', {
          bubbles: true,
          detail: { jobId: state.task?.id, reason: 'user' },
        }),
      )
    })

    host.querySelector('[data-ws-retry]')?.addEventListener('click', () => {
      dispatchGenerate({ retry: true })
    })

    host.querySelector('[data-ws-result-actions]')?.addEventListener('click', (e) => {
      const btn = e.target instanceof Element ? e.target.closest('[data-ws-result-action]') : null
      if (!btn) return
      const action = btn.getAttribute('data-ws-result-action') || ''
      const firstImg = host.querySelector('[data-ws-results] img[data-ws-result]')
      const src = firstImg instanceof HTMLImageElement ? firstImg.src : ''
      if (action === '下载' && src) {
        const a = document.createElement('a')
        a.href = src
        a.download = `dsh-ws-${Date.now()}.png`
        a.rel = 'noopener'
        a.click()
      } else if (action === '复制提示词') {
        const textPrompt = state.prompt || ''
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(textPrompt).catch(() => {})
      } else if (action === '当参考图' && src) {
        state.mode = MODE_IMG
        state.refImages = [
          ...(state.refImages || []),
          { id: `ref-result-${Date.now()}`, url: src, name: '结果参考' },
        ]
        paintChips()
      } else if (action === '重新生成') {
        dispatchGenerate({ regenerate: true })
      }
      host.dispatchEvent(
        new CustomEvent('dsh-ws-result-action', {
          bubbles: true,
          detail: { action, src, prompt: state.prompt },
        }),
      )
      setStatus(`已触发「${action}」`)
    })

    // Pane drag + width memory
    const applyColWidths = () => {
      const hist = host.querySelector('[data-ws-col="history"]')
      const chat = host.querySelector('[data-ws-col="chat"]')
      const wall = host.querySelector('[data-ws-inspire-wall]')
      if (hist instanceof HTMLElement) hist.style.width = `${state.paneWidths.history}px`
      if (chat instanceof HTMLElement) chat.style.width = `${state.paneWidths.chat}px`
      if (wall instanceof HTMLElement) wall.style.width = `${state.paneWidths.chat}px`
    }
    applyColWidths()
    host.querySelectorAll('[data-ws-pane-drag]').forEach((handle) => {
      handle.addEventListener('mousedown', (ev) => {
        ev.preventDefault()
        const which = handle.getAttribute('data-ws-pane-drag')
        handle.setAttribute('data-active', '')
        const startX = /** @type {MouseEvent} */ (ev).clientX
        const startHist = state.paneWidths.history
        const startChat = state.paneWidths.chat
        const onMove = (e) => {
          const dx = e.clientX - startX
          if (which === 'history') {
            state.paneWidths.history = Math.max(180, Math.min(480, startHist + dx))
          } else if (which === 'chat') {
            state.paneWidths.chat = Math.max(220, Math.min(520, startChat - dx))
          }
          applyColWidths()
        }
        const onUp = () => {
          handle.removeAttribute('data-active')
          document.removeEventListener('mousemove', onMove)
          document.removeEventListener('mouseup', onUp)
          savePaneWidths()
        }
        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseup', onUp)
      })
    })

    mountStudioHostEl(host)
    paintChat()
    syncFields()
    paintInspiration()
    paintStageIdle()
    paintHistoryEmpty()
    paintRefSlot()
    paintSkillPlan()
    paintConnStatus(true)
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
    /** @param {boolean} on */
    setConnected(on) {
      ensure()
      paintConnStatus(!!on)
    },
    getHostEl() {
      return host
    },
    /**
     * Progress UI: 进度 · 耗时 · 取消
     * @param {{ progress?: number, elapsedMs?: number, phase?: string, status?: string, error?: string, id?: string }} value
     */
    setProgress(value) {
      ensure()
      applyProgress(value)
    },
    /**
     * Paint generate RPC result into stage + history thumbs.
     * Accepts phase progress / failed / done payloads.
     * @param {{ jobId?: string, phase?: string, status?: string, progress?: number, elapsedMs?: number, error?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure()
      applyGenerateResult(value)
    },
    dispose() {
      stopProgressClock()
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
