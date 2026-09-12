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
/* When studio module open, never leave host New Session looking selected */
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][aria-current="true"],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][data-active],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="SessionItem"][aria-current="true"],
[data-pane="sidebar"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"],
[class*="sidebarCol"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"] {
  background: transparent !important;
  font-weight: inherit !important;
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

  const paintSelected = (tabs) => {
    if (!(tabs instanceof HTMLElement)) return
    for (const el of tabs.querySelectorAll('[data-dsh-ws-tab]')) {
      const on = !!current && el.dataset.dshWsTab === current
      el.setAttribute('aria-selected', on ? 'true' : 'false')
      if (on) el.setAttribute('data-dsh-ws-tab-current', '')
      else el.removeAttribute('data-dsh-ws-tab-current')
    }
  }

  const stampStudioOpen = (on) => {
    const root = sidebarRoot()
    const col = sidebarColumn()
    for (const el of [root, col]) {
      if (!(el instanceof HTMLElement)) continue
      if (on) el.setAttribute('data-dsh-ws-studio-open', '')
      else el.removeAttribute('data-dsh-ws-studio-open')
    }
    // Soft-clear host session list selection chrome while workstation is open
    if (on && col instanceof HTMLElement) {
      col.querySelectorAll('[aria-current="true"],[aria-selected="true"]').forEach((el) => {
        if (el.closest(ENTRY_TABS)) return
        if (el.closest('[data-dsh-ws-session-tabs]')) return
        // Don't strip our own tabs; only host session rows / New Session leftovers
        if (el.getAttribute('data-dsh-ws-tab')) return
        try {
          el.setAttribute('aria-current', 'false')
          el.setAttribute('aria-selected', 'false')
          el.removeAttribute('data-active')
        } catch (_) {}
      })
    }
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

  place()
  observer = new MutationObserver(() => place())
  observer.observe(document.documentElement, { childList: true, subtree: true })

  const dispose = () => {
    disposed = true
    observer?.disconnect()
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
  }

  return { dispose, setSelected }
}
