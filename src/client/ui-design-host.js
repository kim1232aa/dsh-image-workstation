/**
 * UI 设计模式 shell — upload 设计稿 → steps bar (docs/ui/08).
 * Entry: 生图工具入口（宽屏）/「更多」. Slice / export unwired.
 */
import { UI_DESIGN_TITLE, UI_DESIGN_STEPS, UI_DESIGN_LABELS } from '../ui/labels.js'

export const UI_DESIGN_PAGE = UI_DESIGN_TITLE

/**
 * @param {Record<string, string>} T
 */
export function uiDesignHostStyles(T) {
  return `
[data-dsh-ws-studio-host] [data-ws-ui-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-ui-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ui-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(960px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ui-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-steps] {
  display:flex; flex-wrap:wrap; gap:4px; padding:6px; flex:none;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ui-step] {
  padding:4px 10px; border:1px solid var(--dsw-alias-border-l2);
  border-radius:999px; background:transparent;
  color: var(--dsw-alias-label-secondary); cursor:pointer;
  font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-ui-step]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-ui-step][aria-current="true"],
[data-dsh-ws-studio-host] [data-ws-ui-step][data-active] {
  background: var(--dsw-alias-interactive-bg-active);
  border-color: var(--dsw-alias-border-l4);
  color: var(--dsw-alias-label-primary); font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-ui-drop] {
  min-height:160px; border-radius:10px;
  border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:8px; padding:16px; color: var(--dsw-alias-label-secondary);
  font-size:12.5px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ui-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ui-preview] {
  display:none; position:relative; max-height:280px; border-radius:10px;
  overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ui-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ui-preview] img {
  width:100%; max-height:280px; object-fit:contain; display:block;
}
[data-dsh-ws-studio-host] [data-ws-ui-body] {
  display:flex; flex-direction:column; gap:10px; flex:1; min-height:0;
}
`
}

export function defaultUiDesignState() {
  return {
    step: UI_DESIGN_STEPS[0],
    designFile: /** @type {{ id: string, url: string, name?: string } | null} */ (null),
  }
}

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string,string>, css: object, setStatus?: (t: string) => void }} opts
 */
