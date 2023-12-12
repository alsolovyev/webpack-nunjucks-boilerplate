const fs = require('fs')
const { SOURCE_DIR } = require('../constants')
const HTMLWebpackPlugin = require('html-webpack-plugin')

/**
 * Simplifies creation of HTML files.
 * https://github.com/jantimon/html-webpack-plugin
 */
module.exports = fs
  .readdirSync(SOURCE_DIR)
  .map(templateName => {
    if (!/\.(njk|nunjucks|html)$/i.test(templateName)) return false

    let filename = templateName.split('.')[0]
    filename = filename === 'home' ? 'index' : filename

    return new HTMLWebpackPlugin({
      template: `${templateName}`,
      filename: `${filename}.html`,
      chunks: ['common', filename]
    })
  })
  .filter(Boolean)
