/**
 * VisioWork-shaped studio host — dark three-column IA (history | studio | inspire/chat).
 * Labels only from ../ui/labels.js. CTA never disabled / never score-gated.
 * No Nova chrome (no API-key strip, no debug footer, no stacked filter multiselect).
 * Visual cues from @dickpy/dsh-imagegen@1.5.12 panel.module.css / inspiration.module.css.
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

/** Inspiration samples — no 苹果/机器人/静物果蔬；denser wall = 8 cards */
const INSPIRATION_SAMPLES = Object.freeze([
  '雨夜霓虹街道',
  '山间云海日出',
  '21:9 走廊对峙镜头',
  '自然光窗边人像',
  '雾中古寺石阶',
  '赛博夜市小吃摊',
  '沙漠公路黄昏',
  '水面倒影城市天际线',
])

/** 细节档位（界面选项；非 labels 文案） */
const DETAIL_OPTS = Object.freeze(['自动', '标准', '高清'])

const RESULT_EMPTY_ZH = '生成结果会出现在这里'

/** 72×72 crisp cinematic SVG thumbs — sharper shapes, lighter noise */
function svgThumb(c1, c2, c3, motif = 'city') {
  const shapes =
    motif === 'sun'
      ? `<circle cx="48" cy="22" r="12" fill="${c3}" opacity=".65"/><path d="M0 54 Q18 38 36 52 T72 48 V72 H0Z" fill="${c3}" opacity=".38"/>`
      : motif === 'fog'
        ? `<path d="M0 38 Q24 24 48 40 T72 36 V72 H0Z" fill="${c3}" opacity=".42"/><rect x="24" y="12" width="14" height="40" rx="3" fill="${c3}" opacity=".5"/>`
        : motif === 'market'
          ? `<rect x="8" y="30" width="18" height="30" fill="${c3}" opacity=".42"/><rect x="32" y="20" width="16" height="40" fill="${c3}" opacity=".55"/><rect x="54" y="36" width="14" height="24" fill="${c3}" opacity=".38"/>`
          : motif === 'desert'
            ? `<path d="M0 46 Q22 30 44 46 T72 42 V72 H0Z" fill="${c3}" opacity=".48"/><circle cx="56" cy="18" r="10" fill="${c3}" opacity=".58"/>`
            : motif === 'water'
              ? `<path d="M0 32 Q14 24 28 32 T56 30 T72 36 V72 H0Z" fill="${c3}" opacity=".42"/><path d="M0 48 Q20 40 40 48 T72 46 V72 H0Z" fill="${c3}" opacity=".28"/>`
              : motif === 'portrait'
                ? `<circle cx="36" cy="24" r="13" fill="${c3}" opacity=".55"/><ellipse cx="36" cy="54" rx="20" ry="16" fill="${c3}" opacity=".4"/>`
                : `<rect x="6" y="24" width="14" height="40" fill="${c3}" opacity=".4"/><rect x="24" y="12" width="16" height="52" fill="${c3}" opacity=".52"/><rect x="46" y="30" width="20" height="34" fill="${c3}" opacity=".42"/>`
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/>` +
    `</linearGradient>` +
    `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="2" stitchTiles="stitch"/>` +
    `<feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .06"/></feComponentTransfer></filter>` +
    `</defs>` +
    `<rect width="72" height="72" fill="url(#g)"/>${shapes}` +
    `<rect width="72" height="72" filter="url(#n)" opacity=".7"/>` +
    `</svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** Soft photo-noise fallback for inspiration tiles (desaturated cinematic still) */
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

/** Sample history ghosts — muted cinematic thumbs */
const HISTORY_GHOSTS = Object.freeze([
  {
    prompt: '雨夜霓虹街道，潮湿柏油倒影',
    meta: '文生图 · 1:1',
    seed: 'hist-night',
    src: svgThumb('#141820', '#1a222e', '#4a5568', 'city'),
  },
  {
    prompt: '山间云海日出，金色轮廓光',
    meta: '文生图 · 16:9',
    seed: 'hist-mountain',
    src: svgThumb('#1a2228', '#2a3438', '#8a8070', 'sun'),
  },
  {
    prompt: '雾中古寺石阶，青苔与灯笼',
    meta: '图生图 · 3:4',
    seed: 'hist-fogtemple',
    src: svgThumb('#161a18', '#222824', '#5a6858', 'fog'),
  },
  {
    prompt: '赛博夜市小吃摊，蒸汽升腾',
    meta: '文生图 · 21:9',
    seed: 'hist-nightmarket',
    src: svgThumb('#18141c', '#221c28', '#6a5a48', 'market'),
  },
])

/** Fixed picsum seeds — photographic placeholders (night, mountain, portrait, corridor, …) */
const INSPIRE_SEEDS = Object.freeze([
  'night',
  'mountain',
  'corridor',
  'portrait',
  'fogtemple',
  'nightmarket',
  'desert',
  'skyline',
])

/** Brand accent approximating VisioWork --dsw-alias-brand-primary on dark */
const BRAND = '#5b8def'

const css = {
  mode: (on) =>
    `padding:5px 14px;border:1px solid ${on ? '#3a4558' : '#2a3140'};border-radius:999px;background:${on ? '#1c2333' : 'transparent'};color:${on ? '#fff' : '#9aa3b2'};cursor:pointer;font:inherit;`,
  field:
    'padding:6px 8px;border-radius:8px;border:1px solid #2a3140;background:#10141c;color:inherit;font:inherit;',
  select:
    'padding:5px 8px;border-radius:6px;border:1px solid #2a3140;background:#10141c;color:#c5cad3;font:inherit;font-size:12px;min-height:30px;',
  /** VisioWork .card — layered section chrome */
  card:
    'display:flex;flex-direction:column;gap:10px;padding:12px;background:#12161f;border:1px solid #1f2430;border-radius:12px;flex:none;',
  paramLabel: 'font-size:12px;font-weight:600;color:#9aa3b2;white-space:nowrap;',
  /** VisioWork .generateButton primary — solid white on dark, clearly enabled */
  cta:
    `width:100%;min-height:42px;padding:10px 14px;border:0;border-radius:10px;background:#ffffff;color:#0b0d10;cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 1px 0 rgba(255,255,255,.2), 0 4px 16px rgba(0,0,0,.35);`,
}

