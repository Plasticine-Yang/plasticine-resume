const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.dev.js')

/** @type { import('webpack').Configuration } */
const webConfig = {
  target: 'web',
  devServer: {
    port: 5174,
  },
}

module.exports = merge(commonConfig, webConfig)
