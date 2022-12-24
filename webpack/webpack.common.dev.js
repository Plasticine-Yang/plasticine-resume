/** @description 渲染进程和 web 端通用配置 */

const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')
const {
  COMMON_DEV_PATH,
  BABEL_CONFIG_PATH,
  RENDERER_ENTRY_PATH,
  DIST_PATH,
  ENTRY_TEMPLATE_PATH,
  DIST_TEMPLATE_PATH,
} = require('./constants.js')

/** @type { import('webpack').Configuration } */
const commonConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: DIST_PATH,
    compress: true,
    host: '127.0.0.1',
    hot: true,
    watchFiles: {
      paths: [COMMON_DEV_PATH, BABEL_CONFIG_PATH],
      options: {
        usePolling: false,
      },
    },
  },

  entry: {
    index: RENDERER_ENTRY_PATH,
  },

  target: 'electron-renderer',

  output: {
    filename: '[name].[hash].js',
    path: DIST_PATH,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: ENTRY_TEMPLATE_PATH,
      filename: DIST_TEMPLATE_PATH,
      chunks: ['index'],
    }),
  ],
}

module.exports = merge(baseConfig, commonConfig)
