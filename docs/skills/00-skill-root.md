# Skill root convention

**Product gates / UI / 红线: docs 00–03 only** (no score lock, no 审查).  
**Creative body:** GitHub FANTASY `SKILL.md` + poster `scripts/` are the runnable authority when a skill is selected — read/call them in place; do **not** dilute, paraphrase into app code, or dump a dead copy that cannot run. Path must be configurable (`skillDir`); discovery = folders with `SKILL.md`; `三联封面` ≠ `电影海报`.

## Path

| Key | Meaning |
|---|---|
| `config.skillDir` | Absolute path to local skill root (Settings 可改) |
| default | `${dataDir}/skills` → usually `~/.dsh/dsh-image-workstation/skills` |
| unset / empty after resolve | treat as default above; UI shows install hint if root missing or empty |

Clone each FANTASY repo **as a direct child** of that root:

```
${skillDir}/
├─ cinema-dna-21x9x3/                         # 电影三联 (+ 三联封面)
├─ fantasy-life-force-portrait-photography/   # 人像
├─ fantasy-photography-simulation-github/     # 摄影
├─ fantasy-movie-poster-skill/                # 电影海报
└─ character-casting-studio-skill/            # 角色
```

Folder name may be a clone of the GitHub repo name (above) or any name; **discovery key is presence of `SKILL.md`**, not the folder name alone. Known repo folder names map to Chinese UI entries (see `01-entries.md`). Unknown folders with `SKILL.md` still surface (label = folder name) — no hardcode-only whitelist that hides extras.

## Per-skill layout (read-only)

```
<skill-folder>/
├─ SKILL.md          必有 — 创作识货原文（产品门禁仍以 00–03 为准）
├─ references/       可选
├─ templates/        可选（海报: project-brief.json）
├─ scripts/          可选（海报: validate_*.py, build_prompt.py — call, don't reimplement）
└─ agents/           可选
```

## Discovery rules

1. List direct children of `skillDir` (no deep recurse).
2. Keep only directories that contain `SKILL.md` (case-sensitive).
3. Map known folder → UI entry; emit separate **三联封面** when cinema-dna is present (same folder, second entry — not a sixth clone).
4. Missing folder → that entry hidden. Never ship SKILL prose inside the plugin package.
5. Attribution string always available: `GitHub: dacnay816y62-hub · FANTASY 梵想美学`.

## Red lines (score)

- Scores may display.
- 【必须】low score never disables `出图` / no modal / no auto-retry / no content refusal from skill scores.
