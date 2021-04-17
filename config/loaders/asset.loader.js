const { IS_DEV_MODE } = require('../constants')


/**
 * Loads asset files (fonts, icons, etc).
 * https://webpack.js.org/guides/asset-modules
 */
module.exports = {
  test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|mp3)$/i,
  type: 'asset/resource',
  generator: {
    filename: `${ IS_DEV_MODE ? '[name]' : '[path][name]' }.[hash:8][ext]`
  }
}
