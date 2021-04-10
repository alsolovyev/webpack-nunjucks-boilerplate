const htmlPlugin = require('../plugins/html.plugin.js')
const javascriptLoader = require('../loaders/javascript.loader.js')


module.exports = {
  name: 'webpack-common-config',
  entry: {
    app: './src/js/app.js'
  },
  target: ['web', /* 'es5' */],
  plugins: [
    htmlPlugin
  ],
  module: {
    rules: [
      javascriptLoader
    ]
  }
}
