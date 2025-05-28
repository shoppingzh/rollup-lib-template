const globals = require('globals')
const { javascript, stylistic, typescript, } = require('@shoppingzh/eslint-config')

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    ignores: ['dist']
  },
  ...javascript({
    globals: {
      ...globals.jest,
    },
  }),
  ...stylistic(),
  ...typescript(),
  {
    files: [
      '*.js',
    ],
    rules: {
      '@typescript-eslint/no-require-imports': [0],
    }
  },
]
