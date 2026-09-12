/**
 * Skill plan RPC — separate from CTA /dsh-ws mediaProxy.
 * Channel: /dsh-ws-skill  methods: list | plan
 * Scores never gate generate; this channel does not touch mediaProxy.
 */
import { scrubErrorMessage as scrubMessage } from './rpc-errors.js'
import {
  discoverSkills,
  planSkill,
  LABEL_TO_SKILL_ID,
  SKILL_ENTRY_LABELS,
  suggestSkills,
} from '../skills/index.js'
import { toSkillProposal } from '../skills/proposal.js'

export const SKILL_RPC_CHANNEL = '/dsh-ws-skill'
export const SKILL_RPC_LIST = 'list'
export const SKILL_RPC_PLAN = 'plan'
export const SKILL_RPC_SUGGEST = 'suggest'

/**
 * @param {{ skillDir: string }} bag
 */
export function createSkillRpcHandler(bag) {
  return async (endpoint, payload) => {
    try {
      if (endpoint === SKILL_RPC_LIST) {
        const list = discoverSkills(bag.skillDir)
        return {
          ok: true,
          value: {
            skillDir: bag.skillDir,
            labels: SKILL_ENTRY_LABELS.slice(),
            skills: list.map((s) => ({
              id: s.id,
              label: s.label,
              defaultAspect: s.defaultAspect || null,
              hasScripts: Boolean(s.scriptsDir),
            })),
            disabledByScore: false,
          },
        }
      }
      if (endpoint === SKILL_RPC_SUGGEST) {
        const theme = String(payload?.theme || payload?.prompt || payload?.brief || '').trim()
        const value = suggestSkills(theme)
        return { ok: true, value: { ...value, disabledByScore: false } }
      }
      if (endpoint === SKILL_RPC_PLAN) {
        const brief = String(payload?.brief || payload?.prompt || '').trim()
        let rawId = String(payload?.skillId || payload?.label || '').trim()
        // Smart recover: empty skillId + theme → suggest (never leave SKILL_REQUIRED if matchable)
        if (!rawId && brief) {
          const hit = suggestSkills(brief).top
          if (hit?.label) rawId = hit.label
        }
        const skillId = LABEL_TO_SKILL_ID[rawId] || rawId
        if (!skillId) {
          return {
            ok: false,
            error: {
              code: 'SKILL_REQUIRED',
              message: brief
                ? '未匹配到创作 Skill — 可不选直接出图，或换个提示词再想方案'
                : '请先写提示词或选择创作 Skill',
              details: {},
            },
          }
        }
        const plan = await planSkill({
          skillDir: bag.skillDir,
          skillId,
          brief,
          overrideAspect: payload?.overrideAspect ? String(payload.overrideAspect) : undefined,
          wantTriViews: Boolean(payload?.wantTriViews),
          briefJsonPath: payload?.briefJsonPath ? String(payload.briefJsonPath) : undefined,
        })
        const proposal = toSkillProposal(plan, {
          refImageIds: Array.isArray(payload?.refImageIds) ? payload.refImageIds : [],
          mode: payload?.mode ? String(payload.mode) : undefined,
        })
        return {
          ok: true,
          value: {
            ...plan,
            ...proposal,
            disabledByScore: false,
            proposal,
          },
        }
      }
      return {
        ok: false,
        error: {
          code: 'UNKNOWN_ENDPOINT',
          message: `dsh-ws-skill endpoint ${JSON.stringify(endpoint)} unknown`,
          details: {},
        },
      }
    } catch (e) {
      return {
        ok: false,
        error: {
          code: e?.code || 'SKILL_PLAN_FAILED',
          message: scrubMessage(e?.message || e),
          details: {},
        },
      }
    }
  }
}

/**
 * @param {any} ctx Cordis ctx with webServer + connection
 * @param {{ skillDir: string }} bag
 */
export function attachSkillRpc(ctx, bag) {
  if (!ctx?.webServer?.register) {
    throw new Error('[dsh-image-workstation] webServer.register unavailable (skill-rpc)')
  }
  if (!ctx?.connection?.requestRejection) {
    throw new Error('[dsh-image-workstation] connection.requestRejection unavailable (skill-rpc)')
  }
  const rpcHandler = createSkillRpcHandler(bag)
  const route = {
    kind: 'prefix',
    path: SKILL_RPC_CHANNEL,
    handler: async (req, res) => {
      const rejection = ctx.connection.requestRejection(req)
      if (rejection !== undefined) {
        res.writeHead(rejection)
        res.end(rejection === 401 ? 'unauthorized' : 'forbidden')
        return
      }
      const url = new URL(req.url ?? '/', 'http://dsh.internal')
      const path = url.pathname || ''
      const prefix = SKILL_RPC_CHANNEL
      let endpoint
      if (path === prefix || path === prefix + '/') endpoint = undefined
      else if (path.startsWith(prefix + '/')) endpoint = path.slice(prefix.length + 1)
      else endpoint = undefined
      if (req.method !== 'POST' || endpoint === undefined) {
        res.writeHead(404)
        res.end('not found')
        return
      }
      const ctype = String(req.headers['content-type'] || '')
        .split(';', 1)[0]
        .trim()
        .toLowerCase()
      if (ctype !== 'application/json') {
        res.writeHead(415)
        res.end('content type must be application/json')
        return
      }
      let raw = Buffer.alloc(0)
      for await (const chunk of req) {
        raw = Buffer.concat([raw, chunk])
        if (raw.byteLength > 2 * 1024 * 1024) {
          res.writeHead(413)
          res.end()
          req.destroy()
          return
        }
      }
      let body
      try {
        body = JSON.parse(raw.length ? raw.toString('utf8') : '{}')
      } catch {
        res.writeHead(400)
        res.end('body is not JSON')
        return
      }
      const rpcId = typeof body?.rpcId === 'string' ? body.rpcId : 'invalid'
      if (body?.type !== 'client-request' || body?.method !== endpoint) {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(
          JSON.stringify({
            type: 'server-response',
            rpcId,
            result: {
              ok: false,
              error: {
                code: 'gateway/bad-request',
                message: 'invalid client-request envelope or method mismatch',
                details: { issues: [] },
              },
            },
          }),
        )
        return
      }
      const result = await rpcHandler(endpoint, body.params ?? {})
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ type: 'server-response', rpcId, result }))
    },
  }
  ctx.webServer.register(route)
  ctx.on('dispose', () => {
    try {
      ctx.webServer?.unregister?.(route)
    } catch {
      /* ignore */
    }
  })
  ctx.logger?.info?.(`[dsh-image-workstation] skill RPC ${SKILL_RPC_CHANNEL}/list|plan|suggest (no mediaProxy)`)
}
