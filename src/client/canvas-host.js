/**
 * 无限画布 page shell — independent of 普通生图 dock.
 * VisioWork-shaped density only; original CSS via --dsw-* host tokens.
 * Labels exact from ../ui/labels.js.
 * 发送 → gather linked text/refs → dsh-ws-canvas-generate → client callCtaRpc(/dsh-ws/generate).
 * Never fake success.
 */
import {
  CANVAS_NODES,
  CANVAS_NODE_TOOLS,
  CANVAS_CHROME,
  PARAM_LABELS,
  RATIOS,
  CLARITY,
  COUNTS,
  PROMPT_FIELDS,
  MODE_TABS,
  CTA,
} from '../ui/labels.js'

export const CANVAS_PAGE = '无限画布'
export const IMAGE_PAGE = '普通生图'
export const VIDEO_PAGE = '视频生成'

const DEFAULT_PROJECT_NAME = '未命名项目'
const EDGE_HINT = '文本→配置＝提示词；图片→配置＝参考图（第一张＝图生图底图）'
const ADD_NODE_HINT = '双击空白或点「添加」建节点；选配置后底部「开始生成」真出图'
const MODE_TXT = MODE_TABS[0]
const MODE_IMG = MODE_TABS[1]
/** Studio default — empty 「选择模型」 must not block or POST blank modelId */
const DEFAULT_CANVAS_MODEL = 'grok-imagine-image'
const STUB_ACTION = (name) => `「${name}」未接线`

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** @returns {string} */
function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

/**
 * Nova-shaped: walk incoming edges into cfg, skip genConfig, collect text/image resources.
 * @param {ReturnType<typeof defaultCanvasState>} state
 * @param {string} cfgId
 */
function upstreamResourceNodes(state, cfgId) {
  const byId = new Map(state.nodes.map((n) => [n.id, n]))
  const incoming = new Map()
  for (const edge of state.edges) {
    const list = incoming.get(edge.to) || []
    list.push(edge)
    incoming.set(edge.to, list)
  }
  const out = []
  const visited = new Set([cfgId])
  const walk = (targetId) => {
    for (const edge of incoming.get(targetId) || []) {
      if (visited.has(edge.from)) continue
      visited.add(edge.from)
      const src = byId.get(edge.from)
      if (!src || src.type === 'genConfig') continue
      walk(src.id)
      if (src.type === 'text' || src.type === 'image') out.push(src)
    }
  }
  walk(cfgId)
  return out
}

/**
 * Nova default buildNodeGenerationContext (no route/composer tokens):
 * prompt = cfg.prompt + upstream texts; refs = linked image srcs; mode by refs.
 * @param {ReturnType<typeof defaultCanvasState>} state
 * @param {any} cfg
 */
function buildCanvasGenerateDetail(state, cfg) {
  const inputs = upstreamResourceNodes(state, cfg.id)
  const textParts = inputs
    .filter((n) => n.type === 'text')
    .map((n) => String(n.text || '').trim())
    .filter(Boolean)
  const upstreamText = textParts.join('\n\n')
  const basePrompt = String(cfg.prompt || '').trim()
  const prompt = upstreamText ? (basePrompt ? `${basePrompt}\n\n${upstreamText}` : upstreamText) : basePrompt
  const refImages = inputs
    .filter((n) => n.type === 'image' && String(n.src || '').trim())
    .map((n) => ({
      id: n.id,
      url: String(n.src),
      name: n.name || `${n.id}.png`,
    }))
  const mode = refImages.length ? MODE_IMG : MODE_TXT
  return {
    projectId: state.projectId,
    nodeId: cfg.id,
    prompt,
    modelId: String(cfg.modelId || '').trim() || DEFAULT_CANVAS_MODEL,
    ratio: cfg.ratio || RATIOS[0],
    count: Math.min(Math.max(Number(cfg.count) || 1, 1), 4),
    clarity: cfg.clarity || CLARITY[0],
    mode,
    refImages,
    textCount: textParts.length,
    imageCount: refImages.length,
  }
}

/** Pick displayable result URL (same spirit as studio pickDisplayUrl). */
function pickCanvasResultUrl(r) {
  if (typeof r === 'string') {
    const url = r.trim()
    if (!url || /^file:/i.test(url)) return ''
    return url
  }
  const url =
    r?.url != null
      ? String(r.url)
      : r?.dataUrl != null
        ? String(r.dataUrl)
        : r?.src != null
          ? String(r.src)
          : r?.image != null
            ? String(r.image)
            : ''
  if (!url) return ''
  if (/^file:/i.test(url)) return ''
  return url
}

/**
 * Shared token map — same semantic --dsw-* keys as studio-host / video-host.
 * @typedef {Record<string, string>} TokenMap
 */

