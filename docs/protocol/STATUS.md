# Protocol matrix status — NOT Pass

Honest snapshot. `docs/00–03` and `docs/protocol/00–05` stay **requirements sources** — do not rewrite them as 「已完成」.

Primary reference for seats: **Nova** (`/workspace/ref-nova-image-studio` backend + plugin-runtime patterns adapted into host-proxy `/dsh-ws`). No Nova nested video plugin-pack; video stays built-in `video.async`.

## CTA path (live)

Studio 「开始生成」→ `dsh-ws-generate` → host `/dsh-ws` RPC → `mediaProxy.generate` / `edit` → `studio.paintGenerateResult`.

- generate + edit seats are **live** when media is resolved
- `refImages` (or `mode=图生图|i2i|edit`) → `mediaProxy.edit` → multipart `POST {base}/v1/images/edits`
- cancel: `AbortController` aborts the in-flight upstream fetch (not UI-only)
- URLs verbatim; errors scrubbed (no token)

## Adapter matrix

| Seat | Status |
|---|---|
| `openai.images` generate | **live** |
| `openai.images` edit (图生图) | **live** (multipart `/v1/images/edits`; needs refImages) |
| `async.task_id` | **skeleton live** (helper `runAsyncTask` / path extract / scrub; no standalone paid seat) |
| Grok/Gemini/Seedream/Qwen/智谱/MiniMax native | stub |
| `video.async` | **live-when-configured** (`VIDEO_*` / settings videoBaseUrl+videoApiKey; else `VIDEO_NOT_CONFIGURED`; `forceStub` → `VIDEO_STUB_NOT_WIRED`) |
| `vision.reversePrompt` | **live-when-configured** (`VISION_*` / settings vision*; else `VISION_NOT_CONFIGURED`) |
| `vision.enhancePrompt` | **live-when-configured** (`VISION_*`; else `ENHANCE_NOT_CONFIGURED`) |
| `gif.generate` (`gifGenerate` RPC) | **host-only partial** — RPC live-when-configured returns grid **image** URL(s) via openai.images / optional `GIF_*` (else `GIF_NOT_CONFIGURED`); UI `paintGifResult` shows those URLs (`c3050c3`); **no GIF encode** / not animated export. Not CTA-Pass |
| `ecommerce.generate` (`ecommerceGenerate` RPC) | **stub** (`ECOM_STUB_NOT_WIRED` — Nova has no dedicated ecom seat) |
| `canvas.generate` (`canvasGenerate` RPC) | **live-when-configured** (thin wrap → generate/edit; no separate vendor) |
| `detectModels` | live filter (drops chat/embedding) |
| `cancel` | AbortController aborts upstream |
| Agent `generate_image` / `edit_image` | **live** (register → mediaProxy.generate / `.edit`; render = job_id + markdown URLs); generate conversation evidenced; edit live-test see Agent section; full Agent UX = **not Pass** |

Do **not** claim matrix Pass. 图生图 / video / 无限画布 are not full docs/03.

## Media resolve (no tokens in this file)

1. Settings Config `mediaBaseUrl` / `mediaApiKey` / `mediaProvider` when set
2. else `$DSH_HOME/media.env` (override `MEDIA_ENV_PATH`) via `loadMediaEnv` / `resolveMediaBag`

Provide bag gets `mediaEnvSummary` only (`baseUrlSet` / `tokenSet` / `source` / channel ids). Never log or document key **values**.

## Env keys (names only)

