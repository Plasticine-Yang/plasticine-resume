/** @type { import('eslint').ESLint.ConfigData } */
module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },

  rules: {
    // react
    'react/prop-types': 'off',

    // typescript
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
