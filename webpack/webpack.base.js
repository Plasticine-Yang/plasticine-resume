const { resolve } = require('path')

/** @type { import('webpack').Configuration } */
module.exports = {
  output: {
    clean: true,
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@src': resolve(__dirname, '../app/renderer'),
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
