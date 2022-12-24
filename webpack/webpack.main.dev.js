const { resolve } = require('path')

const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const { MAIN_ENTRY_PATH, DIST_PATH } = require('./constants.js')

/** @type { import('webpack').Configuration } */
const mainConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: MAIN_ENTRY_PATH,
  target: 'electron-main',
  output: {
    path: DIST_PATH,
    filename: 'electron.js',
  },
}

module.exports = merge(baseConfig, mainConfig)
