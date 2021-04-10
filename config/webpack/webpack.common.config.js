const javascriptLoader = require('../loaders/javascript.loader.js')


module.exports = {
  name: 'webpack-common-config',
  entry: {
    app: './src/js/app.js'
  },
  target: ['web', /* 'es5' */],
  module: {
    rules: [
      javascriptLoader
    ]
  }
}
