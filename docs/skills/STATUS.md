# Skill bridge status

| Item | State |
|---|---|
| skillDir | `$DSH_HOME/dsh-image-workstation/skills` |
| six UI entries | 电影三联\|三联封面\|电影海报\|人像\|摄影\|角色 |
| `/dsh-ws-skill` plan | Nova-shaped `proposal` (action/prompt/reason/aspect/refs) |
| pending proposal | localStorage restore on open; clear on 就这样出图 |
| 海报脚本路径 | validate_* / build_prompt / composite_layers 写入方案卡 |
| 三联 | plan 三镜 21:9 + host `stitchTriptych`；ps1 路径如有则列出 |
| 确认→出图 | 就这样出图：填 prompt/负面/比例后可直接 CTA |
| score → CTA | **never** (`disabledByScore: false`) |
| mediaProxy | **untouched** |
| suggest | `/dsh-ws-skill` suggest + Agent `suggest_skill`/`list_skills`；永不锁出图 |
| auto-match | 不自动强绑；主题仅建议（如「生命感人像」→人像） |
