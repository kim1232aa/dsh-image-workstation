/**
 * GIF + ecommerce stub seats — honest NOT_WIRED, never fake success.
 * Result URLs must be verbatim when live later (same rule as images/video).
 */

export const GIF_STUB_NOT_WIRED = 'GIF_STUB_NOT_WIRED'
export const ECOM_STUB_NOT_WIRED = 'ECOM_STUB_NOT_WIRED'

export const CTA_RPC_GIF_GENERATE = 'gifGenerate'
export const CTA_RPC_ECOM_GENERATE = 'ecommerceGenerate'

/**
 * @param {string} code
 * @param {string} message
 */
function stubError(code, message) {
  const err = new Error(message)
  err.code = code
  return err
}

/**
 * Stub GIF generate — no fake success, no paid upstream.
 * @param {Record<string, unknown>} [_req]
 */
export async function gifGenerate(_req) {
  throw stubError(
    GIF_STUB_NOT_WIRED,
    '[dsh-image-workstation] gifGenerate stub — not wired (local encode seat TBD; no fake success)',
  )
}

/**
 * Stub ecommerce batch generate — no fake success, no paid upstream.
 * @param {Record<string, unknown>} [_req]
 */
export async function ecommerceGenerate(_req) {
  throw stubError(
    ECOM_STUB_NOT_WIRED,
    '[dsh-image-workstation] ecommerceGenerate stub — not wired (plan→confirm batch TBD; no fake success)',
  )
}

/**
 * Handle CTA RPC gifGenerate / ecommerceGenerate → ok:false stub codes.
 * @param {string} endpoint
 * @param {Record<string, unknown>} [_payload]
 * @returns {Promise<{ ok: false, error: { code: string, message: string, details: object } } | null>}
 */
export async function handleGifEcomRpc(endpoint, _payload) {
  if (endpoint === CTA_RPC_GIF_GENERATE) {
    try {
      await gifGenerate(_payload || {})
    } catch (e) {
      return {
        ok: false,
        error: {
          code: e?.code || GIF_STUB_NOT_WIRED,
          message: String(e?.message || e).slice(0, 500),
          details: {},
        },
      }
    }
  }
  if (endpoint === CTA_RPC_ECOM_GENERATE) {
    try {
      await ecommerceGenerate(_payload || {})
    } catch (e) {
      return {
        ok: false,
        error: {
          code: e?.code || ECOM_STUB_NOT_WIRED,
          message: String(e?.message || e).slice(0, 500),
          details: {},
        },
      }
    }
  }
  return null
}
