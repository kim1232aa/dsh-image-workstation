/**
 * Settings → Plugins card (self-written).
 * Key / ns: dsh-image-workstation (stable). Cordis entry id: imagegen.
 * Light host-matching surface — not the studio dark theme.
 * Secret never echoed; draft password + Configured / Not configured.
 * Empty Cordis fields backfill from host settings.effective (media.env) — no raw keys.
 * Compact layout: Subagent host card + Save stay in one viewport frame.
 */
import { SETTINGS_NAMESPACE, PLUGIN_ENTRY_ID } from '../shared/ns.js'

const NS = SETTINGS_NAMESPACE
const ENTRY = PLUGIN_ENTRY_ID

/** Same-origin fetch — avoid connection.rpc.call handshake stalls in Settings modal. */
async function fetchSettingsEffective() {
  const loc = globalThis.location
  let base = ''
  if (loc?.origin && loc.origin !== 'null') base = loc.origin
  else if (typeof loc?.href === 'string' && /^https?:/i.test(loc.href)) {
    try {
      base = new URL(loc.href).origin
    } catch (_) {
      /* ignore */
    }
  }
  const rpcId = `settings-eff-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const res = await globalThis.fetch(`${base}/dsh-ws/settings.effective`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({
      type: 'client-request',
      rpcId,
      method: 'settings.effective',
      payload: {},
    }),
  })
  if (!res.ok) throw new Error(`settings.effective HTTP ${res.status}`)
  const full = await res.json()
  if (!full || full.type !== 'server-response') {
    throw new TypeError('invalid settings.effective envelope')
  }
  return full.result
}


/**
 * @param {any} props
 */
export function WorkstationSettingsCard(props) {
  const React = props.react || require('react')
  const h = React.createElement
  const { useState, useEffect, useCallback } = React
  const scope = props.settingsScope
  const connection = props.connection

  const [baseUrl, setBaseUrl] = useState('')
  const [apiKeyDraft, setApiKeyDraft] = useState('')
  const [provider, setProvider] = useState('openai-images')
  const [allowAgent, setAllowAgent] = useState(true)
  const [keyConfigured, setKeyConfigured] = useState(false)
  const [videoBaseUrl, setVideoBaseUrl] = useState('')
  const [videoApiKeyDraft, setVideoApiKeyDraft] = useState('')
  const [videoProvider, setVideoProvider] = useState('video.async')
  const [videoDefaultModel, setVideoDefaultModel] = useState('')
  const [videoKeyConfigured, setVideoKeyConfigured] = useState(false)
  const [visionBaseUrl, setVisionBaseUrl] = useState('')
  const [visionApiKeyDraft, setVisionApiKeyDraft] = useState('')
  const [visionModel, setVisionModel] = useState('')
  const [visionKeyConfigured, setVisionKeyConfigured] = useState(false)
  const [revision, setRevision] = useState(undefined)
  const [status, setStatus] = useState('')
  const [models, setModels] = useState([])
  const [busy, setBusy] = useState(false)
  // Collapse by default so Save/Detect stay reachable inside the modal.
  const [open, setOpen] = useState(false)

  const pull = useCallback(() => {
    if (!scope?.getSnapshot) return
    const snap = scope.getSnapshot()
    let snapBase = ''
    let snapProvider = 'anthropic-compat'
    let snapKey = false
    let snapVideoBase = ''
    let snapVideoProvider = 'video.async'
    let snapVideoModel = ''
    let snapVideoKey = false
    let snapVisionBase = ''
    let snapVisionModel = ''
    let snapVisionKey = false
    if (snap?.status === 'ready' && snap.value) {
      const v = snap.value
      snapBase = String(v.mediaBaseUrl || '')
      snapProvider = ['anthropic-compat','gptimg','openai-images'].includes(v.mediaProvider)
        ? v.mediaProvider
        : 'anthropic-compat'
      setAllowAgent(v.allowAgentImageGeneration !== false)
      snapVideoBase = String(v.videoBaseUrl || '')
      snapVideoProvider = String(v.videoProvider || '').trim() || 'video.async'
      snapVideoModel = String(v.videoDefaultModel || '')
      const secrets = snap.secrets || {}
      const secretMeta = secrets.mediaApiKey
      snapKey =
        secretMeta === true ||
        secretMeta?.set === true ||
        (typeof secretMeta === 'object' && secretMeta != null && 'set' in secretMeta && secretMeta.set)
      const videoSecretMeta = secrets.videoApiKey
      snapVideoKey =
        videoSecretMeta === true ||
        videoSecretMeta?.set === true ||
        (typeof videoSecretMeta === 'object' &&
          videoSecretMeta != null &&
          'set' in videoSecretMeta &&
          videoSecretMeta.set)
      snapVisionBase = String(v.visionBaseUrl || '')
      snapVisionModel = String(v.visionModel || '')
      const visionSecretMeta = secrets.visionApiKey
      snapVisionKey =
        visionSecretMeta === true ||
        visionSecretMeta?.set === true ||
        (typeof visionSecretMeta === 'object' &&
          visionSecretMeta != null &&
          'set' in visionSecretMeta &&
          visionSecretMeta.set)
      setRevision(snap.revision)
    }
    setBaseUrl(snapBase)
    setProvider(snapProvider)
    setKeyConfigured(Boolean(snapKey))
    setVideoBaseUrl(snapVideoBase)
    setVideoProvider(snapVideoProvider)
    setVideoDefaultModel(snapVideoModel)
    setVideoKeyConfigured(Boolean(snapVideoKey))
    setVisionBaseUrl(snapVisionBase)
    setVisionModel(snapVisionModel)
    setVisionKeyConfigured(Boolean(snapVisionKey))

    // Host media.env backfill when Cordis settings are empty (no raw keys).
    // Prefer same-origin fetch (Settings modal rpc.call can stall on handshake).
    void (async () => {
      try {
        let result = null
        if (typeof globalThis.fetch === 'function') {
          result = await fetchSettingsEffective()
        } else if (connection?.rpc?.call) {
          result = await connection.rpc.call('/dsh-ws', 'settings.effective', {})
        }
        if (!result?.ok || !result.value) return
        const e = result.value
        if (!snapBase && e.mediaBaseUrl) {
          setBaseUrl(String(e.mediaBaseUrl || ''))
          if (['anthropic-compat', 'gptimg', 'openai-images'].includes(e.mediaProvider)) {
            setProvider(e.mediaProvider)
          }
        }
        if (!snapKey && e.mediaKeyConfigured) setKeyConfigured(true)
        if (!snapVideoBase && e.videoBaseUrl) {
          setVideoBaseUrl(String(e.videoBaseUrl || ''))
          if (e.videoProvider) setVideoProvider(String(e.videoProvider))
          if (e.videoDefaultModel) setVideoDefaultModel(String(e.videoDefaultModel))
        }
        if (!snapVideoKey && e.videoKeyConfigured) setVideoKeyConfigured(true)
        if (!snapVisionBase && e.visionBaseUrl) {
          setVisionBaseUrl(String(e.visionBaseUrl || ''))
          if (e.visionModel) setVisionModel(String(e.visionModel))
        }
        if (!snapVisionKey && e.visionKeyConfigured) setVisionKeyConfigured(true)
        const fromEnv =
          (!snapBase && e.mediaSource && e.mediaSource !== 'settings') ||
          (!snapKey && e.mediaKeyConfigured && e.mediaSource && e.mediaSource !== 'settings')
        if (fromEnv) {
          setStatus((s) => s || '已从 host media.env 回填（密钥仅宿主）')
        }
      } catch {
        /* ignore — settings scope / seed still work alone */
      }
    })()
  }, [scope, connection])

  useEffect(() => {
    pull()
    const off = scope?.subscribe?.(pull)
    scope?.ensure?.()
    return typeof off === 'function' ? off : undefined
  }, [scope, pull])

  const onSave = async () => {
    if (!scope?.mutate && !scope?.set) {
      setStatus('settingsScope unavailable')
      return
    }
    setBusy(true)
    setStatus('Saving…')
    try {
      const ops = [
        { op: 'set', path: ['mediaBaseUrl'], value: baseUrl.trim() },
        { op: 'set', path: ['mediaProvider'], value: provider },
        { op: 'set', path: ['allowAgentImageGeneration'], value: allowAgent },
        { op: 'set', path: ['videoBaseUrl'], value: videoBaseUrl.trim() },
        { op: 'set', path: ['videoProvider'], value: videoProvider.trim() || 'video.async' },
        { op: 'set', path: ['videoDefaultModel'], value: videoDefaultModel.trim() },
        { op: 'set', path: ['visionBaseUrl'], value: visionBaseUrl.trim() },
        { op: 'set', path: ['visionModel'], value: visionModel.trim() },
      ]
      if (apiKeyDraft.trim()) {
        ops.push({ op: 'set', path: ['mediaApiKey'], value: apiKeyDraft.trim() })
      }
      if (videoApiKeyDraft.trim()) {
        ops.push({ op: 'set', path: ['videoApiKey'], value: videoApiKeyDraft.trim() })
      }
      if (visionApiKeyDraft.trim()) {
        ops.push({ op: 'set', path: ['visionApiKey'], value: visionApiKeyDraft.trim() })
      }
      if (typeof scope.mutate === 'function') {
        await scope.mutate(ops, revision)
      } else {
        for (const op of ops) await scope.set(op.path[0], op.value)
      }
      setApiKeyDraft('')
      setVideoApiKeyDraft('')
      setVisionApiKeyDraft('')
      if (apiKeyDraft.trim()) setKeyConfigured(true)
      if (videoApiKeyDraft.trim()) setVideoKeyConfigured(true)
      if (visionApiKeyDraft.trim()) setVisionKeyConfigured(true)
      setStatus('Saved (keys stored on host only)')
      pull()
    } catch (e) {
      setStatus(`Save failed: ${e?.message || e}`)
    } finally {
      setBusy(false)
    }
  }

  const onProbe = async () => {
    const rpc = connection?.rpc
    if (!rpc?.call) {
      setStatus('connection.rpc unavailable')
      return
    }
    setBusy(true)
    setStatus('Detecting…')
    setModels([])
    try {
      const result = await rpc.call('/dsh-ws', 'probe', {})
      if (result?.ok) {
        const list = result.value?.models || []
        setModels(list.slice(0, 40))
        setStatus(`Detected ${result.value?.count ?? list.length} models`)
      } else {
        setStatus(
          `Detect failed: ${result?.error?.message || 'unknown'}${
            result?.error?.code ? ` (${result.error.code})` : ''
          }`,
        )
      }
    } catch (e) {
      setStatus(`Detect failed: ${e?.message || e}`)
    } finally {
      setBusy(false)
    }
  }

  // Probe needs both base URL and a token (stored or draft).
  const canDetect = Boolean(baseUrl.trim() && (keyConfigured || apiKeyDraft.trim()))
  const detectDisabled = busy || !canDetect

  const fg = 'var(--dsw-alias-label-primary, #1a1d24)'
  const fgMuted = 'var(--dsw-alias-label-tertiary, #6b7280)'
  const fgSecondary = 'var(--dsw-alias-label-secondary, #4b5563)'
  const border = '0.5px solid var(--dsw-alias-border-l4, #d8dbe2)'
  const borderStrong = '0.5px solid var(--dsw-alias-border-l3, #c9cdd6)'
  const inputBg = 'var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-module-platform, transparent))'
  const layer2 = 'var(--dsw-alias-bg-layer-2, #f3f4f6)'
  const layer3 = 'var(--dsw-alias-bg-layer-3, var(--dsw-alias-bg-layer-2, transparent))'

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8, fontSize: 12 }
  const inputStyle = {
    padding: '6px 8px',
    borderRadius: 6,
    border,
    background: inputBg,
    color: fg,
    font: 'inherit',
    fontSize: 12,
  }
  const btnBase = {
    padding: '0 12px',
    height: 36,
    borderRadius: 16,
    font: 'inherit',
    fontSize: 13,
    lineHeight: '20px',
  }
  const primaryStyle = {
    ...btnBase,
    border: 0,
    background: 'var(--dsw-alias-button-primary-fill, #1a1d24)',
    color: 'var(--dsw-alias-label-primary-foreground)',
    fontWeight: 650,
    cursor: busy ? 'wait' : 'pointer',
  }
  const detectStyle = detectDisabled
    ? {
        ...btnBase,
        border: '0.5px solid var(--dsw-alias-border-l3)',
        background: 'var(--dsw-alias-bg-layer-2)',
        color: 'var(--dsw-alias-label-dimmed)',
        cursor: 'not-allowed',
        opacity: 0.4,
        pointerEvents: 'none',
        filter: 'grayscale(1)',
      }
    : {
        ...btnBase,
        border: borderStrong,
        background: 'transparent',
        color: fg,
        cursor: busy ? 'wait' : 'pointer',
        opacity: 1,
        pointerEvents: 'auto',
      }

  return h(
    'div',
    {
      'data-dsh-ws-settings-card': '',
      style: {
        border,
        borderRadius: 10,
        background: 'transparent',
        color: fg,
        marginBottom: 8,
        overflow: 'hidden',
        font: 'inherit',
      },
    },
    h(
      'button',
      {
        type: 'button',
        onClick: () => setOpen((v) => !v),
        title: `${NS} · ${ENTRY}`,
        style: {
          width: '100%',
          textAlign: 'left',
          padding: '8px 10px',
          border: 0,
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          font: 'inherit',
        },
      },
      h(
        'span',
        { style: { fontWeight: 650, fontSize: 13, lineHeight: '18px' } },
        'Image workstation',
      ),
    ),
    open
      ? h(
          'div',
          {
            style: {
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 'min(52vh, 420px)',
            },
          },
          h(
            'div',
            {
              style: {
                padding: '0 10px',
                overflow: 'auto',
                flex: '1 1 auto',
              },
            },
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'API base URL'),
              h('input', {
                style: inputStyle,
                value: baseUrl,
                placeholder: 'Base URL (OpenAI-compatible)',
                onChange: (e) => setBaseUrl(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h(
                'span',
                { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'API key'),
                h(
                  'span',
                  { style: { color: fgMuted, fontSize: 11 } },
                  keyConfigured ? '已配置' : '未配置',
                ),
              ),
              h('input', {
                style: inputStyle,
                type: 'password',
                autoComplete: 'new-password',
                value: apiKeyDraft,
                placeholder: keyConfigured ? '已配置（留空保留宿主密钥）' : '粘贴密钥后 Save',
                onChange: (e) => setApiKeyDraft(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Provider'),
              h(
                'select',
                {
                  style: inputStyle,
                  value: provider,
                  onChange: (e) => setProvider(e.target.value),
                  disabled: busy,
                },
                h('option', { value: 'anthropic-compat' }, 'Primary — grok-imagine (alibb)'),
                h('option', { value: 'gptimg' }, 'GPTIMG — gpt-image-2 (birdsun)'),
                h('option', { value: 'openai-images' }, 'openai-images (custom URL)'),
              ),
            ),
            h(
              'label',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 8,
                  fontSize: 12,
                },
              },
              h('input', {
                type: 'checkbox',
                checked: allowAgent,
                onChange: (e) => setAllowAgent(e.target.checked),
                disabled: busy,
              }),
              h('span', { style: { color: fg } }, 'Allow agent'),
            ),
            h(
              'div',
              {
                style: {
                  margin: '4px 0 8px',
                  paddingTop: 8,
                  borderTop: border,
                  color: fgSecondary,
                  fontWeight: 650,
                  fontSize: 12,
                },
              },
              'Video',
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Video API base URL'),
              h('input', {
                style: inputStyle,
                value: videoBaseUrl,
                placeholder: 'Video base URL (video.async)',
                onChange: (e) => setVideoBaseUrl(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h(
                'span',
                { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Video API key'),
                h(
                  'span',
                  { style: { color: fgMuted, fontSize: 11 } },
                  videoKeyConfigured ? '已配置' : '未配置',
                ),
              ),
              h('input', {
                style: inputStyle,
                type: 'password',
                autoComplete: 'new-password',
                value: videoApiKeyDraft,
                placeholder: videoKeyConfigured
                  ? '已配置（留空保留宿主密钥）'
                  : '粘贴密钥后 Save',
                onChange: (e) => setVideoApiKeyDraft(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Video provider'),
              h('input', {
                style: inputStyle,
                value: videoProvider,
                placeholder: 'video.async',
                onChange: (e) => setVideoProvider(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Video model'),
              h('input', {
                style: inputStyle,
                value: videoDefaultModel,
                placeholder: 'e.g. grok-imagine-video',
                onChange: (e) => setVideoDefaultModel(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'div',
              {
                style: {
                  margin: '4px 0 8px',
                  paddingTop: 8,
                  borderTop: border,
                  color: fgSecondary,
                  fontWeight: 650,
                  fontSize: 12,
                },
              },
              'Vision',
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Vision API base URL'),
              h('input', {
                style: inputStyle,
                value: visionBaseUrl,
                placeholder: 'Vision base URL (chat/completions)',
                onChange: (e) => setVisionBaseUrl(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h(
                'span',
                { style: { display: 'flex', justifyContent: 'space-between' } },
                h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Vision API key'),
                h(
                  'span',
                  { style: { color: fgMuted, fontSize: 11 } },
                  visionKeyConfigured ? '已配置' : '未配置',
                ),
              ),
              h('input', {
                style: inputStyle,
                type: 'password',
                autoComplete: 'new-password',
                value: visionApiKeyDraft,
                placeholder: visionKeyConfigured
                  ? '已配置（留空保留宿主密钥）'
                  : '粘贴密钥后 Save',
                onChange: (e) => setVisionApiKeyDraft(e.target.value),
                disabled: busy,
              }),
            ),
            h(
              'label',
              { style: fieldStyle },
              h('span', { style: { color: fgSecondary, fontWeight: 500 } }, 'Vision model'),
              h('input', {
                style: inputStyle,
                value: visionModel,
                placeholder: 'e.g. gpt-4o-mini',
                onChange: (e) => setVisionModel(e.target.value),
                disabled: busy,
              }),
            ),
            status ? h('p', { style: { margin: '0 0 6px', fontSize: 11, color: fgMuted } }, status) : null,
            models.length
              ? h(
                  'ul',
                  {
                    style: {
                      margin: '0 0 6px',
                      paddingLeft: 16,
                      fontSize: 11,
                      color: fgSecondary,
                      maxHeight: 72,
                      overflow: 'auto',
                    },
                  },
                  models.map((m) => h('li', { key: m }, m)),
                )
              : null,
          ),
          h(
            'div',
            {
              style: {
                position: 'sticky',
                bottom: 0,
                background: layer3,
                padding: '8px 10px',
                borderTop: border,
                flexShrink: 0,
              },
            },
            h(
              'div',
              {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                },
              },
              h('button', { type: 'button', style: primaryStyle, disabled: busy, onClick: onSave }, 'Save'),
              h(
                'button',
                {
                  type: 'button',
                  style: detectStyle,
                  disabled: detectDisabled,
                  'aria-disabled': detectDisabled ? 'true' : 'false',
                  onClick: detectDisabled ? undefined : onProbe,
                  title: canDetect
                    ? 'Detect available models'
                    : 'Set API base URL and configure a key first',
                },
                'Detect models',
              ),
            ),
            !canDetect
              ? h(
                  'p',
                  {
                    style: {
                      margin: '6px 0 0',
                      fontSize: 10,
                      color: fgMuted,
                    },
                  },
                  'Needs URL + key.',
                )
              : null,
          ),
        )
      : null,
  )
}

/**
 * Additive keyed inject — same shape as VisioWork (~57080) and host generator
 * yields in dsh-client-ui-settings-plugins. Does NOT replace host cards
 * (bash / agent-loop / subagent / web-search); keyed by our NS only.
 * @param {any} ctx
 */
export function mountSettingsCard(ctx) {
  if (!ctx?.slots?.inject || !ctx?.slots?.register) {
    ctx?.logger?.warn?.('[dsh-image-workstation] slots unavailable — settings card skipped')
    return
  }
  if (!ctx.settingsScope?.bind) {
    ctx?.logger?.warn?.('[dsh-image-workstation] settingsScope unavailable — settings card skipped')
    return
  }

  const scope = ctx.settingsScope.bind({ namespace: NS })
  const react = require('react')

  // Host-style generator yield: additive registration for our key only.
  ctx.slots.inject('settings.plugin.item', function* () {
    yield ctx.slots.register(
      {
        name: 'settings.plugin.item',
        key: NS,
        inject: () => ({
          settingsScope: scope,
          connection: ctx.connection,
          react,
        }),
      },
      WorkstationSettingsCard,
    )
  })

  ctx.logger?.info?.(`[dsh-image-workstation] settings card registered key=${NS} entry=${ENTRY}`)
}
