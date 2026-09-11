# Host proxy seats

Authority: 00–01 + drift #8 (secrets stay on host).

## Rule
Browser/client **never** holds Images/Video/Vision keys and **never** calls upstream.
Client emits intent (`dsh-ws-generate` / future RPC); **host** runs adapters.

## Seats (phase stub)

| Seat | Purpose | Live? |
|---|---|---|
| `media.generate` | t2i via `openai.images` (+ Grok Imagine fields) | **live** when media.env set |
| `media.edit` | `/images/edits` (+ mask) | stub |
| `media.job.status` | poll / progress for async handles | stub |
| `media.job.cancel` | cancel in-flight | stub |
| `media.detectModels` | filter `/models` to image/video | stub |

Video uses the same seats with `kind: 'video'` — built-in, not a plugin pack.

## Credential lanes on host config (later)
`channels[].lane`: `vision` | `images` | `video` — separate keys. Client only gets `configured: boolean`.

## URL
Whatever upstream returns is passed through verbatim (no rewrite).

## Paid test
Real HTTP only after explicit user approval.

## media.env
See `04-media-env-wiring.md`. `generate` is live when media.env has baseUrl+token.
