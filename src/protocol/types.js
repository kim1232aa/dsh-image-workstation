/**
 * Protocol kinds + shared job shape. Interface sketch only — no network I/O.
 * @typedef {'openai.images'|'async.task_id'|'grok.imagine'|'gemini.image'|'seedream'|'qwen.dashscope'|'zhipu.glm-image'|'minimax.image-01'|'video.async'} ProtocolKind
 * @typedef {'vision'|'images'|'video'} CredentialLane
 */

export const PROTOCOL_KINDS = Object.freeze([
  'openai.images',
  'async.task_id',
  'grok.imagine',
  'gemini.image',
  'seedream',
  'qwen.dashscope',
  'zhipu.glm-image',
  'minimax.image-01',
  'video.async',
])

export const CREDENTIAL_LANES = Object.freeze(['vision', 'images', 'video'])

/** @type {readonly string[]} */
export const IMAGE_MODALITIES = Object.freeze(['t2i', 'i2i', 'edit-mask'])

/** @type {readonly string[]} */
export const VIDEO_MODALITIES = Object.freeze(['t2v', 'i2v'])
