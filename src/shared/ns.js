/** Settings + client card key — keep in sync with Config installSection. Do not rename. */
export const SETTINGS_NAMESPACE = 'dsh-image-workstation'

/**
 * Cordis patch insert id (stable fiber entry).
 * Package name is ASCII `dsh-image-workstation` (required for /plugins/??…/client.js).
 * Host 插件列表: title = moduleShortName(package) → image-workstation;
 * search matches() moduleName + entryId — 「生图」via keywords/description;
 * `imagegen` hits this entryId. Host shortName alone is not a product-name wall.
 */
export const PLUGIN_ENTRY_ID = 'imagegen'
