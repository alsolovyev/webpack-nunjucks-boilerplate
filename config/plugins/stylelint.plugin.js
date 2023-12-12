const StylelintPlugin = require('stylelint-webpack-plugin')

/**
 * A webpack plugin for StyleLint.
 * https://github.com/webpack-contrib/stylelint-webpack-plugin
 */
module.exports = new StylelintPlugin({
  configFile: './config/.stylelintrc.js'
})
