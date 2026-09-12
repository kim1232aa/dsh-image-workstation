# Vision lane — reversePrompt / enhancePrompt

Separate credential lane from images. Keys: `VISION_BASE_URL`, `VISION_API_KEY`, `VISION_MODEL` in `$DSH_HOME/media.env` (or `MEDIA_ENV_PATH`).

**Never** fall back to Images / ANTHROPIC / GPTIMG / OPENAI keys.

## Module

`src/protocol/vision-read.js`

- `loadVisionEnv()` → `{ baseUrl, apiKey, model, configured, source }`
- `reversePrompt({ imageUrl|dataUrl, signal, instruction? })` → `{ prompt }`
- Not configured → throw `VISION_NOT_CONFIGURED`
- Configured → `POST` OpenAI-compatible `/v1/chat/completions` with `image_url`
- Errors scrubbed (no token)

`src/protocol/prompt-enhance.js`

- `enhancePrompt({ prompt, modelId?, aspect_ratio?, resolution?, size?, signal })` → `{ prompt }`
- Same VISION_* lane; not configured → `ENHANCE_NOT_CONFIGURED` (details may include `visionCode: VISION_NOT_CONFIGURED`)
- Ratio/size context **must** come from CTA `mapGenerateRequest` (same aspect_ratio / resolution / size table as generate). Do not invent a second size table.

## Host proxy

`mediaProxy.reversePrompt` / `mediaProxy.visionReversePrompt` / `mediaProxy.enhancePrompt`

## CTA RPC (`/dsh-ws`)

| method | payload | ok value | error codes |
|---|---|---|---|
| `reversePrompt` | `{ imageUrl \| dataUrl \| refImages[0] }` | `{ prompt }` | `VISION_NOT_CONFIGURED`, `IMAGE_REQUIRED`, … |
| `enhancePrompt` | `{ prompt, ratio?, clarity?, modelId? }` (mapped via `mapGenerateRequest`) | `{ prompt }` | `ENHANCE_NOT_CONFIGURED`, `PROMPT_REQUIRED`, … |

Studio 「提示词增强」calls `enhancePrompt` and fills the prompt textarea on ok. Behavior only — no layout/CSS/label change.

## Status

live when `VISION_*` configured; otherwise honest fail (not fake success).
