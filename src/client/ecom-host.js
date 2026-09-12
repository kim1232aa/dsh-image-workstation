/**
 * 电商套图 page shell — upload → params → CTA stub 「通道未接」(docs/ui/07).
 * VisioWork-shaped density only; original CSS via --dsw-* host tokens.
 * Labels exact from ../ui/labels.js. No fake success / no paid generate.
 * Wired via TOP_TABS 「电商模式」 like video-host.
 */
import {
  ECOM_UPLOAD,
  ECOM_FORM,
  ECOM_PURPOSES,
  ECOM_FLOW,
  ECOM_RESULT_ACTIONS,
} from '../ui/labels.js'

export const ECOM_PAGE = '电商模式'
export const IMAGE_PAGE = '普通生图'

const CHANNEL_STUB = '通道未接'
export const ECOM_CHANNEL_STUB = CHANNEL_STUB
const UPLOAD_HINT = '上传 / 拖拽 / 粘贴'
const EMPTY_HINT = '先上传商品主图（主体 / 包装 / 细节，最多 4 张），可选再加一张风格参考图。'
const LOCALES = Object.freeze(['中文', 'English', '日本語', '한국어', '自定义'])

const PURPOSE_IDS = Object.freeze([
  'hero',
  'selling',
  'scene',
  'detail',
  'spec',
  'usage',
])

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * @typedef {{ id: string, url: string, name?: string, slot?: string }} ImageRef
 */

export function defaultEcomState() {
  return {
    productImages: /** @type {ImageRef[]} */ ([]),
    styleRef: /** @type {ImageRef | null} */ (null),
    name: '',
    paramsText: '',
    locale: LOCALES[0],
    purposes: PURPOSE_IDS.map((id, i) => ({
      id,
      label: ECOM_PURPOSES[i],
      enabled: i === 0 || i === 1,
      count: i === 0 ? 1 : 2,
      refImageId: undefined,
    })),
    plan: null,
    confirmed: false,
    taskBatch: null,
    results: [],
    historyGroupId: undefined,
  }
}

export function ecomHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="ecom"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="电商模式"] [data-ws-page="ecom"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="电商模式"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="电商模式"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="电商模式"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="电商模式"] [data-ws-page="canvas"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ecom-cols] {
  /* display owned by [data-ws-page="ecom"] — same node must not force flex */
  flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host] [data-ws-ecom-config] {
  width:min(420px, 42%); flex-shrink:0; border-right:1px solid var(--dsw-alias-border-l2);
  padding:10px 12px; overflow:auto; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:10px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-preview] {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;
  padding:10px 12px; background: var(--dsw-alias-bg-module-platform); overflow:auto;
}
[data-dsh-ws-studio-host] [data-ws-ecom-upload-grid] {
  display:grid; grid-template-columns:1fr 1fr; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-slot] {
  display:flex; flex-direction:column; gap:6px; padding:8px 10px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;
  padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ecom-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] {
  display:none; position:relative; width:100%; aspect-ratio:1; max-height:120px;
  border-radius:8px; overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] img {
  width:100%; height:100%; object-fit:cover; display:block;
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] button {
  position:absolute; top:4px; right:4px; width:20px; height:20px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:12px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-ecom-purpose-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap;
  padding:6px 8px; border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-fail] {
  display:none; padding:10px 12px; border-radius:10px;
  border:1px solid var(--dsw-alias-state-error-primary);
  background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary);
  font-size:13px; line-height:1.5;
}
[data-dsh-ws-studio-host] [data-ws-ecom-fail][data-visible] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-plan] {
  display:none; padding:10px 12px; border-radius:10px;
  border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base); font-size:12.5px; line-height:1.5;
}
[data-dsh-ws-studio-host] [data-ws-ecom-plan][data-visible] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-result-layout] {
  display:none; flex:1; min-height:0; gap:12px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-result-layout][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ecom-empty] {
  padding:24px 16px; text-align:center; color: var(--dsw-alias-label-tertiary);
  font-size:13px; line-height:1.55; border:1px dashed var(--dsw-alias-border-l3);
  border-radius:12px; background: var(--dsw-alias-bg-base);
}
`
}

/**
 * @param {Record<string, string>} T
 * @param {object} css
 * @param {ReturnType<typeof defaultEcomState>} state
 */
export function buildEcomPageHtml(T, css, state) {
  const slots = [
    { key: 'subject', label: ECOM_UPLOAD.subject },
    { key: 'packaging', label: ECOM_UPLOAD.packaging },
    { key: 'detail', label: ECOM_UPLOAD.detail },
    { key: 'extra', label: '商品图 4' },
  ]

  const slotHtml = slots
    .map(
      (s) => `
      <div data-ws-ecom-slot data-slot="${s.key}">
        <div style="font-size:11px;font-weight:600;color:${T.fg2};">${escapeHtml(s.label)}</div>
        <div data-ws-ecom-thumb data-slot="${s.key}">
          <img alt="" />
          <button type="button" data-ws-ecom-clear="${s.key}" aria-label="移除">×</button>
        </div>
        <div data-ws-ecom-drop="${s.key}" data-slot="${s.key}">
          <span>${UPLOAD_HINT}</span>
          <button type="button" data-ws-ecom-upload="${s.key}" style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
        </div>
        <input type="file" accept="image/*" data-ws-ecom-file="${s.key}" hidden />
      </div>`,
    )
    .join('')

  const purposeHtml = state.purposes
    .map(
      (p) => `
      <div data-ws-ecom-purpose-row data-purpose="${p.id}">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${T.fg};">
          <input type="checkbox" data-ws-ecom-purpose-enabled="${p.id}" ${p.enabled ? 'checked' : ''} />
          ${escapeHtml(p.label)}
        </label>
        <label style="display:flex;align-items:center;gap:4px;font-size:11px;color:${T.fg2};">
          张数
          <input type="number" min="1" max="8" data-ws-ecom-purpose-count="${p.id}" value="${p.count}" style="width:48px;${css.field};font-size:12px;" />
        </label>
      </div>`,
    )
    .join('')

  const localeOpts = LOCALES.map(
    (l) =>
      `<option value="${escapeHtml(l)}" ${l === state.locale ? 'selected' : ''}>${escapeHtml(l)}</option>`,
  ).join('')

  return `
