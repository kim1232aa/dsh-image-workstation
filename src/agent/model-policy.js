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

/**
 * True when a file/image attachment name or mediaType looks like a raster image.
 * @param {any} att
 */
export function isImageLikeAttachment(att) {
  if (!att || typeof att !== 'object') return false
  const media = String(att.mediaType || att.mime || att.contentType || '').toLowerCase()
  if (media.startsWith('image/')) return true
  const name = String(att.name || att.filename || '').toLowerCase()
  return /\.(png|jpe?g|webp|gif|bmp|heic|heif)$/i.test(name)
}

/**
 * Normalize one attachment-ish object (camel or snake_case).
 * @param {any} raw
 * @param {{ kind?: string, url?: string }} [extra]
 */
export function normalizeMessageImageRef(raw, extra = {}) {
  if (!raw || typeof raw !== 'object') {
    if (typeof raw === 'string' && raw.trim()) {
      const s = raw.trim()
      if (/^https?:\/\//i.test(s) || s.startsWith('data:') || s.startsWith('file://') || s.startsWith('/')) {
        return { url: s, _kind: 'url', ...extra }
      }
      return { attachmentId: s, _kind: extra.kind || 'attachment_id', ...extra }
    }
    return null
  }
  const attachmentId = String(raw.attachmentId || raw.attachment_id || '').trim()
  const url = String(raw.url || raw.dataUrl || raw.data_url || raw.path || '').trim()
  const mediaType = raw.mediaType || raw.mime || raw.contentType
  const name = raw.name || raw.filename
  const bytes = typeof raw.bytes === 'number' ? raw.bytes : undefined
  /** @type {any} */
  const out = { ...extra }
  if (attachmentId) out.attachmentId = attachmentId
  if (url) out.url = url
  if (mediaType) out.mediaType = mediaType
  if (name) out.name = name
  if (bytes != null) out.bytes = bytes
  if (typeof raw.width === 'number') out.width = raw.width
  if (typeof raw.height === 'number') out.height = raw.height
  if (!out._kind) {
    out._kind = attachmentId ? 'attachment' : url ? 'url' : 'unknown'
  }
  if (!attachmentId && !url) return null
  return out
}

/**
 * Pull image refs from one content block — covers dsh ImageBlock, FileBlock
 * (image-like), OpenAI image_url, bare attachmentId / attachment_id, nested.
 * @param {any} block
 * @returns {any[]}
 */
export function extractImageRefsFromContentBlock(block) {
  if (!block || typeof block !== 'object') return []
  const type = String(block.type || '')

  if (type === 'image') {
    if (block.attachment) {
      const n = normalizeMessageImageRef(block.attachment, { _kind: 'image' })
      return n ? [n] : []
    }
    const n = normalizeMessageImageRef(block, { _kind: 'image' })
    return n ? [n] : []
  }

  if (type === 'file' && block.attachment) {
    if (!isImageLikeAttachment(block.attachment) && !isImageLikeAttachment(block)) return []
    const n = normalizeMessageImageRef(block.attachment, { _kind: 'file' })
    return n ? [n] : []
  }

  if (type === 'image_url' || type === 'input_image') {
    const url =
      (typeof block.image_url === 'string' && block.image_url) ||
      block.image_url?.url ||
      block.imageUrl?.url ||
      block.url ||
      block.image
    const n = normalizeMessageImageRef(
      typeof url === 'string' ? { url } : url && typeof url === 'object' ? url : block,
      { _kind: 'url' },
    )
    return n ? [n] : []
  }

  // Nested / alternate shapes
  if (block.attachment && (type === '' || isImageLikeAttachment(block.attachment))) {
    if (type && type !== 'image' && type !== 'file' && !isImageLikeAttachment(block.attachment)) {
      /* fall through */
    } else if (isImageLikeAttachment(block.attachment) || block.attachment.attachmentId || block.attachment.attachment_id) {
      const n = normalizeMessageImageRef(block.attachment, { _kind: type || 'attachment' })
      if (n) return [n]
    }
  }

  if (block.image && typeof block.image === 'object') {
    if (block.image.attachment) {
      const n = normalizeMessageImageRef(block.image.attachment, { _kind: 'image' })
      return n ? [n] : []
    }
    const n = normalizeMessageImageRef(block.image, { _kind: 'image' })
    return n ? [n] : []
  }

  if (block.attachmentId || block.attachment_id) {
    const n = normalizeMessageImageRef(block, { _kind: 'attachment_id' })
    return n ? [n] : []
  }

  return []
}

