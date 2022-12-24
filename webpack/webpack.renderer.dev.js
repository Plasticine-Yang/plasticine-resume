const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.dev.js')

/** @type { import('webpack').Configuration } */
const rendererConfig = {
  target: 'electron-renderer',
  devServer: {
    port: 5173,
  },
}

module.exports = merge(commonConfig, rendererConfig)
