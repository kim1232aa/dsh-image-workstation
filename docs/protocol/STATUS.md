# Protocol matrix status — NOT Pass

| Seat | Status |
|---|---|
| `openai.images` generate | **live** |
| `openai.images` edit (图生图) | **live** (multipart `/v1/images/edits`; needs refImages) |
| `async.task_id` | stub |
| Grok/Gemini/Seedream/Qwen/智谱/MiniMax native | stub |
| `video.async` | stub |
| `detectModels` | live filter (drops chat/embedding) |
| `cancel` | AbortController aborts upstream |

Default model: `gpt-image-2` (`MEDIA_IMAGE_MODEL`). Studio UI aligned.
Do **not** claim matrix Pass.
