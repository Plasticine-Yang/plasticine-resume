const { resolve } = require('path')

const r = (path) => resolve(__dirname, path)

/** @description webpack 配置文件路径 */
const COMMON_DEV_PATH = r('webpack.common.dev.js')
const RENDERER_DEV_PATH = r('webpack.renderer.dev.js')
const WEB_DEV_PATH = r('webpack.web.dev.js')

/** @description bable 配置文件路径 */
const BABEL_CONFIG_PATH = r('../babel.config.js')

// ========== electron  ==========
/** @description 主进程入口 */
const MAIN_ENTRY_PATH = r('../app/main/electron.js')

/** @description 渲染进程入口 */
const RENDERER_ENTRY_PATH = r('../app/renderer/index.jsx')

const DIST_PATH = r('../dist')

/** @description 用于给 HTMLWebpackPlugin 指定要注入构建产物 script 的 html */
const ENTRY_TEMPLATE_PATH = r('../app/renderer/index.html')

/** @description HTMLWebpackPlugin 产物保存路径 */
const DIST_TEMPLATE_PATH = r('../dist/index.html')
// ========== electron  ==========

module.exports = {
  COMMON_DEV_PATH,
  RENDERER_DEV_PATH,
  WEB_DEV_PATH,

  BABEL_CONFIG_PATH,

  MAIN_ENTRY_PATH,
  RENDERER_ENTRY_PATH,
  DIST_PATH,
  ENTRY_TEMPLATE_PATH,
  DIST_TEMPLATE_PATH,
}
