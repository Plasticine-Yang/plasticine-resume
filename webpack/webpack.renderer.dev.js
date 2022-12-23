const { resolve } = require('path')

const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')

/** @type { import('webpack').Configuration } */
const rendererConfig = {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: resolve(__dirname, '../dist'),
    compress: true,
    host: '127.0.0.1',
    port: 5173,
    hot: true,
  },

  entry: {
    index: resolve(__dirname, '../app/renderer/index.jsx'),
  },

  target: 'electron-renderer',

  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '../dist'),
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, '../app/renderer/index.html'),
      filename: resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
  ],
}

module.exports = merge(baseConfig, rendererConfig)
