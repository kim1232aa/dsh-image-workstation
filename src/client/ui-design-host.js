/**
 * UI 设计模式 shell — Nova slice walkthrough (minimal, local-first).
 * Entry: 生图工具入口（宽屏）/「更多」.
 * Real local path: 上传 → 预览 → 可选标注框 → 导出提示.
 * AI 切图 / 素材 / 背景 / 网页复刻: optional reversePrompt or honest 未接线 — never fake 「已完成切图」.
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
[data-dsh-ws-studio-host] [data-ws-ui-step][data-done] {
  border-color: var(--dsw-alias-state-business-primary);
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
  display:none; position:relative; max-height:320px; border-radius:10px;
  overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1); user-select:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ui-preview] img {
  width:100%; max-height:320px; object-fit:contain; display:block; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-box-layer] {
  position:absolute; inset:0; cursor:crosshair;
}
[data-dsh-ws-studio-host] [data-ws-ui-box] {
  position:absolute; border:1.5px solid var(--dsw-alias-state-business-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent);
  box-sizing:border-box; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-box][data-draft] {
  border-style:dashed; opacity:.85;
}
[data-dsh-ws-studio-host] [data-ws-ui-body] {
  display:flex; flex-direction:column; gap:10px; flex:1; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-ui-box-list] {
  display:flex; flex-wrap:wrap; gap:6px; font-size:11.5px;
  color: var(--dsw-alias-label-secondary);
}
`
}

export function defaultUiDesignState() {
  return {
    step: UI_DESIGN_STEPS[0],
    designFile: /** @type {{ id: string, url: string, name?: string, width?: number, height?: number } | null} */ (null),
    /** @type {Array<{ id: string, x: number, y: number, w: number, h: number }>} normalized 0–1 */
    boxes: [],
    reverseNote: '',
  }
}

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** @param {string} blobUrl */
async function blobUrlToDataUrl(blobUrl) {
  const res = await fetch(blobUrl)
  const blob = await res.blob()
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(reader.error || new Error('read failed'))
    reader.readAsDataURL(blob)
  })
}

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string,string>, css: object, setStatus?: (t: string) => void, getRpc?: () => { call?: Function } | null | undefined }} opts
 */
