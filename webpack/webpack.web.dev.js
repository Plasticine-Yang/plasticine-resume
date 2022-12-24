const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.dev.js')
const { WEB_DEV_PATH } = require('./constants.js')

/** @type { import('webpack').Configuration } */
const webConfig = {
  target: 'web',
  devServer: {
    port: 5174,
    watchFiles: {
      paths: [WEB_DEV_PATH],
    },
  },
}

module.exports = merge(commonConfig, webConfig)