| Lane | media.env keys | Settings / Config fields |
|---|---|---|
| Images | `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `OPENAI_BASE_URL`, `OPENAI_API_KEY`, `GPTIMG_BASE_URL`, `GPTIMG_API_KEY`, `MEDIA_IMAGE_MODEL`, `MEDIA_ACTIVE_CHANNEL` | `mediaBaseUrl`, `mediaApiKey`, `mediaProvider` |
| Video | `VIDEO_BASE_URL`, `VIDEO_API_KEY`, `VIDEO_DEFAULT_MODEL`, `VIDEO_PROVIDER`, `VIDEO_SUBMIT_PATH`, `VIDEO_POLL_PATH`, `VIDEO_POLL_INTERVAL_MS`, `VIDEO_POLL_TIMEOUT_MS` (+ aliases `GPTIMG_VIDEO_*`) | `videoBaseUrl`, `videoApiKey`, `videoProvider`, `videoDefaultModel`, `videoPollIntervalMs`, `videoPollTimeoutMs` |
| Vision | `VISION_BASE_URL`, `VISION_API_KEY`, `VISION_MODEL` | `visionBaseUrl`, `visionApiKey`, `visionModel` |
| GIF (optional override) | `GIF_BASE_URL` (alias `GIF_API_URL`), `GIF_API_KEY`, `GIF_DEFAULT_MODEL` | — (uses images lane by default) |
| ECOM (documented only) | `ECOM_BASE_URL` (alias `ECOM_API_URL`), `ECOM_API_KEY`, `ECOM_DEFAULT_MODEL` | — (seat stub) |

Do **not** ask for secrets in docs/chat.

## Dual channel (2026-09-12)

| id | provider | default model | notes |
|---|---|---|---|
| `primary` | anthropic-compat / openai-images | `grok-imagine-image` | **working path:** `sub.alibb123` + `grok-imagine-image` |
| `gptimg` | openai-images | `gpt-image-2` | Settings provider GPTIMG (birdsun) |

Default model (`MEDIA_IMAGE_MODEL`): `grok-imagine-image`.
Default Config `mediaProvider`: `anthropic-compat` (Schema also allows `openai-images` | `gptimg`).
**Channel drift fix:** only `settingsProvider === 'gptimg'` selects birdsun; `openai-images` alone falls through to env primary.
**`9.alibb` was a bad host** — do not use. Working gate is `sub.alibb123`.

Summary never includes tokens.

## Acceptance

Ten docs/03 零、红线 passed @ `be91e70`. Not full 03. Only UI CTA generate counts for 红线 1 (no script / direct upstream).

## Video (built-in skeleton)

| Seat | Status |
|---|---|
| `video.async` generate | **live-when-configured**; else `VIDEO_NOT_CONFIGURED`; `forceStub` → `VIDEO_STUB_NOT_WIRED` |
| `video.async` status/cancel | wired job map + AbortController |
| `/dsh-ws` `videoGenerate` | wired; UI CTA → RPC; status exact `VIDEO_NOT_CONFIGURED` when unset |
| Settings card fields | `videoBaseUrl` / `videoApiKey`(host) / `videoProvider` / `videoDefaultModel` on **Video** section; poll interval·timeout config-only |
| `resolveVideoBag` | settings first, else media.env `VIDEO_*` / `GPTIMG_VIDEO_*` → host-proxy `mediaEnv.video` |

Rules: verbatim result URLs; same queue/history concepts as image; **no Nova JSON plugin packs**.

## Vision / 反推 / 提示词增强 (see `07-vision-read.md`)

| Item | Status |
|---|---|
| `VISION_*` lane | separate from images; no Images/ANTHROPIC/GPTIMG fallback |
| `/dsh-ws` `reversePrompt` | wired; live iff vision configured |
| `/dsh-ws` `enhancePrompt` | wired; Studio button fills textarea on ok; ratio via `mapGenerateRequest` |
| Studio enhance UI layout | unchanged (behavior only) |
| UI enhance/reverse | enhance + 反推 → RPC; missing VISION_* → exact `ENHANCE_NOT_CONFIGURED` / `VISION_NOT_CONFIGURED` |

## GIF / 电商 (see `08-gif-ecommerce-draft.md`)

| Item | Status |
|---|---|
| `gifGenerate` | **host-only partial** (grid image URL when media/`GIF_*` set; client paints via `paintGifResult`; unconfigured → `GIF_NOT_CONFIGURED`; forceStub → `GIF_STUB_NOT_WIRED`; **no GIF encode**) |
| `ecommerceGenerate` | **stub** → `ECOM_STUB_NOT_WIRED` (no Nova ecom seat; no fake success) |
| Verbatim URL rule | documented for live seats |

## Canvas (see `09-canvas-host.md`)

| Item | Status |
|---|---|
| `canvasGenerate` | **live-when-configured** — thin wrap → `generate`/`edit` |
| Separate vendor | not required |

## Agent generate_image / edit_image

| Item | Status |
|---|---|
| tool register → `mediaProxy.generate` | **live** (`generate_image`) |
| tool register → `mediaProxy.edit` | **live** (`edit_image` → `/v1/images/edits`; same seat as CTA 图生图 / wantsEdit) |
| tool `output.render` | short text (`job_id`/`status`) + markdown `![…](url)` (verbatim URLs; structured JSON value unchanged) |
| `allowAgentImageGeneration` | default **ON** (`!== false`); both tools refuse when false |
| `IMAGE_API_NOT_CONFIGURED` guidance | points to **Settings → Plugins → dsh-image-workstation** or host `media.env` |
| chat conversation invoke + URL return (generate) | **evidenced once** (session `b8d66d07…`; prompt `城市夜景街道，电影感灯光`; `job_id=05779418-cba0-45d8-ba60-6a0ff9381068`; url `https://imgen.x.ai/xai-imgen/xai-tmp-imgen-8bb5d195-11c9-9f7c-ba12-6ea4a0b98dcb-c0500bfe.jpeg`); UI shot `docs/ui/ref/dsh-agent-generate-image-ok.png` |
| chat-with-image / edit invoke | **host register-path live**; `edit_image` prefers **current user-message attachments** over model-picked workspace paths (no silent swap). Full chat-attachment e2e = **not Pass** |
| full Agent UX (inline chat, slash edit, vision, web search) | **not Pass** |
| verify | `node scripts/verify-agent-generate-image.mjs` (no paid APIs) |
