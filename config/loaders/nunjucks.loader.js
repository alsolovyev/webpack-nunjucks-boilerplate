const createThreadLoader = require('../utils/createThreadLoader')
const getNunjucksGlobals = require('../utils/getNunjucksGlobals')


/**
 * Runs the following loaders in a worker pool.
 * https://github.com/webpack-contrib/thread-loader.
 */
const threadLoader = createThreadLoader({
  name: 'Njk Pool'
})


/**
 * Transpiles nunjucks files into HTML files.
 * https://github.com/ogonkov/nunjucks-loader
 */
const nunjucksLoader = {
  loader: 'simple-nunjucks-loader',
  options: {
    searchPaths: ['src/njk'],
    assetsPaths: ['src/images'],
    globals: {
      ...getNunjucksGlobals('functions')
    },
    filters: {
      ...getNunjucksGlobals('filters')
    }
  }
}


module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: [
    threadLoader,
    nunjucksLoader
  ]
}
