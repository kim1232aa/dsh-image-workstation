/**
 * 生图工作台 host — 三栏出图台（历史 | 写+生成 | 生成结果/对话）。
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
  HISTORY_ACTIONS,
  RESULT_ACTIONS,
} from '../ui/labels.js'
import { defaultStudioState } from '../ui/studio-stub.js'
import { mountVideoPage, VIDEO_PAGE, IMAGE_PAGE } from './video-host.js'
import { mountCanvasPage, CANVAS_PAGE } from './canvas-host.js'
import { mountGifHost, GIF_PAGE } from './gif-host.js'
import { mountUiDesignHost, UI_DESIGN_PAGE } from './ui-design-host.js'
import { mountTemplateHost, TEMPLATE_PAGE } from './template-host.js'
import { mountGalleryPage, GALLERY_PAGE } from './gallery-host.js'
import { mountEcomPage, ECOM_PAGE } from './ecom-host.js'
import { TOOL_MORE, TOOL_ENTRIES } from '../ui/labels.js'
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
/** Persist 普通生图 history (localStorage; namespaced by storage.paths dataDir when known) */
const HISTORY_KEY_BASE = 'dsh-ws-history-v1'
const HISTORY_MAX = 40
/** Result actions with no write/edit path yet — never fake success */
const UNWIRED_RESULT_ACTIONS = new Set(['加对话', '拿去做视频', '再编辑'])

const STAGE_LABEL = '生成结果'
const STAGE_EMPTY_TITLE = '生成后显示在这里'
const STAGE_EMPTY_HINT = '出图结果会出现在本栏'
const HISTORY_EMPTY_HINT = '暂无记录'

const DEFAULT_MODEL = 'grok-imagine-image'

/** Semantic dsh theme tokens — follow body[data-ds-dark-theme] / host skin */
const T = Object.freeze({
  bg: 'var(--dsw-alias-bg-base)',
  layer1: 'var(--dsw-alias-bg-layer-1)',
  layer2: 'var(--dsw-alias-bg-layer-2)',
  layer3: 'var(--dsw-alias-bg-layer-3)',
  module: 'var(--dsw-alias-bg-module-platform)',
  sidebar: 'var(--dsw-specific-sidebar-fill)',
  input: 'var(--dsw-specific-input-major)',
  fg: 'var(--dsw-alias-label-primary)',
  fg2: 'var(--dsw-alias-label-secondary)',
  fg3: 'var(--dsw-alias-label-tertiary)',
  fgDim: 'var(--dsw-alias-label-dimmed)',
  fgOnPrimary: 'var(--dsw-alias-label-primary-foreground)',
  border1: 'var(--dsw-alias-border-l1)',
  border2: 'var(--dsw-alias-border-l2)',
  border3: 'var(--dsw-alias-border-l3)',
  border4: 'var(--dsw-alias-border-l4)',
  hover: 'var(--dsw-alias-interactive-bg-hover)',
  active: 'var(--dsw-alias-interactive-bg-active)',
  elevStroke: 'var(--dsw-elevation-stroke)',
  elevPanel: 'var(--dsw-elevation-panel)',
  cta: 'var(--dsw-alias-button-primary-fill)',
  ctaHover: 'var(--dsw-alias-button-primary-hover)',
  focus: 'var(--dsw-alias-state-business-primary)',
  error: 'var(--dsw-alias-state-error-primary)',
  brand: 'var(--dsw-alias-brand-primary)',
  font: 'var(--dsw-font, var(--dsw-font-family, inherit))',
  fontSize: 'var(--dsh-content-font-size, 13px)',
})

const ACCENT = T.focus
const PANE_WIDTHS_KEY = 'dsh-ws-pane-widths'
const MODE_TXT = MODE_TABS[0]
const MODE_IMG = MODE_TABS[1]
const DEFAULT_PANE_WIDTHS = Object.freeze({ history: 264, studio: null, chat: 318 })

const css = {
  mode: (on) =>
    `padding:4px 12px;border:1px solid ${on ? T.border4 : T.border2};border-radius:999px;background:${on ? T.active : 'transparent'};color:${on ? T.fg : T.fg2};cursor:pointer;font:inherit;font-size:12px;`,
  field:
    `padding:5px 8px;border-radius:7px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;`,
  select:
    `padding:4px 8px;border-radius:6px;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;min-height:28px;`,
  chip: (on) =>
    `padding:1px 6px;border:1px solid ${on ? T.border4 : T.border2};border-radius:999px;background:${on ? T.active : 'transparent'};color:${on ? T.fg : T.fg2};cursor:pointer;font:inherit;font-size:11px;line-height:1.25;white-space:nowrap;`,
  histAction:
    `padding:2px 8px;border:1px solid ${T.border2};border-radius:6px;background:transparent;color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;`,
  /** 出图台 dock 内区块 — 借鉴形态，自写组件 */
  dockBlock:
    `display:flex;flex-direction:column;gap:4px;padding:6px 8px;background:${T.module};border:1px solid ${T.border2};border-radius:8px;flex:none;`,
  paramLabel: `font-size:11px;font-weight:600;color:${T.fg2};white-space:nowrap;`,
  /** Host primary CTA — theme-aware */
  cta:
    `width:100%;min-height:40px;padding:9px 14px;border:0;border-radius:9px;background:${T.cta};color:${T.fgOnPrimary};cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:${T.elevPanel};`,
  pill: (opts = {}) =>
    `padding:${opts.pad || '2px 10px'};border:1px solid ${T.border2};border-radius:999px;background:${opts.fill || 'transparent'};color:${opts.color || T.fg2};cursor:pointer;font:inherit;font-size:${opts.size || '11.5px'};`,
  topTab: (on) =>
    `padding:2px 5px 3px;border:0;border-bottom:1px solid ${on ? T.fg2 : 'transparent'};background:transparent;color:${on ? T.fg2 : T.fg3};cursor:pointer;border-radius:0;font:inherit;font-size:11px;font-weight:${on ? 500 : 400};line-height:1.25;`,
}

