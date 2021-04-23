const path = require('path')
const { Environment, FileSystemLoader } = require('nunjucks')
const log = require('webpack-log')({ name: 'nunjucks' })
const schema = require('./schema')
const iconFn = require('./functions/icon')


/**
 * Transpiles nunjucks files into a string.
 * https://webpack.js.org/contribute/writing-a-loader
 *
 * @requires nunjucks
 * @requires html-loader
 *
 * @todo Hide common code (njk config)
 *
 * @param {String} source - the contents of the raw resource
 * @returns {String} a valid HTML string
 */
module.exports = function(source) {
  const callback = this.async()
  const { context, templates } = this.getOptions(schema)

  const env = new Environment(
    new FileSystemLoader(path.resolve(this.rootContext, templates || '')),
    {
      autoescape: autoescape || true
    }
  )
  // Add a file as dependency of the loader result in order to make them watchable.
  env.on('load', (name, source) => this.addDependency(source.path))

  // Add a global value that will be available to all templates.
  env.addGlobal('icon', iconFn)

  // Transpile
  env.renderString(source, context, (error, HTMLString) => {
    if (error) {
      const [ location, description ] = error.message.split('\n ')
      /**
       * Do not emit an error to prevent the "HTML Webpack"
       * plugin from outputting useless text to the terminal.
       */
      callback(null, `<pre style='font-size:30px'>${ error.message }</pre>`)
      process.stdout.write('\n')
      log.error(description)
      log.error(location)
    } else {
      callback(null, HTMLString)
    }
  })

  return
}