const HOST_STYLES = `
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:10px; align-items:stretch;
  padding:8px; border:1px solid #1f2430; border-radius:10px;
  background:#12161f; flex:none; cursor:pointer; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover { border-color:#2a3140; }
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] { border-color:${BRAND}; }
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:10px; align-items:stretch;
  padding:8px; border:1px solid #1f2430; border-radius:10px;
  background:#12161f; opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:72px; height:72px; border-radius:8px; object-fit:cover; flex:none; background:#0b0d10;
  image-rendering:auto;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid #1f2430; border-radius:12px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color:${BRAND}; transform:translateY(-2px);
  box-shadow:0 6px 18px rgba(0,0,0,.28);
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-wrap:wrap; align-items:center; gap:10px 14px;
}
[data-dsh-ws-studio-host] [data-ws-param-row] label {
  display:inline-flex; align-items:center; gap:6px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-param-row] select {
  min-width:4.5rem; max-width:9rem;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:8px;
  color:#9aa3b2; font-size:12px; font-weight:600; user-select:none;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { filter:brightness(1.06); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color:#6b7280; opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-cta-footer] {
  flex:none; position:sticky; bottom:0; z-index:2;
  padding:10px 16px 14px; background:#0f1218; border-top:1px solid #1f2430;
  display:flex; flex-direction:column; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-studio-scroll] {
  flex:1; min-height:0; overflow:auto; padding:14px 16px 16px;
  display:flex; flex-direction:column; gap:12px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  background:#12161f;
}
`

/**
 * @returns {{ open: () => void, close: () => void, dispose: () => void, isOpen: () => boolean, setNegativePrompt: (text: string) => void, paintGenerateResult: (value: any) => void, setStatus: (text: string) => void, getHostEl: () => HTMLElement | undefined }}
 */
