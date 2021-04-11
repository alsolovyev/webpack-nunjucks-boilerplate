const path = require('path')


/**
 * Eslint rules:
 *  - https://eslint.org/docs/rules/
 *
 * Eslint recommended rules(eslint:recommended):
 *  - https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: path.resolve(process.cwd(), 'config', '.babelrc.js')
    }
  },
  extends: 'eslint:recommended',
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-console': 'warn',
    'no-unexpected-multiline': 'off'
  }
}
