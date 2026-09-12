/**
 * GIF 生成 shell — multi-frame params + CTA stub (docs/ui/08).
 * Entry: 生图工具条 /「更多」. No paid generate; local encode unwired.
 */
import {
  GIF_TITLE,
  GIF_PARAMS,
  GIF_FRAME_ACTIONS,
  GIF_ACTIONS,
  GIF_CTA,
  PROMPT_FIELDS,
} from '../ui/labels.js'

export const GIF_PAGE = GIF_TITLE

const FRAME_COUNTS = Object.freeze([4, 8, 12, 16])
const FPS_OPTS = Object.freeze(['8', '12', '16', '24'])
const LOOP_OPTS = Object.freeze(['0', '1', '3', '无限'])
const SIZE_OPTS = Object.freeze(['512', '768', '1024'])

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * @param {Record<string, string>} T
 * @param {object} css
 */
export function gifHostStyles(T) {
  return `
[data-dsh-ws-studio-host] [data-ws-gif-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-gif-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-gif-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(720px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-gif-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-gif-frames] {
  display:flex; gap:8px; flex-wrap:wrap; min-height:72px;
}
[data-dsh-ws-studio-host] [data-ws-gif-frame] {
  width:72px; height:72px; border-radius:8px;
  border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-module-platform);
  display:flex; align-items:center; justify-content:center;
  font-size:11px; color: var(--dsw-alias-label-tertiary);
  position:relative; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-gif-frame][data-active] {
  border-color: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-gif-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-gif-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-gif-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
`
}

export function defaultGifState() {
  return {
    prompt: '',
    frameCount: FRAME_COUNTS[1],
    fps: FPS_OPTS[1],
    loops: LOOP_OPTS[0],
    size: SIZE_OPTS[0],
    activeFrame: 0,
  }
}

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string,string>, css: object, setStatus?: (t: string) => void }} opts
 */