export function createStudioHost() {
  let host
  let open = false
  /** @type {ReturnType<typeof defaultStudioState> & { compareModels?: boolean }} */
  let state = defaultStudioState()
  /** @type {string[]} */
  let inspirationShown = [...INSPIRATION_SAMPLES]
  /** @type {string | null} */
  let activeHistoryId = null

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
    const setSelect = (param, value) => {
      const el = host.querySelector(`[data-ws-param="${param}"]`)
      if (el instanceof HTMLSelectElement) el.value = value == null ? '' : String(value)
    }
    setSelect('ratio', state.ratio)
    setSelect('clarity', state.clarity)
    setSelect('count', state.count)
    setSelect('detail', state.detail)
    setSelect('skill', state.skillId)
    // keep data-ws-skill attribute in sync for consumers that read it
    const skillSel = host.querySelector('[data-ws-param="skill"]')
    if (skillSel instanceof HTMLSelectElement) {
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

  const syncFields = () => {
    const promptEl = host?.querySelector('[data-ws-prompt]')
    const negEl = host?.querySelector('[data-ws-negative]')
    if (promptEl instanceof HTMLTextAreaElement) promptEl.value = state.prompt
    if (negEl instanceof HTMLTextAreaElement) negEl.value = state.negativePrompt
    const model = host?.querySelector('[data-ws-param="model"]')
    if (model instanceof HTMLInputElement || model instanceof HTMLSelectElement) {
      model.value = state.modelId || ''
    }
    paintChips()
  }

  const setStatus = (text) => {
    const status = host?.querySelector('[data-ws-status]')
    if (status) status.textContent = text
  }

  const paintResultEmpty = () => {
    const resultsEl = host?.querySelector('[data-ws-results]')
    if (!resultsEl) return
    resultsEl.innerHTML = ''
    resultsEl.style.cssText =
      'display:flex;align-items:center;justify-content:center;width:100%;min-height:48px;color:#6b7280;font-size:12px;'
    resultsEl.textContent = RESULT_EMPTY_ZH
  }

  const paintInspiration = () => {
    const grid = host?.querySelector('[data-ws-inspire-grid]')
    if (!grid) return
    grid.innerHTML = ''
    inspirationShown.forEach((sample, idx) => {
      const card = document.createElement('button')
      card.type = 'button'
      card.dataset.wsEmpty = 'inspiration'
      card.dataset.wsInspire = sample
      card.dataset.wsInspireCard = ''
      const seed = INSPIRE_SEEDS[idx % INSPIRE_SEEDS.length]
      const fallback = inspireFallbackSvg(idx)
      const picsum = `https://picsum.photos/seed/${encodeURIComponent(seed)}/300/300`
      card.innerHTML =
        `<img src="${picsum}" alt="" loading="lazy" />` +
        `<span style="position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(transparent 40%,rgba(0,0,0,.72));" aria-hidden="true"></span>` +
        `<span style="position:relative;z-index:2;margin-top:auto;padding:18px 8px 8px;color:#fff;font-size:11px;line-height:1.35;display:block;font-weight:550;">` +
        `${escapeHtml(sample)}</span>`
      const img = card.querySelector('img')
      if (img) {
        img.addEventListener('error', () => {
          if (img.dataset.failed) return
          img.dataset.failed = '1'
          img.src = fallback
        })
      }
      card.addEventListener('click', () => {
        state.prompt = sample
        syncFields()
        setStatus(`已填入「${sample}」`)
      })
      grid.appendChild(card)
    })
  }

  /** VisioWork .historyItem ghosts: thumb 72 + prompt clamp + meta ×4 */
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
    empty.style.cssText = 'display:flex;flex-direction:column;gap:8px;'
    for (const g of HISTORY_GHOSTS) {
      const ghost = document.createElement('div')
      ghost.dataset.wsHistoryGhost = ''
      const picsum = `https://picsum.photos/seed/${encodeURIComponent(g.seed)}/144/144`
      ghost.innerHTML =
        `<img src="${picsum}" alt="" width="72" height="72" />` +
        `<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-top:2px;">` +
        `<div style="font-size:12px;line-height:1.4;color:#e8eaed;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(g.prompt)}</div>` +
        `<div style="font-size:11px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:auto;">${escapeHtml(g.meta)}</div>` +
        `</div>`
      const img = ghost.querySelector('img')
      if (img) {
        img.addEventListener('error', () => {
          if (img.dataset.failed) return
          img.dataset.failed = '1'
          img.src = g.src
        })
      }
      empty.appendChild(ghost)
    }
    const tip = document.createElement('div')
    tip.style.cssText = 'padding:4px 2px;color:#6b7280;font-size:11px;text-align:center;'
    tip.textContent = '暂无记录'
    empty.appendChild(tip)
    histEl.appendChild(empty)
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
    // VisioWork left ~260px / right ~320px
    state.paneWidths = { ...state.paneWidths, history: 260, chat: 320 }
    inspirationShown = [...INSPIRATION_SAMPLES]

    host = document.createElement('div')
    host.dataset.dshWsStudioHost = ''
    host.setAttribute('role', 'main')
    host.setAttribute('aria-label', '生图')
    host.style.cssText =
      'display:none;position:fixed;inset:0 0 0 56px;z-index:40;background:#0b0d10;color:#e8eaed;flex-direction:column;font:13px/1.45 system-ui,sans-serif;'

    const styleEl = document.createElement('style')
    styleEl.textContent = HOST_STYLES
    host.appendChild(styleEl)

    const frame = document.createElement('div')
    frame.style.cssText = 'display:flex;flex-direction:column;flex:1;min-height:0;width:100%;'
    frame.innerHTML = `
      <header data-ws-top-bar style="display:flex;gap:4px;padding:8px 14px;border-bottom:1px solid #1f2430;align-items:center;background:#0f1218;flex-shrink:0;">
        ${TOP_TABS.map(
          (t, i) =>
            `<button type="button" data-ws-top="${t}" style="padding:7px 12px;border:0;background:${i === 0 ? '#1c2333' : 'transparent'};color:${i === 0 ? '#fff' : '#9aa3b2'};cursor:pointer;border-radius:8px;font:inherit;">${t}</button>`,
        ).join('')}
        <span style="flex:1"></span>
        <button type="button" data-ws-chat-toggle style="padding:0 10px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;">关闭</button>
      </header>
      <div style="display:flex;flex:1;min-height:0;">
        <!-- LEFT: 历史记录 — VisioWork historyItem shape -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid #1f2430;padding:12px;overflow:auto;background:#0c0f14;display:flex;flex-direction:column;gap:8px;">
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
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:8px;flex:1;min-height:0;"></div>
          <button type="button" style="align-self:flex-start;padding:2px 8px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#6b7280;cursor:pointer;font:inherit;font-size:11.5px;">${HISTORY_ACTIONS.clear}</button>
        </aside>

        <!-- CENTER: 生图区 — mode → prompt → skill → params → model → sticky CTA -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:#0b0d10;">
          <div data-ws-studio-scroll>
            <div style="display:flex;align-items:center;gap:8px;">
              <strong style="font-size:13px;">${COLUMNS.studio}</strong>
            </div>

            <!-- card: mode -->
            <div style="${css.card}">
              <div style="display:flex;gap:8px;align-items:center;" role="tablist">
                ${MODE_TABS.map(
                  (m, i) =>
                    `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? 'true' : 'false'}" style="${css.mode(i === 0)}">${m}</button>`,
                ).join('')}
              </div>
            </div>

            <!-- card: prompt + negative -->
            <div style="${css.card}">
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
                  <span style="flex:1"></span>
                  <button type="button" data-ws-action="templates" style="padding:0 12px;height:26px;border:1px solid ${BRAND};border-radius:999px;background:rgba(91,141,239,.12);color:${BRAND};cursor:pointer;font:inherit;font-size:12px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 11px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#9aa3b2;cursor:pointer;font:inherit;font-size:12px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="3" placeholder="写一句想法即可出图，不必选 Skill" style="resize:vertical;min-height:72px;padding:10px 12px;border-radius:10px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;line-height:1.6;"></textarea>
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#1c2333;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;">${PROMPT_FIELDS.clearNegative}</button>
                </div>
                <textarea data-ws-negative rows="1" placeholder="Skill 预填负面词会出现在这里，可改可清" style="resize:vertical;padding:6px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;"></textarea>
              </div>
            </div>

            <!-- Skill compact scroll row -->
            <div style="${css.card}">
              <div style="display:flex;align-items:center;gap:6px;min-width:0;">
                <button type="button" data-ws-action="skill" style="padding:3px 8px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;font-size:11px;flex:none;">${PROMPT_ACTIONS.skill}</button>
                <div data-ws-skill-row>
                  ${SKILL_ENTRIES.map(
                    (s) =>
                      `<button type="button" data-ws-skill="${s}" aria-pressed="false" style="${css.skill(false)}">${s}</button>`,
                  ).join('')}
                </div>
              </div>
            </div>

            <!-- ratio (scroll) / clarity / count / detail -->
            <div data-ws-param-row style="${css.card}">
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.ratio}</span>
                <div data-ws-chip-scroll>
                  ${RATIOS.map(
                    (r) =>
                      `<button type="button" data-ws-param="ratio" data-ws-value="${r}" aria-pressed="false" style="${css.chip(false)}">${r}</button>`,
                  ).join('')}
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.clarity}</span>
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                  ${CLARITY.map(
                    (c) =>
                      `<button type="button" data-ws-param="clarity" data-ws-value="${c}" aria-pressed="false" style="${css.chip(false)}">${c}</button>`,
                  ).join('')}
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.count} · ${PARAM_LABELS.detail}</span>
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                  ${COUNTS.map(
                    (n) =>
                      `<button type="button" data-ws-param="count" data-ws-value="${n}" aria-pressed="false" style="${css.chip(false)}">${n}</button>`,
                  ).join('')}
                  <span style="width:8px;"></span>
                  ${DETAIL_OPTS.map(
                    (d) =>
                      `<button type="button" data-ws-param="detail" data-ws-value="${d}" aria-pressed="false" style="${css.chip(false)}">${d}</button>`,
                  ).join('')}
                </div>
              </div>
            </div>

            <!-- model row quiet (after params, before CTA) -->
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;opacity:.92;">
              <span style="${css.paramLabel}">${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="选择模型" style="padding:0 12px;height:32px;border-radius:16px;border:1px solid #2a3140;background:#12161f;color:#c5cad3;font:inherit;width:11rem;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#9aa3b2;cursor:pointer;user-select:none;">
                <input type="checkbox" data-ws-compare style="accent-color:${BRAND};" />
                ${COMPARE}
              </label>
            </div>

            <!-- Compact result strip -->
            <div data-ws-stage style="max-height:180px;min-height:56px;border:1px solid #1f2430;border-radius:12px;background:#0f1218;padding:8px 10px;overflow:auto;flex-shrink:0;">
              <div data-ws-results></div>
            </div>
          </div>

          <!-- sticky CTA footer — always in view, after params in reading order -->
          <div data-ws-cta-footer>
            <button type="button" data-ws-cta style="${css.cta}">${CTA}</button>
            <p data-ws-status style="opacity:.65;font-size:12px;min-height:0;margin:0;"></p>
          </div>
        </section>

        <!-- RIGHT: 灵感墙 denser 2×4 grid -->
        <aside data-ws-inspire-wall style="width:320px;flex-shrink:0;border-left:1px solid #1f2430;padding:12px;display:flex;flex-direction:column;gap:10px;background:#0c0f14;overflow:auto;">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="font-size:13px;font-weight:650;">${EMPTY.inspiration}</strong>
            <span style="flex:1"></span>
            <button type="button" data-ws-empty="shuffle" style="padding:4px 10px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <div data-ws-inspire-grid style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;flex:1;"></div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1f2430;padding:12px;display:none;flex-direction:column;background:#0c0f14;">
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
    })
    host.querySelector('[data-ws-clear-negative]')?.addEventListener('click', () => {
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
    host.querySelectorAll('[data-ws-skill]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-ws-skill')
        // optional — toggle; never required for CTA
        state.skillId = state.skillId === id ? null : id
        if (state.skillId === '三联封面') state.ratio = '3:4'
        if (state.skillId === '电影海报') state.ratio = '9:16'
        if (state.skillId === '电影三联') state.ratio = '21:9'
        syncFields()
        setStatus(state.skillId ? `已选「${state.skillId}」（可选；出图仍不强制）` : '已取消 Skill')
      })
    })
    host.querySelectorAll('[data-ws-param="ratio"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.ratio = btn.getAttribute('data-ws-value') || RATIOS[0]
        paintChips()
      })
    })
    host.querySelectorAll('[data-ws-param="clarity"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.clarity = btn.getAttribute('data-ws-value') || CLARITY[0]
        paintChips()
      })
    })
    host.querySelectorAll('[data-ws-param="count"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.count = Number(btn.getAttribute('data-ws-value')) || 1
        paintChips()
      })
    })
    host.querySelectorAll('[data-ws-param="detail"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.detail = btn.getAttribute('data-ws-value') || DETAIL_OPTS[0]
        paintChips()
      })
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
    host.querySelector('[data-ws-action="skill"]')?.addEventListener('click', () => {
      setStatus(`「${PROMPT_ACTIONS.skill}」可选；三联封面≠电影海报`)
    })
    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener('click', () => {
      const shuffled = [...INSPIRATION_SAMPLES].sort(() => Math.random() - 0.5)
      inspirationShown = shuffled
      paintInspiration()
      state.prompt = shuffled[Math.floor(Math.random() * shuffled.length)]
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

    document.body.appendChild(host)
    paintChat()
    syncFields()
    paintInspiration()
    paintHistoryEmpty()
    paintResultEmpty()
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
    /** @param {string} text */
    setStatus(text) {
      ensure()
      setStatus(text)
    },
    getHostEl() {
      return host
    },
    /**
     * Paint generate RPC result into compact result strip + history thumbs.
     * @param {{ jobId?: string, phase?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure()
      const results = Array.isArray(value?.results) ? value.results : []
      const resultsEl = host?.querySelector('[data-ws-results]')
      const histEl = host?.querySelector('[data-ws-history-list]')
      if (resultsEl) {
        resultsEl.innerHTML = ''
        if (!results.length) {
          paintResultEmpty()
        } else {
          resultsEl.style.cssText =
            'display:flex;flex-wrap:wrap;gap:8px;width:100%;justify-content:flex-start;align-content:start;'
          for (const r of results) {
            const src = pickDisplayUrl(r)
            const card = document.createElement('div')
            card.dataset.wsResultCard = ''
            card.style.cssText =
              'border:1px solid #2a3140;border-radius:8px;padding:4px;background:#10141c;max-width:140px;max-height:160px;overflow:hidden;'
            if (src) {
              const img = document.createElement('img')
              img.src = src
              img.alt = '生成结果'
              img.dataset.wsResult = ''
              img.style.cssText = 'display:block;max-width:100%;max-height:148px;border-radius:4px;object-fit:cover;'
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
        const item = document.createElement('button')
        item.type = 'button'
        item.dataset.wsHistoryItem = jobId
        // VisioWork historyMain layout: thumb 52 + prompt + meta
        const thumb = pickDisplayUrl(results[0])
        const promptSnippet = (state.prompt || '').slice(0, 48) || '(无提示词)'
        const meta = `${state.mode || '文生图'} · ${state.modelId || '模型'} · ${state.ratio} · ×${results.length}`
        item.innerHTML =
          (thumb
            ? `<img src="${escapeHtml(thumb)}" alt="" width="52" height="52" />`
            : `<span style="width:52px;height:52px;border-radius:8px;background:#1a2030;flex:none;"></span>`) +
          `<span style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;">` +
          `<span style="font-size:12px;line-height:1.4;color:#e8eaed;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(promptSnippet)}</span>` +
          `<span style="font-size:11px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(meta)}</span>` +
          `</span>`
        item.addEventListener('click', () => {
          markHistoryActive(jobId)
          api.paintGenerateResult(value)
          setStatus('已从历史载入结果')
        })
        histEl.insertBefore(item, histEl.firstChild)
        markHistoryActive(jobId)
      }
      setStatus(
        results.length
          ? `生成完成 ×${results.length}${value?.jobId ? ` · job ${String(value.jobId).slice(0, 8)}` : ''}`
          : `生成完成但无图${value?.phase ? ` (${value.phase})` : ''}`,
      )
    },
    dispose() {
      host?.remove()
      host = undefined
      open = false
    },
  }
  return api
}

/** @param {{ url?: string, localPath?: string }} r */
function pickDisplayUrl(r) {
  const url = r?.url ? String(r.url) : ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('data:')) return url
  return ''
}

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
