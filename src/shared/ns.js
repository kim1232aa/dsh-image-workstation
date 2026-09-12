/** Settings + client card key — keep in sync with Config installSection. Do not rename. */
export const SETTINGS_NAMESPACE = 'dsh-image-workstation'

/**
 * Cordis patch insert id.
 * Package name stays ASCII `dsh-image-workstation` (/plugins URL-safe).
 * Host 插件列表 title = moduleShortName → `image-workstation` (host limit).
 * Search matches() only moduleName + entryId — prefix `imagegen` + 「生图工作台」
 * so both `imagegen` and 「生图」 hit. Keywords do NOT feed inventory search.
 */
export const PLUGIN_ENTRY_ID = 'imagegen-生图工作台'