export function mountUiDesignHost(host, opts) {
  const { T, css } = opts
  const state = defaultUiDesignState()
  const setHostStatus = typeof opts.setStatus === 'function' ? opts.setStatus : () => {}
  const getRpc = typeof opts.getRpc === 'function' ? opts.getRpc : null

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
        <span style="font-size:11px;color:${T.fg3};">本地预览 · 标注可走</span>
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
            <span style="font-size:11px;color:${T.fg3};">本地 · 拖拽 → 自动进预览</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-ui-upload style="${css.pill({ size: '11px', fill: T.module })}">上传</button>
            <input type="file" data-ws-ui-file accept="image/*" hidden />
          </div>
          <div data-ws-ui-drop tabindex="0">点击、拖入设计稿</div>
          <div data-ws-ui-preview data-ws-ui-preview-upload><img alt="设计稿" /></div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[1]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">
            ${UI_DESIGN_LABELS.aiSlice}：Nova 流程要求勾选「${UI_DESIGN_LABELS.confirm}」后才真切。
            此处不假装「已完成切图」——若已接 reversePrompt 可试一次识图备注；否则如实报未接线。
          </p>
          <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:${T.fg2};">
            <input type="checkbox" data-ws-ui-confirm /> ${UI_DESIGN_LABELS.confirm}
          </label>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-run-slice style="${css.pill({ pad: '6px 12px', fill: T.module })}" disabled>${UI_DESIGN_LABELS.aiSlice}</button>
            <button type="button" data-ws-ui-try-reverse style="${css.pill({ pad: '6px 12px' })}" disabled>试识图备注</button>
          </div>
          <pre data-ws-ui-reverse-out style="margin:0;font-size:11.5px;white-space:pre-wrap;color:${T.fg2};max-height:8em;overflow:auto;"></pre>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[2]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">
            预览与可选标注：在图上拖拽画框（本地坐标，非 AI 切图结果）。
          </p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.original}" style="${css.pill()}" data-active>${UI_DESIGN_LABELS.original}</button>
            <button type="button" data-ws-ui-clear-boxes style="${css.pill()}">清空标注</button>
            <span style="font-size:11px;color:${T.fg3};">拖拽新建框 · 缩放/吸附等编辑器能力未接线</span>
          </div>
          <div data-ws-ui-preview data-ws-ui-preview-edit>
            <img alt="设计稿预览" />
            <div data-ws-ui-box-layer></div>
          </div>
          <div data-ws-ui-box-list></div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[3]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">素材处理（算法抠透明 / AI 抠透明 / SVG）未接线，不假装已产出透明图。</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.algoCutout}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.aiCutout}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.algoSvg}</button>
            <button type="button" data-ws-ui-mat style="${css.pill()}">${UI_DESIGN_LABELS.aiSvg}</button>
          </div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[4]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">背景填充（本地合成 / AI 原图）未接线。</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-bg style="${css.pill()}">${UI_DESIGN_LABELS.localComposite}</button>
            <button type="button" data-ws-ui-bg style="${css.pill()}">${UI_DESIGN_LABELS.aiOriginal}</button>
          </div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[5]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};">网页复刻 · iframe 预览未接线（需先有真实切图资产）。</p>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[6]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T.fg2};" data-ws-ui-export-tip>
            可导出本地标注 JSON（文件名 + 框坐标）。切片包 ZIP / 完整设计包未接线 — 不会写成「已完成切图」。
          </p>
          <button type="button" data-ws-ui-export style="${css.pill({ pad: '8px 14px', fill: T.module })}">${UI_DESIGN_LABELS.export}标注 JSON</button>
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

  const stepIndex = (name) => UI_DESIGN_STEPS.indexOf(name)

  const paintSteps = () => {
    const curIdx = stepIndex(state.step)
    overlay.querySelectorAll('[data-ws-ui-step]').forEach((btn) => {
      const name = btn.getAttribute('data-ws-ui-step') || ''
      const on = name === state.step
      const idx = stepIndex(name)
      btn.setAttribute('aria-current', on ? 'true' : 'false')
      if (on) btn.setAttribute('data-active', '')
      else btn.removeAttribute('data-active')
      if (idx >= 0 && idx < curIdx && (state.designFile || idx === 0)) btn.setAttribute('data-done', '')
      else btn.removeAttribute('data-done')
    })
    overlay.querySelectorAll('[data-ws-ui-step-panel]').forEach((panel) => {
      if (!(panel instanceof HTMLElement)) return
      panel.hidden = panel.getAttribute('data-step') !== state.step
    })
  }

  const paintBoxes = () => {
    overlay.querySelectorAll('[data-ws-ui-box-layer]').forEach((layer) => {
      if (!(layer instanceof HTMLElement)) return
      layer.innerHTML = state.boxes
        .map(
          (b) =>
            `<div data-ws-ui-box style="left:${b.x * 100}%;top:${b.y * 100}%;width:${b.w * 100}%;height:${b.h * 100}%;"></div>`,
        )
        .join('')
    })
    const list = overlay.querySelector('[data-ws-ui-box-list]')
    if (list instanceof HTMLElement) {
      if (!state.boxes.length) {
        list.textContent = '尚无标注框'
      } else {
        list.innerHTML = state.boxes
          .map(
            (b, i) =>
              `<span style="border:1px solid ${T.border2};border-radius:999px;padding:2px 8px;">#${i + 1} ${(b.w * 100).toFixed(0)}%×${(b.h * 100).toFixed(0)}%</span>`,
          )
          .join('')
      }
    }
  }

  const paintPreview = () => {
    overlay.querySelectorAll('[data-ws-ui-preview]').forEach((preview) => {
      if (!(preview instanceof HTMLElement)) return
      const img = preview.querySelector('img')
      if (state.designFile?.url && img instanceof HTMLImageElement) {
        img.src = state.designFile.url
        preview.setAttribute('data-filled', '')
      } else {
        preview.removeAttribute('data-filled')
        if (img instanceof HTMLImageElement) img.removeAttribute('src')
      }
    })
    const drop = overlay.querySelector('[data-ws-ui-drop]')
    if (drop instanceof HTMLElement) {
      drop.style.display = state.designFile ? 'none' : ''
    }
    paintBoxes()
    const hasFile = !!state.designFile
    overlay.querySelectorAll('[data-ws-ui-run-slice], [data-ws-ui-try-reverse]').forEach((btn) => {
      if (!(btn instanceof HTMLButtonElement)) return
      if (btn.hasAttribute('data-ws-ui-run-slice')) {
        const confirm = overlay.querySelector('[data-ws-ui-confirm]')
        btn.disabled = !(hasFile && confirm instanceof HTMLInputElement && confirm.checked)
      } else {
        btn.disabled = !hasFile
      }
    })
  }

  const goStep = (stepName, statusText) => {
    state.step = stepName
    paintSteps()
    paintPreview()
    if (statusText) setStatus(statusText)
  }

  const setFile = (file) => {
    if (!(file instanceof File) || !file.type.startsWith('image/')) {
      setStatus('请选择图片文件')
      return
    }
    if (state.designFile?.url?.startsWith('blob:')) {
      try {
        URL.revokeObjectURL(state.designFile.url)
      } catch (_) {}
    }
    const url = URL.createObjectURL(file)
    state.designFile = { id: `ui-${Date.now()}`, url, name: file.name }
    state.boxes = []
    state.reverseNote = ''
    const out = overlay.querySelector('[data-ws-ui-reverse-out]')
    if (out) out.textContent = ''
    paintPreview()
    // Nova: create workspace → open editor. Here: advance to 切图编辑 (preview + boxes).
    goStep(UI_DESIGN_STEPS[2], `已载入「${file.name || 'image'}」· 可在预览上拖拽标注`)
    setHostStatus('UI 设计 · 已上传 · 预览')
  }

  overlay.querySelectorAll('[data-ws-ui-step]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-ws-ui-step') || UI_DESIGN_STEPS[0]
      if (next !== UI_DESIGN_STEPS[0] && !state.designFile) {
        setStatus('请先上传设计稿')
        return
      }
      goStep(next, `步骤：${next}`)
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

  // Optional annotation boxes on edit preview
  const editLayer = overlay.querySelector('[data-ws-ui-preview-edit] [data-ws-ui-box-layer]')
  /** @type {{ x: number, y: number } | null} */
  let dragStart = null
  /** @type {HTMLElement | null} */
  let draftEl = null

  const normPoint = (layer, clientX, clientY) => {
    const rect = layer.getBoundingClientRect()
    if (!rect.width || !rect.height) return { x: 0, y: 0 }
    return {
      x: Math.min(1, Math.max(0, (clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (clientY - rect.top) / rect.height)),
    }
  }

  editLayer?.addEventListener('mousedown', (e) => {
    if (!(editLayer instanceof HTMLElement) || !state.designFile) return
    if (e.button !== 0) return
    e.preventDefault()
    dragStart = normPoint(editLayer, e.clientX, e.clientY)
    draftEl = document.createElement('div')
    draftEl.setAttribute('data-ws-ui-box', '')
    draftEl.setAttribute('data-draft', '')
    editLayer.appendChild(draftEl)
  })
  const onMove = (e) => {
    if (!dragStart || !(draftEl instanceof HTMLElement) || !(editLayer instanceof HTMLElement)) return
    const cur = normPoint(editLayer, e.clientX, e.clientY)
    const x = Math.min(dragStart.x, cur.x)
    const y = Math.min(dragStart.y, cur.y)
    const w = Math.abs(cur.x - dragStart.x)
    const h = Math.abs(cur.y - dragStart.y)
    draftEl.style.left = `${x * 100}%`
    draftEl.style.top = `${y * 100}%`
    draftEl.style.width = `${w * 100}%`
    draftEl.style.height = `${h * 100}%`
  }
  const onUp = (e) => {
    if (!dragStart || !(editLayer instanceof HTMLElement)) {
      dragStart = null
      draftEl = null
      return
    }
    const cur = normPoint(editLayer, e.clientX, e.clientY)
    const x = Math.min(dragStart.x, cur.x)
    const y = Math.min(dragStart.y, cur.y)
    const w = Math.abs(cur.x - dragStart.x)
    const h = Math.abs(cur.y - dragStart.y)
    draftEl?.remove()
    draftEl = null
    dragStart = null
    if (w < 0.02 || h < 0.02) return
    state.boxes.push({ id: `box-${Date.now()}-${state.boxes.length}`, x, y, w, h })
    paintBoxes()
    setStatus(`已添加标注框（共 ${state.boxes.length}）`)
  }
  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onUp)

  overlay.querySelector('[data-ws-ui-clear-boxes]')?.addEventListener('click', () => {
    state.boxes = []
    paintBoxes()
    setStatus('已清空标注')
  })

  const confirm = overlay.querySelector('[data-ws-ui-confirm]')
  const runSlice = overlay.querySelector('[data-ws-ui-run-slice]')
  confirm?.addEventListener('change', () => {
    paintPreview()
  })
  runSlice?.addEventListener('click', () => {
    if (!state.designFile) {
      setStatus('请先上传设计稿')
      return
    }
    if (!(confirm instanceof HTMLInputElement) || !confirm.checked) {
      setStatus(`请先勾选「${UI_DESIGN_LABELS.confirm}」`)
      return
    }
    // Honest: no fake slice completion
    setStatus(`${UI_DESIGN_LABELS.aiSlice} 未接线（不会写入切图资产）`)
    setHostStatus(`${UI_DESIGN_LABELS.aiSlice} 未接线`)
  })

  overlay.querySelector('[data-ws-ui-try-reverse]')?.addEventListener('click', async () => {
    if (!state.designFile?.url) {
      setStatus('请先上传设计稿')
      return
    }
    const out = overlay.querySelector('[data-ws-ui-reverse-out]')
    const rpc = getRpc?.()
    if (!rpc || typeof rpc.call !== 'function') {
      state.reverseNote = ''
      if (out) out.textContent = 'VISION_NOT_CONFIGURED / reversePrompt 未接线'
      setStatus('VISION_NOT_CONFIGURED')
      return
    }
    setStatus('识图备注中…')
    try {
      const dataUrl = await blobUrlToDataUrl(state.designFile.url)
      const result = await rpc.call('/dsh-ws', 'reversePrompt', {
        dataUrl,
        imageUrl: dataUrl,
        instruction: '用一两句中文描述这张 UI 设计稿的主要布局与组件，不要编造切图结果。',
      })
      if (result?.ok && result.value?.prompt) {
        state.reverseNote = String(result.value.prompt)
        if (out) out.textContent = state.reverseNote
        setStatus('识图备注完成（非切图）')
      } else {
        const code = result?.error?.code ? String(result.error.code) : ''
        const msg = result?.error?.message ? String(result.error.message) : '识图失败'
        if (code === 'VISION_NOT_CONFIGURED') {
          if (out) out.textContent = 'VISION_NOT_CONFIGURED'
          setStatus('VISION_NOT_CONFIGURED')
        } else if (code === 'UNKNOWN_ENDPOINT' || code === 'HOST_PROXY_NOT_WIRED') {
          if (out) out.textContent = '「反推提示词」未接线'
          setStatus('「反推提示词」未接线')
        } else {
          if (out) out.textContent = code ? `${code}: ${msg}` : msg
          setStatus(code ? `识图失败：${code}` : `识图失败：${msg}`)
        }
      }
    } catch (e) {
      const code = e?.code ? String(e.code) : ''
      if (code === 'VISION_NOT_CONFIGURED') {
        if (out) out.textContent = 'VISION_NOT_CONFIGURED'
        setStatus('VISION_NOT_CONFIGURED')
      } else {
        if (out) out.textContent = String(e?.message || e)
        setStatus(`识图失败：${e?.message || e}`)
      }
    }
  })

  overlay.querySelectorAll('[data-ws-ui-view], [data-ws-ui-mat], [data-ws-ui-bg]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const label = btn.getAttribute('data-ws-ui-view') || btn.textContent || ''
      const name = label.trim()
      if (name === UI_DESIGN_LABELS.original) {
        setStatus('视图：原图（带标注框）')
        return
      }
      if (name === UI_DESIGN_LABELS.cutout || name === UI_DESIGN_LABELS.slicesOnly) {
        setStatus(`「${name}」未接线（无切图资产）`)
        return
      }
      setStatus(`「${name}」未接线`)
    })
  })

  overlay.querySelector('[data-ws-ui-export]')?.addEventListener('click', () => {
    if (!state.designFile) {
      setStatus('请先上传设计稿')
      return
    }
    const payload = {
      kind: 'dsh-ws-ui-design-annotations',
      exportedAt: new Date().toISOString(),
      sourceName: state.designFile.name || 'design',
      boxCount: state.boxes.length,
      boxes: state.boxes,
      reverseNote: state.reverseNote || null,
      note:
        '本地标注导出。切片包 ZIP / 完整设计包 / AI 切图资产未接线 — 本文件不是「已完成切图」。',
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `ui-design-annotations-${Date.now()}.json`
    a.click()
    setTimeout(() => {
      try {
        URL.revokeObjectURL(a.href)
      } catch (_) {}
    }, 2000)
    goStep(UI_DESIGN_STEPS[6], `已导出标注 JSON（${state.boxes.length} 框）· 切片包未接线`)
    setHostStatus('UI 设计 · 已导出标注')
  })

  const close = () => {
    overlay.removeAttribute('data-open')
  }
  const open = () => {
    overlay.setAttribute('data-open', '')
    paintSteps()
    paintPreview()
    setStatus('上传设计稿 → 预览标注 → 导出提示；AI 切图不假装完成')
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
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
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
