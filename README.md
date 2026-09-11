# dsh-image-workstation

DeepSeek Harness **生图工作台**插件骨架。按项目 brief 00–03 **重做**，不是 fork VisioWork / Nova。

## Pins

见 `VERSIONS.txt`（当前宿主 `@deepseek-ai/dsh@0.1.5-rc.1` + `@deepseek-ai/cordis@4.0.2`）。

## Install into local dsh

```bash
fnm use 22   # or any Node ^22.19
export PATH="$HOME/.local/bin:$PATH"
export DSH_HOME=/workspace/dsh/home
dsh plugin --profile web add /workspace/dsh-image-workstation
dsh --profile web --dump-config   # should show dsh-image-workstation layer
dsh --profile web --no-open --port 3080
# open the printed http://127.0.0.1:3080/?token=… URL (auth cookie)
```

Browser half via `dsh.client` + `exports["./client"]` ModuleLoader bundle. Sidebar mounts 「新会话 | 生图」; 「生图」opens the 三栏 studio stub (host-proxy generate stays unwired — no paid upstream).

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