export function mountGifHost(host, opts) {
  const { T, css } = opts
  const state = defaultGifState()
  const setHostStatus = typeof opts.setStatus === 'function' ? opts.setStatus : () => {}

  let styleEl = host.querySelector('style[data-ws-gif-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-gif-styles', '')
    styleEl.textContent = gifHostStyles(T)
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-gif-overlay]')?.remove()

  const chipHtml = (param, values, selected) =>
    values
      .map((v) => {
        const val = String(v)
        const on = val === String(selected)
        return `<button type="button" data-ws-gif-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? 'true' : 'false'}" style="${css.chip(on)}">${escapeHtml(val)}</button>`
      })
      .join('')

  const overlay = document.createElement('div')
  overlay.setAttribute('data-ws-gif-overlay', '')
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-label', GIF_TITLE)
  overlay.innerHTML = `
    <div data-ws-gif-panel>
      <div data-ws-gif-head>
        <strong style="font-size:14px;">${GIF_TITLE}</strong>
        <span style="font-size:11px;color:${T.fg3};">多帧 · 本地编码未接线</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-gif-close style="${css.pill()}">关闭</button>
      </div>

      <div style="${css.dockBlock}">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
          <span style="font-size:11px;color:${T.fg3};">动作或变化过程</span>
        </div>
        <textarea data-ws-gif-prompt rows="2" placeholder="描述帧间动作或变化" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
      </div>

      <div data-ws-param-row>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${GIF_PARAMS.frames}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.frames}">
            ${chipHtml('frames', FRAME_COUNTS, state.frameCount)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${GIF_PARAMS.fps}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.fps}">
            ${chipHtml('fps', FPS_OPTS, state.fps)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${GIF_PARAMS.loops}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.loops}">
            ${chipHtml('loops', LOOP_OPTS, state.loops)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css.paramLabel}">${GIF_PARAMS.size}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.size}">
            ${chipHtml('size', SIZE_OPTS, state.size)}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="${css.paramLabel}">帧序列预览</span>
          <span style="flex:1"></span>
          ${GIF_FRAME_ACTIONS.map(
            (a) =>
              `<button type="button" data-ws-gif-frame-action="${a}" style="${css.pill({ size: '11px' })}">${a}</button>`,
          ).join('')}
        </div>
        <div data-ws-gif-frames></div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button type="button" data-ws-gif-cta style="${css.cta};width:auto;min-width:8rem;flex:1;">${GIF_CTA}</button>
        <button type="button" data-ws-gif-export style="${css.pill({ pad: '8px 14px', size: '12px', fill: T.module })}">${GIF_ACTIONS.exportGif}</button>
        <button type="button" data-ws-gif-gallery style="${css.pill({ pad: '8px 14px', size: '12px', fill: T.module })}">${GIF_ACTIONS.addGallery}</button>
      </div>
      <p data-ws-gif-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `
  host.appendChild(overlay)

  const setStatus = (text) => {
    const el = overlay.querySelector('[data-ws-gif-status]')
    if (el) el.textContent = text
  }

  const paintFrames = () => {
    const box = overlay.querySelector('[data-ws-gif-frames]')
    if (!(box instanceof HTMLElement)) return
    const n = Number(state.frameCount) || 4
    const parts = []
    for (let i = 0; i < n; i++) {
      const on = i === state.activeFrame
      parts.push(
        `<button type="button" data-ws-gif-frame data-index="${i}" ${on ? 'data-active' : ''} aria-label="帧 ${i + 1}">帧 ${i + 1}</button>`,
      )
    }
    box.innerHTML = parts.join('')
    box.querySelectorAll('[data-ws-gif-frame]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.activeFrame = Number(btn.getAttribute('data-index')) || 0
        paintFrames()
      })
    })
  }

  const paintChips = () => {
    const sync = (param, value) => {
      overlay.querySelectorAll(`[data-ws-gif-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute('data-value') === String(value)
        btn.setAttribute('aria-current', on ? 'true' : 'false')
        if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on)
      })
    }
    sync('frames', state.frameCount)
    sync('fps', state.fps)
    sync('loops', state.loops)
    sync('size', state.size)
  }

  overlay.querySelector('[data-ws-gif-prompt]')?.addEventListener('input', (e) => {
    const t = /** @type {HTMLTextAreaElement} */ (e.target)
    state.prompt = t.value
  })

  overlay.querySelector('[data-ws-gif-panel]')?.addEventListener('click', (e) => {
    const t =
      e.target instanceof Element ? e.target.closest('[data-ws-gif-param][data-value]') : null
    if (!t) return
    const param = t.getAttribute('data-ws-gif-param')
    const value = t.getAttribute('data-value')
    if (!param || value == null) return
    if (param === 'frames') {
      state.frameCount = Number(value) || FRAME_COUNTS[0]
      if (state.activeFrame >= state.frameCount) state.activeFrame = 0
      paintFrames()
    } else if (param === 'fps') state.fps = value
    else if (param === 'loops') state.loops = value
    else if (param === 'size') state.size = value
    paintChips()
  })

  overlay.querySelectorAll('[data-ws-gif-frame-action]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const a = btn.getAttribute('data-ws-gif-frame-action') || ''
      setStatus(`「${a}」未接线`)
      setHostStatus(`GIF · 「${a}」未接线`)
    })
  })

  const cta = overlay.querySelector('[data-ws-gif-cta]')
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false
    cta.removeAttribute('disabled')
  }
  cta?.addEventListener('click', () => {
    setStatus('GIF 通道未接（本地编码 stub）')
    setHostStatus('GIF 通道未接')
    host.dispatchEvent(
      new CustomEvent('dsh-ws-gif-generate', {
        bubbles: true,
        detail: {
          prompt: state.prompt,
          frameCount: state.frameCount,
          fps: state.fps,
          loops: state.loops,
          size: state.size,
          stub: true,
        },
      }),
    )
  })

  overlay.querySelector('[data-ws-gif-export]')?.addEventListener('click', () => {
    setStatus(`「${GIF_ACTIONS.exportGif}」未接线`)
  })
  overlay.querySelector('[data-ws-gif-gallery]')?.addEventListener('click', () => {
    setStatus(`「${GIF_ACTIONS.addGallery}」未接线`)
  })

  const close = () => {
    overlay.removeAttribute('data-open')
  }
  const open = () => {
    overlay.setAttribute('data-open', '')
    paintChips()
    paintFrames()
    setStatus('GIF 壳 · 参数可调，编码未接线')
    setHostStatus('GIF')
  }

  overlay.querySelector('[data-ws-gif-close]')?.addEventListener('click', close)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close()
  })

  paintFrames()
  paintChips()

  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute('data-open'),
    dispose: () => {
      overlay.remove()
      styleEl?.remove()
    },
  }
}
