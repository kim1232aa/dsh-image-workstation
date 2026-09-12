/**
 * Sidebar 「新会话 | 生图」 — VisioWork *shape* only (rebuild, not a fork).
 * Imperative DOM tabs beside shell New Session; dispose restores the button.
 * Selected chrome stays on [data-dsh-ws-session-tabs] only — never style host New Session.
 */

export const ENTRY_ROOT = '[data-dsh-ws-sidebar-root]'
export const ENTRY_TABS = '[data-dsh-ws-session-tabs]'
export const TAB_NEW = 'new-session'
export const TAB_STUDIO = 'studio'

const NEW_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>'
const STUDIO_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><circle cx="5.6" cy="5.8" r="1"/><path d="M2.5 12.5l3.6-3.4 2.4 2.2 3-3 2 2.4"/></svg>'

const TAB_STYLES = `
[data-dsh-ws-session-tabs] {
  display:flex; gap:2px; width:100%;
  font-family: var(--dsw-font, var(--dsw-font-family, inherit));
  font-size: inherit;
}
[data-dsh-ws-session-tabs] [data-dsh-ws-tab] {
  display:inline-flex; align-items:center; gap:6px;
  padding:6px 10px; border:1px solid transparent; border-radius:8px;
  background:transparent; cursor:pointer;
  font:inherit; font-weight:400; color:inherit;
}
/* Studio open: quiet outline — not a second top-nav primary */
[data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current] {
  font-weight:500;
  background: transparent;
  border-color: rgba(0,0,0,.14);
  color: var(--dsw-alias-label-secondary, inherit);
  box-shadow: none;
}
[data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"][data-dsh-ws-tab-current] {
  font-weight:600; background: var(--dsw-alias-interactive-bg-hover, transparent);
}
/* While any workstation page (画廊/普通生图/…) is open, never let 新会话 look selected */
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"],
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"][data-dsh-ws-tab-current],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"][data-dsh-ws-tab-current] {
  font-weight: 400 !important;
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  color: inherit !important;
}
/* Left 生图: quiet outline, never primary/filled while studio-open.
   Extra-quiet (unselected weight) when top page is 画廊 / any non-普通生图. */
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"],
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current],
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"] *,
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"] * {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"],
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current] {
  font-weight: 400 !important;
  border-color: rgba(0,0,0,.14) !important;
  color: var(--dsw-alias-label-secondary, inherit) !important;
}
html[data-dsh-ws-studio-open][data-dsh-ws-top-page="普通生图"] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current] {
  font-weight: 500 !important;
}
/* Host leftover New Session / English button must not look active while studio open */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] button[data-dsh-part="new-session"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] button[class*="newSession"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] button[class*="newSession"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] button[data-dsh-part="new-session"] {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  font-weight: inherit !important;
}
/* When studio module open, never leave host New Session / session rows looking selected.
   Flag lives on html/body so host remounts cannot drop the chrome clear. */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="SessionItem"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="page"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] [aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] [data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="workspace"] [aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][data-active],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="Session"][aria-current="true"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][aria-current="true"],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][data-active],
[data-pane="sidebar"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"],
[class*="sidebarCol"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="SessionRow"][class*="selected"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][class*="selected"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][class*="selected"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionRow"][class*="selected"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="SessionRow"][class*="selected"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][class*="selected"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"],
body[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionRow"][class*="selected"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="selected"][class*="session"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="selected"][class*="session"] {
  background: transparent !important;
  background-color: transparent !important;
  font-weight: inherit !important;
  box-shadow: none !important;
  outline: none !important;
  color: inherit !important;
  opacity: 1;
}
/* Kill selected rail / fill on row + descendants */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"] *,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="SessionRow"][class*="selected"] *,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionRow"][class*="selected"] *,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"] *,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"] *,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][aria-current="true"] * {
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"]::after,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"]::after,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active]::after,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"]::after,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][class*="selected"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][class*="selected"]::after,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionRow"][class*="selected"]::before,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionRow"][class*="selected"]::after,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"]::before,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionRow"][class*="selected"]::after {
  opacity: 0 !important;
  background: transparent !important;
  background-color: transparent !important;
  content: none !important;
  display: none !important;
  width: 0 !important;
  height: 0 !important;
  border: none !important;
}
/* Force host session list (incl. first 「New Session」) to sibling weight/color while studio-open */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] > :first-child,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionList"] > :first-child,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="SessionList"] > :first-child,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [data-dsh-ws-host-session-quiet],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] > :first-child,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [data-dsh-ws-host-session-quiet] {
  font-weight: 400 !important;
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
  color: var(--dsw-alias-label-secondary, inherit) !important;
}
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] > :first-child,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] > :first-child *,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionList"] > :first-child,
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="sessionList"] > :first-child *,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [data-dsh-ws-host-session-quiet],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [data-dsh-ws-host-session-quiet] *,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] > :first-child *,
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [data-dsh-ws-host-session-quiet] * {
  font-weight: 400 !important;
  color: var(--dsw-alias-label-secondary, inherit) !important;
  background: transparent !important;
  background-color: transparent !important;
  box-shadow: none !important;
}
`

