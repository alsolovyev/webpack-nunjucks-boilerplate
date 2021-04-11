const { SOURCE_DIR } = require('../helpers')
const htmlPlugin = require('../plugins/html.plugin.js')
const eslintPlugin = require('../plugins/eslint.plugin.js')
const stylelintPlugin = require('../plugins/stylelint.plugin.js')
const javascriptLoader = require('../loaders/javascript.loader.js')
const typescriptLoader = require('../loaders/typescript.loader.js')
const nunjucksLoader = require('../loaders/nunjucks.loader.js')
const svgLoader = require('../loaders/svg.loader.js')


module.exports = {
  name: 'webpack-common-config',
  context: SOURCE_DIR,
  entry: {
    common: ['./js/app.js', './sass/app.sass']
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.sass', '.png', '.jpg', '.svg'],
    alias: {
      '@': SOURCE_DIR
    }
  },
  stats: { all: false },
  plugins: [
    ...htmlPlugin,
    eslintPlugin,
    stylelintPlugin
  ],
  module: {
    rules: [
      javascriptLoader,
      typescriptLoader,
      nunjucksLoader,
      svgLoader
    ]
  }
}
