# dsh-image-workstation

DeepSeek Harness **生图工作台**插件骨架。按项目 brief 00–03 **重做**，不是 fork VisioWork / Nova。

## Pins

见 `VERSIONS.txt`（当前宿主 `@deepseek-ai/dsh@0.1.5-rc.1` + `@deepseek-ai/cordis@4.0.2`）。

## Install into local dsh

```bash
fnm use 22   # or any Node ^22.19
export DSH_HOME=/workspace/dsh/home
dsh plugin --profile web add /workspace/dsh-image-workstation
dsh --profile web --dump-config   # should show dsh-image-workstation layer
```

Browser half declared via `dsh.client` in package.json (same split as VisioWork). Sidebar/studio surface hooks TBD — see TODOs in src/client.js. Without it, host half still loads; client logs a warning.

## Layout

| path | role |
|---|---|
| `src/index.js` | host `apply` |
| `src/client.js` | client tab stub |
| `src/config.js` | Config schema |
| `cordis.patch.yml` | bundle insert |
| `docs/00–03` | project briefs |

## Red lines (03)

No content review; skill scores never disable 出图; secrets never in logs.

## Next

UI IA · media protocols · FANTASY skill bridge — see channel 生图工作台.
