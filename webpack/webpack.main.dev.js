const { resolve } = require('path')

const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

/** @type { import('webpack').Configuration } */
const mainConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, '../app/main/electron.js'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: resolve(__dirname, '../dist'),
  },
}

module.exports = merge(baseConfig, mainConfig)