function sidebarColumn() {
  return (
    document.querySelector('[data-pane="sidebar"]') ||
    document.querySelector('[class*="sidebarCol"]') ||
    undefined
  )
}

function sidebarRoot() {
  const column = sidebarColumn()
  if (!column) return undefined
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement
  return logoOwner || column.firstElementChild || undefined
}

function newSessionButton(root) {
  return (
    root.querySelector('button[data-dsh-part="new-session"]') ||
    root.querySelector('button[class*="newSession"]') ||
    Array.from(root.children).find((c) => c instanceof HTMLButtonElement)
  )
}

function makeTab(id, label, tooltip, icon, onClick) {
  const tab = document.createElement('button')
  tab.type = 'button'
  tab.dataset.dshWsTab = id
  tab.setAttribute('role', 'tab')
  tab.setAttribute('aria-label', label)
  tab.setAttribute('title', tooltip)
  tab.innerHTML = `<span aria-hidden="true">${icon}</span><span>${label}</span>`
  tab.addEventListener('click', onClick)
  return tab
}

/**
 * @param {{ onStudio: () => void, onNewSession: () => void, labels?: { newSession?: string, studio?: string }, initialSelected?: string }} opts
 * @returns {{ dispose: () => void, setSelected: (id: string) => void }}
 */