<div data-ws-page="ecom" data-ws-ecom-cols role="region" aria-label="${ECOM_PAGE}">
  <aside data-ws-ecom-config>
    <div style="font-size:13px;font-weight:600;color:${T.fg};">${ECOM_PAGE}</div>

    <div style="${css.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T.fg};">${ECOM_UPLOAD.product}</div>
      <div data-ws-ecom-upload-grid>${slotHtml}</div>
    </div>

    <div style="${css.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T.fg};">${ECOM_UPLOAD.styleRef}</div>
      <div data-ws-ecom-slot data-slot="style">
        <div data-ws-ecom-thumb data-slot="style">
          <img alt="" />
          <button type="button" data-ws-ecom-clear="style" aria-label="移除">×</button>
        </div>
        <div data-ws-ecom-drop="style" data-slot="style">
          <span>${UPLOAD_HINT}</span>
          <button type="button" data-ws-ecom-upload="style" style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
        </div>
        <input type="file" accept="image/*" data-ws-ecom-file="style" hidden />
      </div>
    </div>

    <div style="${css.dockBlock}">
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T.fg2};">
        <span>${ECOM_FORM.name}</span>
        <input type="text" data-ws-ecom-name placeholder="商品名称" style="${css.field}" />
      </label>
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T.fg2};margin-top:6px;">
        <span style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          ${ECOM_FORM.params}
          <button type="button" data-ws-ecom-ai-write style="${css.pill({ size: '11px' })}">${ECOM_FORM.aiWrite}</button>
        </span>
        <textarea data-ws-ecom-params rows="3" placeholder="规格 / 卖点 / 材质等" style="resize:vertical;min-height:64px;${css.field};font-size:12.5px;"></textarea>
      </label>
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T.fg2};margin-top:6px;">
        <span>${ECOM_FORM.locale}</span>
        <select data-ws-ecom-locale aria-label="${ECOM_FORM.locale}" style="${css.select}">${localeOpts}</select>
      </label>
    </div>

    <div style="${css.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T.fg};">用途</div>
      <div data-ws-ecom-purposes style="display:flex;flex-direction:column;gap:6px;">${purposeHtml}</div>
    </div>

    <div data-ws-ecom-cta-footer style="display:flex;flex-direction:column;gap:6px;position:sticky;bottom:0;padding-top:6px;background:${T.bg};border-top:1px solid ${T.border2};">
      <button type="button" data-ws-ecom-plan-btn style="${css.pill({ size: '12px' })}">${ECOM_FLOW.planPreview}</button>
      <button type="button" data-ws-ecom-cta style="${css.cta}">${ECOM_FLOW.confirmBatch}</button>
      <button type="button" data-ws-ecom-export style="${css.pill()}">${ECOM_FLOW.exportList}</button>
      <p data-ws-ecom-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
    </div>
  </aside>

  <section data-ws-ecom-preview>
    <div style="font-size:13px;font-weight:600;color:${T.fg};">套图预览 / 结果</div>
    <div data-ws-ecom-empty role="status">${EMPTY_HINT}</div>
    <div data-ws-ecom-plan>
      <div style="font-weight:600;margin-bottom:6px;">${ECOM_FLOW.planPreview}</div>
      <div data-ws-ecom-plan-body></div>
      <div style="margin-top:8px;font-size:12px;color:${T.fg2};">确认后再批量生成；当前不会烧额度。</div>
    </div>
    <div data-ws-ecom-fail>
      <div style="font-weight:600;margin-bottom:4px;">未能生成</div>
      <div data-ws-ecom-fail-reason>原因：${CHANNEL_STUB}</div>
    </div>
    <div data-ws-ecom-result-layout>
      <div data-ws-ecom-hero style="flex:1.2;min-width:0;"></div>
      <div data-ws-ecom-rest style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;"></div>
    </div>
    <div data-ws-ecom-result-actions style="display:none;flex-wrap:wrap;gap:6px;">
      ${ECOM_RESULT_ACTIONS.map(
        (a) => `<button type="button" data-ws-ecom-result-action="${a}" style="${css.pill()}">${a}</button>`,
      ).join('')}
    </div>
  </section>
