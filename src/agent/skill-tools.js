/**
 * Agent-facing skill discovery — suggest by theme; never gates generate_image / CTA.
 * Chat = dsh native; these tools surface on the same agent tool surface.
 */
import { suggestSkills } from '../skills/suggest.js'
import { discoverSkills, SKILL_ENTRY_LABELS } from '../skills/index.js'
import { scrubAgentError } from './model-policy.js'

/**
 * @param {any} ctx
 * @param {() => { skillDir?: string }} resolveSkill
 */
export async function registerAgentSkillTools(ctx, resolveSkill) {
  if (!ctx?.tools?.register) {
    throw new Error('[dsh-image-workstation] ctx.tools.register unavailable (skill tools)')
  }
  let defineTool
  try {
    ;({ defineTool } = await import('@deepseek-ai/dsh-tools'))
  } catch (e) {
    throw new Error(`[dsh-image-workstation] @deepseek-ai/dsh-tools unavailable: ${e?.message || e}`)
  }

  const disposers = []

  disposers.push(
    ctx.tools.register(
      defineTool({
        name: 'suggest_skill',
        description:
          'Suggest a FANTASY 创作 Skill entry from the user theme/prompt (e.g. 生命感人像 → 人像). ' +
          'Optional only — never required to generate. Do not block or refuse generation based on the suggestion or any score. ' +
          'If the user did not pick a skill, you may mention the top suggestion; they can ignore it.',
        parameters: {
          theme: {
            type: 'string',
            required: true,
            description: 'User theme or prompt to match against skill entries.',
          },
        },
        output: {
          schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              top_label: { type: 'string' },
              top_skill_id: { type: 'string' },
              suggestions: { type: 'array' },
              required_for_generate: { type: 'boolean', required: true },
              disabled_by_score: { type: 'boolean', required: true },
              note: { type: 'string', required: true },
            },
          },
          render: (_args, value) => {
            const top = value?.top_label
              ? `建议：${value.top_label}${value.top_skill_id ? ` (${value.top_skill_id})` : ''}`
              : '无强匹配；可不选 skill 直接出图'
            return [{ type: 'text', text: `${top}\n${value?.note || ''}` }]
          },
        },
        async execute(args) {
          const theme = String(args?.theme || '').trim()
          const value = suggestSkills(theme)
          return {
            top_label: value.top?.label || '',
            top_skill_id: value.top?.skillId || '',
            suggestions: value.suggestions,
            required_for_generate: false,
            disabled_by_score: false,
            note: value.note,
          }
        },
      }),
    ),
  )

  disposers.push(
    ctx.tools.register(
      defineTool({
        name: 'list_skills',
        description:
          'List available 创作 Skill UI entries (电影三联 / 三联封面 / 电影海报 / 人像 / 摄影 / 角色). ' +
          'Informational only — picking a skill is never required to generate_image.',
        parameters: {},
        output: {
          schema: {
            type: 'object',
            additionalProperties: false,
            properties: {
              labels: { type: 'array', required: true },
              skills: { type: 'array' },
              required_for_generate: { type: 'boolean', required: true },
            },
          },
          render: (_a, v) => [
            {
              type: 'text',
              text: `创作 Skill：${(v?.labels || []).join(' · ')}\n不选也可出图。`,
            },
          ],
        },
        async execute() {
          const bag = typeof resolveSkill === 'function' ? resolveSkill() : {}
          const list = bag?.skillDir ? discoverSkills(bag.skillDir) : []
          return {
            labels: SKILL_ENTRY_LABELS.slice(),
            skills: list.map((s) => ({
              id: s.id,
              label: s.label,
              defaultAspect: s.defaultAspect || null,
            })),
            required_for_generate: false,
          }
        },
      }),
    ),
  )

  return () => {
    for (const d of disposers) {
      try {
        if (typeof d === 'function') d()
      } catch {
        /* ignore */
      }
    }
  }
}

/**
 * Soft-attach skill tools on tools fiber.
 * @param {any} ctx
 * @param {() => { skillDir?: string }} resolveSkill
 */
export function attachAgentSkillTools(ctx, resolveSkill) {
  if (!ctx?.inject) {
    ctx?.logger?.warn?.('[dsh-image-workstation] ctx.inject unavailable — suggest_skill not registered')
    return
  }
  ctx.inject(['tools'], (tctx) => {
    Promise.resolve()
      .then(() => registerAgentSkillTools(tctx, resolveSkill))
      .then((dispose) => {
        tctx.effect?.(() => dispose, 'dsh-image-workstation: agent skill tools')
        const msg = '[dsh-image-workstation] Agent tools registered: suggest_skill|list_skills (never gate generate)'
        tctx.logger?.info?.(msg)
        console.info(msg)
      })
      .catch((e) => {
        tctx.logger?.error?.(
          `[dsh-image-workstation] Agent skill tools register failed: ${scrubAgentError(e?.message || e)}`,
        )
      })
  })
}
