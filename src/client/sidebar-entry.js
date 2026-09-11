/**
 * Sidebar 「新会话 | 生图」 — VisioWork *shape* only (rebuild, not a fork).
 * Imperative DOM tabs beside shell New Session; dispose restores the button.
 */

export const ENTRY_ROOT = '[data-dsh-ws-sidebar-root]'
export const ENTRY_TABS = '[data-dsh-ws-session-tabs]'
export const TAB_NEW = 'new-session'
export const TAB_STUDIO = 'studio'

const NEW_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>'
const STUDIO_ICON =
  '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><circle cx="5.6" cy="5.8" r="1"/><path d="M2.5 12.5l3.6-3.4 2.4 2.2 3-3 2 2.4"/></svg>'

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
  tab.style.cssText =
    'display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:0;background:transparent;cursor:pointer;font:inherit;color:inherit;'
  tab.innerHTML = `<span aria-hidden="true">${icon}</span><span>${label}</span>`
  tab.addEventListener('click', onClick)
  return tab
}

/**
 * @param {{ onStudio: () => void, onNewSession: () => void, labels?: { newSession?: string, studio?: string } }} opts
 * @returns {() => void} dispose
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

  const place = () => {
    if (disposed) return
    const root = sidebarRoot()
    if (!root) return
    root.dataset.dshWsSidebarRoot = ''

    const button = newSessionButton(root)
    if (!button) return

    const existing = root.querySelector(ENTRY_TABS)
    if (existing && existing.parentElement === button.parentElement) {
      tabsEl = existing
      hiddenButton = button
      button.style.display = 'none'
      button.setAttribute('aria-hidden', 'true')
      button.tabIndex = -1
      return
    }
    existing?.remove()

    const tabs = document.createElement('div')
    tabs.dataset.dshWsSessionTabs = ''
    tabs.setAttribute('role', 'tablist')
    tabs.setAttribute('aria-label', labels.studio)
    tabs.style.cssText = 'display:flex;gap:2px;width:100%;'

    const setSelected = (id) => {
      for (const el of tabs.querySelectorAll('[data-dsh-ws-tab]')) {
        const on = el.dataset.dshWsTab === id
        el.setAttribute('aria-selected', on ? 'true' : 'false')
        el.style.fontWeight = on ? '600' : '400'
      }
    }

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
    setSelected(TAB_NEW)
  }

  place()
  observer = new MutationObserver(() => place())
  observer.observe(document.documentElement, { childList: true, subtree: true })

  return () => {
    disposed = true
    observer?.disconnect()
    tabsEl?.remove()
    if (hiddenButton) {
      hiddenButton.style.removeProperty('display')
      hiddenButton.removeAttribute('aria-hidden')
      hiddenButton.removeAttribute('tabindex')
    }
    const root = document.querySelector(ENTRY_ROOT)
    if (root) delete root.dataset.dshWsSidebarRoot
  }
}
