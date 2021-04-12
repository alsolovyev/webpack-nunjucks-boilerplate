const fs = require('fs')
const path = require('path')
const { SOURCE_DIR } = require('../helpers')


/* Get nunjucks globals */
const getNunujucksGlobals = type => {
  const fullPath = path.resolve(SOURCE_DIR, 'njk', 'globals', type)
  const data = {  }

  fs.readdirSync(fullPath).forEach(fileName => {
    if (!/\.js$/i.test(fileName)) return false

    data[fileName.split('.')[0]] = path.join(fullPath, fileName)
  })

  return data
}


/**
 * Loads nunjucks files.
 * https://github.com/ogonkov/nunjucks-loader
 */
module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: {
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
}
