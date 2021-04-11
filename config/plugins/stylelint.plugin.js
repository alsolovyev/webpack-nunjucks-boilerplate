const StylelintPlugin = require('stylelint-webpack-plugin')


module.exports = new StylelintPlugin({
  configFile: './config/.stylelintrc.js'
})
