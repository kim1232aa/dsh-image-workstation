/**
 * Adapter registry stubs. Real HTTP only after paid-test approval + wiring.
 * Contract: docs/protocol/00-adapter-contract.md
 */

import { PROTOCOL_KINDS } from './types.js'

/**
 * @typedef {import('./types.js').ProtocolKind} ProtocolKind
 */

/**
 * @param {ProtocolKind} kind
 * @returns {{ kind: ProtocolKind, supports: (m: { modalities?: string[] }) => boolean, generate: Function, edit?: Function }}
 */
export function createAdapterStub(kind) {
  if (!PROTOCOL_KINDS.includes(kind)) {
    throw new Error(`unknown protocol: ${kind}`)
  }
  return {
    kind,
    supports(model) {
      return Array.isArray(model?.modalities) && model.modalities.length > 0
    },
    async generate() {
      throw new Error(`${kind}: generate not implemented (await 开做 wiring)`)
    },
    ...(kind === 'openai.images'
      ? {
          async edit() {
            throw new Error('openai.images: edit not implemented')
          },
        }
      : {}),
  }
}

export function listPhase1Adapters() {
  return ['openai.images', 'async.task_id'].map(createAdapterStub)
}
