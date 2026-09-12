/** Settings + client card key — keep in sync with Config installSection. Do not rename. */
export const SETTINGS_NAMESPACE = 'dsh-image-workstation'

/**
 * Cordis patch insert id (stable fiber entry).
 * Host 插件列表: title = moduleShortName(package name) → 生图工作台;
 * search matches() only moduleName + entryId — so 「生图」hits package `dsh-生图工作台`,
 * and `imagegen` still hits this entryId. Host shortName alone is not a product-name wall.
 */
export const PLUGIN_ENTRY_ID = 'imagegen'
