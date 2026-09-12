/**
 * Agent model / channel policy (no dsh-tools import — safe for verify scripts).
 */

/**
 * Explicit model ids from config / env only — never invent working ids.
 * Empty list = single host-default seat (mediaProxy picks MEDIA_IMAGE_MODEL / built-in default).
 *
 * @param {{ agentImageModels?: string[] }} config
 * @returns {string[]}
 */
export function listConfiguredAgentModels(config = {}) {
  const fromConfig = Array.isArray(config.agentImageModels)
    ? config.agentImageModels.map((m) => String(m || '').trim()).filter(Boolean)
    : []
  if (fromConfig.length) return [...new Set(fromConfig)]
  const envList = String(process.env.MEDIA_IMAGE_MODELS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (envList.length) return [...new Set(envList)]
  const one = String(process.env.MEDIA_IMAGE_MODEL || '').trim()
  return one ? [one] : []
}

/**
 * @param {{ allowAgentImageGeneration?: boolean }} config
 * @param {{ mediaConfigured?: boolean }} mediaProxy
 */
export function ensureAgentImageConfigured(config, mediaProxy) {
  if (config?.allowAgentImageGeneration === false) {
    const err = new Error(
      'Agent 生图已关闭。打开 Settings → Plugins → dsh-image-workstation，开启「允许 Agent 调用生图」。工作台页面不受影响。',
    )
    err.code = 'AGENT_GENERATION_DISABLED'
    throw err
  }
  if (!mediaProxy?.mediaConfigured) {
    const err = new Error(
      'Image channel not configured. Open Settings → Plugins → dsh-image-workstation and set media base URL + API key (or fill host media.env / MEDIA_*). Studio CTA uses the same channel. / 生图渠道未配置。请打开 Settings → Plugins → dsh-image-workstation，填写媒体 Base URL 与 API Key；也可在宿主 media.env（MEDIA_*）配置后重试。工作台 CTA 与 Agent 共用同一渠道。',
    )
    err.code = 'IMAGE_API_NOT_CONFIGURED'
    throw err
  }
}

/**
 * Multi-model red line: when ≥2 configured models, require an explicit model
 * and refuse to auto-pick. Single / host-default may omit.
 *
 * @param {{ agentImageModels?: string[] }} config
 * @param {unknown} requested
 * @returns {string | undefined} upstream model id, or undefined for host default
 */
export function resolveAgentImageModel(config, requested) {
  const models = listConfiguredAgentModels(config)
  const wanted = typeof requested === 'string' ? requested.trim() : ''

  if (models.length > 1) {
    if (!wanted) {
      const err = new Error(
        `配置了多个生图模型，请先询问用户使用哪一个，再带 model 参数调用本工具。可选：${models.map((m) => `"${m}"`).join(', ')}。`,
      )
      err.code = 'MODEL_CHOICE_REQUIRED'
      throw err
    }
    if (!models.includes(wanted)) {
      const err = new Error(
        `生图模型「${wanted}」未配置。请选择：${models.join(', ')}。`,
      )
      err.code = 'IMAGE_MODEL_NOT_CONFIGURED'
      throw err
    }
    return wanted
  }

  if (models.length === 1) {
    if (wanted && wanted !== models[0]) {
      const err = new Error(
        `仅配置了模型「${models[0]}」，没有「${wanted}」。`,
      )
      err.code = 'IMAGE_MODEL_NOT_CONFIGURED'
      throw err
    }
    return models[0]
  }

  // Host-default seat only — do not invent an id. If agent named one, forward
  // for an honest upstream error rather than silently swapping.
  return wanted || undefined
}

/**
 * Map agent tool args → mediaProxy.generate fields (same shaping spirit as CTA).
 * @param {{ prompt: string, model?: string, size?: string, quality?: string, count?: number }} args
 * @param {string | undefined} model
 * @param {AbortSignal | undefined} signal
 */
export function mapAgentGenerateRequest(args, model, signal) {
  const prompt = String(args?.prompt ?? '').trim()
  const n = Math.min(Math.max(Number(args?.count) || 1, 1), 4)
  const sizeRaw = args?.size && args.size !== 'auto' ? String(args.size) : '1:1'
  const qualityRaw =
    args?.quality && args.quality !== 'auto' ? String(args.quality) : '1k'
  const resolution = qualityRaw.toLowerCase()
  const size = sizeFromRatioOrPixels(sizeRaw, qualityRaw)
  /** @type {Record<string, unknown>} */
  const req = {
    prompt,
    n,
    size,
    aspect_ratio: /^\d+:\d+$/.test(sizeRaw) ? sizeRaw : '1:1',
    resolution,
  }
  if (model) req.model = model
  if (signal) req.signal = signal
  return req
}

/**
 * @param {string} sizeOrRatio
 * @param {string} clarity
 */
function sizeFromRatioOrPixels(sizeOrRatio, clarity) {
  if (/^\d+x\d+$/i.test(sizeOrRatio)) return sizeOrRatio
  const long = /4k/i.test(clarity) ? 2048 : /2k/i.test(clarity) ? 1536 : 1024
  const short = Math.round(long * 0.75)
  switch (sizeOrRatio) {
    case '1:1':
      return `${long}x${long}`
    case '3:4':
    case '2:3':
      return `${short}x${long}`
    case '4:3':
    case '3:2':
      return `${long}x${short}`
    case '9:16':
      return `${Math.round((long * 9) / 16)}x${long}`
    case '16:9':
      return `${long}x${Math.round((long * 9) / 16)}`
    case '21:9':
      return `${long}x${Math.round((long * 9) / 21)}`
    default:
      return `${long}x${long}`
  }
}


/**
 * Normalize agent refImages from tool args / chat attachments.
 * Accepts url | dataUrl | path (string or {url,dataUrl,path}).
 * @param {unknown} raw
 * @returns {{ url?: string, dataUrl?: string, path?: string }[]}
 */
export function normalizeAgentRefImages(raw) {
  const list = Array.isArray(raw) ? raw : raw != null && raw !== '' ? [raw] : []
  /** @type {{ url?: string, dataUrl?: string, path?: string }[]} */
  const out = []
  for (const item of list) {
    if (item == null) continue
    if (typeof item === 'string') {
      const s = item.trim()
      if (!s) continue
      if (s.startsWith('data:')) out.push({ dataUrl: s })
      else if (s.startsWith('file://') || s.startsWith('/') || /^[A-Za-z]:[\\/]/.test(s))
        out.push({ path: s.startsWith('file://') ? s : s })
      else out.push({ url: s })
      continue
    }
    if (typeof item !== 'object') continue
    const dataUrl = item.dataUrl != null ? String(item.dataUrl).trim() : ''
    const pathVal = item.path != null ? String(item.path).trim() : item.local_path != null ? String(item.local_path).trim() : ''
    const url = item.url != null ? String(item.url).trim() : ''
    /** @type {{ url?: string, dataUrl?: string, path?: string }} */
    const row = {}
    if (dataUrl) row.dataUrl = dataUrl
    if (pathVal) row.path = pathVal
    if (url) row.url = url
    if (row.dataUrl || row.path || row.url) out.push(row)
  }
  return out
}

/**
 * Pick first usable image source string for mediaProxy.edit / wantsEdit.
 * Prefer dataUrl → path → url (host materialize needs data/path; url may need download).
 * @param {{ url?: string, dataUrl?: string, path?: string }[]} refs
 * @returns {string | undefined}
 */
export function pickAgentRefImageSource(refs) {
  const list = Array.isArray(refs) ? refs : []
  for (const r of list) {
    if (r?.dataUrl) return r.dataUrl
  }
  for (const r of list) {
    if (r?.path) return r.path
  }
  for (const r of list) {
    if (r?.url) return r.url
  }
  return undefined
}

/**
 * Map agent edit_image args → mediaProxy.edit fields (same spirit as CTA 图生图).
 * @param {{ prompt: string, model?: string, size?: string, quality?: string, count?: number, refImages?: unknown, image?: string }} args
 * @param {string | undefined} model
 * @param {string} image  resolved dataUrl / path / file:// (or http url to be resolved by caller)
 * @param {AbortSignal | undefined} signal
 */
export function mapAgentEditRequest(args, model, image, signal) {
  const prompt = String(args?.prompt ?? '').trim()
  const n = Math.min(Math.max(Number(args?.count) || 1, 1), 4)
  const sizeRaw = args?.size && args.size !== 'auto' ? String(args.size) : '1:1'
  const qualityRaw =
    args?.quality && args.quality !== 'auto' ? String(args.quality) : '1k'
  const size = sizeFromRatioOrPixels(sizeRaw, qualityRaw)
  /** @type {Record<string, unknown>} */
  const req = {
    prompt,
    image: String(image || ''),
    n,
    size,
  }
  if (model) req.model = model
  if (signal) req.signal = signal
  return req
}

/**
 * @param {string} msg
 */
export function scrubAgentError(msg) {
  return String(msg || 'generate failed')
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/sk-[A-Za-z0-9._-]{8,}/g, '[redacted]')
    .slice(0, 500)
}
