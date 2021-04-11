const MiniCssExtractPlugin = require('mini-css-extract-plugin')


/**
 * A webpack plugin to extract CSS into separate files.
 * https://webpack.js.org/plugins/mini-css-extract-plugin
 */
module.exports = new MiniCssExtractPlugin({
  filename: 'css/[name].[fullhash:8].css'
})
