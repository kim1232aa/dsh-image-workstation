/**
 * Browser half (dsh.client). Rebuild — VisioWork shape only.
 * Owns sidebar「生图」hang point; CTA event → Connection RPC → paint.
 */
import { TOP_TABS, COLUMNS, CTA, SKILL_ENTRIES } from './ui/labels.js'
import { studioTree, defaultStudioState } from './ui/studio-stub.js'
import { mountSidebarEntry } from './client/sidebar-entry.js'
import { createStudioHost } from './client/studio-host.js'
import { mountSettingsCard } from './client/settings-card.js'
import {
  CLIENT_GENERATE_TIMEOUT_MS,
  CLIENT_VIDEO_TIMEOUT_MS,
  formatClientRpcFailure,
  formatHostGenerateError,
  scrubErrorMessage,
} from './protocol/rpc-errors.js'

export const name = 'dsh-image-workstation/client'
export { TOP_TABS, COLUMNS, CTA, SKILL_ENTRIES, studioTree, defaultStudioState }

export const inject = ['slots', 'locale', 'connection', 'sessions', 'conversation', 'settingsScope']

/** Plugin-owned Connection RPC channel (host registers via connection.rpc.handle). */
export const CTA_RPC_CHANNEL = '/dsh-ws'
export const CTA_RPC_GENERATE = 'generate'
export const CTA_RPC_VIDEO_GENERATE = 'videoGenerate'
export const CTA_RPC_REVERSE_PROMPT = 'reversePrompt'
export const CTA_RPC_ENHANCE_PROMPT = 'enhancePrompt'
export const CTA_RPC_STORAGE_PATHS = 'storage.paths'
/** Future write seat — not registered yet; client must stay honest 未接线 */
export const CTA_RPC_GALLERY_ADD = 'gallery.add'
export const SKILL_RPC_CHANNEL = '/dsh-ws-skill'
export const SKILL_RPC_PLAN = 'plan'

/**
 * Connection rpc.call POSTs `${resolveBase()}${channel}/${endpoint}`.
 * resolveBase() is location.origin, or http://dsh.internal when origin is null.
 * A custom __DSH_TRANSPORT__.fetch may wait on the $events handshake and never
 * send — UI then sits on `submitted` with an empty /dsh-ws/generate hits log.
 * Same-origin fetch of the Connection envelope always produces the POST.
 * Token query is only for GET / cookie exchange; do not add ?token= to this POST.
 * @returns {string} origin or '' (relative /dsh-ws/... )
 */
function resolveCtaBase() {
  const loc = globalThis.location
  if (loc?.origin && loc.origin !== 'null') return loc.origin
  if (typeof loc?.href === 'string' && /^https?:/i.test(loc.href)) {
    try {
      return new URL(loc.href).origin
    } catch (_) {
      /* ignore */
    }
  }
  return ''
}