/**
 * Image refs from one user message content (image / file / image_url / ids).
 * @param {{ content?: unknown[] } | null | undefined} message
 * @returns {any[]}
 */
export function listImageRefsFromUserMessage(message) {
  const content = message?.content
  if (!Array.isArray(content)) return []
  /** @type {any[]} */
  const out = []
  for (const block of content) {
    for (const ref of extractImageRefsFromContentBlock(block)) out.push(ref)
  }
  return out
}

/**
 * Summarize content block types for diagnostics (no bytes / secrets).
 * @param {{ content?: unknown[] } | null | undefined} message
 */
export function summarizeMessageContentShapes(message) {
  const content = message?.content
  if (!Array.isArray(content)) return []
  return content.map((block) => {
    if (!block || typeof block !== 'object') return { type: typeof block }
    const att = block.attachment && typeof block.attachment === 'object' ? block.attachment : null
    return {
      type: block.type || null,
      keys: Object.keys(block).sort(),
      hasAttachment: Boolean(att),
      attachmentId: att
        ? String(att.attachmentId || att.attachment_id || '').slice(0, 48)
        : String(block.attachmentId || block.attachment_id || '').slice(0, 48) || null,
      name: att?.name || block.name || null,
      mediaType: att?.mediaType || block.mediaType || null,
    }
  })
}

/**
 * Human user/message events on the session surface, newest first.
 * Skips tool/plugin/agent-instructions injects.
 * @param {{ session?: { surface?: { nodes?: Iterable<unknown> }, eventAt?: Function } } | null | undefined} agent
 * @returns {{ role?: string, content?: unknown[], source?: { kind?: string } }[]}
 */
export function listRecentUserPromptMessages(agent) {
  const session = agent?.session || agent
  const nodes = session?.surface?.nodes
  if (!session || !nodes || typeof session.eventAt !== 'function') return []
  const list =
    typeof nodes.toReversed === 'function'
      ? nodes.toReversed()
      : Array.isArray(nodes)
        ? [...nodes].reverse()
        : [...nodes].reverse()
  /** @type {{ role?: string, content?: unknown[], source?: { kind?: string } }[]} */
  const out = []
  for (const seq of list) {
    const event = session.eventAt(seq)
    if (!event || event.type !== 'user/message') continue
    const msg = event.data
    if (!msg || msg.role !== 'user') continue
    const kind = msg.source?.kind
    if (kind === 'tool' || kind === 'plugin' || kind === 'agent-instructions') continue
    out.push(msg)
  }
  return out
}

/**
 * Latest human prompt — prefer one that carries image refs so a later
 * text-only human line does not hide the attached turn.
 * @param {{ session?: { surface?: { nodes?: Iterable<unknown> }, eventAt?: Function } } | null | undefined} agent
 * @returns {{ role?: string, content?: unknown[], source?: { kind?: string } } | null}
 */
export function findLatestUserPromptMessage(agent) {
  const msgs = listRecentUserPromptMessages(agent)
  if (msgs.length === 0) return null
  for (const msg of msgs) {
    if (listImageRefsFromUserMessage(msg).length > 0) return msg
  }
  return msgs[0]
}

/**
 * Prefer current-message attachments over model-supplied workspace paths.
 * When the user message carries images, those win — never silently keep a
 * different jpg the model picked from the workspace.
 *
 * @param {{ argRefs?: unknown[], messageImageRefs?: unknown[] }} input
 * @returns {{ refs: unknown[], source: 'message_attachment' | 'tool_args', ignoredArgCount: number }}
 */
export function resolveEditRefInputs(input = {}) {
  const msgRefs = Array.isArray(input.messageImageRefs) ? input.messageImageRefs.filter(Boolean) : []
  const argRefs = Array.isArray(input.argRefs) ? input.argRefs.filter((x) => x != null && x !== '') : []
  if (msgRefs.length > 0) {
    return {
      refs: msgRefs,
      source: 'message_attachment',
      ignoredArgCount: argRefs.length,
    }
  }
  return { refs: argRefs, source: 'tool_args', ignoredArgCount: 0 }
}

export function scrubAgentError(msg) {
  return String(msg || 'generate failed')
    .replace(/Bearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/sk-[A-Za-z0-9._-]{8,}/g, '[redacted]')
    .slice(0, 500)
}
