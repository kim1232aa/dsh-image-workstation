/**
 * 「提示词增强」mapping stub — docs/skills/04-enhance-mapping.md
 * User-click only. No score, no refuse, no auto-rewrite of generate path.
 */

export const ENHANCE_SLOTS = Object.freeze([
  'subject',
  'action',
  'environment',
  'light',
  'framing',
  'material',
])

export const BANNED_FILLER = Object.freeze([
  '8K',
  '4K',
  'masterpiece',
  'best quality',
  'ultra detailed',
  'hyper realistic',
  'trending on artstation',
  'octane render',
  'flawless',
  'beautiful lighting',
])

/** @typedef {'flux'|'sd'|'gpt-image'|'grok'|'generic'} ModelDialect */

/**
 * @param {{ prompt: string, modelDialect?: ModelDialect, focusSlot?: number }} req
 * @returns {{ enhanced: string, slots: Record<string, string>, negativeHint?: string, applied: false }}
 */
export function enhancePromptStub(req) {
  const prompt = (req && req.prompt) || ''
  // Stub: echo user text; real slot fill later. Never refuse.
  return {
    enhanced: prompt,
    slots: {},
    applied: false,
    ...(req && req.modelDialect === 'sd' ? { negativeHint: '' } : {}),
  }
}
