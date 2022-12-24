const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.dev.js')
const { RENDERER_DEV_PATH } = require('./constants.js')

/** @type { import('webpack').Configuration } */
const rendererConfig = {
  target: 'electron-renderer',
  devServer: {
    port: 5173,
    watchFiles: {
      paths: [RENDERER_DEV_PATH],
    },
  },
}

module.exports = merge(commonConfig, rendererConfig)
