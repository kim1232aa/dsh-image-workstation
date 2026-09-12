# dsh-生图工作台

> npm / cordis package name for 插件列表 shortName + 「生图」 search. Repo folder remains `dsh-image-workstation`. Settings ns stays `dsh-image-workstation`.

DeepSeek Harness **生图工作台**插件。按项目 brief 00–03 **重做**，不是 fork VisioWork / Nova。

`docs/00–03` stay **requirements sources**. Do not rewrite them as 「已完成」.

## Pins

见 `VERSIONS.txt`（当前宿主 `@deepseek-ai/dsh@0.1.5-rc.1` + `@deepseek-ai/cordis@4.0.2`）。

## Honest status (2026-09-12)

- Live path: studio CTA 「开始生成」→ `dsh-ws-generate` → host RPC `/dsh-ws` → `mediaProxy.generate` / `edit` → paint in studio. Host-proxy generate/edit is **wired**, not a stub.
- Media: Settings Config (`mediaBaseUrl` / `mediaApiKey` / `mediaProvider`) when set, else `$DSH_HOME/media.env` (`MEDIA_ENV_PATH`). Resolve via `resolveMediaBag` / `loadMediaEnv`. Provide bag is summary only — never tokens.
- Ten docs/03 零、红线 passed at `be91e70`. That is **not** full docs/03.
- 图生图 / video / 无限画布 are **not** full 03. Protocol matrix is **not** Pass. See `docs/protocol/STATUS.md`.

## Install into local dsh

```bash
fnm use 22   # or any Node ^22.19
export PATH="$HOME/.local/bin:$PATH"
export DSH_HOME=/workspace/dsh/home
# npm/pnpm reject non-URL-safe package names — `dsh plugin add` may fail with
# ERR_PNPM_INVALID_PACKAGE_NAME. Wire the profile by hand instead:
#   dependencies["dsh-生图工作台"] = "link:/workspace/dsh-image-workstation"
#   dsh.profile.bundles includes "dsh-生图工作台"
#   ln -sfn /workspace/dsh-image-workstation "$DSH_HOME/profiles/web/node_modules/dsh-生图工作台"
dsh --profile web --dump-config   # should show id: imagegen, name: dsh-生图工作台
dsh --profile web --no-open --port 3080
# open the printed http://127.0.0.1:3080/?token=… URL (auth cookie)
```

Settings → 插件 → 插件列表: title = `moduleShortName(package)` (strips `dsh-` → **生图工作台**). Search matches **moduleName + entryId** only — 「生图」hits package `dsh-生图工作台`; `imagegen` hits insert id. Host shortName is not a separate product-name field.

Browser half via `dsh.client` + `exports["./client"]` ModuleLoader bundle. Sidebar mounts 「新会话 | 生图」; 「生图」opens the 三栏 studio. Generate/edit go through the CTA→`/dsh-ws`→mediaProxy path above.

## Layout

| path | role |
|---|---|
| `src/index.js` | host `apply` (provide bag + CTA RPC + media resolve) |
| `src/client.js` | client tab / studio |
| `src/config.js` | Config schema |
| `src/protocol/` | host-proxy, CTA RPC, openai.images, media.env |
| `cordis.patch.yml` | bundle insert (`id: imagegen`, `name: dsh-生图工作台`) |
| `docs/00–03` | project briefs (requirements; not a completion log) |
| `docs/protocol/STATUS.md` | honest live/stub matrix |

## Red lines (03)

Ten 零、红线 at `be91e70`: no content review; skill scores never disable 出图; secrets never in logs / DevTools / errors. Remaining 03 chapters still open.

## Next

img2img / video / canvas toward 03; remaining adapters still stub — see `docs/protocol/STATUS.md`.