export function canvasHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="canvas"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%; flex-direction:column;
}
[data-dsh-ws-studio-host][data-ws-top-page="无限画布"] [data-ws-page="canvas"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="无限画布"] [data-ws-page="image"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host][data-ws-top-page="无限画布"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="无限画布"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="无限画布"] [data-ws-page="ecom"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-bar] {
  display:flex; align-items:center; gap:8px; flex-shrink:0;
  padding:6px 12px; border-bottom:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-name] {
  font-size:13px; font-weight:600; color: var(--dsw-alias-label-primary);
  border:0; background:transparent; padding:2px 4px; border-radius:6px;
  min-width:6rem; max-width:16rem;
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-name]:focus {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:1px;
  background: var(--dsw-specific-input-major);
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport-wrap] {
  position:relative; flex:1; min-height:0; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport] {
  position:absolute; inset:0; overflow:hidden; cursor:default;
  touch-action:none;
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport][data-panning] {
  cursor:grabbing;
}
[data-dsh-ws-studio-host] [data-ws-canvas-world] {
  position:absolute; left:0; top:0; transform-origin:0 0; will-change:transform;
}
[data-dsh-ws-studio-host] [data-ws-canvas-edges] {
  position:absolute; left:0; top:0; width:4000px; height:4000px;
  pointer-events:none; overflow:visible;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node] {
  position:absolute; min-width:160px; max-width:240px;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:10px; box-shadow: var(--dsw-elevation-panel, 0 1px 4px rgba(0,0,0,.06));
  display:flex; flex-direction:column; gap:0; user-select:none;
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-selected] {
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-head] {
  display:flex; align-items:center; gap:6px; padding:6px 8px;
  border-bottom:1px solid var(--dsw-alias-border-l1);
  font-size:11px; font-weight:600; color: var(--dsw-alias-label-secondary);
  cursor:grab;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-dragging] [data-ws-canvas-node-head] {
  cursor:grabbing;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-body] {
  padding:8px; font-size:12px; color: var(--dsw-alias-label-primary);
  display:flex; flex-direction:column; gap:6px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-body] textarea {
  width:100%; min-height:56px; resize:vertical; padding:6px 8px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-specific-input-major); color: var(--dsw-alias-label-primary);
  font:inherit; font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub] {
  aspect-ratio:1; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent));
  display:flex; align-items:center; justify-content:center;
  color: var(--dsw-alias-label-tertiary); font-size:11px; text-align:center; padding:8px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub][data-empty] {
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent));
  color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-img] {
  width:100%; aspect-ratio:1; object-fit:cover; border-radius:8px;
  background: var(--dsw-alias-bg-module-platform); display:block;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub][data-generating] {
  border-style:solid; color: var(--dsw-alias-label-secondary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-tools] {
  display:flex; flex-wrap:wrap; gap:4px; padding:0 8px 8px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-port] {
  position:absolute; width:10px; height:10px; border-radius:999px;
  background: var(--dsw-alias-bg-base);
  border:2px solid var(--dsw-alias-state-business-primary);
  top:50%; margin-top:-5px; cursor:crosshair; z-index:2;
}
[data-dsh-ws-studio-host] [data-ws-canvas-port="in"] { left:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-port="out"] { right:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-minimap] {
  position:absolute; left:10px; bottom:10px; z-index:3;
  width:120px; height:80px; border-radius:8px;
  border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent)); opacity:.92;
  pointer-events:none; overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-canvas-minimap] [data-ws-mm-dot] {
  position:absolute; width:8px; height:6px; border-radius:2px;
  background: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-fit] {
  position:absolute; right:10px; bottom:10px; z-index:3;
}
[data-dsh-ws-studio-host] [data-ws-canvas-add-bar] {
  position:absolute; left:50%; top:10px; transform:translateX(-50%); z-index:3;
  display:flex; gap:6px; padding:4px; border-radius:10px;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-canvas-generator] {
  display:none; flex-shrink:0; flex-direction:column; gap:6px;
  padding:8px 12px 10px;
  border-top:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-canvas-generator][data-open] {
  display:flex;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:hover:not([disabled]) {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-canvas-send][disabled],
[data-dsh-ws-studio-host] [data-ws-canvas-send]:disabled {
  opacity:.45; cursor:not-allowed; filter:grayscale(.3); pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-canvas-send]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-status] {
  margin:0; font-size:11px; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] {
  display:flex; flex-wrap:wrap; gap:4px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button {
  padding:2px 8px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background:transparent; color: var(--dsw-alias-label-secondary);
  font:inherit; font-size:11.5px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button[aria-current="true"] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l4);
}
`
}

/**
 * Default canvas UI state (shell only).
 * Empty state: 文本 + 生成配置 nodes (开箱能用).
 */
export function defaultCanvasState() {
  const textId = 'n-text-seed'
  const cfgId = 'n-cfg-seed'
  return {
    projectId: 'proj-default',
    projects: [{ id: 'proj-default', name: DEFAULT_PROJECT_NAME }],
    viewport: { x: 40, y: 40, zoom: 1 },
    nodes: [
      {
        type: 'text',
        id: textId,
        x: 80,
        y: 120,
        text: '',
      },
      {
        type: 'genConfig',
        id: cfgId,
        x: 360,
        y: 100,
        prompt: '',
        modelId: DEFAULT_CANVAS_MODEL,
        ratio: RATIOS[0],
        count: COUNTS[0],
        clarity: CLARITY[0],
      },
    ],
    edges: [{ id: 'e-seed', from: textId, to: cfgId }],
    selection: [cfgId],
    generatorOpen: true,
    connectFrom: null,
  }
}

/**
 * @param {TokenMap} T
 * @param {object} css
 * @param {ReturnType<typeof defaultCanvasState>} state
 */
export function buildCanvasPageHtml(T, css, state) {
  const project = state.projects.find((p) => p.id === state.projectId) || state.projects[0]
  const projectOptions = state.projects
    .map(
      (p) =>
        `<option value="${escapeHtml(p.id)}" ${p.id === state.projectId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`,
    )
    .join('')

  const chip = (param, values, selected) =>
    values
      .map((v) => {
        const val = String(v)
        const on = val === String(selected)
        return `<button type="button" data-ws-canvas-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? 'true' : 'false'}">${escapeHtml(val)}</button>`
      })
      .join('')

  const nodeTools = Object.values(CANVAS_NODE_TOOLS)
    .map((label) => `<button type="button" data-ws-canvas-tool="${escapeHtml(label)}" style="${css.pill({ size: '11px', fill: T.module })}">${escapeHtml(label)}</button>`)
    .join('')

  return `
<div data-ws-page="canvas" role="region" aria-label="${CANVAS_PAGE}">
  <div data-ws-canvas-project-bar>
    <input type="text" data-ws-canvas-project-name value="${escapeHtml(project?.name || DEFAULT_PROJECT_NAME)}" aria-label="项目名" />
    <button type="button" data-ws-canvas-new style="${css.pill({ size: '11px', fill: T.module })}">${CANVAS_CHROME.newProject}</button>
    <button type="button" data-ws-canvas-rename style="${css.pill({ size: '11px', fill: T.module })}">${CANVAS_CHROME.rename}</button>
    <label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:${T.fg2};">
      <span>项目</span>
      <select data-ws-canvas-project-list aria-label="项目列表切换" style="${css.select}">${projectOptions}</select>
    </label>
    <span style="flex:1"></span>
    <span style="font-size:11px;color:${T.fg3};">${EDGE_HINT}</span>
  </div>

  <div data-ws-canvas-viewport-wrap>
    <div data-ws-canvas-add-bar role="toolbar" aria-label="添加节点">
      <button type="button" data-ws-canvas-add="text" style="${css.pill({ size: '11px', fill: T.module })}">+ ${CANVAS_NODES.text}</button>
      <button type="button" data-ws-canvas-add="image" style="${css.pill({ size: '11px', fill: T.module })}">+ ${CANVAS_NODES.image}</button>
      <button type="button" data-ws-canvas-add="genConfig" style="${css.pill({ size: '11px', fill: T.module })}">+ ${CANVAS_NODES.genConfig}</button>
      <button type="button" data-ws-canvas-add="video" style="${css.pill({ size: '11px', fill: T.module })}">+ ${CANVAS_NODES.video}</button>
    </div>

    <div data-ws-canvas-viewport tabindex="0" aria-label="无限画布视口">
      <div data-ws-canvas-world>
        <svg data-ws-canvas-edges xmlns="http://www.w3.org/2000/svg"></svg>
        <div data-ws-canvas-nodes></div>
      </div>
    </div>

    <div data-ws-canvas-minimap aria-hidden="true" title="小地图">
      <div data-ws-mm-dots></div>
    </div>
    <button type="button" data-ws-canvas-fit style="${css.pill({ size: '11px', fill: T.bg })}">${CANVAS_CHROME.fitAll}</button>
  </div>

  <div data-ws-canvas-generator ${state.generatorOpen ? 'data-open' : ''} aria-label="底部生成器">
    <div style="display:flex;align-items:baseline;gap:8px;">
      <strong style="font-size:12px;color:${T.fg2};">${CANVAS_NODES.genConfig}</strong>
      <span style="font-size:11px;color:${T.fg3};">${ADD_NODE_HINT}</span>
    </div>
    <div>
      <div style="${css.paramLabel};margin-bottom:4px;">${PROMPT_FIELDS.prompt}</div>
      <textarea data-ws-canvas-gen-prompt rows="2" placeholder="写提示词或连文本节点后点开始生成" style="width:100%;min-height:52px;padding:6px 8px;border:1px solid ${T.border2};border-radius:8px;background:${T.input};color:${T.fg};font:inherit;font-size:12px;"></textarea>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css.paramLabel}">${PARAM_LABELS.model}</span>
        <input data-ws-canvas-param-model value="${escapeHtml(state.nodes.find((n) => n.type === 'genConfig')?.modelId || DEFAULT_CANVAS_MODEL)}" placeholder="${escapeHtml(DEFAULT_CANVAS_MODEL)}" style="padding:0 10px;height:28px;border-radius:14px;width:10rem;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;" />
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css.paramLabel}">${PARAM_LABELS.ratio}</span>
        <div data-ws-canvas-chips data-param="ratio">${chip('ratio', RATIOS, state.nodes.find((n) => n.type === 'genConfig')?.ratio || RATIOS[0])}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css.paramLabel}">${PARAM_LABELS.clarity}</span>
        <div data-ws-canvas-chips data-param="clarity">${chip('clarity', CLARITY, CLARITY[0])}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css.paramLabel}">${PARAM_LABELS.count}</span>
        <div data-ws-canvas-chips data-param="count">${chip('count', COUNTS, COUNTS[0])}</div>
      </div>
    </div>
    <div data-ws-canvas-node-tools-slot style="display:flex;flex-wrap:wrap;gap:4px;">
      ${nodeTools}
    </div>
    <button type="button" data-ws-canvas-send style="${css.cta}">${CTA}</button>
    <p data-ws-canvas-status class="note">拖节点 · 端口连线 · ${CTA} → 真 /dsh-ws/generate（失败如实报错）</p>
  </div>
</div>
`
}

