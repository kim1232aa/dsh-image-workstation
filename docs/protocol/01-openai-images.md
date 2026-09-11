# Adapter: `openai.images`

## Endpoints
- `POST {baseUrl}/images/generations`
- `POST {baseUrl}/images/edits`

## Mapping

| UI | Body field |
|---|---|
| prompt | `prompt` |
| n (1–4) | `n` |
| size (比例×清晰度 → WxH) | `size` e.g. `1024x1024` |
| quality tier | `quality` when gateway supports; else drop |
| refs[0] | edits: `image` (file/blob); multi-ref if gateway allows |
| mask | edits: `mask` |
| model | `model` |

Auth: `Authorization: Bearer <images lane key>`.

## Sync shape
Typical response: `{ data: [{ url | b64_json }] }` → normalize to `MediaResult[]`.
Prefer `url` as returned; if only `b64_json`, write local file and set `localPath` (no fake remote URL).

## JobHandle
Even when HTTP is sync, wrap as one-shot job:
- `phase`: submitted → downloading → done
- `cancel`: abort via `AbortSignal` on the in-flight fetch
- failures: surface status + body snippet (no secrets)

## Modalities
- `t2i` → generations
- `i2i` / `edit-mask` → edits
- Models without edits support: do not advertise `edit-mask`

## Out of scope here
Grok/Gemini/Seedream/Qwen/智谱/MiniMax native shapes — separate adapters.
