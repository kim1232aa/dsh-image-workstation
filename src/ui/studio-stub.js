/**
 * 普通生图三栏 stub — structure + labels only.
 * Mount via dsh.client slots owned by 插件工; no Cordis chrome here.
 */
import {
  COLUMNS,
  MODE_TABS,
  RATIOS,
  CLARITY,
  COUNTS,
  PARAM_LABELS,
  PROMPT_FIELDS,
  PROMPT_ACTIONS,
  CTA,
  SKILL_ENTRIES,
  RESULT_ACTIONS,
  EMPTY,
  TOP_TABS,
} from './labels.js'

/** Default UI state (display-only contract for stub) */
export const defaultStudioState = () => ({
  topTab: TOP_TABS[0],
  chatCollapsed: true,
  paneWidths: { history: 240, studio: null, chat: 320 },
  mode: MODE_TABS[0],
  prompt: '',
  negativePrompt: '', // skill 预填可见可删；空也可出图
  ratio: RATIOS[0],
  clarity: CLARITY[0],
  count: COUNTS[0],
  detail: '自动',
  modelId: 'grok-imagine-image',
  refImages: [], // 图生图参考
  skillId: null, // null = 普通生图，不挡 CTA
  skillPlan: null,
  selfCheck: null, // scores display-only — never disable CTA
  task: null,
})

/**
 * Tree for implementers. Keys are structural; `label` is user-visible Chinese.
 * 【必须】提示词可空 skill 仍可点 CTA；负面词字段常显、可清。
 */
export const studioTree = Object.freeze({
  page: '普通生图',
  columns: [
    {
      id: 'history',
      label: COLUMNS.history,
      children: ['FilterBar', 'HistoryList', 'HistoryActions'],
    },
    {
      id: 'studio',
      label: COLUMNS.studio,
      children: [
        { id: 'modeTabs', labels: MODE_TABS },
        {
          id: 'promptBlock',
          fields: [
            { key: 'prompt', label: PROMPT_FIELDS.prompt, required: false },
            {
              key: 'negativePrompt',
              label: PROMPT_FIELDS.negative,
              clearLabel: PROMPT_FIELDS.clearNegative,
              visible: true,
              deletable: true,
            },
          ],
          actions: [
            PROMPT_ACTIONS.enhance,
            PROMPT_ACTIONS.templates,
            PROMPT_ACTIONS.skill,
          ],
        },
        { id: 'skillEntries', labels: SKILL_ENTRIES, optional: true },
        {
          id: 'paramRow',
          fields: [
            { key: 'ratio', label: PARAM_LABELS.ratio, options: RATIOS, userOverridable: true },
            { key: 'clarity', label: PARAM_LABELS.clarity, options: CLARITY },
            { key: 'count', label: PARAM_LABELS.count, options: COUNTS },
            { key: 'detail', label: PARAM_LABELS.detail },
            { key: 'model', label: PARAM_LABELS.model },
          ],
        },
        {
          id: 'cta',
          label: CTA,
          requiresSkill: false,
          disabledByScore: false,
        },
        { id: 'resultActions', labels: RESULT_ACTIONS },
        {
          id: 'empty',
          labels: [EMPTY.inspiration, EMPTY.shuffle],
        },
      ],
    },
    {
      id: 'chat',
      label: COLUMNS.chat,
      defaultCollapsed: true,
    },
  ],
})
