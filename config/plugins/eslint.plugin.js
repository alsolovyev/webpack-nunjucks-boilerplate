const ESLintPlugin = require('eslint-webpack-plugin')


/**
 * A webpack plugin for ESLint.
 * https://github.com/webpack-contrib/eslint-webpack-plugin
 */
module.exports = new ESLintPlugin({
  extensions: ['js', 'ts'],
  baseConfig: require('../.eslintrc')
})
