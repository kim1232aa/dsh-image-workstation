/**
 * Settings → Plugins card (self-written).
 * Key / ns: dsh-image-workstation (stable). Cordis entry id: imagegen.
 * Light host-matching surface — not the studio dark theme.
 * Secret never echoed; draft password + Configured / Not configured.
 * Compact layout: Subagent host card + Save stay in one viewport frame.
 */
import { SETTINGS_NAMESPACE, PLUGIN_ENTRY_ID } from '../shared/ns.js'

const NS = SETTINGS_NAMESPACE
const ENTRY = PLUGIN_ENTRY_ID

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
  const [revision, setRevision] = useState(undefined)
  const [status, setStatus] = useState('')
  const [models, setModels] = useState([])
  const [busy, setBusy] = useState(false)
  // Collapse by default so Save/Detect stay reachable inside the modal.
  const [open, setOpen] = useState(false)

  const pull = useCallback(() => {
    if (!scope?.getSnapshot) return
    const snap = scope.getSnapshot()
    if (snap?.status === 'ready' && snap.value) {
      const v = snap.value
      setBaseUrl(String(v.mediaBaseUrl || ''))
      setProvider(['anthropic-compat','gptimg','openai-images'].includes(v.mediaProvider) ? v.mediaProvider : 'anthropic-compat')
      setAllowAgent(v.allowAgentImageGeneration !== false)
      const secrets = snap.secrets || {}
      const secretMeta = secrets.mediaApiKey
      const keySet =
        secretMeta === true ||
        secretMeta?.set === true ||
        (typeof secretMeta === 'object' && secretMeta != null && 'set' in secretMeta && secretMeta.set)
      setKeyConfigured(Boolean(keySet))
      setRevision(snap.revision)
    }
  }, [scope])

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
      ]
      if (apiKeyDraft.trim()) {
        ops.push({ op: 'set', path: ['mediaApiKey'], value: apiKeyDraft.trim() })
      }
      if (typeof scope.mutate === 'function') {
        await scope.mutate(ops, revision)
      } else {
        for (const op of ops) await scope.set(op.path[0], op.value)
      }
      setApiKeyDraft('')
      if (apiKeyDraft.trim()) setKeyConfigured(true)
      setStatus('Saved (key stored on host only)')
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
  const inputBg = 'var(--dsw-alias-bg-layer-1, #fff)'
  const layer2 = 'var(--dsw-alias-bg-layer-2, #f3f4f6)'
  const layer3 = 'var(--dsw-alias-bg-layer-3, #fff)'

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
    color: 'var(--dsw-alias-label-primary-foreground, #fff)',
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
        font: '12px/1.4 system-ui,sans-serif',
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
              maxHeight: 'min(44vh, 340px)',
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
                  keyConfigured ? 'Configured' : 'Not configured',
                ),
              ),
              h('input', {
                style: inputStyle,
                type: 'password',
                autoComplete: 'new-password',
                value: apiKeyDraft,
                placeholder: keyConfigured ? 'Leave blank to keep stored key' : 'Paste key, then Save',
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
