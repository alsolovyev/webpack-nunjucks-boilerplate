/**
 * Loads asset files (fonts, icons, etc).
 * https://webpack.js.org/guides/asset-modules
 */
module.exports = {
  test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|mp3)$/i,
  type: 'asset/resource'
}