const HOST_STYLES = `
[data-dsh-ws-studio-host] {
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
  font-family: var(--dsw-font-family, inherit);
  font-size: var(--dsh-content-font-size, 13px);
  color-scheme: inherit;
}
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:7px; align-items:flex-start;
  padding:4px; border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-alias-bg-module-platform); flex:none; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease, background .12s ease; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover {
  border-color: var(--dsw-alias-border-l3);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] {
  border-color: var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:8px; align-items:center;
  padding:5px; border:1px solid var(--dsw-alias-border-l2); border-radius:9px;
  background: var(--dsw-alias-bg-module-platform); opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:${HIST_THUMB}px; height:${HIST_THUMB}px; border-radius:7px; object-fit:cover; flex:none;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-meta {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:2px;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] .ws-hist-line,
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-line {
  min-width:0; font-size:11px; line-height:1.35; color: var(--dsw-alias-label-secondary);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-model {
  font-size:10.5px; color: var(--dsw-alias-label-tertiary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-actions {
  display:flex; gap:3px; flex-wrap:wrap; margin-top:1px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-secondary); cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color: var(--dsw-alias-state-business-primary); transform:translateY(-2px);
  box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-direction:column; gap:4px;
}
[data-dsh-ws-studio-host] [data-ws-param-group] {
  display:flex; flex-direction:row; flex-wrap:wrap; align-items:center; gap:6px 8px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-param-group] > span {
  flex:none; min-width:2.2em;
}
[data-dsh-ws-studio-host] [data-ws-chips] {
  display:flex; flex-wrap:wrap; gap:3px 4px; align-items:center; flex:1; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value] {
  padding:1px 6px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background:transparent; color: var(--dsw-alias-label-secondary); cursor:pointer; font:inherit; font-size:11px; line-height:1.25;
  white-space:nowrap; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value][aria-current="true"] {
  background: var(--dsw-alias-interactive-bg-active); color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l4);
}
[data-dsh-ws-studio-host] [data-ws-model-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-model-row] [data-ws-param="model"] {
  flex:0 1 10rem; min-width:5rem; width:10rem;
}
[data-dsh-ws-studio-host] [data-ws-conn-status] {
  padding:0; height:auto; border:0; border-radius:0;
  background:transparent; color: var(--dsw-alias-label-dimmed);
  font:inherit; font-size:10px; display:inline-flex; align-items:center; flex:none;
  opacity:.7;
}
[data-dsh-ws-studio-host] [data-ws-inspire-wall] [data-ws-stage] {
  /* Right column = result landing. Pack head+grid+actions at TOP (same lesson as CTA). */
  flex:1 1 auto; min-height:0; max-height:none; display:flex; flex-direction:column;
  justify-content:flex-start; gap:8px;
  margin:0; padding:0; overflow:hidden; background:transparent; border:0;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] {
  display:flex; align-items:baseline; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] strong {
  font-size:13px; font-weight:650; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-stage-empty] {
  flex:0 0 auto; min-height:0;
  display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start;
  gap:4px; padding:12px 14px; text-align:left;
  border:0; border-radius:10px;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-stage-empty][hidden],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty-title],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty-hint],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty-title],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty-hint] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-title] {
  font-size:13px; font-weight:650; color: var(--dsw-alias-label-primary); line-height:1.35;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint] {
  font-size:12px; color: var(--dsw-alias-label-secondary); font-weight:400; line-height:1.4;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-title][hidden],
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-stage-samples] {
  /* Idle path never paints sample tiles — keep out of flex flow */
  display:none; flex:none; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples][hidden],
[data-dsh-ws-studio-host] [data-ws-results][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-results] {
  /* Pack to natural height — NEVER flex:1 sea that sinks RESULT_ACTIONS */
  display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));
  gap:12px; align-content:start; flex:0 1 auto; min-height:0; max-height:100%;
  overflow:auto; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] {
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px; padding:2px;
  background: var(--dsw-alias-bg-module-platform); overflow:hidden; min-width:0;
  cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card][data-selected] {
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] img {
  display:block; width:100%; max-height:420px; border-radius:8px; object-fit:cover;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] {
  position:relative; min-height:0; height:100%; border-radius:10px; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-module-platform);
  cursor:pointer; padding:0; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] .ws-stage-cap {
  position:absolute; inset:auto 0 0 0; z-index:1; padding:14px 8px 7px;
  background: var(--dsw-alias-bg-mask-2);
  color: var(--dsw-alias-label-primary-foreground); font-size:11px; line-height:1.3; text-align:left;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color: var(--dsw-alias-label-secondary); font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary:hover {
  color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-border-l3);
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary [data-ws-neg-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) [data-ws-clear-negative] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { background: var(--dsw-alias-button-primary-hover); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color: var(--dsw-alias-label-tertiary); opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color: var(--dsw-alias-label-primary); }
[data-dsh-ws-studio-host] [data-ws-dock] {
  /* Pack to natural height — continuous with [data-ws-cta-footer] (gap 0 / small).
     NEVER margin-top:auto / flex-grow between dock params and CTA. */
  flex:0 0 auto; display:flex; flex-direction:column; gap:4px;
  padding:8px 12px 0; background: var(--dsw-alias-bg-base);
  border-top:0;
  max-height:none; overflow:auto; min-height:0;
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
  /* Pack directly under dock at TOP of mid — write+CTA only; results on right. */
  flex:0 0 auto; margin-top:0; position:relative; z-index:2;
  padding:6px 12px 10px; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-advanced] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-advanced] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color: var(--dsw-alias-label-secondary); font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary:hover {
  color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-border-l3);
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
  background: var(--dsw-alias-bg-module-platform); border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ref-slot][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ref-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major); display:flex; align-items:center; justify-content:center;
  gap:8px; flex-wrap:wrap; padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ref-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ref-thumbs] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] {
  position:relative; width:64px; height:64px; border-radius:8px; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ref-thumb] img { width:100%; height:100%; object-fit:cover; display:block; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] button {
  position:absolute; top:2px; right:2px; width:18px; height:18px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:11px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-progress] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); flex:none;
}
[data-dsh-ws-studio-host] [data-ws-progress][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-progress-bar] {
  height:6px; border-radius:999px; background: var(--dsw-alias-border-l2); overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar] > i {
  display:block; height:100%; width:0%; background: var(--dsw-alias-state-business-primary);
  border-radius:999px; transition:width .2s ease;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar][data-indeterminate] > i {
  width:36% !important; transition:none;
  animation: dsh-ws-progress-indeterminate 1.2s ease-in-out infinite;
}
@keyframes dsh-ws-progress-indeterminate {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(280%); }
}
[data-dsh-ws-studio-host] [data-ws-progress-meta] {
  display:flex; align-items:center; gap:10px; font-size:12px;
  color: var(--dsw-alias-label-secondary); flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-fail] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  border:1px solid var(--dsw-alias-state-error-primary); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); flex:none;
  color: var(--dsw-alias-state-error-primary); font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-fail][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] {
  /* Directly under result grid — never margin-top:auto / column-bottom flex sea.
     2-row wrap OK — roomy gap so seven chips aren't cramped. */
  display:none; flex-wrap:wrap; gap:8px 10px; padding:8px 0 4px; flex:0 0 auto; margin-top:0;
  align-content:flex-start;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] button {
  padding:7px 14px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: var(--dsw-alias-bg-module-platform); color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:12.5px; line-height:1.25; min-height:32px;
}
[data-dsh-ws-studio-host] [data-ws-result-actions] button[data-ws-unwired] {
  opacity:.7; border-style:dashed; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-plan-panel] {
  display:none; flex-direction:column; gap:4px; padding:6px 8px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2); border-radius:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] button {
  padding:4px 10px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-actions] button[data-primary] {
  border-color: var(--dsw-alias-border-l4); background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary); font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag] {
  flex:0 0 5px; width:5px; cursor:col-resize; background:transparent; position:relative; z-index:2;
  align-self:stretch;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag]:hover,
[data-dsh-ws-studio-host] [data-ws-pane-drag][data-active] {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-col="studio"] {
  /* Write+generate only: dock+CTA pack at top; no result stage / no white sea */
  display:flex; flex-direction:column; justify-content:flex-start; flex:1; min-width:0; min-height:0;
  overflow:auto; background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-cols] { display:flex; flex:1; min-height:0; }
[data-dsh-ws-studio-host] [data-ws-top-bar] {
  display:flex; gap:8px; padding:0 10px; align-items:center; flex-shrink:0;
  min-height:20px; height:20px;
  background:transparent; border-bottom:0;
}
[data-dsh-ws-studio-host] [data-ws-mode-switch] {
  position:relative; display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-mode-toggle] {
  padding:0 2px; border:0; border-radius:0; background:transparent;
  color: var(--dsw-alias-label-tertiary); cursor:pointer;
  font:inherit; font-size:10.5px; line-height:1.25; font-weight:400;
}
[data-dsh-ws-studio-host] [data-ws-mode-toggle]:hover {
  color: var(--dsw-alias-label-secondary);
}
[data-dsh-ws-studio-host] [data-ws-mode-current] {
  color: inherit;
}
[data-dsh-ws-studio-host] [data-ws-mode-caret] {
  color: var(--dsw-alias-label-dimmed);
  font-size: 9px;
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] {
  position:absolute; top:100%; left:0; z-index:50; margin-top:2px;
  min-width:7.5rem; padding:4px; display:flex; flex-direction:column; gap:2px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:8px; box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-mode-menu][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top] {
  padding:4px 8px; border:0; border-radius:6px; text-align:left;
  background:transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top][aria-current="true"],
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top][data-active] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary); font-weight:500;
}
[data-dsh-ws-studio-host] [data-ws-history-filters][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-history-clear][hidden] { display:none !important; }
[data-dsh-ws-studio-host] textarea,
[data-dsh-ws-studio-host] input:not([type="checkbox"]):not([type="file"]),
[data-dsh-ws-studio-host] select {
  background: var(--dsw-specific-input-major);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-tool-more] {
  position:relative; display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-toggle] {
  padding:0 6px; height:18px; border:0; border-radius:4px; background:transparent;
  color: var(--dsw-alias-label-tertiary); cursor:pointer;
  font:inherit; font-size:10.5px; line-height:1.25;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-toggle]:hover {
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] {
  position:absolute; top:100%; right:0; z-index:50; margin-top:2px;
  min-width:7rem; padding:4px; display:flex; flex-direction:column; gap:2px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:8px; box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] [data-ws-tool] {
  padding:4px 8px; border:0; border-radius:6px; text-align:left;
  background:transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] [data-ws-tool]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
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
export function createStudioHost(opts = {}) {
  const getRpc = typeof opts.getRpc === 'function' ? opts.getRpc : null
  let host
  let open = false
  /** @type {ReturnType<typeof mountVideoPage> | null} */
  let videoApi = null
  /** @type {ReturnType<typeof mountCanvasPage> | null} */
  let canvasApi = null
  /** @type {ReturnType<typeof mountGifHost> | null} */
  let gifApi = null
  /** @type {ReturnType<typeof mountUiDesignHost> | null} */
  let uiDesignApi = null
  /** @type {ReturnType<typeof mountTemplateHost> | null} */
  let templateApi = null
  /** @type {ReturnType<typeof mountGalleryPage> | null} */
  let galleryApi = null
  /** @type {ReturnType<typeof mountEcomPage> | null} */
  let ecomApi = null
  /** @type {ReturnType<typeof defaultStudioState> & { compareModels?: boolean, refImages?: Array<{ id: string, url: string, name?: string }>, task?: any }} */
  let state = defaultStudioState()
  /** @type {string | null} */
  let activeHistoryId = null
  /** @type {Map<string, { snapshot: Record<string, unknown>, value: any, savedAt?: number }>} */
  const historyStore = new Map()
  /** @type {{ dataDir?: string, generated?: string, gallery?: string, history?: string } | null} */
  let storagePaths = null
  const historyStorageKey = () => {
    const dir = storagePaths?.dataDir ? String(storagePaths.dataDir) : ''
    return dir ? `${HISTORY_KEY_BASE}::${dir}` : HISTORY_KEY_BASE
  }
  /** @type {number | null} */
  let progressTimer = null
  /** @type {number} */
  let progressStartedAt = 0

  const paintChat = () => {
    // Studio no longer exposes 「AI 对话」 — host chat covers that. Keep results wall.
    state.chatCollapsed = true
    const chat = host?.querySelector('[data-ws-col="chat"]')
    const wall = host?.querySelector('[data-ws-inspire-wall]')
    if (chat) chat.style.display = 'none'
    if (wall) wall.style.display = 'flex'
  }

  const syncHistoryChrome = () => {
    const histEl = host?.querySelector('[data-ws-history-list]')
    const filters = host?.querySelector('[data-ws-history-filters]')
    const clearBtn = host?.querySelector('[data-ws-history-clear]')
    const hasItems = !!(histEl && histEl.querySelector('[data-ws-history-item]'))
    if (filters instanceof HTMLElement) filters.hidden = !hasItems
    if (clearBtn instanceof HTMLElement) {
      clearBtn.hidden = !hasItems
      clearBtn.disabled = !hasItems
    }
  }

  const setTopTab = (tab) => {
    const name = tab || IMAGE_PAGE
    state.topTab = name
    const cur = host?.querySelector('[data-ws-mode-current]')
    if (cur) cur.textContent = name
    host?.querySelectorAll('[data-ws-mode-menu] [data-ws-top]').forEach((b) => {
      const on = b.getAttribute('data-ws-top') === name
      if (b instanceof HTMLElement) {
        b.setAttribute('aria-current', on ? 'true' : 'false')
        if (on) b.setAttribute('data-active', '')
        else b.removeAttribute('data-active')
      }
    })
    const menu = host?.querySelector('[data-ws-mode-menu]')
    const toggle = host?.querySelector('[data-ws-mode-toggle]')
    if (menu instanceof HTMLElement) menu.hidden = true
    if (toggle instanceof HTMLElement) toggle.setAttribute('aria-expanded', 'false')
    // Stamp top-page for sibling page CSS (video/canvas/gallery/ecom hide image cols).
    host?.setAttribute('data-ws-top-page', name)
    const topWired =
      name === VIDEO_PAGE ||
      name === IMAGE_PAGE ||
      name === CANVAS_PAGE ||
      name === GALLERY_PAGE ||
      name === ECOM_PAGE
    if (topWired) {
      videoApi?.setPage(name)
      canvasApi?.setPage(name)
      galleryApi?.setPage(name)
      ecomApi?.setPage(name)
      if (name === VIDEO_PAGE) setStatus('视频生成')
      else if (name === CANVAS_PAGE) setStatus('无限画布')
      else if (name === GALLERY_PAGE) setStatus('画廊')
      else if (name === ECOM_PAGE) setStatus('电商模式')
      else setStatus('普通生图')
    } else {
      setStatus(`「${name}」未接线`)
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


  const slimResultRow = (r) => {
    if (!r || typeof r !== 'object') return null
    const url = r.url != null ? String(r.url) : ''
    const localPath = r.localPath != null ? String(r.localPath) : ''
    const kind = r.kind != null ? String(r.kind) : undefined
    if (url.startsWith('data:') && url.length > 120000) {
      return localPath ? { localPath, kind } : null
    }
    const out = {}
    if (url) out.url = url
    if (localPath) out.localPath = localPath
    if (kind) out.kind = kind
    return out.url || out.localPath ? out : null
  }

  const slimGenerateValue = (value) => {
    if (!value || typeof value !== 'object') return value
    const results = Array.isArray(value.results)
      ? value.results.map(slimResultRow).filter(Boolean)
      : []
    return {
      jobId: value.jobId,
      phase: value.phase || value.status || 'done',
      status: value.status || value.phase || 'done',
      progress: value.progress,
      elapsedMs: value.elapsedMs,
      error: value.error,
      results,
    }
  }

  const persistHistory = () => {
    try {
      const histEl = host?.querySelector('[data-ws-history-list]')
      const orderedIds = histEl
        ? Array.from(histEl.querySelectorAll('[data-ws-history-item]')).map((el) =>
            el.getAttribute('data-ws-history-item'),
          )
        : Array.from(historyStore.keys())
      const final = []
      const seen = new Set()
      for (const id of orderedIds) {
        if (!id || seen.has(id) || !historyStore.has(id)) continue
        seen.add(id)
        const entry = historyStore.get(id)
        final.push({
          id,
          snapshot: entry?.snapshot || {},
          value: slimGenerateValue(entry?.value),
          savedAt: entry?.savedAt || Date.now(),
        })
        if (final.length >= HISTORY_MAX) break
      }
      localStorage.setItem(historyStorageKey(), JSON.stringify(final))
    } catch (_) {
      /* quota / private mode — keep in-memory only */
    }
  }

  const loadHistoryEntries = () => {
    try {
      const raw = localStorage.getItem(historyStorageKey())
      if (!raw) return []
      const parsed = JSON.parse(raw)
      if (!Array.isArray(parsed)) return []
      return parsed.filter((e) => e && typeof e === 'object' && e.id).slice(0, HISTORY_MAX)
    } catch (_) {
      return []
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
    el.style.color = on ? T.fg2 : T.error
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


  const formatPlanCard = (plan) => {
    if (!plan || typeof plan === 'string') return String(plan || '')
    const lines = []
    if (plan.label || plan.skillId) lines.push(`【${plan.label || plan.skillId}】`)
    if (plan.rationale) lines.push(String(plan.rationale))
    if (Array.isArray(plan.prompts)) {
      for (const pr of plan.prompts) {
        lines.push(`— ${pr.label || '镜头'}（${pr.aspect || ''}）`)
        lines.push(String(pr.prompt || ''))
      }
    }
    if (plan.score) {
      lines.push(`自检 ${plan.score.total ?? ''}（仅展示，不锁出图）`)
      if (Array.isArray(plan.score.notes)) lines.push(...plan.score.notes.map((n) => `· ${n}`))
    }
    lines.push('disabledByScore: false')
    return lines.filter(Boolean).join('\n')
  }

  const applySkillPlanToFields = (plan) => {
    if (!plan) return
    const fillPrompt =
      typeof plan === 'object' && plan.fillPrompt != null
        ? String(plan.fillPrompt)
        : typeof plan === 'object' && Array.isArray(plan.prompts)
          ? plan.prompts.map((p) => p.prompt).filter(Boolean).join('\n\n')
          : typeof plan === 'string'
            ? plan
            : ''
    if (fillPrompt) {
      state.prompt = fillPrompt
      const promptEl = host?.querySelector('[data-ws-prompt]')
      if (promptEl instanceof HTMLTextAreaElement) promptEl.value = fillPrompt
    }
    const neg =
      typeof plan === 'object' && plan.fillNegative != null
        ? String(plan.fillNegative)
        : typeof plan === 'object' && plan.negativePrompt != null
          ? String(plan.negativePrompt)
          : null
    if (neg != null) {
      state.negativePrompt = neg
      const negEl = host?.querySelector('[data-ws-negative]')
      if (negEl instanceof HTMLTextAreaElement) negEl.value = neg
      const details = host?.querySelector('[data-ws-neg-details]')
      if (details instanceof HTMLDetailsElement && neg) details.open = true
    }
    const aspect =
      typeof plan === 'object' ? plan.fillAspect || plan.prompts?.[0]?.aspect : null
    if (aspect && aspect !== '自动') {
      state.ratio = aspect
      const ratioEl = host?.querySelector('[data-ws-param="ratio"]')
      if (ratioEl instanceof HTMLSelectElement) {
        const opt = Array.from(ratioEl.options).find((o) => o.value === aspect)
        if (opt) ratioEl.value = aspect
      }
    }
    syncFields?.()
  }


  /** Prefer state; fall back to select DOM (automation may set value without change). */
  const readSkillId = () => {
    if (state.skillId) return state.skillId
    const sel = host?.querySelector('[data-ws-param="skill"]')
    if (sel instanceof HTMLSelectElement && sel.value) {
      state.skillId = sel.value
      return state.skillId
    }
    return null
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
    const prog = host?.querySelector('[data-ws-inspire-wall] [data-ws-progress]') || host?.querySelector('[data-ws-progress]')
    const fail = host?.querySelector('[data-ws-inspire-wall] [data-ws-fail]') || host?.querySelector('[data-ws-fail]')
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
      const hasPct = task?.progress != null && Number.isFinite(Number(task.progress))
      const pct = hasPct ? Math.max(0, Math.min(100, Number(task.progress))) : null
      const barWrap = prog.querySelector('[data-ws-progress-bar]')
      const bar = prog.querySelector('[data-ws-progress-bar] > i')
      if (barWrap instanceof HTMLElement) {
        if (hasPct) barWrap.removeAttribute('data-indeterminate')
        else barWrap.setAttribute('data-indeterminate', '')
      }
      if (bar instanceof HTMLElement) bar.style.width = hasPct ? `${pct}%` : '36%'
      const label = prog.querySelector('[data-ws-progress-label]')
      if (label) label.textContent = hasPct ? `进度 ${pct}%` : '等待宿主进度'
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
    // syncStageWeight defined later in createStudioHost; safe at call-time
    try { syncStageWeight() } catch (_) {}
  }

  const paintResultActions = (show) => {
    const bar = host?.querySelector('[data-ws-inspire-wall] [data-ws-result-actions]') || host?.querySelector('[data-ws-result-actions]')
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

  const syncStageWeight = () => {
    // Image results live in right column [data-ws-inspire-wall] [data-ws-stage]
    const stage = host?.querySelector('[data-ws-inspire-wall] [data-ws-stage]')
      || host?.querySelector('[data-ws-page="image"] [data-ws-stage]')
    if (!(stage instanceof HTMLElement)) return
    const resultsEl = stage.querySelector('[data-ws-results]')
    const hasResults = !!(resultsEl && !resultsEl.hidden && resultsEl.childElementCount)
    const busy =
      !!state.task &&
      (state.task.status === 'running' ||
        state.task.status === 'queued' ||
        state.task.status === 'submitted' ||
        state.task.status === 'polling' ||
        state.task.status === 'downloading')
    const failed = state.task?.status === 'failed'
    if (hasResults) stage.setAttribute('data-has-results', '')
    else stage.removeAttribute('data-has-results')
    if (busy) stage.setAttribute('data-busy', '')
    else stage.removeAttribute('data-busy')
    const empty = stage.querySelector('[data-ws-stage-empty]')
    if (empty instanceof HTMLElement) empty.hidden = !!(hasResults || busy || failed)
    const title = stage.querySelector('[data-ws-stage-empty-title]')
    if (title instanceof HTMLElement) {
      title.hidden = !!(hasResults || busy || failed)
      if (!title.hidden) title.textContent = STAGE_EMPTY_TITLE
    }
    const hint = stage.querySelector('[data-ws-stage-empty-hint]')
    if (hint instanceof HTMLElement) {
      hint.hidden = !!(hasResults || busy || failed)
      if (!hint.hidden) hint.textContent = STAGE_EMPTY_HINT
    }
  }

  /** First paint / empty: right-column muted empty (no fake sample tiles). */
  const paintStageIdle = () => {
    const stage = host?.querySelector('[data-ws-inspire-wall] [data-ws-stage]')
      || host?.querySelector('[data-ws-page="image"] [data-ws-stage]')
    const samples = stage?.querySelector('[data-ws-stage-samples]') || host?.querySelector('[data-ws-stage-samples]')
    const resultsEl = stage?.querySelector('[data-ws-results]') || host?.querySelector('[data-ws-results]')
    const hint = stage?.querySelector('[data-ws-stage-empty-hint]') || host?.querySelector('[data-ws-stage-empty-hint]')
    const empty = stage?.querySelector('[data-ws-stage-empty]')
    if (resultsEl) {
      resultsEl.innerHTML = ''
      resultsEl.hidden = true
    }
    if (samples) {
      samples.innerHTML = ''
      samples.hidden = true
    }
    if (empty instanceof HTMLElement) empty.hidden = false
    const title = stage?.querySelector('[data-ws-stage-empty-title]')
    if (title) {
      title.hidden = false
      title.textContent = STAGE_EMPTY_TITLE
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
    syncStageWeight()
  }

  const showResultStage = () => {
    const stage = host?.querySelector('[data-ws-inspire-wall] [data-ws-stage]')
      || host?.querySelector('[data-ws-page="image"] [data-ws-stage]')
    const samples = stage?.querySelector('[data-ws-stage-samples]') || host?.querySelector('[data-ws-stage-samples]')
    const resultsEl = stage?.querySelector('[data-ws-results]') || host?.querySelector('[data-ws-results]')
    const hint = stage?.querySelector('[data-ws-stage-empty-hint]') || host?.querySelector('[data-ws-stage-empty-hint]')
    const empty = stage?.querySelector('[data-ws-stage-empty]')
    if (samples) {
      samples.innerHTML = ''
      samples.hidden = true
    }
    if (resultsEl) resultsEl.hidden = false
    // Hide empty immediately — do NOT syncStageWeight yet (results may still be empty mid-paint)
    if (empty instanceof HTMLElement) empty.hidden = true
    const title = stage?.querySelector('[data-ws-stage-empty-title]')
    if (title) {
      title.hidden = true
      title.textContent = STAGE_EMPTY_TITLE
    }
    if (hint) {
      hint.hidden = true
      hint.textContent = STAGE_EMPTY_HINT
    }
    if (stage instanceof HTMLElement) stage.setAttribute('data-has-results', '')
  }

  /**
   * Mount one history row (thumb · prompt excerpt · model · 恢复/删除).
   * @param {string} jobId
   * @param {{ snapshot?: Record<string, unknown>, value?: any, savedAt?: number }} entry
   * @param {{ persist?: boolean }} [opts]
   */
  const mountHistoryItem = (jobId, entry, opts = {}) => {
    const histEl = host?.querySelector('[data-ws-history-list]')
    if (!histEl || !jobId) return
    const persist = opts.persist !== false
    const snapshot = entry?.snapshot || captureParamSnapshot()
    const value = entry?.value
    const savedAt = entry?.savedAt || Date.now()
    historyStore.set(jobId, { snapshot, value, savedAt })

    const existing = Array.from(histEl.querySelectorAll('[data-ws-history-item]')).find(
      (el) => el.getAttribute('data-ws-history-item') === jobId,
    )
    if (existing) {
      const results = Array.isArray(value?.results) ? value.results : []
      const thumb = results.length ? pickDisplayUrl(results[0]) : ''
      const img = existing.querySelector('img')
      if (thumb && img instanceof HTMLImageElement) img.src = thumb
      if (persist) persistHistory()
      markHistoryActive(jobId)
      return
    }

    histEl.querySelector('[data-ws-history-empty]')?.remove()
    const promptText =
      (snapshot?.prompt != null ? String(snapshot.prompt) : state.prompt || '').trim()
    const snippet = promptText.slice(0, 28) || '生成结果'
    const ratio = snapshot?.ratio != null ? String(snapshot.ratio) : state.ratio || '1:1'
    const mode = snapshot?.mode != null ? String(snapshot.mode) : state.mode || MODE_TXT
    const modelId =
      snapshot?.modelId != null && String(snapshot.modelId)
        ? String(snapshot.modelId)
        : state.modelId || DEFAULT_MODEL
    const line = `${snippet} · ${ratio}`
    const modelLine = `${modelId} · ${mode}`
    const results = Array.isArray(value?.results) ? value.results : []
    const thumb = results.length ? pickDisplayUrl(results[0]) : ''

    const item = document.createElement('div')
    item.dataset.wsHistoryItem = jobId
    item.innerHTML =
      (thumb
        ? `<img src="${escapeHtml(thumb)}" alt="" width="${HIST_THUMB}" height="${HIST_THUMB}" />`
        : `<span style="width:${HIST_THUMB}px;height:${HIST_THUMB}px;border-radius:7px;background:${T.module};flex:none;"></span>`) +
      `<div class="ws-hist-meta">` +
      `<div class="ws-hist-line" title="${escapeHtml(promptText || '生成结果')}">${escapeHtml(line)}</div>` +
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
      persistHistory()
      paintHistoryEmpty()
      setStatus('已删除记录')
    })
    item.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.closest('[data-ws-history-restore],[data-ws-history-delete]'))
        return
      markHistoryActive(jobId)
      const stored = historyStore.get(jobId)
      if (stored?.value) applyGenerateResult(stored.value)
      setStatus('已从历史载入结果')
    })
    histEl.insertBefore(item, histEl.firstChild)
    markHistoryActive(jobId)
    syncHistoryChrome()
    if (persist) persistHistory()
  }

  const hydrateHistoryFromStorage = () => {
    const entries = loadHistoryEntries()
    if (!entries.length) {
      paintHistoryEmpty()
      return
    }
    for (const e of [...entries].reverse()) {
      mountHistoryItem(String(e.id), e, { persist: false })
    }
    syncHistoryChrome()
  }

  /** True empty history only — no ghost placeholder rows; demote filters when empty */
  const paintHistoryEmpty = () => {
    const histEl = host?.querySelector('[data-ws-history-list]')
    if (!histEl) return
    if (histEl.querySelector('[data-ws-history-item]')) {
      histEl.querySelector('[data-ws-history-empty]')?.remove()
      syncHistoryChrome()
      return
    }
    if (!histEl.querySelector('[data-ws-history-empty]')) {
      const empty = document.createElement('div')
      empty.dataset.wsHistoryEmpty = ''
      empty.style.cssText = `padding:8px 4px;font-size:12px;color:${T.fg3};`
      empty.textContent = HISTORY_EMPTY_HINT
      histEl.appendChild(empty)
    }
    syncHistoryChrome()
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
      progress: v.progress != null ? Number(v.progress) : state.task?.progress ?? null,
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
      syncStageWeight()
    }
    if (normalized === 'cancelled') {
      stopProgressClock()
      setStatus('客户端已取消；宿主取消未挂')
    }
  }

  const beginLocalProgress = () => {
    stopProgressClock()
    progressStartedAt = Date.now()
    // No invented % — wait for host setProgress / paintGenerateResult
    state.task = {
      id: `local-${progressStartedAt}`,
      status: 'running',
      progress: null,
      elapsedMs: 0,
      phase: 'waiting',
    }
    paintProgressUi()
    paintResultActions(false)
    const fail = host?.querySelector('[data-ws-inspire-wall] [data-ws-fail]') || host?.querySelector('[data-ws-fail]')
    if (fail) fail.removeAttribute('data-visible')
    syncStageWeight()
    setStatus('等待宿主进度…')
    // Elapsed clock only (honest wall time); never bump fake progress
    progressTimer = window.setInterval(() => {
      if (!state.task || state.task.status === 'done' || state.task.status === 'failed' || state.task.status === 'cancelled') {
        stopProgressClock()
        return
      }
      const elapsed = Date.now() - progressStartedAt
      state.task = { ...state.task, elapsedMs: elapsed }
      paintProgressUi()
    }, 500)
  }

  /**
   * Paint generate RPC result into right-column stage + history thumbs.
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
      setStatus('客户端已取消；宿主取消未挂')
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

    const resultsEl = host?.querySelector('[data-ws-inspire-wall] [data-ws-results]') || host?.querySelector('[data-ws-results]')
    const histEl = host?.querySelector('[data-ws-history-list]')
    if (resultsEl) {
      resultsEl.innerHTML = ''
      if (!results.length) {
        paintStageIdle()
      } else {
        showResultStage()
        let painted = 0
        const selectFirst = () => {
          const cards = resultsEl.querySelectorAll('[data-ws-result-card]')
          cards.forEach((c) => c.removeAttribute('data-selected'))
          const first = cards[0]
          if (first instanceof HTMLElement) first.setAttribute('data-selected', '')
        }
        for (const r of results) {
          const src = pickDisplayUrl(r)
          if (!src) continue // skip unusable — no near-black placeholder card
          const card = document.createElement('div')
          card.dataset.wsResultCard = ''
          /* Card chrome via HOST_STYLES [data-ws-result-card] — grid landing */
          const img = document.createElement('img')
          img.src = src
          img.alt = '生成结果'
          img.dataset.wsResult = ''
          img.addEventListener('error', () => {
            // Fixture / URL failed — skip card (no near-black inspireFallbackSvg)
            card.remove()
            selectFirst()
            if (!resultsEl.querySelector('[data-ws-result-card]')) {
              paintResultActions(false)
              paintStageIdle()
            } else {
              syncStageWeight()
            }
          })
          card.addEventListener('click', () => {
            resultsEl.querySelectorAll('[data-ws-result-card]').forEach((c) => c.removeAttribute('data-selected'))
            card.setAttribute('data-selected', '')
          })
          card.appendChild(img)
          resultsEl.appendChild(card)
          painted += 1
        }
        if (!painted) {
          paintStageIdle()
        } else {
          selectFirst()
          paintResultActions(true)
          syncStageWeight() // AFTER cards exist — hide empty (showResultStage sync was premature)
        }
      }
    }
    if (histEl && results.length) {
      const jobId = value?.jobId || `local-${Date.now()}`
      const prev = historyStore.get(jobId)
      mountHistoryItem(jobId, {
        snapshot: prev?.snapshot || captureParamSnapshot(),
        value,
        savedAt: Date.now(),
      })
    }
    setStatus(
      results.length
        ? `生成完成 ×${results.length}`
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
    // 三栏宽度：历史 ~264（88px 缩略）/ 结果·对话 ~318 — 可拖，记忆 localStorage
    state.paneWidths = { ...DEFAULT_PANE_WIDTHS, ...loadPaneWidths() }
    host = document.createElement('div')
    host.dataset.dshWsStudioHost = ''
    host.setAttribute('role', 'main')
    host.setAttribute('aria-label', '生图')
    // Fill the host *main content pane* only — never fixed left-inset over sidebar
    host.style.cssText =
      `display:none;position:absolute;inset:0;z-index:40;width:auto;height:auto;background:${T.bg};color:${T.fg};flex-direction:column;font-family:${T.font};font-size:${T.fontSize};line-height:1.4;overflow:hidden;color-scheme:inherit;`

    const styleEl = document.createElement('style')
    styleEl.textContent = HOST_STYLES
    host.appendChild(styleEl)

    const frame = document.createElement('div')
    frame.style.cssText = 'display:flex;flex-direction:column;flex:1;min-height:0;width:100%;'
    frame.innerHTML = `
      <header data-ws-top-bar>
        <div data-ws-mode-switch>
          <button type="button" data-ws-mode-toggle aria-expanded="false" aria-haspopup="listbox" aria-label="切换工作台模块">
            <span data-ws-mode-current>${TOP_TABS[0]}</span><span data-ws-mode-caret aria-hidden="true"> ▾</span>
          </button>
          <div data-ws-mode-menu role="listbox" aria-label="工作台模块" hidden>
            ${TOP_TABS.map(
              (t, i) =>
                `<button type="button" data-ws-top="${t}" role="option" aria-current="${i === 0 ? 'true' : 'false'}" ${i === 0 ? 'data-active' : ''}>${t}</button>`,
            ).join('')}
          </div>
        </div>
        <span style="flex:1"></span>
        <div data-ws-tool-more>
          <button type="button" data-ws-tool-more-toggle aria-expanded="false" aria-haspopup="listbox" aria-label="${TOOL_MORE}">${TOOL_MORE} ▾</button>
          <div data-ws-tool-more-menu role="listbox" aria-label="${TOOL_MORE}" hidden>
            ${TOOL_ENTRIES.map((t) => `<button type="button" data-ws-tool="${t}" role="option">${t}</button>`).join('')}
          </div>
        </div>
        <span data-ws-conn-status title="${CHROME.connected}">${CHROME.connected}</span>
      </header>
      <div data-ws-cols>
        <!-- LEFT: 历史记录 -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid ${T.border2};padding:8px;overflow:auto;background:${T.sidebar};display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;font-weight:600;color:${T.fg};">${COLUMNS.history}</div>
          <div data-ws-history-filters hidden>
            <input type="search" placeholder="搜索历史" aria-label="搜索历史" style="width:100%;${css.field};font-size:12px;" />
            <div style="display:flex;gap:6px;margin-top:6px;">
              <select aria-label="全部模型" style="flex:1;${css.select}">
                <option>全部模型</option>
              </select>
              <select aria-label="全部比例" style="flex:1;${css.select}">
                <option>全部比例</option>
              </select>
            </div>
          </div>
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:5px;flex:1;min-height:0;"></div>
          <button type="button" data-ws-history-clear hidden disabled style="align-self:flex-start;${css.pill({ color: T.fg3 })}">${HISTORY_ACTIONS.clear}</button>
        </aside>
        <div data-ws-pane-drag="history" title="拖拽调整历史栏宽度"></div>

        <!-- CENTER: write + generate ONLY (no result stage / no white sea) -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:auto;display:flex;flex-direction:column;justify-content:flex-start;min-width:0;background:${T.bg};border-left:0;border-right:0;">

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
                <span data-ws-ref-hint style="font-size:11px;color:${T.fg3};">上传 / 拖拽 / 粘贴参考图</span>
                <span style="flex:1"></span>
                <button type="button" data-ws-ref-upload style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
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
                  <button type="button" data-ws-action="templates" style="padding:0 10px;height:24px;border:1px solid ${T.focus};border-radius:999px;background:${T.hover};color:${T.focus};cursor:pointer;font:inherit;font-size:11px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 9px;height:24px;border:1px solid ${T.border2};border-radius:999px;background:${T.module};color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="2" placeholder="描述你想生成的画面" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
              </div>
              <details data-ws-neg-details>
                <summary>
                  <span data-ws-neg-chev aria-hidden="true">▸</span>
                  <span>${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:1px 7px;border:0;border-radius:4px;background:${T.active};color:${T.fg2};cursor:pointer;font:inherit;font-size:10.5px;">${PROMPT_FIELDS.clearNegative}</button>
                </summary>
                <textarea data-ws-negative rows="1" placeholder="不想出现的元素（可选）" style="width:100%;resize:vertical;padding:5px 8px;border-radius:7px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12px;"></textarea>
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
              <input data-ws-param="model" placeholder="选择模型" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:${T.fg2};cursor:pointer;user-select:none;margin:0;">
                <input type="checkbox" data-ws-compare style="accent-color:${T.focus};" />
                ${COMPARE}
              </label>
            </div>

            <div data-ws-skill-model-row>
              <label>
                <span style="${css.paramLabel}">${PROMPT_ACTIONS.skill}</span>
                <select data-ws-param="skill" aria-label="${PROMPT_ACTIONS.skill}" style="${css.select}">
                  <option value="">（不使用）</option>
                  ${SKILL_ENTRIES.map((s) => `<option value="${s}">${s}</option>`).join('')}
                </select>
              </label>
            </div>

            <div data-ws-plan-panel>
              <div style="${css.paramLabel}">创作方案</div>
              <textarea data-ws-plan-text rows="2" placeholder="选 Skill 后点「想方案」；也可手写" style="width:100%;resize:vertical;min-height:48px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
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

        <div data-ws-pane-drag="chat" title="拖拽调整结果/对话栏宽度"></div>
        <!-- RIGHT: 生成结果 landing (replaces empty 灵感 as primary) -->
        <aside data-ws-inspire-wall style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:flex;flex-direction:column;gap:8px;background:${T.bg};overflow:hidden;min-height:0;">
          <div data-ws-stage aria-label="${STAGE_LABEL}">
            <div data-ws-stage-head>
              <strong>${STAGE_LABEL}</strong>
            </div>
            <div data-ws-stage-empty>
              <strong data-ws-stage-empty-title>${STAGE_EMPTY_TITLE}</strong>
              <span data-ws-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
            </div>
            <div data-ws-progress>
              <div data-ws-progress-meta>
                <span data-ws-progress-label>等待宿主进度</span>
                <span data-ws-progress-elapsed>耗时 0s</span>
                <span data-ws-progress-phase style="color:${T.fg3};"></span>
                <span style="flex:1"></span>
                <button type="button" data-ws-cancel style="${css.pill()}">${RESULT_ACTIONS[0]}</button>
              </div>
              <div data-ws-progress-bar><i></i></div>
            </div>
            <div data-ws-fail>
              <div data-ws-fail-reason>原因：出图失败</div>
              <button type="button" data-ws-retry style="align-self:flex-start;${css.pill({ pad: '4px 12px', size: '12px', fill: T.active, color: T.fg })}">${RESULT_ACTIONS[1]}</button>
            </div>
            <div data-ws-stage-samples hidden></div>
            <div data-ws-results hidden></div>
            <div data-ws-result-actions>
              ${RESULT_ACTIONS.filter((a) => a !== '取消' && a !== '重试')
                .map((a) => {
                  const unwired = a === '加画廊' || UNWIRED_RESULT_ACTIONS.has(a)
                  return `<button type="button" data-ws-result-action="${a}"${unwired ? ' data-ws-unwired title="未接线"' : ''}>${a}</button>`
                })
                .join('')}
            </div>
          </div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:none;flex-direction:column;background:${T.bg};">
          <strong style="font-size:13px;color:${T.fg};">${COLUMNS.chat}</strong>
          <p style="margin:8px 0 0;font-size:12px;color:${T.fg3};">对话线程（可内联出图）</p>
        </aside>
      </div>
    `
    host.appendChild(frame)

    host.querySelector('[data-ws-mode-toggle]')?.addEventListener('click', (e) => {
      e.stopPropagation()
      const menu = host.querySelector('[data-ws-mode-menu]')
      const toggle = host.querySelector('[data-ws-mode-toggle]')
      if (!(menu instanceof HTMLElement) || !(toggle instanceof HTMLElement)) return
      const open = menu.hidden
      menu.hidden = !open
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
    host.querySelectorAll('[data-ws-mode-menu] [data-ws-top]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        setTopTab(btn.getAttribute('data-ws-top') || IMAGE_PAGE)
      })
    })
    const closeModeMenu = (e) => {
      const sw = host?.querySelector('[data-ws-mode-switch]')
      if (!(sw instanceof HTMLElement)) return
      if (e.target instanceof Node && sw.contains(e.target)) return
      const menu = host.querySelector('[data-ws-mode-menu]')
      const toggle = host.querySelector('[data-ws-mode-toggle]')
      if (menu instanceof HTMLElement) menu.hidden = true
      if (toggle instanceof HTMLElement) toggle.setAttribute('aria-expanded', 'false')
    }
    document.addEventListener('click', closeModeMenu)
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
    const onSkillSelect = (e) => {
      const t = /** @type {HTMLSelectElement} */ (e.target)
      const id = t.value || null
      state.skillId = id
      if (id) applySkillSideEffects(id)
      else state.skillPlan = null
      syncFields()
      paintSkillPlan()
      setStatus(id ? `已选「${id}」` : '已取消 Skill')
    }
    const skillSelEl = host.querySelector('[data-ws-param="skill"]')
    skillSelEl?.addEventListener('change', onSkillSelect)
    skillSelEl?.addEventListener('input', onSkillSelect)
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
      persistHistory()
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
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener('click', async () => {
      const prompt = String(state.prompt || '').trim()
      if (!prompt) {
        setStatus('请先输入提示词再增强')
        return
      }
      const rpc = getRpc?.()
      if (!rpc || typeof rpc.call !== 'function') {
        // Honest — never fake 「已增强」
        setStatus('ENHANCE_NOT_CONFIGURED')
        return
      }
      setStatus(`${PROMPT_ACTIONS.enhance}中…`)
      try {
        const result = await rpc.call('/dsh-ws', 'enhancePrompt', {
          prompt,
          ratio: state.ratio,
          clarity: state.clarity,
          modelId: state.modelId,
        })
        if (result?.ok && result.value?.prompt) {
          state.prompt = String(result.value.prompt)
          syncFields()
          setStatus(`${PROMPT_ACTIONS.enhance}完成`)
        } else {
          const code = result?.error?.code ? String(result.error.code) : ''
          const msg = result?.error?.message ? String(result.error.message) : '增强失败'
          // Missing VISION_* → exact ENHANCE_NOT_CONFIGURED; never fake 「已增强」
          if (code === 'ENHANCE_NOT_CONFIGURED') {
            setStatus('ENHANCE_NOT_CONFIGURED')
          } else if (code === 'UNKNOWN_ENDPOINT' || code === 'HOST_PROXY_NOT_WIRED') {
            setStatus(`「${PROMPT_ACTIONS.enhance}」未接线`)
          } else {
            setStatus(
              code
                ? `${PROMPT_ACTIONS.enhance}失败：${msg}（${code}）`
                : `${PROMPT_ACTIONS.enhance}失败：${msg}`,
            )
          }
        }
      } catch (e) {
        const code = e?.code ? String(e.code) : ''
        if (code === 'ENHANCE_NOT_CONFIGURED') setStatus('ENHANCE_NOT_CONFIGURED')
        else setStatus(`${PROMPT_ACTIONS.enhance}失败：${e?.message || e}`)
      }
    })
    host.querySelector('[data-ws-action="templates"]')?.addEventListener('click', () => {
      gifApi?.close?.()
      uiDesignApi?.close?.()
      templateApi?.open?.()
      setStatus(PROMPT_ACTIONS.templates)
    })

    host.querySelector('[data-ws-tool-more-toggle]')?.addEventListener('click', (e) => {
      e.stopPropagation()
      const menu = host.querySelector('[data-ws-tool-more-menu]')
      const toggle = host.querySelector('[data-ws-tool-more-toggle]')
      if (!(menu instanceof HTMLElement) || !(toggle instanceof HTMLElement)) return
      const openMenu = menu.hidden
      menu.hidden = !openMenu
      toggle.setAttribute('aria-expanded', openMenu ? 'true' : 'false')
    })
    host.querySelectorAll('[data-ws-tool-more-menu] [data-ws-tool]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const name = btn.getAttribute('data-ws-tool') || ''
        const menu = host.querySelector('[data-ws-tool-more-menu]')
        const toggle = host.querySelector('[data-ws-tool-more-toggle]')
        if (menu instanceof HTMLElement) menu.hidden = true
        if (toggle instanceof HTMLElement) toggle.setAttribute('aria-expanded', 'false')
        templateApi?.close?.()
        if (name === GIF_PAGE || name === 'GIF') {
          uiDesignApi?.close?.()
          gifApi?.open?.()
        } else if (name === UI_DESIGN_PAGE || name === 'UI 设计') {
          gifApi?.close?.()
          uiDesignApi?.open?.()
        } else if (name === '反推提示词') {
          // Thin: dispatch → client.js reversePrompt RPC (VISION_*)
          host.dispatchEvent(
            new CustomEvent('dsh-ws-reverse-prompt', {
              bubbles: true,
              detail: {
                refImages: Array.isArray(state.refImages) ? state.refImages : [],
                instruction: undefined,
              },
            }),
          )
        } else {
          setStatus(`「${name}」未接线`)
        }
      })
    })
    const closeToolMore = (e) => {
      const wrap = host?.querySelector('[data-ws-tool-more]')
      if (!(wrap instanceof HTMLElement)) return
      if (e.target instanceof Node && wrap.contains(e.target)) return
      const menu = host.querySelector('[data-ws-tool-more-menu]')
      const toggle = host.querySelector('[data-ws-tool-more-toggle]')
      if (menu instanceof HTMLElement) menu.hidden = true
      if (toggle instanceof HTMLElement) toggle.setAttribute('aria-expanded', 'false')
    }
    document.addEventListener('click', closeToolMore)


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
          const skillId = readSkillId()
          if (!skillId) {
            setStatus('请先选择创作 Skill')
            return
          }
          applySkillSideEffects?.(skillId)
          paintSkillPlan()
          const ta = host.querySelector('[data-ws-plan-text]')
          if (ta instanceof HTMLTextAreaElement) {
            ta.placeholder = '正在想方案…'
          }
          setStatus('想方案中…')
          host.dispatchEvent(
            new CustomEvent('dsh-ws-plan', {
              bubbles: true,
              detail: { action, skillId, prompt: state.prompt, skillPlan: state.skillPlan },
            }),
          )
        } else if (action === 'accept') {
          // Fill prompt from plan; score never disables. Then generate (就这样出图).
          applySkillPlanToFields(state.skillPlan)
          dispatchGenerate({ fromPlan: true })
        }
      })
    })

    host.querySelector('[data-ws-inspire-wall] [data-ws-cancel]')?.addEventListener('click', () => {
      stopProgressClock()
      state.task = {
        ...(state.task || {}),
        status: 'cancelled',
        phase: 'cancelled',
        elapsedMs: progressStartedAt ? Date.now() - progressStartedAt : state.task?.elapsedMs || 0,
      }
      paintProgressUi()
      setStatus('客户端已取消；宿主取消未挂')
      host.dispatchEvent(
        new CustomEvent('dsh-ws-cancel', {
          bubbles: true,
          detail: { jobId: state.task?.id, reason: 'user' },
        }),
      )
    })

    host.querySelector('[data-ws-inspire-wall] [data-ws-retry]')?.addEventListener('click', () => {
      dispatchGenerate({ retry: true })
    })

    host.querySelector('[data-ws-inspire-wall] [data-ws-result-actions]')?.addEventListener('click', (e) => {
      const btn = e.target instanceof Element ? e.target.closest('[data-ws-result-action]') : null
      if (!btn) return
      const action = btn.getAttribute('data-ws-result-action') || ''
      const selectedImg =
        host.querySelector('[data-ws-inspire-wall] [data-ws-results] [data-ws-result-card][data-selected] img[data-ws-result]') ||
        host.querySelector('[data-ws-inspire-wall] [data-ws-results] img[data-ws-result]') ||
        host.querySelector('[data-ws-results] img[data-ws-result]')
      const src = selectedImg instanceof HTMLImageElement ? selectedImg.src : ''
      /** Host-only actions with no document listener / studio handler yet */
      if (action === '下载') {
        if (src) {
          const a = document.createElement('a')
          a.href = src
          a.download = `dsh-ws-${Date.now()}.png`
          a.rel = 'noopener'
          a.click()
          setStatus('已下载')
        } else {
          setStatus('无图可下载')
        }
        return
      }
      if (action === '复制提示词') {
        const textPrompt = state.prompt || ''
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(textPrompt).catch(() => {})
        setStatus(textPrompt ? '已复制提示词' : '无提示词可复制')
        return
      }
      if (action === '当参考图') {
        if (src) {
          state.mode = MODE_IMG
          state.refImages = [
            ...(state.refImages || []),
            { id: `ref-result-${Date.now()}`, url: src, name: '结果参考' },
          ]
          paintChips()
          setStatus('已设为参考图')
        } else {
          setStatus('无图可作参考')
        }
        return
      }
      if (action === '重新生成') {
        dispatchGenerate({ regenerate: true })
        return
      }
      if (action === '加画廊') {
        // Ask client to persist via /dsh-ws when gallery write RPC exists; else honest 未接线
        host.dispatchEvent(
          new CustomEvent('dsh-ws-gallery-add', {
            bubbles: true,
            detail: {
              src,
              prompt: state.prompt,
              snapshot: captureParamSnapshot(),
              storagePaths,
            },
          }),
        )
        return
      }
      if (UNWIRED_RESULT_ACTIONS.has(action)) {
        // Prefer 「未接线」 when no host listener — do NOT claim 「已触发」
        // 再编辑 has no edit path yet
        setStatus(`「${action}」未接线`)
        return
      }
      host.dispatchEvent(
        new CustomEvent('dsh-ws-result-action', {
          bubbles: true,
          detail: { action, src, prompt: state.prompt },
        }),
      )
      setStatus(`「${action}」未接线`)
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
    videoApi?.dispose?.()
    canvasApi?.dispose?.()
    galleryApi?.dispose?.()
    ecomApi?.dispose?.()
    gifApi?.dispose?.()
    uiDesignApi?.dispose?.()
    templateApi?.dispose?.()
    videoApi = mountVideoPage(host, { T, css, paneWidths: state.paneWidths })
    canvasApi = mountCanvasPage(host, { T, css })
    galleryApi = mountGalleryPage(host, { T, css, getRpc })
    ecomApi = mountEcomPage(host, { T, css })
    gifApi = mountGifHost(host, { T, css, setStatus })
    uiDesignApi = mountUiDesignHost(host, { T, css, setStatus })
    templateApi = mountTemplateHost(host, {
      T,
      css,
      setStatus,
      onFillPrompt: (text) => {
        state.prompt = text || ''
        syncFields()
        setStatus('已一键回填')
        return true
      },
    })
    const initialTop =
      state.topTab === VIDEO_PAGE
        ? VIDEO_PAGE
        : state.topTab === CANVAS_PAGE
          ? CANVAS_PAGE
          : state.topTab === GALLERY_PAGE
            ? GALLERY_PAGE
            : state.topTab === ECOM_PAGE
              ? ECOM_PAGE
              : IMAGE_PAGE
    host.setAttribute('data-ws-top-page', initialTop)
    videoApi.setPage(initialTop)
    canvasApi.setPage(initialTop)
    galleryApi.setPage(initialTop)
    ecomApi.setPage(initialTop)
    paintChat()
    syncFields()
    paintStageIdle()
    paintHistoryEmpty()
    hydrateHistoryFromStorage()
    host.dispatchEvent(
      new CustomEvent('dsh-ws-storage-paths-request', { bubbles: true, detail: {} }),
    )
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
    /**
     * Host storage.paths seat (dataDir + media/gallery|history|generated).
     * Re-keys local history persist when dataDir becomes known.
     * @param {{ dataDir?: string, generated?: string, gallery?: string, history?: string } | null} paths
     */
    setStoragePaths(paths) {
      ensure()
      const prevKey = historyStorageKey()
      storagePaths = paths && typeof paths === 'object' ? { ...paths } : null
      const nextKey = historyStorageKey()
      if (prevKey !== nextKey) {
        // Reload history for the namespaced key (do not wipe other tenants)
        const histEl = host?.querySelector('[data-ws-history-list]')
        if (histEl) histEl.innerHTML = ''
        historyStore.clear()
        activeHistoryId = null
        hydrateHistoryFromStorage()
      }
    },
    /** @param {boolean} on */
    setConnected(on) {
      ensure()
      paintConnStatus(!!on)
    },
    getHostEl() {
      return host
    },
    /** Honest video failure — never invent success; status text verbatim (e.g. VIDEO_NOT_CONFIGURED) */
    paintVideoStubFailure(message) {
      ensure()
      videoApi?.showStubFailure?.(message || 'VIDEO_NOT_CONFIGURED')
    },
    /** Live video.async results */
    paintVideoResult(value) {
      ensure()
      videoApi?.paintVideoResult?.(value)
    },
    setVideoProgress(value) {
      ensure()
      videoApi?.setVideoProgress?.(value)
    },
    /** Fill 普通生图 prompt from reversePrompt RPC */
    applyReversedPrompt(text) {
      ensure()
      state.prompt = String(text || '')
      syncFields()
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
     * Paint generate RPC result into right-column stage + history thumbs.
     * Accepts phase progress / failed / done payloads.
     * @param {{ jobId?: string, phase?: string, status?: string, progress?: number, elapsedMs?: number, error?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure()
      applyGenerateResult(value)
    },
    /**
     * Apply host planSkill result to 方案卡 (display only; never locks CTA).
     * @param {any} plan
     */
    paintSkillPlanResult(plan) {
      ensure()
      state.skillPlan = plan
      const ta = host?.querySelector('[data-ws-plan-text]')
      if (ta instanceof HTMLTextAreaElement) {
        ta.value = formatPlanCard(plan)
        ta.placeholder = '方案可改；点「就这样出图」填入提示词'
      }
      paintSkillPlan()
      const scoreNote =
        plan && typeof plan === 'object' && plan.score
          ? `自检 ${plan.score.total ?? ''}（不锁出图）`
          : '方案已就绪'
      setStatus(scoreNote)
    },
    /** Fill prompt/negative/ratio from current skillPlan without generating. */
    applySkillPlanToPrompt() {
      ensure()
      applySkillPlanToFields(state.skillPlan)
      setStatus('已将方案填入提示词（可再改）')
    },
    dispose() {
      stopProgressClock()
      videoApi?.dispose?.()
      videoApi = null
      canvasApi?.dispose?.()
      canvasApi = null
      galleryApi?.dispose?.()
      galleryApi = null
      ecomApi?.dispose?.()
      ecomApi = null
      gifApi?.dispose?.()
      gifApi = null
      uiDesignApi?.dispose?.()
      uiDesignApi = null
      templateApi?.dispose?.()
      templateApi = null
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
