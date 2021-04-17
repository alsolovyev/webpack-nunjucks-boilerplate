const fs = require('fs')
const path = require('path')
const { SOURCE_DIR } = require('../constants')


/**
 * Gets the global nunjucks functions from the given directory.
 *
 * @param {String} directory - the name of a directory
 * @returns {Object} an object where filename is the key and the absolute path is the value
 */
module.exports = directory => {
  const fullPath = path.resolve(SOURCE_DIR, 'njk', 'globals', directory)
  const data = {  }

  fs.readdirSync(fullPath).forEach(fileName => {
    if (!/\.js$/i.test(fileName)) return false

    data[fileName.split('.')[0]] = path.join(fullPath, fileName)
  })

  return data
}
