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
  border-color: var(--dsw-alias-border-l2, rgba(0,0,0,.12));
  color: var(--dsw-alias-label-secondary, inherit);
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
html[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"],
body[data-dsh-ws-studio-open] [data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"] {
  font-weight: 500;
  border-color: var(--dsw-alias-border-l2, rgba(0,0,0,.12));
  color: var(--dsw-alias-label-secondary, inherit);
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
[class*="sidebarCol"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"] {
  background: transparent !important;
  background-color: transparent !important;
  font-weight: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active]::before {
  opacity: 0 !important;
  background: transparent !important;
}
/* Host session list row literally titled New Session — quiet while workstation open */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="Session"][aria-current="true"] {
  color: inherit !important;
  opacity: 0.85;
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

  const paintSelected = (tabs) => {
    if (!(tabs instanceof HTMLElement)) return
    for (const el of tabs.querySelectorAll('[data-dsh-ws-tab]')) {
      const on = !!current && el.dataset.dshWsTab === current
      el.setAttribute('aria-selected', on ? 'true' : 'false')
      if (on) el.setAttribute('data-dsh-ws-tab-current', '')
      else el.removeAttribute('data-dsh-ws-tab-current')
    }
  }

  const clearHostSessionChrome = (scope) => {
    const root = scope instanceof HTMLElement ? scope : sidebarColumn() || document
    const nodes = root.querySelectorAll(
      '[aria-current="true"],[aria-current="page"],[aria-selected="true"],[data-active],[data-selected],button[data-dsh-part="new-session"],button[class*="newSession"]',
    )
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
      const label = (el.textContent || '').trim()
      const looksNewSession =
        el.getAttribute('data-dsh-part') === 'new-session' ||
        /newSession/i.test(cls) ||
        /^(New Session|新会话|\+\s*新会话)$/i.test(label)
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
        if (/selected|active|current|session|newSession/i.test(cls) || looksNewSession) {
          el.style.setProperty('background', 'transparent', 'important')
          el.style.setProperty('background-color', 'transparent', 'important')
          el.style.setProperty('box-shadow', 'none', 'important')
          el.style.setProperty('font-weight', 'inherit', 'important')
        }
      } catch (_) {}
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
  let chromeQuiet = false
  const watchHostChrome = () => {
    chromeObserver?.disconnect()
    const col = sidebarColumn()
    if (!(col instanceof HTMLElement)) return
    chromeObserver = new MutationObserver(() => {
      if (disposed || current !== TAB_STUDIO || chromeQuiet) return
      chromeQuiet = true
      try {
        // Re-stamp html/body flag + clear host selection chrome
        stampStudioOpen(true)
      } finally {
        // Observer delivers records after this stack — keep quiet until next macrotask
        setTimeout(() => {
          chromeQuiet = false
        }, 0)
      }
    })
    chromeObserver.observe(col, {
      subtree: true,
      attributes: true,
      attributeFilter: ['aria-current', 'aria-selected', 'data-active', 'data-selected', 'class'],
    })
  }

  const placeAndWatch = () => {
    place()
    if (!disposed && current === TAB_STUDIO) {
      stampStudioOpen(true)
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
