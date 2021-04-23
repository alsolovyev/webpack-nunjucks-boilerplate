const path = require('path')
const { Environment, FileSystemLoader } = require('nunjucks')
const schema = require('./schema')


/**
 * Transpiles nunjucks files into a string.
 * https://webpack.js.org/contribute/writing-a-loader
 *
 * @requires nunjucks
 * @requires html-loader
 *
 * @todo Handle errors
 * @todo Hide common code (njk config)
 *
 * @param {String} source - the contents of the raw resource
 * @returns {String} a valid HTML string
 */
module.exports = function(source) {
  const callback = this.async()
  const { context, templates } = this.getOptions(schema)

  const env = new Environment(
    new FileSystemLoader(path.resolve(this.rootContext, templates)),
    {
      autoescape: true
    }
  )
  env.on('load', (name, source, loader) => {
    this.addDependency(source.path)
  })

  env.renderString(source, context, (error, HTMLString) => {
    callback(error ? error : null, HTMLString)
  })

  return
}
