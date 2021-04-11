const path = require('path')


module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: [
    {
      loader: 'simple-nunjucks-loader',
      options: {
        assetsPaths: [path.resolve(process.cwd(), 'src')]
      }
    }
  ]
}
