# GIF / 电商 stub contracts

Honest stubs — **no fake success**. When live later: result URLs **verbatim** (same rule as `openai.images` / `video.async`).

## RPC methods (`/dsh-ws`)

### `gifGenerate`

Payload (draft):

```json
{
  "prompt": "string",
  "frameCount": 8,
  "fps": 12,
  "loop": 0,
  "size": "512x512",
  "modelId": "optional"
}
```

Always returns:

```json
{ "ok": false, "error": { "code": "GIF_STUB_NOT_WIRED", "message": "…", "details": {} } }
```

Local encode seat TBD. Do not invent frames or GIF URLs.

### `ecommerceGenerate`

Payload (draft):

```json
{
  "productImages": [{ "url": "…" }],
  "styleRef": { "url": "…" },
  "name": "string",
  "paramsText": "string",
  "locale": "zh",
  "purposes": [{ "id": "hero", "enabled": true, "count": 1 }],
  "confirmed": true
}
```

Always returns:

```json
{ "ok": false, "error": { "code": "ECOM_STUB_NOT_WIRED", "message": "…", "details": {} } }
```

Plan → confirm batch seat TBD. Do not invent product sheets or image URLs.

## Host

`mediaProxy.gifGenerate` / `mediaProxy.ecommerceGenerate` throw the same codes.

## Verbatim URL rule

When either seat goes live: pass upstream result URLs through unchanged (no domain rewrite), scrub tokens in errors only.
