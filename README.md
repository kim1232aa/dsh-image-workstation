# dsh-image-workstation

> npm / cordis package name **must be ASCII** `dsh-image-workstation` so `/plugins/??…/client.js` loads (non-ASCII → Node ERR_UNESCAPED_CHARACTERS / 404). Keywords/description keep 「生图」 for search. Settings ns stays `dsh-image-workstation`.

DeepSeek Harness **生图工作台**插件。按项目 brief 00–03 **重做**，不是 fork VisioWork / Nova。

`docs/00–03` stay **requirements sources**. Do not rewrite them as 「已完成」.

## Runtime policy note (2026-09-12)

docs/00 still says Nova is **feature-scope** reference and 「别把那套后端整服搬过来」. Current project policy (user via dr eggbot): **Nova is the primary reference**; **backend logic may be ported as needed** (helpers/routes/adapters), but **not** the whole Nova Next.js/SQLite/WebSocket server as a drop-in. VisioWork remains shape/UI reference. This note does **not** rewrite docs/00–03 — those stay requirements sources.

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
dsh plugin --profile web add /workspace/dsh-image-workstation
dsh --profile web --dump-config   # should show id: imagegen, name: dsh-image-workstation
dsh --profile web --no-open --port 3080
# open the printed http://127.0.0.1:3080/?token=… URL (auth cookie)
```

Settings → 插件 → 插件列表: title = `moduleShortName(package)` (strips `dsh-` → **image-workstation**). Search matches **moduleName + entryId** — `imagegen` hits insert id; 「生图」via package keywords/description. Host shortName is not a separate product-name field.

Browser half via `dsh.client` + `exports["./client"]` ModuleLoader bundle. Sidebar mounts 「新会话 | 生图」; 「生图」opens the 三栏 studio. Generate/edit go through the CTA→`/dsh-ws`→mediaProxy path above.

## Layout

| path | role |
|---|---|
| `src/index.js` | host `apply` (provide bag + CTA RPC + media resolve) |
| `src/client.js` | client tab / studio |
| `src/config.js` | Config schema |
| `src/protocol/` | host-proxy, CTA RPC, openai.images, media.env |
| `cordis.patch.yml` | bundle insert (`id: imagegen`, `name: dsh-image-workstation`) |
| `docs/00–03` | project briefs (requirements; not a completion log) |
| `docs/protocol/STATUS.md` | honest live/stub matrix |

## Red lines (03)

Ten 零、红线 at `be91e70`: no content review; skill scores never disable 出图; secrets never in logs / DevTools / errors. Remaining 03 chapters still open.

## Next

img2img / video / canvas toward 03; remaining adapters still stub — see `docs/protocol/STATUS.md`.
