const fs = require('fs')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = fs.readdirSync(path.resolve(process.cwd(), 'src')).map(templateName => {
  if (!/\.(njk|nunjucks|html)$/i.test(templateName)) return false

  let filename = templateName.split('.')[0]
  filename = filename === 'home' ? 'index' : filename

  return new HTMLWebpackPlugin({
    template: `${ templateName }`,
    filename: `${ filename }.html`,
    chunks: ['common', filename]
  })
}).filter(Boolean)