</div>
`
}

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string, string>, css: object }} opts
 */
export function mountEcomPage(host, opts) {
  const { T, css } = opts
  const state = defaultEcomState()

  const imageCols = host.querySelector('[data-ws-cols]')
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute('data-ws-page')) {
    imageCols.setAttribute('data-ws-page', 'image')
  }

  let styleEl = host.querySelector('style[data-ws-ecom-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-ecom-styles', '')
    styleEl.textContent = ecomHostStyles()
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-page="ecom"]')?.remove()

  const wrap = document.createElement('div')
  wrap.innerHTML = buildEcomPageHtml(T, css, state).trim()
  const page = wrap.firstElementChild
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {}, showStubFailure: () => {}, dispose: () => {} }
  }

  if (imageCols?.parentElement) imageCols.parentElement.appendChild(page)
  else host.appendChild(page)

  const setStatus = (text) => {
    const el = page.querySelector('[data-ws-ecom-status]')
    if (el) el.textContent = text || ''
  }

  const plannedTotal = () =>
    state.purposes.filter((p) => p.enabled).reduce((n, p) => n + (Number(p.count) || 0), 0)

  const paintSlot = (slot) => {
    const thumb = page.querySelector(`[data-ws-ecom-thumb][data-slot="${slot}"]`)
    const drop = page.querySelector(`[data-ws-ecom-drop="${slot}"]`)
    if (!(thumb instanceof HTMLElement)) return
    const img = thumb.querySelector('img')
    /** @type {ImageRef | null | undefined} */
    let ref = null
    if (slot === 'style') ref = state.styleRef
    else ref = state.productImages.find((x) => x.slot === slot) || null

    if (ref?.url && img instanceof HTMLImageElement) {
      img.src = ref.url
      thumb.setAttribute('data-filled', '')
      if (drop instanceof HTMLElement) drop.style.display = 'none'
    } else {
      thumb.removeAttribute('data-filled')
      if (img instanceof HTMLImageElement) img.removeAttribute('src')
      if (drop instanceof HTMLElement) drop.style.display = ''
    }

    const empty = page.querySelector('[data-ws-ecom-empty]')
    if (empty instanceof HTMLElement) {
      empty.style.display = state.productImages.length ? 'none' : ''
    }
  }

  const revokeIfBlob = (url) => {
    if (url?.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(url)
      } catch (_) {}
    }
  }

  const setImageFromFile = (slot, file) => {
    if (!(file instanceof File) || !file.type.startsWith('image/')) return
    const url = URL.createObjectURL(file)
    if (slot === 'style') {
      revokeIfBlob(state.styleRef?.url)
      state.styleRef = { id: `style-${Date.now()}`, url, name: file.name, slot: 'style' }
      paintSlot('style')
      setStatus(`已添加${ECOM_UPLOAD.styleRef}`)
      return
    }
    const existing = state.productImages.find((x) => x.slot === slot)
    if (existing) {
      revokeIfBlob(existing.url)
      existing.url = url
      existing.name = file.name
    } else {
      if (state.productImages.length >= 4) {
        revokeIfBlob(url)
        setStatus('商品主图最多 4 张')
        return
      }
      state.productImages.push({
        id: `${slot}-${Date.now()}`,
        url,
        name: file.name,
        slot,
      })
    }
    paintSlot(slot)
    setStatus(`已添加${ECOM_UPLOAD.product}`)
  }

  const clearSlot = (slot) => {
    if (slot === 'style') {
      revokeIfBlob(state.styleRef?.url)
      state.styleRef = null
      paintSlot('style')
      setStatus('已移除风格参考图')
      return
    }
    const idx = state.productImages.findIndex((x) => x.slot === slot)
    if (idx >= 0) {
      revokeIfBlob(state.productImages[idx].url)
      state.productImages.splice(idx, 1)
    }
    paintSlot(slot)
    setStatus('已移除商品图')
  }

  ;['subject', 'packaging', 'detail', 'extra', 'style'].forEach((slot) => {
    const fileInput = page.querySelector(`[data-ws-ecom-file="${slot}"]`)
    const uploadBtn = page.querySelector(`[data-ws-ecom-upload="${slot}"]`)
    const drop = page.querySelector(`[data-ws-ecom-drop="${slot}"]`)
    uploadBtn?.addEventListener('click', () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click()
    })
    fileInput?.addEventListener('change', (e) => {
      const input = /** @type {HTMLInputElement} */ (e.target)
      const f = input.files?.[0]
      if (f) setImageFromFile(slot, f)
      input.value = ''
    })
    drop?.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.closest('[data-ws-ecom-upload]')) return
      if (fileInput instanceof HTMLInputElement) fileInput.click()
    })
    ;['dragenter', 'dragover'].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (drop instanceof HTMLElement) drop.setAttribute('data-dragover', '')
      })
    })
    ;['dragleave', 'drop'].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (drop instanceof HTMLElement) drop.removeAttribute('data-dragover')
      })
    })
    drop?.addEventListener('drop', (e) => {
      const f = /** @type {DragEvent} */ (e).dataTransfer?.files?.[0]
      if (f) setImageFromFile(slot, f)
    })
    page.querySelector(`[data-ws-ecom-clear="${slot}"]`)?.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      clearSlot(slot)
    })
  })

  page.addEventListener('paste', (e) => {
    const items = Array.from(e.clipboardData?.items || [])
    for (const it of items) {
      if (it.type.startsWith('image/')) {
        const f = it.getAsFile()
        if (f) {
          const used = new Set(state.productImages.map((x) => x.slot))
          const next = ['subject', 'packaging', 'detail', 'extra'].find((s) => !used.has(s)) || 'subject'
          setImageFromFile(next, f)
          e.preventDefault()
          break
        }
      }
    }
  })

  page.querySelector('[data-ws-ecom-name]')?.addEventListener('input', (e) => {
    state.name = /** @type {HTMLInputElement} */ (e.target).value
  })
  page.querySelector('[data-ws-ecom-params]')?.addEventListener('input', (e) => {
    state.paramsText = /** @type {HTMLTextAreaElement} */ (e.target).value
  })
  page.querySelector('[data-ws-ecom-locale]')?.addEventListener('change', (e) => {
    state.locale = /** @type {HTMLSelectElement} */ (e.target).value
  })
  page.querySelector('[data-ws-ecom-ai-write]')?.addEventListener('click', () => {
    setStatus('「AI 帮写」未接线')
  })

  page.querySelectorAll('[data-ws-ecom-purpose-enabled]').forEach((el) => {
    el.addEventListener('change', (e) => {
      const id = el.getAttribute('data-ws-ecom-purpose-enabled')
      const p = state.purposes.find((x) => x.id === id)
      if (p) p.enabled = /** @type {HTMLInputElement} */ (e.target).checked
      state.plan = null
      const planEl = page.querySelector('[data-ws-ecom-plan]')
      if (planEl) planEl.removeAttribute('data-visible')
    })
  })
  page.querySelectorAll('[data-ws-ecom-purpose-count]').forEach((el) => {
    el.addEventListener('change', (e) => {
      const id = el.getAttribute('data-ws-ecom-purpose-count')
      const p = state.purposes.find((x) => x.id === id)
      if (p) {
        const n = Math.max(1, Math.min(8, Number(/** @type {HTMLInputElement} */ (e.target).value) || 1))
        p.count = n
        /** @type {HTMLInputElement} */ (e.target).value = String(n)
      }
      state.plan = null
      const planEl = page.querySelector('[data-ws-ecom-plan]')
      if (planEl) planEl.removeAttribute('data-visible')
    })
  })

  const showPlan = () => {
    const n = plannedTotal()
    const lines = state.purposes
      .filter((p) => p.enabled)
      .map((p) => `· ${p.label} × ${p.count}`)
    const body = page.querySelector('[data-ws-ecom-plan-body]')
    const planEl = page.querySelector('[data-ws-ecom-plan]')
    const fail = page.querySelector('[data-ws-ecom-fail]')
    if (body) {
      body.innerHTML = [
        `商品：${escapeHtml(state.name || '（未填名称）')}`,
        `语言：${escapeHtml(state.locale)}`,
        `主图：${state.productImages.length} 张` + (state.styleRef ? ' · 含风格参考' : ''),
        ...lines,
        `预计张数：${n}`,
      ].join('<br/>')
    }
    state.plan = { total: n, purposes: state.purposes.filter((p) => p.enabled).map((p) => ({ ...p })) }
    if (planEl) planEl.setAttribute('data-visible', '')
    if (fail) fail.removeAttribute('data-visible')
    setStatus(`套图预览 · 预计 ${n} 张（未生成）`)
  }

  page.querySelector('[data-ws-ecom-plan-btn]')?.addEventListener('click', () => {
    if (!state.productImages.length) {
      setStatus('请先上传商品主图')
      return
    }
    if (!plannedTotal()) {
      setStatus('请至少勾选一种用途')
      return
    }
    showPlan()
  })

  const showStubFailure = (message) => {
    const msg = message || CHANNEL_STUB
    const fail = page.querySelector('[data-ws-ecom-fail]')
    const reason = page.querySelector('[data-ws-ecom-fail-reason]')
    const planEl = page.querySelector('[data-ws-ecom-plan]')
    const results = page.querySelector('[data-ws-ecom-result-layout]')
    const actions = page.querySelector('[data-ws-ecom-result-actions]')
    if (planEl) planEl.removeAttribute('data-visible')
    if (results) results.removeAttribute('data-visible')
    if (actions instanceof HTMLElement) actions.style.display = 'none'
    if (reason) reason.textContent = `原因：${msg}`
    if (fail) fail.setAttribute('data-visible', '')
    state.confirmed = false
    setStatus(msg)
  }

  const cta = page.querySelector('[data-ws-ecom-cta]')
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false
    cta.removeAttribute('disabled')
  }
  cta?.addEventListener('click', () => {
    // Honest stub — never invent progress/success
    showStubFailure(CHANNEL_STUB)
    host.dispatchEvent(
      new CustomEvent('dsh-ws-ecom-generate', {
        bubbles: true,
        detail: {
          productImages: state.productImages,
          styleRef: state.styleRef,
          name: state.name,
          paramsText: state.paramsText,
          locale: state.locale,
          purposes: state.purposes,
          plan: state.plan,
          total: plannedTotal(),
        },
      }),
    )
  })

  page.querySelector('[data-ws-ecom-export]')?.addEventListener('click', () => {
    setStatus('「导出清单」未接线')
  })

  page.querySelector('[data-ws-ecom-result-actions]')?.addEventListener('click', (e) => {
    const btn =
      e.target instanceof Element ? e.target.closest('[data-ws-ecom-result-action]') : null
    if (!btn) return
    setStatus(`「${btn.getAttribute('data-ws-ecom-result-action') || ''}」未接线`)
  })

  const setPage = (tab) => {
    const name = String(tab || IMAGE_PAGE)
    host.setAttribute('data-ws-top-page', name)
  }

  ;['subject', 'packaging', 'detail', 'extra', 'style'].forEach((s) => paintSlot(s))

  return {
    state,
    setPage,
    showStubFailure,
    setStatus,
    dispose() {
      state.productImages.forEach((img) => revokeIfBlob(img.url))
      revokeIfBlob(state.styleRef?.url)
      page.remove()
      styleEl?.remove()
    },
  }
}
