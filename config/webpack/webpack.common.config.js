const path = require('path')
const htmlPlugin = require('../plugins/html.plugin.js')
const eslintPlugin = require('../plugins/eslint.plugin.js')
const javascriptLoader = require('../loaders/javascript.loader.js')
const nunjucksLoader = require('../loaders/nunjucks.loader.js')
const svgLoader = require('../loaders/svg.loader.js')


module.exports = {
  name: 'webpack-common-config',
  context: path.resolve(process.cwd(), 'src'),
  entry: {
    common: ['./js/app.js', './sass/app.sass']
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.sass', '.png', '.jpg', '.svg'],
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    ...htmlPlugin,
    eslintPlugin
  ],
  module: {
    rules: [
      javascriptLoader,
      nunjucksLoader,
      svgLoader
    ]
  }
}
