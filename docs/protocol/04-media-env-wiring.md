# media.env → host-proxy wiring

## Source
- File: `$DSH_HOME/media.env` (override `MEDIA_ENV_PATH`)
- chmod 600; never git
- Loader: `src/protocol/load-media-env.js` → `{ baseUrl, token, source }`
- Logs: only `mediaEnvSummary` → `{ baseUrlSet, tokenSet, source }` — **never token**

## Cordis bag
`ctx.provide('dshImageWorkstation', { dataDir, skillDir, mediaEnv, mediaProxy })`
- `mediaEnv` on the bag is **summary only** (`baseUrlSet` / `tokenSet` / `source`) — never raw token/baseUrl.
- Token is closed over inside `mediaProxy` / `openaiImagesGenerate` only.
- Cordis Config schema stays `skillDir`/`dataDir` only (no secret fields).

## Live generate
1. `mediaProxy.generate` reads closed-over `baseUrl` + `token` on host
2. Calls `openai.images` → `POST {base}/v1/images/generations`
3. Default cheap model on this gateway: `grok-imagine-image` + `aspect_ratio=1:1` + `resolution=1k`
4. Returns `MediaResult[]` with **verbatim** URLs; also writes local copy under `{dataDir}/media/generated/`
5. Client may only see job progress + URLs / local paths — never Authorization / token

## Seats still stubbed
`edit` / `detectModels` still throw `HOST_PROXY_NOT_WIRED`.
