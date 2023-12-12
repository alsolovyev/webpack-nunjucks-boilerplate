const path = require('path')
const { SOURCE_DIR } = require('../constants')
const createThreadLoader = require('../utils/createThreadLoader')

/**
 * Runs the following loaders in a worker pool.
 * https://github.com/webpack-contrib/thread-loader.
 */
const threadLoader = createThreadLoader({
  name: 'Njk Pool'
})

/**
 * Exports HTML as string.
 * https://github.com/webpack-contrib/html-loader
 */
const htmlLoader = {
  loader: 'html-loader',
  options: {}
}

/**
 * Transpiles nunjucks files into HTML files.
 * ../modules/njk-loader
 */
const nunjucksLoader = {
  loader: path.resolve('./config/modules/njk-loader'),
  options: {
    autoescape: false,
    context: path.resolve(SOURCE_DIR, 'data/nunjucks.data.js'),
    templates: 'njk'
  }
}

module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: [threadLoader, htmlLoader, nunjucksLoader]
}
