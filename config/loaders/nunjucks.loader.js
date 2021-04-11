const path = require('path')


/**
 * Loads nunjucks files.
 * https://github.com/ogonkov/nunjucks-loader
 */
module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: {
    loader: 'simple-nunjucks-loader',
    options: {
      assetsPaths: [path.resolve(process.cwd(), 'src')]
    }
  }
}
