const { r } = require('./utils')

/** @type { import('webpack').Configuration } */
module.exports = {
  output: {
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': r('../app/renderer'),
      '@components': r('../app/renderer/components'),
      '@pages': r('../app/renderer/pages'),
      '@assets': r('../app/renderer/assets'),
      '@utils': r('../app/renderer/utils'),
      '@theme-chalk': r('../app/renderer/theme-chalk'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
