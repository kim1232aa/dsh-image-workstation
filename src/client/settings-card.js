/**
 * Settings → Plugins card (self-written). Key: dsh-image-workstation.
 * Secret never echoed; draft password + 已配置/未配置.
 */
import { SETTINGS_NAMESPACE } from '../shared/ns.js'

const NS = SETTINGS_NAMESPACE

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
  const [open, setOpen] = useState(true)

  const pull = useCallback(() => {
    if (!scope?.getSnapshot) return
    const snap = scope.getSnapshot()
    if (snap?.status === 'ready' && snap.value) {
      const v = snap.value
      setBaseUrl(String(v.mediaBaseUrl || ''))
      setProvider(v.mediaProvider === 'anthropic-compat' ? 'anthropic-compat' : 'openai-images')
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
      setStatus('settingsScope 不可用')
      return
    }
    setBusy(true)
    setStatus('保存中…')
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
      setStatus('已保存（密钥仅存宿主）')
      pull()
    } catch (e) {
      setStatus(`保存失败：${e?.message || e}`)
    } finally {
      setBusy(false)
    }
  }

  const onProbe = async () => {
    const rpc = connection?.rpc
    if (!rpc?.call) {
      setStatus('connection.rpc 不可用')
      return
    }
    setBusy(true)
    setStatus('检测中…')
    setModels([])
    try {
      const result = await rpc.call('/dsh-ws', 'probe', {})
      if (result?.ok) {
        const list = result.value?.models || []
        setModels(list.slice(0, 40))
        setStatus(`检测到 ${result.value?.count ?? list.length} 个模型`)
      } else {
        setStatus(
          `检测失败：${result?.error?.message || 'unknown'}${
            result?.error?.code ? `（${result.error.code}）` : ''
          }`,
        )
      }
    } catch (e) {
      setStatus(`检测失败：${e?.message || e}`)
    } finally {
      setBusy(false)
    }
  }

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12, fontSize: 13 }
  const inputStyle = {
    padding: '8px 10px',
    borderRadius: 8,
    border: '1px solid #2a3140',
    background: '#0e1218',
    color: '#e8eaed',
    font: 'inherit',
  }
  const btnStyle = {
    padding: '8px 12px',
    borderRadius: 8,
    border: '1px solid #2a3140',
    background: '#1c2333',
    color: '#e8eaed',
    cursor: busy ? 'wait' : 'pointer',
    font: 'inherit',
  }
  const primaryStyle = { ...btnStyle, background: '#e8eaed', color: '#0b0d10', border: 0, fontWeight: 650 }

  return h(
    'div',
    {
      'data-dsh-ws-settings-card': '',
      style: {
        border: '1px solid #1f2430',
        borderRadius: 12,
        background: '#0c0f14',
        color: '#e8eaed',
        marginBottom: 12,
        overflow: 'hidden',
        font: '13px/1.45 system-ui,sans-serif',
      },
    },
    h(
      'button',
      {
        type: 'button',
        onClick: () => setOpen((v) => !v),
        style: {
          width: '100%',
          textAlign: 'left',
          padding: '12px 14px',
          border: 0,
          background: 'transparent',
          color: 'inherit',
          cursor: 'pointer',
          font: 'inherit',
        },
      },
      h('div', { style: { fontWeight: 650, fontSize: 14 } }, '生图工作台'),
      h(
        'div',
        { style: { fontSize: 12, color: '#9aa3b2', marginTop: 2 } },
        '渠道 / 密钥 / 检测（密钥仅存宿主，页面不回显明文）',
      ),
    ),
    open
      ? h(
          'div',
          { style: { padding: '0 14px 14px' } },
          h(
            'label',
            { style: fieldStyle },
            h('span', null, 'API 地址'),
            h('input', {
              style: inputStyle,
              value: baseUrl,
              placeholder: 'https://…/v1',
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
              h('span', null, 'API 密钥'),
              h('span', { style: { color: '#9aa3b2', fontSize: 12 } }, keyConfigured ? '已配置' : '未配置'),
            ),
            h('input', {
              style: inputStyle,
              type: 'password',
              autoComplete: 'new-password',
              value: apiKeyDraft,
              placeholder: keyConfigured ? '留空则保留已存密钥' : '粘贴密钥后保存',
              onChange: (e) => setApiKeyDraft(e.target.value),
              disabled: busy,
            }),
          ),
          h(
            'label',
            { style: fieldStyle },
            h('span', null, '提供方'),
            h(
              'select',
              {
                style: inputStyle,
                value: provider,
                onChange: (e) => setProvider(e.target.value),
                disabled: busy,
              },
              h('option', { value: 'openai-images' }, 'openai-images'),
              h('option', { value: 'anthropic-compat' }, 'anthropic-compat'),
            ),
          ),
          h(
            'label',
            { style: { ...fieldStyle, flexDirection: 'row', alignItems: 'center', gap: 8 } },
            h('input', {
              type: 'checkbox',
              checked: allowAgent,
              onChange: (e) => setAllowAgent(e.target.checked),
              disabled: busy,
            }),
            h('span', null, '允许 Agent 调用生图'),
          ),
          h(
            'div',
            { style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 } },
            h('button', { type: 'button', style: primaryStyle, disabled: busy, onClick: onSave }, '保存'),
            h('button', { type: 'button', style: btnStyle, disabled: busy, onClick: onProbe }, '检测可用模型'),
          ),
          status ? h('p', { style: { margin: '10px 0 0', fontSize: 12, color: '#9aa3b2' } }, status) : null,
          models.length
            ? h(
                'ul',
                {
                  style: {
                    margin: '8px 0 0',
                    paddingLeft: 18,
                    fontSize: 12,
                    color: '#c5cad3',
                    maxHeight: 120,
                    overflow: 'auto',
                  },
                },
                models.map((m) => h('li', { key: m }, m)),
              )
            : null,
        )
      : null,
  )
}

/**
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

  ctx.slots.inject('settings.plugin.item', () =>
    ctx.slots.register(
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
    ),
  )

  ctx.logger?.info?.(`[dsh-image-workstation] settings card registered key=${NS}`)
}
