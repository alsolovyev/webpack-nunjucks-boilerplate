const path = require('path')
const htmlPlugin = require('../plugins/html.plugin.js')
const javascriptLoader = require('../loaders/javascript.loader.js')
const nunjucksLoader = require('../loaders/nunjucks.loader.js')


module.exports = {
  name: 'webpack-common-config',
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    app: './js/app.js'
  },
  target: ['web', /* 'es5' */],
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      javascriptLoader,
      nunjucksLoader
    ]
  }
}
