/** @description 渲染进程和 web 端通用配置 */

const { merge } = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')
const {
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
  },

  entry: {
    index: RENDERER_ENTRY_PATH,
  },

  target: 'electron-renderer',

  output: {
    filename: '[name].[hash].js',
    path: DIST_PATH,
  },

  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      // sass | scss
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: (resourcePath) => {
                  // 只对 module.css 后缀的文件启用 css module
                  if (/module.(scss|css)$/i.test(resourcePath)) return 'local'

                  return 'global'
                },
                // 指定 css modules 生成的类名格式
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },

      // images
      {
        test: /\.(jpg|jpeg|png|gif|ico|webp)/,
        type: 'asset',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },

      // svg
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
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
