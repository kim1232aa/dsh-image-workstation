/**
 * Local skill discovery — stub. Authority: docs/skills/00-skill-root.md
 * No SKILL.md content hard-coded here.
 */

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

export const ATTRIBUTION = 'GitHub: dacnay816y62-hub · FANTASY 梵想美学'

/**
 * @param {string} skillDir
 * @param {{ existsSync?: (p: string) => boolean, readdirSync?: (p: string) => string[], join?: (...p: string[]) => string }} [fs]
 * @returns {import('./types.js').DiscoveredSkill[]}
 */
export function discoverSkills(skillDir, fs = {}) {
  // Stub: real fs wiring next pass. Returns [] when root unset/missing.
  if (!skillDir) return []
  void fs
  return []
}