export function mountUiDesignHost(host, opts) {
  const { T, css } = opts
  const state = defaultUiDesignState()
  const setHostStatus = typeof opts.setStatus === 'function' ? opts.setStatus : () => {}

  let styleEl = host.querySelector('style[data-ws-ui-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-ui-styles', '')
    styleEl.textContent = uiDesignHostStyles(T)
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-ui-overlay]')?.remove()

  const overlay = document.createElement('div')
  overlay.setAttribute('data-ws-ui-overlay', '')
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-label', UI_DESIGN_TITLE)
  overlay.innerHTML = `
    <div data-ws-ui-panel>
      <div data-ws-ui-head>
        <strong style="font-size:14px;">${UI_DESIGN_TITLE}</strong>
        <span style="font-size:11px;color:${T.fg3};">宽屏工具 · 切图未接线</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-ui-close style="${css.pill()}">关闭</button>
      </div>

      <div data-ws-ui-steps role="tablist" aria-label="UI 设计步骤">
        ${UI_DESIGN_STEPS.map(
          (s, i) =>
            `<button type="button" data-ws-ui-step="${s}" role="tab" aria-current="${i === 0 ? 'true' : 'false'}" ${i === 0 ? 'data-active' : ''}>${s}</button>`,
        ).join('')}
      </div>

      <div data-ws-ui-body>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[0]}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="${css.paramLabel}">${UI_DESIGN_LABELS.upload}</span>
            <span style="font-size:11px;color:${T.fg3};">本地 · 拖拽</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-ui-upload style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
            <input type="file" data-ws-ui-file accept="image/*" hidden />
          </div>
          <div data-ws-ui-drop tabindex="0">点击、拖入设计稿</div>
          <div data-ws-ui-preview><img alt="设计稿" /></div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[1]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">
            ${UI_DESIGN_LABELS.aiSlice} 提议后须勾选「${UI_DESIGN_LABELS.confirm}」才切（未接线）。
          </p>
          <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:${T.fg2};">
            <input type="checkbox" data-ws-ui-confirm /> ${UI_DESIGN_LABELS.confirm}
          </label>
          <button type="button" data-ws-ui-run-slice style="${css.pill({ pad: '6px 12px', fill: T.module })}" disabled>${UI_DESIGN_LABELS.aiSlice}</button>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[2]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">切图编辑器壳 · 缩放 / 平移 / 切片（未接线）</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.original}" style="${css.pill()}">${UI_DESIGN_LABELS.original}</button>
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.cutout}" style="${css.pill()}">${UI_DESIGN_LABELS.cutout}</button>
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.slicesOnly}" style="${css.pill()}">${UI_DESIGN_LABELS.slicesOnly}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[3]}" hidden>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.algoCutout}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.aiCutout}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.algoSvg}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.aiSvg}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[4]}" hidden>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-bg style="${css.pill()}">${UI_DESIGN_LABELS.localComposite}</button>
            <button type="button" data-ws-ui-bg style="${css.pill()}">${UI_DESIGN_LABELS.aiOriginal}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[5]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">网页复刻 · iframe 预览未接线</p>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[6]}" hidden>
          <button type="button" data-ws-ui-export style="${css.pill({ pad: '8px 14px', fill: T.module })}">${UI_DESIGN_LABELS.export}</button>
        </div>
      </div>
      <p data-ws-ui-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `
  host.appendChild(overlay)

  const setStatus = (text) => {
    const el = overlay.querySelector('[data-ws-ui-status]')
    if (el) el.textContent = text
  }

  const paintSteps = () => {
    overlay.querySelectorAll('[data-ws-ui-step]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-ui-step') === state.step
      btn.setAttribute('aria-current', on ? 'true' : 'false')
      if (on) btn.setAttribute('data-active', '')
      else btn.removeAttribute('data-active')
    })
    overlay.querySelectorAll('[data-ws-ui-step-panel]').forEach((panel) => {
      if (!(panel instanceof HTMLElement)) return
      panel.hidden = panel.getAttribute('data-step') !== state.step
    })
  }

  const paintPreview = () => {
    const preview = overlay.querySelector('[data-ws-ui-preview]')
    const drop = overlay.querySelector('[data-ws-ui-drop]')
    const img = preview?.querySelector('img')
    if (!(preview instanceof HTMLElement)) return
    if (state.designFile?.url && img instanceof HTMLImageElement) {
      img.src = state.designFile.url
      preview.setAttribute('data-filled', '')
      if (drop instanceof HTMLElement) drop.style.display = 'none'
    } else {
      preview.removeAttribute('data-filled')
      if (img instanceof HTMLImageElement) img.removeAttribute('src')
      if (drop instanceof HTMLElement) drop.style.display = ''
    }
  }

  const setFile = (file) => {
    if (!(file instanceof File) || !file.type.startsWith('image/')) return
    if (state.designFile?.url?.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(state.designFile.url)
      } catch (_) {}
    }
    state.designFile = { id: `ui-${Date.now()}`, url: URL.createObjectURL(file), name: file.name }
    paintPreview()
    setStatus(`已载入设计稿「${file.name || 'image'}」`)
    setHostStatus('UI 设计 · 已上传')
  }

  overlay.querySelectorAll('[data-ws-ui-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.step = btn.getAttribute('data-ws-ui-step') || UI_DESIGN_STEPS[0]
      paintSteps()
      setStatus(`步骤：${state.step}`)
    })
  })

  const fileInput = overlay.querySelector('[data-ws-ui-file]')
  const uploadBtn = overlay.querySelector('[data-ws-ui-upload]')
  const drop = overlay.querySelector('[data-ws-ui-drop]')
  uploadBtn?.addEventListener('click', () => {
    if (fileInput instanceof HTMLInputElement) fileInput.click()
  })
  fileInput?.addEventListener('change', (e) => {
    const input = /** @type {HTMLInputElement} */ (e.target)
    const f = input.files?.[0]
    if (f) setFile(f)
    input.value = ''
  })
  drop?.addEventListener('click', () => {
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
    if (f) setFile(f)
  })

  const confirm = overlay.querySelector('[data-ws-ui-confirm]')
  const runSlice = overlay.querySelector('[data-ws-ui-run-slice]')
  confirm?.addEventListener('change', () => {
    if (runSlice instanceof HTMLButtonElement) {
      runSlice.disabled = !(confirm instanceof HTMLInputElement && confirm.checked)
    }
  })
  runSlice?.addEventListener('click', () => {
    setStatus(`${UI_DESIGN_LABELS.aiSlice} 未接线`)
  })

  overlay.querySelectorAll('[data-ws-ui-view], [data-ws-ui-mat], [data-ws-ui-bg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const label =
        btn.getAttribute('data-ws-ui-view') ||
        btn.textContent ||
        ''
      setStatus(`「${label.trim()}」未接线`)
    })
  })
  overlay.querySelector('[data-ws-ui-export]')?.addEventListener('click', () => {
    setStatus(`「${UI_DESIGN_LABELS.export}」未接线`)
  })

  const close = () => {
    overlay.removeAttribute('data-open')
  }
  const open = () => {
    overlay.setAttribute('data-open', '')
    paintSteps()
    paintPreview()
    setStatus('UI 设计壳 · 上传设计稿后按步骤推进')
    setHostStatus('UI 设计')
  }

  overlay.querySelector('[data-ws-ui-close]')?.addEventListener('click', close)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })

  paintSteps()

  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute('data-open'),
    dispose: () => {
      if (state.designFile?.url?.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(state.designFile.url)
        } catch (_) {}
      }
      overlay.remove()
      styleEl?.remove()
    },
  }
}