/**
 * Mount canvas page into host (sibling of image/video pages).
 * @param {HTMLElement} host
 * @param {{ T: TokenMap, css: object }} opts
 * @returns {{ state: ReturnType<typeof defaultCanvasState>, setPage: (tab: string) => void, dispose: () => void }}
 */
export function mountCanvasPage(host, opts) {
  const { T, css } = opts
  const state = defaultCanvasState()
  /** Last genConfig the composer was editing — survives blank/text clicks */
  let activeConfigId = state.selection.find((id) =>
    state.nodes.some((n) => n.id === id && n.type === 'genConfig'),
  ) || null

  let styleEl = host.querySelector('style[data-ws-canvas-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-canvas-styles', '')
    styleEl.textContent = canvasHostStyles()
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-page="canvas"]')?.remove()

  const wrap = document.createElement('div')
  wrap.innerHTML = buildCanvasPageHtml(T, css, state).trim()
  const page = wrap.firstElementChild
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {}, dispose: () => {} }
  }

  const imageCols = host.querySelector('[data-ws-cols]')
  const videoPage = host.querySelector('[data-ws-page="video"]')
  if (videoPage?.parentElement) {
    videoPage.parentElement.insertBefore(page, videoPage.nextSibling)
  } else if (imageCols?.parentElement) {
    imageCols.parentElement.appendChild(page)
  } else {
    host.appendChild(page)
  }

  const viewport = page.querySelector('[data-ws-canvas-viewport]')
  const world = page.querySelector('[data-ws-canvas-world]')
  const nodesEl = page.querySelector('[data-ws-canvas-nodes]')
  const edgesSvg = page.querySelector('[data-ws-canvas-edges]')
  const minimapDots = page.querySelector('[data-ws-mm-dots]')
  const generator = page.querySelector('[data-ws-canvas-generator]')
  const statusEl = page.querySelector('[data-ws-canvas-status]')

  const setStatus = (text) => {
    if (statusEl) statusEl.textContent = text
  }

  const applyTransform = () => {
    if (!(world instanceof HTMLElement)) return
    const { x, y, zoom } = state.viewport
    world.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`
  }

  const nodeLabel = (type) => {
    if (type === 'text') return CANVAS_NODES.text
    if (type === 'image') return CANVAS_NODES.image
    if (type === 'video') return CANVAS_NODES.video
    return CANVAS_NODES.genConfig
  }

  const paintEdges = () => {
    if (!(edgesSvg instanceof SVGElement) || !(nodesEl instanceof HTMLElement)) return
    const lines = []
    for (const edge of state.edges) {
      const fromEl = nodesEl.querySelector(`[data-ws-canvas-node="${edge.from}"]`)
      const toEl = nodesEl.querySelector(`[data-ws-canvas-node="${edge.to}"]`)
      if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) continue
      const fx = fromEl.offsetLeft + fromEl.offsetWidth
      const fy = fromEl.offsetTop + fromEl.offsetHeight / 2
      const tx = toEl.offsetLeft
      const ty = toEl.offsetTop + toEl.offsetHeight / 2
      const mx = (fx + tx) / 2
      lines.push(
        `<path d="M ${fx} ${fy} C ${mx} ${fy}, ${mx} ${ty}, ${tx} ${ty}" fill="none" stroke="var(--dsw-alias-border-l4)" stroke-width="2" />`,
      )
    }
    if (state.connectFrom) {
      const fromEl = nodesEl.querySelector(`[data-ws-canvas-node="${state.connectFrom}"]`)
      if (fromEl instanceof HTMLElement) {
        const fx = fromEl.offsetLeft + fromEl.offsetWidth
        const fy = fromEl.offsetTop + fromEl.offsetHeight / 2
        lines.push(
          `<circle cx="${fx}" cy="${fy}" r="4" fill="var(--dsw-alias-state-business-primary)" />`,
        )
      }
    }
    edgesSvg.innerHTML = lines.join('')
  }

  const paintMinimap = () => {
    if (!(minimapDots instanceof HTMLElement)) return
    minimapDots.innerHTML = state.nodes
      .map((n) => {
        const left = Math.max(4, Math.min(108, 8 + (n.x || 0) * 0.08))
        const top = Math.max(4, Math.min(68, 8 + (n.y || 0) * 0.08))
        return `<div data-ws-mm-dot style="left:${left}px;top:${top}px;"></div>`
      })
      .join('')
  }

  const resolveActiveConfig = () => {
    const selected = state.nodes.find((n) => state.selection.includes(n.id) && n.type === 'genConfig')
    if (selected) {
      activeConfigId = selected.id
      return selected
    }
    if (activeConfigId) {
      const kept = state.nodes.find((n) => n.id === activeConfigId && n.type === 'genConfig')
      if (kept) return kept
      activeConfigId = null
    }
    return null
  }

  const syncGenerator = () => {
    const selected = state.nodes.find((n) => state.selection.includes(n.id) && n.type === 'genConfig')
    state.generatorOpen = !!selected
    if (generator instanceof HTMLElement) {
      if (state.generatorOpen) generator.setAttribute('data-open', '')
      else generator.removeAttribute('data-open')
    }
    if (selected) {
      activeConfigId = selected.id
      const ta = page.querySelector('[data-ws-canvas-gen-prompt]')
      // Keep composer text if user typed while selection flickered; then prefill from links
      if (ta instanceof HTMLTextAreaElement) {
        const composerVal = String(ta.value || '')
        if (composerVal.trim() && !String(selected.prompt || '').trim()) {
          selected.prompt = composerVal
        }
      }
      // Prefill empty composer from linked text nodes (Nova/VisioWork empty-state UX)
      if (!String(selected.prompt || '').trim()) {
        const texts = upstreamResourceNodes(state, selected.id)
          .filter((n) => n.type === 'text')
          .map((n) => String(n.text || '').trim())
          .filter(Boolean)
        if (texts.length) selected.prompt = texts.join('\n\n')
      }
      if (ta instanceof HTMLTextAreaElement && ta.value !== (selected.prompt || '')) {
        ta.value = selected.prompt || ''
      }
      const model = page.querySelector('[data-ws-canvas-param-model]')
      if (model instanceof HTMLInputElement) {
        if (!String(selected.modelId || '').trim()) selected.modelId = DEFAULT_CANVAS_MODEL
        model.value = selected.modelId || DEFAULT_CANVAS_MODEL
      }
      page.querySelectorAll('[data-ws-canvas-param][data-value]').forEach((btn) => {
        const param = btn.getAttribute('data-ws-canvas-param')
        const val = btn.getAttribute('data-value')
        let cur = ''
        if (param === 'ratio') cur = String(selected.ratio ?? RATIOS[0])
        else if (param === 'clarity') cur = String(selected.clarity ?? CLARITY[0])
        else if (param === 'count') cur = String(selected.count ?? COUNTS[0])
        btn.setAttribute('aria-current', val === cur ? 'true' : 'false')
      })
    }
  }

  const paintNodes = () => {
    if (!(nodesEl instanceof HTMLElement)) return
    nodesEl.innerHTML = state.nodes
      .map((n) => {
        const selected = state.selection.includes(n.id)
        let body = ''
        if (n.type === 'text') {
          body = `<textarea data-ws-node-text="${escapeHtml(n.id)}" placeholder="文本 → 连配置＝提示词" rows="3">${escapeHtml(n.text || '')}</textarea>`
        } else if (n.type === 'image') {
          const src = String(n.src || '').trim()
          const generating = n.status === 'generating' || n.status === 'submitting'
          const err = n.error ? String(n.error) : ''
          if (src) {
            body = `<img data-ws-canvas-img src="${escapeHtml(src)}" alt="" />`
          } else if (generating) {
            body = `<div data-ws-canvas-img-stub data-generating>出图中…</div>`
          } else if (err) {
            body = `<div data-ws-canvas-img-stub data-empty>${escapeHtml(err.slice(0, 120)) || '出图失败'}</div>`
          } else {
            body = `<div data-ws-canvas-img-stub data-empty>空节点 · 拖入 / 粘贴图片<br/>或点「${CTA}」出图</div>`
          }
          body += `<div data-ws-canvas-node-tools>
              ${Object.values(CANVAS_NODE_TOOLS)
                .map(
                  (label) =>
                    `<button type="button" data-ws-canvas-tool="${escapeHtml(label)}" data-node="${escapeHtml(n.id)}" style="${css.pill({ size: '10px', fill: T.module })}">${escapeHtml(label)}</button>`,
                )
                .join('')}
            </div>`
        } else if (n.type === 'video') {
          body = `<div data-ws-canvas-img-stub>${CANVAS_NODES.video}<br/>可播放 / 抽帧 stub</div>`
        } else {
          body = `<div style="font-size:11px;color:${T.fg3};">选中后底部浮出生成器</div>
            <div style="font-size:11px;color:${T.fg2};">${PARAM_LABELS.ratio} ${escapeHtml(String(n.ratio || RATIOS[0]))} · ${PARAM_LABELS.count} ${escapeHtml(String(n.count || 1))}</div>`
        }
        return `<div data-ws-canvas-node="${escapeHtml(n.id)}" data-type="${escapeHtml(n.type)}" ${selected ? 'data-selected' : ''} style="left:${n.x || 0}px;top:${n.y || 0}px;">
          <div data-ws-canvas-node-head>
            <span>${escapeHtml(nodeLabel(n.type))}</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-canvas-node-remove="${escapeHtml(n.id)}" title="移除" style="border:0;background:transparent;color:${T.fg3};cursor:pointer;font-size:12px;line-height:1;padding:0 2px;">×</button>
          </div>
          <div data-ws-canvas-node-body>${body}</div>
          <span data-ws-canvas-port="in" data-node="${escapeHtml(n.id)}" title="连入"></span>
          <span data-ws-canvas-port="out" data-node="${escapeHtml(n.id)}" title="连出"></span>
        </div>`
      })
      .join('')

    // Wire per-node text / drag after paint
    nodesEl.querySelectorAll('[data-ws-node-text]').forEach((ta) => {
      ta.addEventListener('input', (e) => {
        const id = ta.getAttribute('data-ws-node-text')
        const node = state.nodes.find((x) => x.id === id)
        if (node && node.type === 'text') {
          node.text = /** @type {HTMLTextAreaElement} */ (e.target).value
          // Linked text → empty genConfig prompt (Nova: composer can stay empty until send)
          for (const edge of state.edges) {
            if (edge.from !== id) continue
            const cfg = state.nodes.find((n) => n.id === edge.to && n.type === 'genConfig')
            if (!cfg || String(cfg.prompt || '').trim()) continue
            cfg.prompt = node.text
            if (activeConfigId === cfg.id || state.selection.includes(cfg.id)) {
              const composer = page.querySelector('[data-ws-canvas-gen-prompt]')
              if (composer instanceof HTMLTextAreaElement && !String(composer.value || '').trim()) {
                composer.value = node.text
              }
            }
          }
        }
      })
      ta.addEventListener('mousedown', (e) => e.stopPropagation())
      ta.addEventListener('pointerdown', (e) => e.stopPropagation())
    })

    nodesEl.querySelectorAll('[data-ws-canvas-node]').forEach((el) => {
      const id = el.getAttribute('data-ws-canvas-node')
      const head = el.querySelector('[data-ws-canvas-node-head]')
      head?.addEventListener('pointerdown', (ev) => {
        if (!(ev instanceof PointerEvent)) return
        if (ev.target instanceof Element && ev.target.closest('[data-ws-canvas-node-remove]')) return
        ev.preventDefault()
        ev.stopPropagation()
        const node = state.nodes.find((x) => x.id === id)
        if (!node) return
        state.selection = [id]
        paintNodes()
        syncGenerator()
        const startX = ev.clientX
        const startY = ev.clientY
        const origX = node.x || 0
        const origY = node.y || 0
        const zoom = state.viewport.zoom || 1
        el.setAttribute('data-dragging', '')
        const onMove = (e) => {
          node.x = origX + (e.clientX - startX) / zoom
          node.y = origY + (e.clientY - startY) / zoom
          if (el instanceof HTMLElement) {
            el.style.left = `${node.x}px`
            el.style.top = `${node.y}px`
          }
          paintEdges()
          paintMinimap()
        }
        const onUp = () => {
          el.removeAttribute('data-dragging')
          document.removeEventListener('pointermove', onMove)
          document.removeEventListener('pointerup', onUp)
        }
        document.addEventListener('pointermove', onMove)
        document.addEventListener('pointerup', onUp)
      })

      el.addEventListener('click', (e) => {
        if (e.target instanceof Element && e.target.closest('[data-ws-canvas-port]')) return
        if (e.target instanceof Element && e.target.closest('[data-ws-canvas-node-remove]')) return
        state.selection = [id]
        paintNodes()
        syncGenerator()
      })
    })

    nodesEl.querySelectorAll('[data-ws-canvas-node-remove]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const id = btn.getAttribute('data-ws-canvas-node-remove')
        state.nodes = state.nodes.filter((n) => n.id !== id)
        state.edges = state.edges.filter((ed) => ed.from !== id && ed.to !== id)
        state.selection = state.selection.filter((s) => s !== id)
        paintNodes()
        paintEdges()
        paintMinimap()
        syncGenerator()
        setStatus('已移除节点（本地壳）')
      })
    })

    nodesEl.querySelectorAll('[data-ws-canvas-port]').forEach((port) => {
      port.addEventListener('pointerdown', (e) => {
        e.preventDefault()
        e.stopPropagation()
        const nodeId = port.getAttribute('data-node')
        const side = port.getAttribute('data-ws-canvas-port')
        if (!nodeId) return
        if (side === 'out') {
          state.connectFrom = nodeId
          setStatus('连线 stub：再点目标入端口完成（壳）')
          paintEdges()
        } else if (side === 'in' && state.connectFrom && state.connectFrom !== nodeId) {
          const exists = state.edges.some((ed) => ed.from === state.connectFrom && ed.to === nodeId)
          if (!exists) {
            state.edges.push({ id: uid('e'), from: state.connectFrom, to: nodeId })
          }
          state.connectFrom = null
          setStatus('已添加连线（本地壳）')
          paintEdges()
        }
      })
    })

    paintEdges()
    paintMinimap()
    syncGenerator()
  }

  const addNode = (type) => {
    const baseX = 120 + state.nodes.length * 24
    const baseY = 140 + state.nodes.length * 16
    /** @type {any} */
    let node
    if (type === 'text') {
      node = { type: 'text', id: uid('n-text'), x: baseX, y: baseY, text: '' }
    } else if (type === 'image') {
      node = { type: 'image', id: uid('n-img'), x: baseX, y: baseY, src: '' }
    } else if (type === 'video') {
      node = { type: 'video', id: uid('n-vid'), x: baseX, y: baseY, srcUrl: '' }
    } else {
      node = {
        type: 'genConfig',
        id: uid('n-cfg'),
        x: baseX,
        y: baseY,
        prompt: '',
        modelId: DEFAULT_CANVAS_MODEL,
        ratio: RATIOS[0],
        count: COUNTS[0],
        clarity: CLARITY[0],
      }
    }
    state.nodes.push(node)
    state.selection = [node.id]
    paintNodes()
    setStatus(`已添加${nodeLabel(type)}（本地壳）`)
  }

  // Project bar
  page.querySelector('[data-ws-canvas-project-name]')?.addEventListener('change', (e) => {
    const t = /** @type {HTMLInputElement} */ (e.target)
    const p = state.projects.find((x) => x.id === state.projectId)
    if (p) p.name = t.value || DEFAULT_PROJECT_NAME
    const sel = page.querySelector('[data-ws-canvas-project-list]')
    if (sel instanceof HTMLSelectElement) {
      const opt = sel.querySelector(`option[value="${state.projectId}"]`)
      if (opt) opt.textContent = p?.name || DEFAULT_PROJECT_NAME
    }
  })

  page.querySelector('[data-ws-canvas-new]')?.addEventListener('click', () => {
    const id = uid('proj')
    const name = `项目 ${state.projects.length + 1}`
    state.projects.push({ id, name })
    state.projectId = id
    const sel = page.querySelector('[data-ws-canvas-project-list]')
    if (sel instanceof HTMLSelectElement) {
      const opt = document.createElement('option')
      opt.value = id
      opt.textContent = name
      opt.selected = true
      sel.appendChild(opt)
    }
    const nameInput = page.querySelector('[data-ws-canvas-project-name]')
    if (nameInput instanceof HTMLInputElement) nameInput.value = name
    setStatus(`已${CANVAS_CHROME.newProject}（本地壳，未持久化）`)
  })

  page.querySelector('[data-ws-canvas-rename]')?.addEventListener('click', () => {
    const nameInput = page.querySelector('[data-ws-canvas-project-name]')
    if (nameInput instanceof HTMLInputElement) {
      nameInput.focus()
      nameInput.select()
    }
    setStatus(`${CANVAS_CHROME.rename}：编辑项目名后回车（本地壳）`)
  })

  page.querySelector('[data-ws-canvas-project-list]')?.addEventListener('change', (e) => {
    const t = /** @type {HTMLSelectElement} */ (e.target)
    state.projectId = t.value
    const p = state.projects.find((x) => x.id === state.projectId)
    const nameInput = page.querySelector('[data-ws-canvas-project-name]')
    if (nameInput instanceof HTMLInputElement) nameInput.value = p?.name || DEFAULT_PROJECT_NAME
    setStatus('已切换项目（本地壳，画布内容未分项目持久化）')
  })

  // Add nodes
  page.querySelectorAll('[data-ws-canvas-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      addNode(btn.getAttribute('data-ws-canvas-add') || 'text')
    })
  })

  // Double-click blank → text node
  viewport?.addEventListener('dblclick', (e) => {
    if (!(e instanceof MouseEvent) || !(viewport instanceof HTMLElement)) return
    if (e.target !== viewport && e.target !== world) return
    const rect = viewport.getBoundingClientRect()
    const zoom = state.viewport.zoom || 1
    const x = (e.clientX - rect.left - state.viewport.x) / zoom
    const y = (e.clientY - rect.top - state.viewport.y) / zoom
    const node = { type: 'text', id: uid('n-text'), x, y, text: '' }
    state.nodes.push(node)
    state.selection = [node.id]
    paintNodes()
    setStatus(`双击空白：已建${CANVAS_NODES.text}`)
  })

  // Pan: space / ctrl + drag; wheel zoom
  let spaceDown = false
  let panning = false
  const onKeyDown = (e) => {
    if (e.code === 'Space' && !e.repeat) {
      spaceDown = true
      if (viewport instanceof HTMLElement) viewport.setAttribute('data-panning', '')
    }
  }
  const onKeyUp = (e) => {
    if (e.code === 'Space') {
      spaceDown = false
      if (!panning && viewport instanceof HTMLElement) viewport.removeAttribute('data-panning')
    }
  }
  document.addEventListener('keydown', onKeyDown)
  document.addEventListener('keyup', onKeyUp)

  viewport?.addEventListener('pointerdown', (ev) => {
    if (!(ev instanceof PointerEvent) || !(viewport instanceof HTMLElement)) return
    const onBlank = ev.target === viewport || ev.target === world || ev.target === edgesSvg
    if (!onBlank) return
    if (!(spaceDown || ev.ctrlKey || ev.metaKey || ev.button === 1)) {
      // clear selection on blank click
      if (ev.button === 0) {
        state.selection = []
        state.connectFrom = null
        paintNodes()
      }
      return
    }
    ev.preventDefault()
    panning = true
    viewport.setAttribute('data-panning', '')
    const startX = ev.clientX
    const startY = ev.clientY
    const origX = state.viewport.x
    const origY = state.viewport.y
    const onMove = (e) => {
      state.viewport.x = origX + (e.clientX - startX)
      state.viewport.y = origY + (e.clientY - startY)
      applyTransform()
    }
    const onUp = () => {
      panning = false
      if (!spaceDown) viewport.removeAttribute('data-panning')
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)
    }
    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', onUp)
  })

  viewport?.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.92 : 1.08
      state.viewport.zoom = Math.max(0.35, Math.min(2.5, state.viewport.zoom * delta))
      applyTransform()
    },
    { passive: false },
  )

  page.querySelector('[data-ws-canvas-fit]')?.addEventListener('click', () => {
    // Nova-style fit-all: bbox of all nodes (incl. result images) → translate + scale into viewport
    if (!state.nodes.length) {
      state.viewport = { x: 40, y: 40, zoom: 1 }
    } else {
      const PAD = 80
      const FALLBACK_W = 200
      const FALLBACK_H = 160
      let minX = Infinity
      let minY = Infinity
      let maxX = -Infinity
      let maxY = -Infinity
      for (const n of state.nodes) {
        const el =
          nodesEl instanceof HTMLElement
            ? nodesEl.querySelector(`[data-ws-canvas-node="${n.id}"]`)
            : null
        const w =
          el instanceof HTMLElement && el.offsetWidth
            ? el.offsetWidth
            : Number(n.width) > 0
              ? Number(n.width)
              : FALLBACK_W
        const h =
          el instanceof HTMLElement && el.offsetHeight
            ? el.offsetHeight
            : Number(n.height) > 0
              ? Number(n.height)
              : FALLBACK_H
        const x = n.x || 0
        const y = n.y || 0
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x + w)
        maxY = Math.max(maxY, y + h)
      }
      const vpW = viewport instanceof HTMLElement && viewport.clientWidth ? viewport.clientWidth : 1280
      const vpH = viewport instanceof HTMLElement && viewport.clientHeight ? viewport.clientHeight : 720
      const contentW = Math.max(1, maxX - minX + PAD * 2)
      const contentH = Math.max(1, maxY - minY + PAD * 2)
      // Cap at 1 like Nova (shrink to fit, never zoom past 1 on fit-all)
      const zoom = Math.min(vpW / contentW, vpH / contentH, 1)
      const x = (vpW - (maxX + minX) * zoom) / 2
      const y = (vpH - (maxY + minY) * zoom) / 2
      state.viewport = { x, y, zoom }
    }
    applyTransform()
    setStatus(CANVAS_CHROME.fitAll)
  })

  // Generator params / prompt — always sync to active genConfig (not only current selection)
  page.querySelector('[data-ws-canvas-gen-prompt]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLTextAreaElement} */ (e.target)
    const cfg = resolveActiveConfig()
    if (cfg) cfg.prompt = t.value
  })
  page.querySelector('[data-ws-canvas-param-model]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLInputElement} */ (e.target)
    const cfg = resolveActiveConfig()
    if (cfg) cfg.modelId = t.value
  })
  page.querySelectorAll('[data-ws-canvas-chips]').forEach((group) => {
    group.addEventListener('click', (e) => {
      const btn =
        e.target instanceof Element ? e.target.closest('[data-ws-canvas-param][data-value]') : null
      if (!btn) return
      const param = btn.getAttribute('data-ws-canvas-param')
      const value = btn.getAttribute('data-value')
      const cfg = state.nodes.find((n) => state.selection.includes(n.id) && n.type === 'genConfig')
      if (!cfg || !param || value == null) return
      if (param === 'ratio') cfg.ratio = value
      else if (param === 'clarity') cfg.clarity = value
      else if (param === 'count') cfg.count = Number(value) || 1
      syncGenerator()
      paintNodes()
    })
  })

  // Node tools + 加入画布 style actions — honest stubs
  page.addEventListener('click', (e) => {
    const tool =
      e.target instanceof Element ? e.target.closest('[data-ws-canvas-tool]') : null
    if (!tool) return
    const label = tool.getAttribute('data-ws-canvas-tool') || ''
    setStatus(STUB_ACTION(label))
    host.dispatchEvent(
      new CustomEvent('dsh-ws-canvas-tool', {
        bubbles: true,
        detail: { tool: label },
      }),
    )
  })

  // 发送 — Nova collect → client callCtaRpc(/dsh-ws/generate); never fake success
  let generateBusy = false
  const sendBtn = page.querySelector('[data-ws-canvas-send]')
  const syncCanvasCtaEnabled = () => {
    if (!(sendBtn instanceof HTMLButtonElement)) return
    const ta = page.querySelector('[data-ws-canvas-gen-prompt]')
    const composer = ta instanceof HTMLTextAreaElement ? String(ta.value || '').trim() : ''
    const cfg = resolveActiveConfig() || state.nodes.find((n) => n.type === 'genConfig')
    const linked = cfg
      ? upstreamResourceNodes(state, cfg.id)
          .filter((n) => n.type === 'text')
          .map((n) => String(n.text || '').trim())
          .filter(Boolean)
      : []
    const hasPrompt = !!(composer || String(cfg?.prompt || '').trim() || linked.length)
    const disable = generateBusy || !hasPrompt
    sendBtn.disabled = disable
    if (disable) sendBtn.setAttribute('disabled', '')
    else sendBtn.removeAttribute('disabled')
  }
  syncCanvasCtaEnabled()
  page.querySelector('[data-ws-canvas-gen-prompt]')?.addEventListener('input', () => syncCanvasCtaEnabled())

  const placeResultNodes = (cfg, count) => {
    const ids = []
    const originX = (cfg.x || 0) + 280
    const originY = cfg.y || 0
    for (let i = 0; i < count; i += 1) {
      const id = uid('n-img')
      state.nodes.push({
        type: 'image',
        id,
        x: originX,
        y: originY + i * 200,
        src: '',
        status: 'generating',
        sourceNodeId: cfg.id,
      })
      state.edges.push({ id: uid('e'), from: cfg.id, to: id })
      ids.push(id)
    }
    return ids
  }

  /**
   * Apply host generate result onto placeholder image nodes (keep edges).
   * @param {{ ok?: boolean, phase?: string, error?: string, resultNodeIds?: string[], value?: any, nodeId?: string }} detail
   */
  const markPlaceholderError = (resultNodeIds, msg) => {
    for (const id of resultNodeIds) {
      const node = state.nodes.find((n) => n.id === id)
      if (node && node.type === 'image' && !node.src) {
        node.status = 'error'
        node.error = msg
      }
    }
  }

  const applyGenerateResult = (detail) => {
    const d = detail && typeof detail === 'object' ? detail : {}
    const phase = String(d.phase || '')
    const resultNodeIds = Array.isArray(d.resultNodeIds) ? d.resultNodeIds : []
    const failPhase = phase === 'failed' || phase === 'error' || phase === 'cancelled'
    // ok:true with URLs → image nodes (Nova result→node); never silently clear placeholders
    if (d.ok && !failPhase) {
      const rawResults = Array.isArray(d.value?.results)
        ? d.value.results
        : Array.isArray(d.results)
          ? d.results
          : Array.isArray(d.value?.images)
            ? d.value.images
            : []
      const urls = rawResults.map(pickCanvasResultUrl).filter(Boolean)
      if (!urls.length) {
        generateBusy = false
        syncCanvasCtaEnabled()
        markPlaceholderError(resultNodeIds, '生成完成但无可用图片 URL')
        setStatus('生成完成但无可用图片 URL')
        paintNodes()
        return
      }
      let landed = 0
      urls.forEach((url, i) => {
        let node = resultNodeIds[i] ? state.nodes.find((n) => n.id === resultNodeIds[i]) : null
        if (!node) {
          const cfg = state.nodes.find((n) => n.id === d.nodeId && n.type === 'genConfig')
          const id = uid('n-img')
          node = {
            type: 'image',
            id,
            x: (cfg?.x || 0) + 280 + i * 40,
            y: (cfg?.y || 0) + i * 200,
            src: '',
            sourceNodeId: cfg?.id,
          }
          state.nodes.push(node)
          if (cfg) state.edges.push({ id: uid('e'), from: cfg.id, to: id })
        }
        // Only count real image URLs — empty stubs / link-only must not claim 「已出图」
        if (url) {
          node.src = url
          node.status = 'success'
          node.error = undefined
          landed += 1
        } else if (node && node.type === 'image' && !node.src) {
          node.status = 'error'
          node.error = '未返回对应图片'
        }
      })
      for (let i = urls.length; i < resultNodeIds.length; i += 1) {
        const node = state.nodes.find((n) => n.id === resultNodeIds[i])
        if (node && node.type === 'image' && !node.src) {
          node.status = 'error'
          node.error = '未返回对应图片'
        }
      }
      generateBusy = false
      syncCanvasCtaEnabled()
      if (landed > 0) {
        setStatus(`已出图 ${landed} 张`)
        // Notify studio history rail (shared path with 普通生图)
        const firstUrl = urls.find(Boolean) || ''
        host.dispatchEvent(
          new CustomEvent('dsh-ws-history-add', {
            bubbles: true,
            composed: true,
            detail: {
              source: 'canvas',
              prompt: String(d.value?.prompt || d.prompt || ''),
              modelId: String(d.value?.modelId || d.modelId || DEFAULT_CANVAS_MODEL),
              results: urls.filter(Boolean).map((url) => ({ url, kind: 'image' })),
              jobId: d.value?.jobId || d.jobId,
              phase: 'done',
            },
          }),
        )
        if (firstUrl) {
          host.dispatchEvent(
            new CustomEvent('dsh-ws-gallery-add', {
              bubbles: true,
              composed: true,
              detail: { src: firstUrl, prompt: String(d.value?.prompt || ''), source: 'canvas' },
            }),
          )
        }
      } else {
        setStatus('生成完成但无可用图片 URL')
      }
      paintNodes()
      return
    }
    if (phase === 'cancelled') {
      markPlaceholderError(resultNodeIds, '已取消')
      generateBusy = false
      syncCanvasCtaEnabled()
      setStatus('客户端已取消；宿主取消未挂')
      paintNodes()
      return
    }
    const msg = String(d.error || '画布出图失败')
    markPlaceholderError(resultNodeIds, msg)
    generateBusy = false
    syncCanvasCtaEnabled()
    setStatus(msg)
    paintNodes()
  }

  const onCanvasGenerateResult = (ev) => {
    applyGenerateResult(ev?.detail && typeof ev.detail === 'object' ? ev.detail : {})
  }
  // document + host: composed events survive shadow / remount-adjacent dispatch
  document.addEventListener('dsh-ws-canvas-generate-result', onCanvasGenerateResult)
  host.addEventListener('dsh-ws-canvas-generate-result', onCanvasGenerateResult)

  sendBtn?.addEventListener('click', () => {
    let cfg = resolveActiveConfig()
    if (!cfg) {
      const configs = state.nodes.filter((n) => n.type === 'genConfig')
      if (configs.length === 1) cfg = configs[0]
    }
    if (!cfg) {
      setStatus('请先选中生成配置节点')
      return
    }
    if (generateBusy) {
      setStatus('已有画布出图任务进行中…')
      return
    }
    // Sync composer → cfg; empty composer keeps prior cfg.prompt for linked-text merge
    const ta = page.querySelector('[data-ws-canvas-gen-prompt]')
    const composer = ta instanceof HTMLTextAreaElement ? String(ta.value || '') : ''
    if (composer.trim()) cfg.prompt = composer
    else if (ta instanceof HTMLTextAreaElement && String(cfg.prompt || '').trim()) {
      // keep cfg.prompt; linked texts still collected in buildCanvasGenerateDetail
    } else if (ta instanceof HTMLTextAreaElement) {
      cfg.prompt = composer
    }
    const detail = buildCanvasGenerateDetail(state, cfg)
    if (!String(detail.prompt || '').trim()) {
      setStatus('请先输入提示词（文本节点或底部输入框）')
      return
    }
    // 「选择模型」 placeholder alone must not POST blank modelId
    if (!String(detail.modelId || '').trim()) detail.modelId = DEFAULT_CANVAS_MODEL
    cfg.modelId = detail.modelId
    const modelInput = page.querySelector('[data-ws-canvas-param-model]')
    if (modelInput instanceof HTMLInputElement) modelInput.value = detail.modelId
    const resultNodeIds = placeResultNodes(cfg, detail.count)
    detail.resultNodeIds = resultNodeIds
    generateBusy = true
    syncCanvasCtaEnabled()
    setStatus(
      detail.mode === MODE_IMG
        ? `图生图提交中…（参考图 ${detail.imageCount}）`
        : '文生图提交中…',
    )
    paintNodes()
    host.dispatchEvent(
      new CustomEvent('dsh-ws-canvas-generate', {
        bubbles: true,
        composed: true,
        detail,
      }),
    )
  })

  const addImageFromDataUrl = (dataUrl, name, at) => {
    const node = {
      type: 'image',
      id: uid('n-img'),
      x: at?.x ?? 120 + state.nodes.length * 24,
      y: at?.y ?? 140 + state.nodes.length * 16,
      src: dataUrl,
      name: name || 'paste.png',
      status: 'success',
    }
    state.nodes.push(node)
    state.selection = [node.id]
    paintNodes()
    setStatus(`已添加${CANVAS_NODES.image}`)
    return node
  }
  const readFileAsDataUrl = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '')
      reader.onerror = () => reject(reader.error || new Error('read failed'))
      reader.readAsDataURL(file)
    })

  viewport?.addEventListener('dragover', (e) => {
    e.preventDefault()
  })
  viewport?.addEventListener('drop', async (e) => {
    e.preventDefault()
    if (!(e instanceof DragEvent) || !(viewport instanceof HTMLElement)) return
    const files = [...(e.dataTransfer?.files || [])].filter((f) => /^image\//.test(f.type))
    if (!files.length) return
    const rect = viewport.getBoundingClientRect()
    const zoom = state.viewport.zoom || 1
    const x = (e.clientX - rect.left - state.viewport.x) / zoom
    const y = (e.clientY - rect.top - state.viewport.y) / zoom
    for (let i = 0; i < files.length; i += 1) {
      try {
        const dataUrl = await readFileAsDataUrl(files[i])
        if (dataUrl) addImageFromDataUrl(dataUrl, files[i].name, { x: x + i * 24, y: y + i * 16 })
      } catch (_) {
        setStatus('图片读取失败')
      }
    }
  })
  page.addEventListener('paste', async (e) => {
    if (!(e instanceof ClipboardEvent)) return
    const items = [...(e.clipboardData?.items || [])]
    const imgItem = items.find((it) => it.type && /^image\//.test(it.type))
    if (!imgItem) return
    const file = imgItem.getAsFile()
    if (!file) return
    e.preventDefault()
    try {
      const dataUrl = await readFileAsDataUrl(file)
      if (dataUrl) addImageFromDataUrl(dataUrl, file.name || 'paste.png')
    } catch (_) {
      setStatus('粘贴图片失败')
    }
  })

  applyTransform()
  paintNodes()

  const setPage = (tab) => {
    const name = String(tab || IMAGE_PAGE)
    host.setAttribute('data-ws-top-page', name)
  }

  return {
    state,
    setPage,
    setStatus,
    applyGenerateResult,
    dispose() {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('dsh-ws-canvas-generate-result', onCanvasGenerateResult)
      host.removeEventListener('dsh-ws-canvas-generate-result', onCanvasGenerateResult)
      page.remove()
      styleEl?.remove()
    },
  }
}
