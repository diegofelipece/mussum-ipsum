/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'], 
    'semi': ['error', 'never'],
    'one-var': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'no-restricted-syntax': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
}