export function mountSidebarEntry(opts) {
  const labels = {
    newSession: opts.labels?.newSession || '新会话',
    studio: opts.labels?.studio || '生图',
  }

  let disposed = false
  let observer
  let hiddenButton
  let tabsEl
  let styleEl
  let current = opts.initialSelected || TAB_NEW

  const readTopPage = () =>
    document.documentElement.getAttribute('data-dsh-ws-top-page') ||
    document.body?.getAttribute('data-dsh-ws-top-page') ||
    document.querySelector('[data-dsh-ws-studio-host]')?.getAttribute('data-ws-top-page') ||
    ''

  const studioTabLooksCurrent = () => {
    if (current !== TAB_STUDIO) return false
    const top = readTopPage()
    // Top 画廊 / 视频 / 画布 / 电商 is the active chrome — left 生图 stays unselected
    if (top && top !== '普通生图' && top !== 'image') return false
    return true
  }

  const paintSelected = (tabs) => {
    if (!(tabs instanceof HTMLElement)) return
    for (const el of tabs.querySelectorAll('[data-dsh-ws-tab]')) {
      const id = el.dataset.dshWsTab
      const on = id === TAB_STUDIO ? studioTabLooksCurrent() : current === TAB_NEW && id === TAB_NEW
      el.setAttribute('aria-selected', on ? 'true' : 'false')
      if (on) el.setAttribute('data-dsh-ws-tab-current', '')
      else el.removeAttribute('data-dsh-ws-tab-current')
    }
  }

  const paintRowQuiet = (el) => {
    if (!(el instanceof HTMLElement)) return
    try {
      el.style.setProperty('background', 'transparent', 'important')
      el.style.setProperty('background-color', 'transparent', 'important')
      el.style.setProperty('box-shadow', 'none', 'important')
      el.style.setProperty('outline', 'none', 'important')
      el.style.setProperty('font-weight', '400', 'important')
      el.style.setProperty('color', 'var(--dsw-alias-label-secondary, inherit)', 'important')
      for (const child of el.querySelectorAll('*')) {
        if (!(child instanceof HTMLElement)) continue
        child.style.setProperty('background', 'transparent', 'important')
        child.style.setProperty('background-color', 'transparent', 'important')
        child.style.setProperty('box-shadow', 'none', 'important')
        child.style.setProperty('font-weight', '400', 'important')
        child.style.setProperty('color', 'var(--dsw-alias-label-secondary, inherit)', 'important')
      }
    } catch (_) {}
  }

  const stripSelectedTokens = (el) => {
    if (!(el instanceof HTMLElement)) return
    const cls = String(el.className || '')
    if (!cls) return
    const next = cls
      .split(/\s+/)
      .filter((t) => t && !/selected|Selected|active|Active|current|Current|isActive|IsActive/i.test(t))
      .join(' ')
    if (next !== el.className) el.className = next
  }

  const clearHostSessionChrome = (scope) => {
    const root = scope instanceof HTMLElement ? scope : sidebarColumn() || document
    const nodes = new Set(
      root.querySelectorAll(
        '[aria-current="true"],[aria-current="page"],[aria-selected="true"],[data-active],[data-selected],button[data-dsh-part="new-session"],button[class*="newSession"],[class*="sessionRow"],[class*="SessionRow"],[class*="sessionItem"],[class*="SessionItem"],[class*="session"][class*="selected"],[class*="Session"][class*="selected"],[class*="selected"][class*="session"],[class*="Selected"]',
      ),
    )
    // Also catch host rows titled exactly "New Session" / "新会话" (class names vary)
    try {
      const walkRoot = root instanceof Document ? root.body : root
      if (walkRoot instanceof HTMLElement) {
        for (const el of walkRoot.querySelectorAll('button,a,div,li,span')) {
          if (!(el instanceof HTMLElement)) continue
          if (el.closest(ENTRY_TABS) || el.closest('[data-dsh-ws-session-tabs]')) continue
          if (el.closest('[data-dsh-ws-studio-host]')) continue
          const label = (el.textContent || '').replace(/\s+/g, ' ').trim()
          if (/^(New Session|新会话|\+\s*新会话)(\b|$)/i.test(label)) {
            nodes.add(el)
            if (el.parentElement instanceof HTMLElement) nodes.add(el.parentElement)
          }
        }
      }
    } catch (_) {}
    for (const el of nodes) {
      if (!(el instanceof HTMLElement)) continue
      // Our dual tabs: keep 生图 current; strip 新会话 current while studio open
      if (el.closest(ENTRY_TABS) || el.closest('[data-dsh-ws-session-tabs]')) {
        if (el.getAttribute('data-dsh-ws-tab') === 'new-session') {
          el.removeAttribute('data-dsh-ws-tab-current')
          el.setAttribute('aria-selected', 'false')
        }
        continue
      }
      if (el.getAttribute('data-dsh-ws-tab')) continue
      // Never touch our studio frame / top tabs
      if (el.closest('[data-dsh-ws-studio-host]')) continue
      const cls = String(el.className || '')
      const label = (el.textContent || '').replace(/\s+/g, ' ').trim()
      const looksNewSession =
        el.getAttribute('data-dsh-part') === 'new-session' ||
        /newSession/i.test(cls) ||
        /^(New Session|新会话|\+\s*新会话)(\b|$)/i.test(label)
      const looksSession =
        looksNewSession ||
        /session|Session|workspace|Workspace|conversation|Conversation/i.test(cls) ||
        /session|Session|workspace|New Session|新会话/i.test(label)
      // Only strip host session-list / New Session chrome — leave folders/settings alone
      if (!looksSession && !el.hasAttribute('aria-current') && !el.hasAttribute('aria-selected')) continue
      if (!looksSession && el.hasAttribute('data-active') && !/session|Session/i.test(cls)) continue
      try {
        if (el.hasAttribute('aria-current')) el.setAttribute('aria-current', 'false')
        if (el.hasAttribute('aria-selected')) el.setAttribute('aria-selected', 'false')
        if (/session|Session|workspace|Workspace|newSession/i.test(cls) || looksNewSession) {
          el.removeAttribute('data-active')
          el.removeAttribute('data-selected')
        }
        // Host uses hashed CSS modules like YDXeBa_sessionRow YDXeBa_selected — strip aggressively
        if (
          /sessionRow|SessionRow|sessionItem|SessionItem|session|Session|newSession/i.test(cls) ||
          looksNewSession ||
          /selected|Selected|active|Active|current|Current/i.test(cls)
        ) {
          stripSelectedTokens(el)
        }
        if (/selected|active|current|session|newSession/i.test(cls) || looksNewSession || looksSession) {
          paintRowQuiet(el)
        }
        if (looksNewSession) {
          el.setAttribute('data-dsh-ws-host-session-quiet', '')
          if (el.parentElement instanceof HTMLElement) {
            el.parentElement.setAttribute('data-dsh-ws-host-session-quiet', '')
          }
        }
      } catch (_) {}
    }
    normalizeFirstSessionRow(root)
  }

  const normalizeFirstSessionRow = (scope) => {
    const col = scope instanceof HTMLElement ? scope : sidebarColumn()
    if (!(col instanceof HTMLElement)) return
    const rows = []
    for (const el of col.querySelectorAll(
      '[class*="sessionRow"],[class*="SessionRow"],[class*="sessionItem"],[class*="SessionItem"]',
    )) {
      if (!(el instanceof HTMLElement)) continue
      if (el.closest(ENTRY_TABS) || el.closest('[data-dsh-ws-studio-host]')) continue
      rows.push(el)
    }
    if (!rows.length) {
      for (const list of col.querySelectorAll('[class*="sessionList"],[class*="SessionList"]')) {
        for (const el of list.children) {
          if (el instanceof HTMLElement) rows.push(el)
        }
      }
    }
    if (!rows.length) return
    const isNew = (el) => {
      const label = (el.textContent || '').replace(/\s+/g, ' ').trim()
      return /^(New Session|新会话|\+\s*新会话)(\b|$)/i.test(label)
    }
    let color = ''
    const ref = rows.find((r, i) => i > 0 && !isNew(r))
    try {
      if (ref) {
        const cs = getComputedStyle(ref)
        color = cs.color || ''
        const w = Number(cs.fontWeight)
        if (w && w >= 600) color = color // keep color; weight forced to 400
      }
    } catch (_) {}
    const apply = (el) => {
      if (!(el instanceof HTMLElement)) return
      el.setAttribute('data-dsh-ws-host-session-quiet', '')
      stripSelectedTokens(el)
      try {
        el.style.setProperty('font-weight', '400', 'important')
        el.style.setProperty('color', color || 'var(--dsw-alias-label-secondary, inherit)', 'important')
        el.style.setProperty('background', 'transparent', 'important')
        el.style.setProperty('background-color', 'transparent', 'important')
        el.style.setProperty('box-shadow', 'none', 'important')
        for (const child of el.querySelectorAll('*')) {
          if (!(child instanceof HTMLElement)) continue
          child.style.setProperty('font-weight', '400', 'important')
          child.style.setProperty('color', color || 'var(--dsw-alias-label-secondary, inherit)', 'important')
          child.style.setProperty('background', 'transparent', 'important')
          child.style.setProperty('background-color', 'transparent', 'important')
        }
      } catch (_) {}
    }
    apply(rows[0])
    for (const el of rows) {
      if (isNew(el)) apply(el)
    }
  }

  const stampStudioOpen = (on) => {
    const root = sidebarRoot()
    const col = sidebarColumn()
    const targets = [document.documentElement, document.body, root, col]
    for (const el of targets) {
      if (!(el instanceof HTMLElement)) continue
      if (on) el.setAttribute('data-dsh-ws-studio-open', '')
      else el.removeAttribute('data-dsh-ws-studio-open')
    }
    const top = readTopPage()
    for (const el of [document.documentElement, document.body]) {
      if (!(el instanceof HTMLElement)) continue
      if (on && top) el.setAttribute('data-dsh-ws-top-page', top)
      if (!on) el.removeAttribute('data-dsh-ws-top-page')
    }
    if (on) clearHostSessionChrome(col || document)
  }

  const setSelected = (id) => {
    if (id === TAB_STUDIO) current = TAB_STUDIO
    else if (id === TAB_NEW) current = TAB_NEW
    else current = '' // none — avoid dual highlight with top page tabs / host New Session
    stampStudioOpen(current === TAB_STUDIO)
    if (tabsEl) paintSelected(tabsEl)
  }

  const place = () => {
    if (disposed) return
    const root = sidebarRoot()
    if (!root) return
    root.dataset.dshWsSidebarRoot = ''

    const button = newSessionButton(root)
    if (!button) return

    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.dataset.dshWsSidebarTabs = ''
      styleEl.textContent = TAB_STYLES
      document.head.appendChild(styleEl)
    }

    const existing = root.querySelector(ENTRY_TABS)
    if (existing && existing.parentElement === button.parentElement) {
      tabsEl = existing
      hiddenButton = button
      button.style.display = 'none'
      button.setAttribute('aria-hidden', 'true')
      button.tabIndex = -1
      paintSelected(existing)
      return
    }
    existing?.remove()

    const tabs = document.createElement('div')
    tabs.dataset.dshWsSessionTabs = ''
    tabs.setAttribute('role', 'tablist')
    tabs.setAttribute('aria-label', labels.studio)

    const newTab = makeTab(TAB_NEW, labels.newSession, labels.newSession, NEW_ICON, () => {
      opts.onNewSession()
      setSelected(TAB_NEW)
    })
    const studioTab = makeTab(TAB_STUDIO, labels.studio, labels.studio, STUDIO_ICON, () => {
      opts.onStudio()
      setSelected(TAB_STUDIO)
    })

    tabs.append(newTab, studioTab)
    button.parentElement?.insertBefore(tabs, button)
    button.style.display = 'none'
    button.setAttribute('aria-hidden', 'true')
    button.tabIndex = -1
    hiddenButton = button
    tabsEl = tabs
    paintSelected(tabs)
  }

  /** Host often re-applies session aria-current after route paint — keep clearing while open. */
  let chromeObserver
  let flagObserver
  let chromeQuiet = false
  const studioOpenDesired = () => {
    // User chose 新会话 — never fight close() / re-stamp open chrome
    if (current === TAB_NEW) return false
    if (current === TAB_STUDIO) return true
    // Gallery/other workstation page may stamp html flag before sidebar current flips
    if (document.documentElement.hasAttribute('data-dsh-ws-studio-open')) return true
    if (document.body?.hasAttribute('data-dsh-ws-studio-open')) return true
    return Boolean(document.querySelector('[data-dsh-ws-studio-host][data-ws-top-page="画廊"]'))
  }

  const watchHostChrome = () => {
    chromeObserver?.disconnect()
    flagObserver?.disconnect()
    const col = sidebarColumn()
    if (!(col instanceof HTMLElement)) return
    chromeObserver = new MutationObserver(() => {
      if (disposed || chromeQuiet) return
      if (!studioOpenDesired()) return
      chromeQuiet = true
      try {
        // Re-stamp html/body flag + clear host selection chrome (class + ::before)
        if (current !== TAB_NEW) current = TAB_STUDIO
        stampStudioOpen(true)
        if (tabsEl) paintSelected(tabsEl)
      } finally {
        // Observer delivers records after this stack — keep quiet until next macrotask
        setTimeout(() => {
          chromeQuiet = false
        }, 0)
      }
    })
    chromeObserver.observe(col, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['aria-current', 'aria-selected', 'data-active', 'data-selected', 'class', 'style'],
    })
    // If host/React strips our flag while 画廊/studio is still up, put it back
    flagObserver = new MutationObserver(() => {
      if (disposed || chromeQuiet) return
      if (!studioOpenDesired()) return
      if (!document.documentElement.hasAttribute('data-dsh-ws-studio-open')) {
        chromeQuiet = true
        try {
          if (current !== TAB_NEW) current = TAB_STUDIO
          stampStudioOpen(true)
          if (tabsEl) paintSelected(tabsEl)
        } finally {
          setTimeout(() => {
            chromeQuiet = false
          }, 0)
        }
      }
    })
    flagObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-dsh-ws-studio-open', 'data-dsh-ws-top-page'],
    })
    if (document.body) {
      flagObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['data-dsh-ws-studio-open', 'data-dsh-ws-top-page'],
      })
    }
  }

  const placeAndWatch = () => {
    place()
    if (!disposed && studioOpenDesired()) {
      if (current !== TAB_NEW) current = TAB_STUDIO
      stampStudioOpen(true)
      if (tabsEl) paintSelected(tabsEl)
      watchHostChrome()
    }
  }

  placeAndWatch()
  observer = new MutationObserver(() => placeAndWatch())
  observer.observe(document.documentElement, { childList: true, subtree: true })

  const dispose = () => {
    disposed = true
    observer?.disconnect()
    chromeObserver?.disconnect()
    flagObserver?.disconnect()
    tabsEl?.remove()
    styleEl?.remove()
    styleEl = undefined
    stampStudioOpen(false)
    if (hiddenButton) {
      hiddenButton.style.removeProperty('display')
      hiddenButton.removeAttribute('aria-hidden')
      hiddenButton.removeAttribute('tabindex')
    }
    const root = document.querySelector(ENTRY_ROOT)
    if (root) {
      delete root.dataset.dshWsSidebarRoot
      root.removeAttribute('data-dsh-ws-studio-open')
    }
    document.documentElement.removeAttribute('data-dsh-ws-studio-open')
    document.body?.removeAttribute('data-dsh-ws-studio-open')
  }

  return { dispose, setSelected }
}
