/**
 * Theme → skill entry suggestions. Never gates CTA / generate.
 * Agent or UI may offer these; user may ignore and generate without a skill.
 */
import { LABEL_TO_SKILL_ID, SKILL_ENTRY_LABELS } from './discover.js'

/** @type {{ label: string, keywords: string[], boost?: number }[]} */
const RULES = [
  // 三联封面 before 电影三联 so「封面」wins over bare「三联」
  { label: '三联封面', keywords: ['三联封面', '项目封面', '3:4封面', '封面'], boost: 2 },
  { label: '电影三联', keywords: ['电影三联', '三联', '21:9', '三镜', '宽银幕', 'triptych'] },
  { label: '电影海报', keywords: ['电影海报', '海报', 'poster', '片名', '9:16'] },
  {
    label: '人像',
    keywords: ['生命感人像', '生命感', '人像', '肖像', 'portrait', '写真', '面部', '脸庞'],
  },
  { label: '摄影', keywords: ['摄影模拟', '摄影', '焦段', '胶片', '光比', 'photography'] },
  { label: '角色', keywords: ['角色', 'casting', '三视图', '人物设定', '角色形象'] },
]

/**
 * @param {string} theme
 * @returns {{
 *   suggestions: Array<{ label: string, skillId: string, score: number, matched: string[] }>,
 *   top: { label: string, skillId: string, score: number, matched: string[] } | null,
 *   disabledByScore: false,
 *   requiredForGenerate: false,
 * }}
 */
export function suggestSkills(theme) {
  const raw = String(theme || '').trim()
  const lower = raw.toLowerCase()
  /** @type {Map<string, { label: string, skillId: string, score: number, matched: string[] }>} */
  const hits = new Map()

  for (const rule of RULES) {
    if (!SKILL_ENTRY_LABELS.includes(rule.label)) continue
    const matched = []
    let score = 0
    for (const kw of rule.keywords) {
      const k = kw.toLowerCase()
      if (raw.includes(kw) || lower.includes(k)) {
        matched.push(kw)
        score += kw.length >= 4 ? 3 : 2
      }
    }
    if (!matched.length) continue
    score += rule.boost || 0
    const skillId = LABEL_TO_SKILL_ID[rule.label] || rule.label
    const prev = hits.get(rule.label)
    if (!prev || score > prev.score) {
      hits.set(rule.label, { label: rule.label, skillId, score, matched })
    }
  }

  const suggestions = [...hits.values()].sort((a, b) => b.score - a.score || a.label.localeCompare(b.label, 'zh'))
  return {
    suggestions,
    top: suggestions[0] || null,
    disabledByScore: false,
    requiredForGenerate: false,
    note: '建议仅供参考；不选 skill 也可出图',
  }
}
