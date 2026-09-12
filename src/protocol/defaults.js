/** Single source for image model default (studio + host). Override: MEDIA_IMAGE_MODEL */
export const DEFAULT_IMAGE_MODEL = process.env.MEDIA_IMAGE_MODEL || 'gpt-image-2'

/**
 * Keep image/video media models; drop chat / embedding / audio / moderation.
 * @param {string} id
 */
export function isMediaModelId(id) {
  const s = String(id || '').toLowerCase()
  if (!s) return false
  // explicit drop
  if (
    /(^|\/)(text-embedding|embedding|whisper|tts|moderation|realtime|omni-moderation)/.test(s) ||
    /(^|\/)(gpt-3\.5|gpt-4|gpt-5|o1|o3|o4|claude|deepseek-chat|deepseek-reasoner|composer|grok-3|grok-4|grok-build|chat)/.test(
      s,
    )
  ) {
    // allow if clearly imagine/image/video despite chat-ish prefix
    if (!/(imagine|image|dall|flux|seedream|banana|video|diffusion|sdxl|midjourney)/.test(s)) {
      return false
    }
  }
  // keep known media shapes
  if (/(imagine|image|dall-e|dalle|gpt-image|flux|seedream|banana|video|diffusion|sdxl)/.test(s)) {
    return true
  }
  // openai gpt-image-* already matched; leftover ids that are purely chat → drop
  return false
}
