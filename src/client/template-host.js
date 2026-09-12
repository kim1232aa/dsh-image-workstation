/**
 * 模板库 / 提示词广场 shell — case cards + 一键回填 (docs/ui/08).
 * Entry: 生图区「模板库」. Fills 普通生图 via event or shared hook;
 * honest status if studio prompt not mounted.
 */
import { TEMPLATE_TITLE, TEMPLATE_LABELS, EMPTY } from '../ui/labels.js'

export const TEMPLATE_PAGE = TEMPLATE_TITLE
export const FILL_PROMPT_EVENT = 'dsh-ws-fill-prompt'

/** Built-in case cards — Chinese labels; no apple demos / VisioWork paste */
export const TEMPLATE_CASES = Object.freeze([
  {
    id: 'case-rain-street',
    title: '雨夜巷口',
    category: '场景',
    prompt:
      '雨夜窄巷，霓虹倒映积水，一名撑伞行人侧影，浅景深，电影感灯光，写实摄影',
  },
  {
    id: 'case-tea-still',
    title: '茶席静物',
    category: '静物',
    prompt: '木质茶席，青瓷盖碗与干花，柔和侧光，浅景深，日系静物摄影',
  },
  {
    id: 'case-mountain-dawn',
    title: '山脊晨雾',
    category: '风景',
    prompt: '远山晨雾，金色天光穿透云层，层峦叠嶂，广角风光，清透大气',
  },
  {
    id: 'case-studio-portrait',
    title: '棚拍人像',
    category: '人像',
    prompt: '棚拍半身人像，柔光箱主光，干净灰背景，自然表情，高清细节',
  },
  {
    id: 'case-product-soft',
    title: '柔光产品',
    category: '电商',
    prompt: '桌面产品静物，柔和散射光，干净背景，轻微倒影，商业摄影构图',
  },
  {
    id: 'case-ink-city',
    title: '水墨城郭',
    category: '风格',
    prompt: '水墨意城市天际线，留白与浓淡对比，传统笔触与现代建筑融合',
  },
])

/**
 * @param {Record<string, string>} T
 */
export function templateHostStyles(T) {
  return `
[data-dsh-ws-studio-host] [data-ws-tpl-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-tpl-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-tpl-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(860px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-tpl-toolbar] {
  display:flex; gap:8px; align-items:center; flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-tpl-grid] {
  display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
  gap:10px;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] {
  display:flex; flex-direction:column; gap:6px; padding:10px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); text-align:left;
  cursor:default; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card]:hover {
  border-color: var(--dsw-alias-border-l4);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] strong {
  font-size:13px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-cat] {
  font-size:11px; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-excerpt] {
  font-size:12px; color: var(--dsw-alias-label-secondary);
  line-height:1.4; display:-webkit-box; -webkit-line-clamp:3;
  -webkit-box-orient:vertical; overflow:hidden; min-height:3.6em;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-fill] {
  align-self:flex-start; margin-top:2px;
}
`
}

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Try fill 普通生图 prompt. Prefer shared hook; else CustomEvent; honest if neither lands.
 * @param {HTMLElement} host
 * @param {string} prompt
 * @param {{ onFillPrompt?: (p: string) => boolean | void, setStatus?: (t: string) => void }} hooks
 * @returns {{ ok: boolean, via: 'hook' | 'event' | 'none', message: string }}
 */
export function fillStudioPrompt(host, prompt, hooks = {}) {
  const text = String(prompt || '')
  if (!text.trim()) {
    return { ok: false, via: 'none', message: '无提示词可回填' }
  }

  if (typeof hooks.onFillPrompt === 'function') {
    try {
      const r = hooks.onFillPrompt(text)
      if (r !== false) {
        return { ok: true, via: 'hook', message: `已${TEMPLATE_LABELS.fill}` }
      }
    } catch (_) {
      /* fall through */
    }
  }

  const promptEl = host?.querySelector?.('[data-ws-prompt]')
  if (promptEl instanceof HTMLTextAreaElement) {
    promptEl.value = text
    promptEl.dispatchEvent(new Event('input', { bubbles: true }))
    host.dispatchEvent(
      new CustomEvent(FILL_PROMPT_EVENT, {
        bubbles: true,
        detail: { prompt: text, via: 'dom' },
      }),
    )
    return { ok: true, via: 'event', message: `已${TEMPLATE_LABELS.fill}` }
  }

  // Studio not mounted / no prompt field — still dispatch for listeners, report honesty
  if (host instanceof HTMLElement) {
    host.dispatchEvent(
      new CustomEvent(FILL_PROMPT_EVENT, {
        bubbles: true,
        detail: { prompt: text, via: 'orphan', studioMounted: false },
      }),
    )
  }
  return {
    ok: false,
    via: 'none',
    message: '普通生图未挂载，无法回填提示词',
  }
}

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string,string>, css: object, setStatus?: (t: string) => void, onFillPrompt?: (p: string) => boolean | void }} opts
 */
