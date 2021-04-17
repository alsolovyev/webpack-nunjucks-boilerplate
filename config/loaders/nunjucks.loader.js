const fs = require('fs')
const path = require('path')
const { SOURCE_DIR } = require('../constants')


/** Gets the global nunjucks functions from the given directory */
const getNunujucksGlobals = dir => {
  const fullPath = path.resolve(SOURCE_DIR, 'njk', 'globals', dir)
  const data = {  }

  fs.readdirSync(fullPath).forEach(fileName => {
    if (!/\.js$/i.test(fileName)) return false

    data[fileName.split('.')[0]] = path.join(fullPath, fileName)
  })

  return data
}


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
      ...getNunujucksGlobals('functions')
    },
    filters: {
      ...getNunujucksGlobals('filters')
    }
  }
}


module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: nunjucksLoader
}
