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
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
