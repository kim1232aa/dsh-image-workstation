# Skill UI entries

Authority: docs 00–01; labels align with `src/ui/labels.js` `SKILL_ENTRIES`.

| UI 入口 | Source folder (typical clone name) | Default aspect | Notes |
|---|---|---|---|
| 电影三联 | `cinema-dna-21x9x3` | 21:9 ×3, local vertical stitch | optional 三联封面 after |
| 三联封面 | same folder as 电影三联 | 3:4 | **not** 电影海报; only if cinema-dna present |
| 电影海报 | `fantasy-movie-poster-skill` | 9:16 | call `scripts/validate_*.py` + `build_prompt.py`; layers: 底图+字体+合成 |
| 人像 | `fantasy-life-force-portrait-photography` | skill-driven, user-overridable | sub: `升级已有照片` \| `原创人像` |
| 摄影 | `fantasy-photography-simulation-github` | skill-driven, user-overridable | |
| 角色 | `character-casting-studio-skill` | skill-driven, user-overridable | `三视图` only when user explicit |

## Runtime surface (interface sketch)

```ts
type SkillId =
  | 'cinema-triptych'
  | 'triptych-cover'
  | 'movie-poster'
  | 'portrait'
  | 'photography'
  | 'casting'

type DiscoveredSkill = {
  id: SkillId | string
  label: string           // Chinese UI name
  folder: string          // absolute path
  skillMdPath: string
  scriptsDir?: string     // poster only when present
  defaultAspect?: string  // shown; user-overridable
  sourceRepo?: string
}

type PlanRequest = {
  skillId: SkillId | string
  brief: string
  refs?: string[]         // attachment ids; default = analyze only, not i2i
  overrideAspect?: string
  wantTriViews?: boolean  // casting only
}

type CreationPlan = {
  skillId: string
  rationale: string       // human-readable judgment, not jargon dump
  prompts: { label: string; prompt: string; aspect: string }[]
  negativePrompt: string  // auto-filled from skill; visible + deletable
  score?: { total: number; notes: string[] }  // display only — never gate 出图
}

// discover(skillDir) → DiscoveredSkill[]
// loadSkillMd(folder) → string  (raw; do not rewrite)
// plan(req) → CreationPlan     (reads SKILL.md; poster may shell validate_/build_prompt)
// 【必须】generate path always callable without picking a skill
```

## Install hint (UI copy)

> 把 FANTASY skill 仓库 clone 到 `{skillDir}`。有 `SKILL.md` 的文件夹会自动出现在「创作 Skill」。作者：dacnay816y62-hub / FANTASY 梵想美学。
