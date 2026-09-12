/**
 * Nova-shaped proposal (chat→plan→approve→generate), adapted for FANTASY skills.
 * Ref: ref-nova-image-studio AgentProposal — we do NOT copy Next backend.
 * Scores never lock CTA.
 */

/**
 * @typedef {{
 *   action: 'generate' | 'edit',
 *   prompt: string,
 *   reason: string,
 *   referencedImageIds: string[],
 *   suggestedAspectRatio?: string,
 *   requestedAspectRatio?: string,
 *   negativePrompt?: string,
 *   skillId?: string,
 *   label?: string,
 *   prompts?: Array<{ label: string, prompt: string, aspect: string, layer?: string }>,
 *   score?: { total: number, notes: string[] },
 *   scriptPaths?: Record<string, string> | null,
 *   fillPrompt?: string,
 *   fillAspect?: string | null,
 *   fillNegative?: string,
 *   disabledByScore: false,
 *   phase: 'proposal',
 * }} SkillProposal
 */

/**
 * Map planSkill result → Nova-like proposal card payload.
 * @param {any} plan
 * @param {{ refImageIds?: string[], mode?: string }} [opts]
 * @returns {SkillProposal}
 */
export function toSkillProposal(plan, opts = {}) {
  const fillPrompt =
    plan?.fillPrompt ||
    (Array.isArray(plan?.prompts)
      ? plan.prompts.filter((p) => p.layer !== 'composite').map((p) => p.prompt).filter(Boolean).join('\n\n')
      : '') ||
    ''
  const aspect = plan?.fillAspect || plan?.prompts?.[0]?.aspect || undefined
  const refs = Array.isArray(opts.refImageIds) ? opts.refImageIds.filter(Boolean) : []
  const action = opts.mode === '图生图' || refs.length > 0 ? 'edit' : 'generate'
  return {
    action,
    prompt: fillPrompt,
    reason: String(plan?.rationale || ''),
    referencedImageIds: refs,
    suggestedAspectRatio: aspect && aspect !== '自动' ? String(aspect) : undefined,
    requestedAspectRatio: undefined,
    negativePrompt: plan?.fillNegative != null ? String(plan.fillNegative) : String(plan?.negativePrompt || ''),
    skillId: plan?.skillId,
    label: plan?.label,
    prompts: plan?.prompts,
    score: plan?.score,
    scriptPaths: plan?.scriptPaths || null,
    fillPrompt,
    fillAspect: aspect || null,
    fillNegative: plan?.fillNegative != null ? String(plan.fillNegative) : String(plan?.negativePrompt || ''),
    folder: plan?.folder,
    skillMdPath: plan?.skillMdPath,
    disabledByScore: false,
    phase: 'proposal',
    editable: true,
  }
}

const STORAGE_KEY = 'dsh-ws-skill-pending-proposal'

/** @param {SkillProposal | null} proposal */
export function savePendingProposal(proposal) {
  try {
    if (typeof localStorage === 'undefined') return
    if (!proposal) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ savedAt: Date.now(), proposal: { ...proposal, disabledByScore: false } }),
    )
  } catch {
    /* ignore */
  }
}

/** @returns {SkillProposal | null} */
export function loadPendingProposal() {
  try {
    if (typeof localStorage === 'undefined') return null
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    const p = data?.proposal
    if (!p || typeof p !== 'object') return null
    return { ...p, disabledByScore: false, phase: 'proposal' }
  } catch {
    return null
  }
}

export function clearPendingProposal() {
  savePendingProposal(null)
}