function newRpcId() {
  try {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  } catch (_) {
    /* ignore */
  }
  return `dsh-ws-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

/**
 * POST /dsh-ws/<endpoint> with the Connection client-request envelope.
 * @param {string} endpoint
 * @param {unknown} payload
 * @param {AbortSignal} [signal]
 */
async function postDshWs(endpoint, payload, signal) {
  const base = resolveCtaBase()
  const url = `${base}${CTA_RPC_CHANNEL}/${endpoint}`
  const rpcId = newRpcId()
  const res = await globalThis.fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      type: 'client-request',
      rpcId,
      method: endpoint,
      payload,
    }),
    ...(signal ? { signal } : {}),
  })
  if (!res.ok) {
    throw new Error(`transport failure for ${CTA_RPC_CHANNEL}/${endpoint}: HTTP ${res.status}`)
  }
  const full = await res.json()
  if (!full || full.type !== 'server-response' || typeof full.rpcId !== 'string') {
    throw new TypeError('connection: invalid server-response envelope')
  }
  return full.result
}

/**
 * Prefer a real POST to /dsh-ws/<endpoint>. Fall back to connection.rpc.call
 * only when fetch is unavailable (worker / fixture).
 * @param {any} rpc
 * @param {string} endpoint
 * @param {unknown} payload
 * @param {AbortSignal} [signal]
 */
async function callCtaRpc(rpc, endpoint, payload, signal) {
  if (typeof globalThis.fetch === 'function') {
    return postDshWs(endpoint, payload, signal)
  }
  if (rpc && typeof rpc.call === 'function') {
    return rpc.call(CTA_RPC_CHANNEL, endpoint, payload, signal)
  }
  throw new Error('fetch and connection.rpc.call unavailable')
}

/**
 * @param {any} ctx
 * @param {Record<string, unknown>} [_config]
 */
export function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client — sidebar「生图」+ CTA→${CTA_RPC_CHANNEL}/${CTA_RPC_GENERATE}`,
  )

  const studio = createStudioHost({
    getRpc: () => ctx.connection?.rpc,
  })
  const disposers = []
  let inflight = false
  /** @type {AbortController | null} */
  let inflightAbort = null

  const syncConnected = () => {
    const c = ctx.connection
    const on = !!(c && (c.state === 'connected' || c.connected === true || c.rpc))
    studio.setConnected?.(on)
  }
  try {
    syncConnected()
  } catch (_) {}

  /**
   * dsh-ws-generate → POST /dsh-ws/generate → paintGenerateResult
   * Direct fetch first so we never sit on submitted waiting for rpc.call handshake.
   * Prefer host ok:false scrubbed messages over bare browser "Failed to fetch".
   * @param {CustomEvent} ev
   */
  const onGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
    if (inflight) {
      studio.setStatus('已有出图任务进行中…')
      return
    }
    if (!String(detail.prompt || '').trim()) {
      studio.setStatus('请先输入提示词（不选 Skill 也可出图）')
      studio.paintGenerateResult?.({ phase: 'failed', error: '请先输入提示词（不选 Skill 也可出图）' })
      return
    }
    const rpc = ctx.connection?.rpc
    const canCall = typeof globalThis.fetch === 'function' || (rpc && typeof rpc.call === 'function')
    if (!canCall) {
      const msg = '连接不可用，无法出图'
      studio.setStatus(msg)
      studio.setConnected?.(false)
      studio.paintGenerateResult?.({ phase: 'failed', error: msg })
      return
    }
    inflight = true
    studio.setConnected?.(true)
    studio.setStatus('等待宿主进度…')
    // No synthetic % climb — studio shows indeterminate until host setProgress/paint
    studio.setProgress?.({ status: 'running', phase: 'submitted', elapsedMs: 0 })
    const ac = new AbortController()
    inflightAbort = ac
    const started = Date.now()
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS)
    try {
      const result = await callCtaRpc(
        rpc,
        CTA_RPC_GENERATE,
        {
          prompt: detail.prompt,
          negativePrompt: detail.negativePrompt,
          mode: detail.mode,
          skillId: detail.skillId,
          skillPlan: detail.skillPlan,
          ratio: detail.ratio,
          clarity: detail.clarity,
          count: detail.count,
          detail: detail.detail,
          modelId: detail.modelId,
          compareModels: detail.compareModels,
          refImages: detail.refImages,
        },
        ac.signal,
      )
      if (result?.ok) {
        studio.paintGenerateResult({
          ...(result.value || {}),
          phase: result.value?.phase || 'done',
          elapsedMs: Date.now() - started,
        })
      } else {
        const msg = formatHostGenerateError(result?.error || {})
        studio.setStatus(msg)
        studio.paintGenerateResult({ phase: 'failed', error: msg, elapsedMs: Date.now() - started })
      }
    } catch (e) {
      if (ac.signal.aborted) {
        studio.paintGenerateResult({ phase: 'cancelled', elapsedMs: Date.now() - started })
        studio.setStatus('客户端已取消；宿主取消未挂')
      } else {
        const msg = formatClientRpcFailure(e)
        studio.setStatus(msg)
        studio.paintGenerateResult({ phase: 'failed', error: msg, elapsedMs: Date.now() - started })
        // Extra scrubbed breadcrumb for console (never tokens)
        console.warn('[dsh-image-workstation] CTA RPC failed:', scrubErrorMessage(e?.message || e))
      }
    } finally {
      clearTimeout(timer)
      inflight = false
      inflightAbort = null
    }
  }

  /** Cancel button → same AbortController path as CTA generate in-flight abort */
  const onCancel = () => {
    if (inflightAbort) {
      try {
        inflightAbort.abort()
      } catch (_) {}
      studio.setStatus('客户端已取消；宿主取消未挂')
    }
  }

  // Register before sidebar/settings try — a throw there must not skip CTA RPC.
  document.addEventListener('dsh-ws-generate', onGenerate)
  document.addEventListener('dsh-ws-cancel', onCancel)
  disposers.push(() => document.removeEventListener('dsh-ws-generate', onGenerate))
  disposers.push(() => document.removeEventListener('dsh-ws-cancel', onCancel))

  try {
    mountSettingsCard(ctx)
  } catch (error) {
    console.warn('[dsh-image-workstation] settings card mount failed:', error)
  }

  try {
    disposers.push(
      mountSidebarEntry({
        labels: { newSession: '新会话', studio: '生图' },
        onNewSession: () => studio.close(),
        onStudio: () => studio.open(),
      }),
    )
    /** Video CTA → /dsh-ws videoGenerate — same pattern as image generate */
    let videoInflight = false
    /** @type {AbortController | null} */
    let videoAbort = null
    const onVideoGenerate = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
      const paintFail = (msg) => {
        const status = String(msg || 'VIDEO_NOT_CONFIGURED')
        studio.paintVideoStubFailure?.(status)
        studio.setStatus?.(status)
      }
      /** Map host error → exact status codes when configured-missing / stub */
      const statusFromError = (error) => {
        const code = error?.code ? String(error.code) : ''
        if (code === 'VIDEO_NOT_CONFIGURED') return 'VIDEO_NOT_CONFIGURED'
        if (code === 'VIDEO_STUB_NOT_WIRED') return 'VIDEO_STUB_NOT_WIRED'
        if (code === 'UNKNOWN_ENDPOINT' || code === 'HOST_PROXY_NOT_WIRED') {
          return 'VIDEO_NOT_CONFIGURED'
        }
        if (code) {
          const msg = scrubErrorMessage(error?.message || code)
          return msg.includes(code) ? msg : `${code}: ${msg}`
        }
        return scrubErrorMessage(error?.message || 'VIDEO_GENERATE_FAILED')
      }
      if (videoInflight) {
        studio.setStatus?.('已有视频任务进行中…')
        return
      }
      if (!String(detail.prompt || '').trim()) {
        paintFail('请先输入提示词')
        return
      }
      const rpc = ctx.connection?.rpc
      if (!rpc || typeof rpc.call !== 'function') {
        paintFail('VIDEO_NOT_CONFIGURED')
        return
      }
      videoInflight = true
      const ac = new AbortController()
      videoAbort = ac
      const started = Date.now()
      studio.setVideoProgress?.({ status: 'running', phase: 'submitted', elapsedMs: 0 })
      studio.setStatus?.('等待宿主进度…')
      const timer = setTimeout(() => ac.abort(), CLIENT_VIDEO_TIMEOUT_MS)
      try {
        const result = await rpc.call(
          CTA_RPC_CHANNEL,
          CTA_RPC_VIDEO_GENERATE,
          {
            prompt: detail.prompt,
            mode: detail.mode,
            duration: detail.duration,
            clarity: detail.clarity,
            ratio: detail.ratio,
            modelId: detail.modelId,
            firstFrame: detail.firstFrame,
            lastFrame: detail.lastFrame,
          },
          ac.signal,
        )
        if (result?.ok) {
          studio.paintVideoResult?.({
            ...(result.value || {}),
            phase: result.value?.phase || 'done',
            elapsedMs: Date.now() - started,
          })
        } else {
          paintFail(statusFromError(result?.error || {}))
        }
      } catch (e) {
        if (ac.signal.aborted) {
          studio.paintVideoResult?.({ phase: 'cancelled', elapsedMs: Date.now() - started })
          studio.setStatus?.('已取消')
        } else {
          const code = e?.code ? String(e.code) : ''
          paintFail(
            code === 'VIDEO_NOT_CONFIGURED' || code === 'VIDEO_STUB_NOT_WIRED'
              ? code
              : statusFromError({ code, message: e?.message || e }),
          )
        }
      } finally {
        clearTimeout(timer)
        videoInflight = false
        videoAbort = null
      }
    }
    const onVideoCancel = () => {
      if (videoAbort) {
        try {
          videoAbort.abort()
        } catch (_) {}
        studio.setStatus?.('已取消')
      }
    }

    /**
     * 反推提示词 → /dsh-ws reversePrompt (VISION_*)
     * Never fake success when VISION_* missing.
     */
    const onReversePrompt = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
      const rpc = ctx.connection?.rpc
      if (!rpc || typeof rpc.call !== 'function') {
        studio.setStatus?.('VISION_NOT_CONFIGURED')
        return
      }
      const imageUrl =
        detail.imageUrl ||
        detail.dataUrl ||
        (Array.isArray(detail.refImages) &&
          detail.refImages[0] &&
          (detail.refImages[0].url || detail.refImages[0].dataUrl)) ||
        ''
      if (!imageUrl) {
        studio.setStatus?.('请先上传参考图再反推')
        return
      }
      studio.setStatus?.('反推中…')
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_REVERSE_PROMPT, {
          imageUrl,
          dataUrl: detail.dataUrl,
          refImages: detail.refImages,
          instruction: detail.instruction,
        })
        if (result?.ok && result.value?.prompt) {
          studio.applyReversedPrompt?.(String(result.value.prompt))
          studio.setStatus?.('反推完成')
        } else {
          const code = result?.error?.code ? String(result.error.code) : ''
          if (code === 'VISION_NOT_CONFIGURED') {
            studio.setStatus?.('VISION_NOT_CONFIGURED')
          } else if (code === 'UNKNOWN_ENDPOINT' || code === 'HOST_PROXY_NOT_WIRED') {
            studio.setStatus?.('「反推提示词」未接线')
          } else {
            const msg = scrubErrorMessage(result?.error?.message || '反推失败')
            studio.setStatus?.(code ? `${code}: ${msg}` : msg)
          }
        }
      } catch (e) {
        const code = e?.code ? String(e.code) : ''
        if (code === 'VISION_NOT_CONFIGURED') studio.setStatus?.('VISION_NOT_CONFIGURED')
        else studio.setStatus?.(formatClientRpcFailure(e))
      }
    }

    document.addEventListener('dsh-ws-video-generate', onVideoGenerate)
    document.addEventListener('dsh-ws-video-cancel', onVideoCancel)
    document.addEventListener('dsh-ws-reverse-prompt', onReversePrompt)


  /**
   * Resolve dataDir + media/{generated,gallery,history} seats from host.
   * Studio namespaced history localStorage by dataDir when known.
   */
  const onStoragePathsRequest = async () => {
    const rpc = ctx.connection?.rpc
    if (!rpc || typeof rpc.call !== 'function') return
    try {
      const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, {})
      if (result?.ok && result.value && typeof result.value === 'object') {
        studio.setStoragePaths?.(result.value)
      }
    } catch (_) {
      /* keep local history key; no fake path */
    }
  }
  document.addEventListener('dsh-ws-storage-paths-request', onStoragePathsRequest)
  disposers.push(() => document.removeEventListener('dsh-ws-storage-paths-request', onStoragePathsRequest))
  // Warm paths once at mount when connection already up
  try {
    onStoragePathsRequest()
  } catch (_) {}

  /**
   * 加画廊 — needs host persist into media/gallery (storage.paths seat).
   * Until gallery.add (or equivalent) exists, stay honest 「未接线」— never fake success.
   */
  const onGalleryAdd = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
    const src = detail.src || ''
    if (!src) {
      studio.setStatus?.('无图可加画廊')
      return
    }
    const rpc = ctx.connection?.rpc
    if (!rpc || typeof rpc.call !== 'function') {
      studio.setStatus?.('「加画廊」未接线')
      return
    }
    try {
      // Confirm gallery seat exists (paths RPC from 插件工 399ea28+)
      const paths = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, {})
      if (!paths?.ok || !paths?.value?.gallery) {
        studio.setStatus?.('「加画廊」未接线')
        return
      }
      const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_ADD, {
        src,
        prompt: detail.prompt || '',
        snapshot: detail.snapshot || null,
        galleryRel: paths.value.gallery,
        dataDir: paths.value.dataDir,
      })
      if (result?.ok) {
        studio.setStatus?.('已加入画廊')
        return
      }
      const code = result?.error?.code || ''
      // UNKNOWN_ENDPOINT / missing write path → honest placeholder
      studio.setStatus?.(
        code === 'UNKNOWN_ENDPOINT' || code === 'HOST_PROXY_NOT_WIRED'
          ? '「加画廊」未接线'
          : scrubErrorMessage(result?.error?.message || '「加画廊」未接线'),
      )
    } catch (e) {
      const code = e?.code || ''
      const msg = formatClientRpcFailure(e)
      studio.setStatus?.(
        code === 'UNKNOWN_ENDPOINT' || /unknown/i.test(String(msg))
          ? '「加画廊」未接线'
          : msg || '「加画廊」未接线',
      )
    }
  }
  document.addEventListener('dsh-ws-gallery-add', onGalleryAdd)
  disposers.push(() => document.removeEventListener('dsh-ws-gallery-add', onGalleryAdd))

  /**
   * dsh-ws-plan → /dsh-ws-skill plan → paintSkillPlanResult
   * Does not touch mediaProxy / generate path.
   */
  const onPlan = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
    const skillId = detail.skillId
    if (!skillId) {
      studio.setStatus?.('请先选择创作 Skill')
      return
    }
    const rpc = ctx.connection?.rpc
    if (!rpc || typeof rpc.call !== 'function') {
      studio.setStatus?.('连接不可用，无法想方案')
      return
    }
    studio.setStatus?.('想方案中…')
    try {
      const result = await rpc.call(SKILL_RPC_CHANNEL, SKILL_RPC_PLAN, {
        skillId,
        brief: detail.prompt || '',
        prompt: detail.prompt || '',
      })
      if (result?.ok) {
        studio.paintSkillPlanResult?.(result.value)
      } else {
        const msg = scrubErrorMessage(result?.error?.message || '想方案失败')
        studio.setStatus?.(msg)
      }
    } catch (e) {
      studio.setStatus?.(formatClientRpcFailure(e))
    }
  }
  document.addEventListener('dsh-ws-plan', onPlan)
  disposers.push(() => document.removeEventListener('dsh-ws-plan', onPlan))
    disposers.push(() => document.removeEventListener('dsh-ws-video-generate', onVideoGenerate))
    disposers.push(() => document.removeEventListener('dsh-ws-video-cancel', onVideoCancel))
    disposers.push(() => document.removeEventListener('dsh-ws-reverse-prompt', onReversePrompt))
    disposers.push(() => studio.dispose())
  } catch (error) {
    console.warn('[dsh-image-workstation] sidebar/CTA mount failed:', error)
  }

  // Settings→Plugins card: later; namespace owned by host Config.
  ctx.effect?.(() => () => {
    for (const d of disposers.splice(0)) d()
  }, 'dsh-image-workstation: sidebar+studio+cta-rpc')
}
