module.exports = {
  presets: [
    '@babel/preset-env',

    [
      '@babel/preset-react',
      {
        // 支持不用手动导入 React
        runtime: 'automatic',
      },
    ],

    '@babel/preset-typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
