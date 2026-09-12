/**
 * Local skill discovery — runnable. Authority: docs/skills/00-skill-root.md
 * Reads folders with SKILL.md; does not hard-code creative rules into the plugin.
 */
import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/** @type {Record<string, { id: string, label: string, sourceRepo: string, defaultAspect?: string }>} */
export const KNOWN_FOLDERS = Object.freeze({
  'cinema-dna-21x9x3': {
    id: 'cinema-triptych',
    label: '电影三联',
    sourceRepo: 'https://github.com/dacnay816y62-hub/cinema-dna-21x9x3',
    defaultAspect: '21:9',
  },
  'fantasy-life-force-portrait-photography': {
    id: 'portrait',
    label: '人像',
    sourceRepo: 'https://github.com/dacnay816y62-hub/fantasy-life-force-portrait-photography',
  },
  'fantasy-photography-simulation-github': {
    id: 'photography',
    label: '摄影',
    sourceRepo: 'https://github.com/dacnay816y62-hub/fantasy-photography-simulation-github',
  },
  'fantasy-movie-poster-skill': {
    id: 'movie-poster',
    label: '电影海报',
    sourceRepo: 'https://github.com/dacnay816y62-hub/fantasy-movie-poster-skill',
    defaultAspect: '9:16',
  },
  'character-casting-studio-skill': {
    id: 'casting',
    label: '角色',
    sourceRepo: 'https://github.com/dacnay816y62-hub/character-casting-studio-skill',
  },
})

/** UI six entries — same order/text as `src/ui/labels.js` SKILL_ENTRIES. 三联封面 ≠ 电影海报. */
export const SKILL_ENTRY_LABELS = Object.freeze([
  '电影三联',
  '三联封面',
  '电影海报',
  '人像',
  '摄影',
  '角色',
])

/** Derived UI entry when cinema-dna folder is present (not a sixth clone). */
export const TRIPTYCH_COVER = Object.freeze({
  id: 'triptych-cover',
  label: '三联封面',
  fromFolder: 'cinema-dna-21x9x3',
  defaultAspect: '3:4',
})


export const LABEL_TO_SKILL_ID = Object.freeze({
  '电影三联': 'cinema-triptych',
  '三联封面': 'triptych-cover',
  '电影海报': 'movie-poster',
  '人像': 'portrait',
  '摄影': 'photography',
  '角色': 'casting',
})

export const ATTRIBUTION = 'GitHub: dacnay816y62-hub · FANTASY 梵想美学'

/**
 * @param {string} skillDir
 * @param {{ existsSync?: typeof existsSync, readdirSync?: typeof readdirSync, join?: typeof join, statSync?: typeof statSync }} [fsApi]
 * @returns {import('./types.js').DiscoveredSkill[]}
 */
export function discoverSkills(skillDir, fsApi = {}) {
  const ex = fsApi.existsSync || existsSync
  const rd = fsApi.readdirSync || readdirSync
  const jn = fsApi.join || join
  const st = fsApi.statSync || statSync

  if (!skillDir || !ex(skillDir)) return []

  let names = []
  try {
    names = rd(skillDir)
  } catch {
    return []
  }

  /** @type {import('./types.js').DiscoveredSkill[]} */
  const out = []

  for (const name of names) {
    const folder = jn(skillDir, name)
    let isDir = false
    try {
      isDir = st(folder).isDirectory()
    } catch {
      continue
    }
    if (!isDir) continue

    const known = KNOWN_FOLDERS[name]
    let skillRoot = folder
    let skillMdPath = jn(folder, 'SKILL.md')
    if (!ex(skillMdPath)) {
      // Some clones nest SKILL.md one level down (e.g. photography zip layout)
      let nested = null
      try {
        for (const child of rd(folder)) {
          const childDir = jn(folder, child)
          try {
            if (!st(childDir).isDirectory()) continue
          } catch {
            continue
          }
          const cand = jn(childDir, 'SKILL.md')
          if (ex(cand)) {
            nested = { skillRoot: childDir, skillMdPath: cand }
            break
          }
        }
      } catch {
        nested = null
      }
      if (!nested) continue
      skillRoot = nested.skillRoot
      skillMdPath = nested.skillMdPath
    }

    const scriptsDir = jn(skillRoot, 'scripts')
    const hasScripts = ex(scriptsDir)

    /** @type {import('./types.js').DiscoveredSkill} */
    const entry = {
      id: known?.id || name,
      label: known?.label || name,
      folder: skillRoot,
      skillMdPath,
      sourceRepo: known?.sourceRepo,
      defaultAspect: known?.defaultAspect,
      ...(hasScripts ? { scriptsDir } : {}),
    }
    out.push(entry)

    // 三联封面: same folder as 电影三联 — separate UI entry, not a sixth clone
    if (name === TRIPTYCH_COVER.fromFolder || known?.id === 'cinema-triptych') {
      out.push({
        id: TRIPTYCH_COVER.id,
        label: TRIPTYCH_COVER.label,
        folder: skillRoot,
        skillMdPath,
        sourceRepo: known?.sourceRepo,
        defaultAspect: TRIPTYCH_COVER.defaultAspect,
        ...(hasScripts ? { scriptsDir } : {}),
      })
    }
  }

  // Stable UI order when known
  const order = new Map(SKILL_ENTRY_LABELS.map((l, i) => [l, i]))
  out.sort((a, b) => {
    const ia = order.has(a.label) ? order.get(a.label) : 100
    const ib = order.has(b.label) ? order.get(b.label) : 100
    if (ia !== ib) return ia - ib
    return a.label.localeCompare(b.label)
  })

  return out
}