export function mountTemplateHost(host, opts) {
  const { T, css } = opts
  const setHostStatus = typeof opts.setStatus === 'function' ? opts.setStatus : () => {}
  /** @type {{ query: string, favoritesOnly: boolean, favoriteIds: Set<string>, order: typeof TEMPLATE_CASES }} */
  const state = {
    query: '',
    favoritesOnly: false,
    favoriteIds: new Set(),
    order: [...TEMPLATE_CASES],
  }

  let styleEl = host.querySelector('style[data-ws-tpl-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-tpl-styles', '')
    styleEl.textContent = templateHostStyles(T)
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-tpl-overlay]')?.remove()

  const overlay = document.createElement('div')
  overlay.setAttribute('data-ws-tpl-overlay', '')
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-label', TEMPLATE_TITLE)
  overlay.innerHTML = `
    <div data-ws-tpl-panel>
      <div data-ws-tpl-head>
        <strong style="font-size:14px;">${TEMPLATE_TITLE}</strong>
        <span style="font-size:11px;color:${T.fg3};">${TEMPLATE_LABELS.square}</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-tpl-close style="${css.pill()}">关闭</button>
      </div>
      <div data-ws-tpl-toolbar>
        <input type="search" data-ws-tpl-search placeholder="关键词搜索" aria-label="关键词搜索"
          style="flex:1;min-width:8rem;${css.field};font-size:12px;" />
        <button type="button" data-ws-tpl-fav-filter aria-pressed="false" style="${css.pill()}">${TEMPLATE_LABELS.favorite}</button>
        <button type="button" data-ws-tpl-shuffle style="${css.pill({ fill: T.module })}">${EMPTY.shuffle || TEMPLATE_LABELS.shuffle}</button>
      </div>
      <div data-ws-tpl-grid role="list" aria-label="${EMPTY.inspiration || TEMPLATE_LABELS.inspire}"></div>
      <p data-ws-tpl-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `
  host.appendChild(overlay)

  const setStatus = (text) => {
    const el = overlay.querySelector('[data-ws-tpl-status]')
    if (el) el.textContent = text
  }

  const visibleCases = () => {
    const q = state.query.trim().toLowerCase()
    return state.order.filter((c) => {
      if (state.favoritesOnly && !state.favoriteIds.has(c.id)) return false
      if (!q) return true
      return (
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.prompt.toLowerCase().includes(q)
      )
    })
  }

  const paintCards = () => {
    const grid = overlay.querySelector('[data-ws-tpl-grid]')
    if (!(grid instanceof HTMLElement)) return
    const list = visibleCases()
    if (!list.length) {
      grid.innerHTML = `<p style="margin:8px 0;font-size:12px;color:${T.fg3};grid-column:1/-1;">无匹配案例</p>`
      return
    }
    grid.innerHTML = list
      .map((c) => {
        const fav = state.favoriteIds.has(c.id)
        return `
        <article data-ws-tpl-card data-id="${escapeHtml(c.id)}" role="listitem">
          <strong>${escapeHtml(c.title)}</strong>
          <span data-ws-tpl-cat>${escapeHtml(c.category)}</span>
          <span data-ws-tpl-excerpt>${escapeHtml(c.prompt)}</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-tpl-fill style="${css.pill({ size: '11px', fill: T.hover, color: T.focus })}">${TEMPLATE_LABELS.fill}</button>
            <button type="button" data-ws-tpl-fav aria-pressed="${fav ? 'true' : 'false'}" style="${css.pill({ size: '11px' })}">${fav ? '已收藏' : TEMPLATE_LABELS.favorite}</button>
          </div>
        </article>`
      })
      .join('')

    grid.querySelectorAll('[data-ws-tpl-card]').forEach((card) => {
      const id = card.getAttribute('data-id') || ''
      const found = TEMPLATE_CASES.find((c) => c.id === id)
      card.querySelector('[data-ws-tpl-fill]')?.addEventListener('click', () => {
        if (!found) return
        const result = fillStudioPrompt(host, found.prompt, {
          onFillPrompt: opts.onFillPrompt,
          setStatus: setHostStatus,
        })
        setStatus(result.message)
        setHostStatus(result.message)
        if (result.ok) close()
      })
      card.querySelector('[data-ws-tpl-fav]')?.addEventListener('click', () => {
        if (state.favoriteIds.has(id)) state.favoriteIds.delete(id)
        else state.favoriteIds.add(id)
        paintCards()
      })
    })
  }

  overlay.querySelector('[data-ws-tpl-search]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLInputElement} */ (e.target)
    state.query = t.value || ''
    paintCards()
  })

  overlay.querySelector('[data-ws-tpl-fav-filter]')?.addEventListener('click', () => {
    state.favoritesOnly = !state.favoritesOnly
    const btn = overlay.querySelector('[data-ws-tpl-fav-filter]')
    if (btn instanceof HTMLElement) {
      btn.setAttribute('aria-pressed', state.favoritesOnly ? 'true' : 'false')
    }
    paintCards()
  })

  overlay.querySelector('[data-ws-tpl-shuffle]')?.addEventListener('click', () => {
    const next = [...state.order]
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[next[i], next[j]] = [next[j], next[i]]
    }
    state.order = next
    paintCards()
    setStatus(`已${TEMPLATE_LABELS.shuffle}`)
  })

  const close = () => {
    overlay.removeAttribute('data-open')
  }
  const open = () => {
    overlay.setAttribute('data-open', '')
    paintCards()
    setStatus(`${TEMPLATE_TITLE} · ${TEMPLATE_LABELS.inspire}`)
    setHostStatus(TEMPLATE_TITLE)
  }

  overlay.querySelector('[data-ws-tpl-close]')?.addEventListener('click', close)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })

  paintCards()

  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute('data-open'),
    fillStudioPrompt: (prompt) => fillStudioPrompt(host, prompt, opts),
    dispose: () => {
      overlay.remove()
      styleEl?.remove()
    },
  }
}
