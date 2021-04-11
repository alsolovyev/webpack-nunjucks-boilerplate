const sassLoader = require('../loaders/sass.loader.js')(false)
const cssExtractPlugin = require('../plugins/cssExtract.plugin.js')


module.exports = {
  name: 'webpack-production-config',
  mode: 'production',
  target: ['web', /* 'es5' */],
  devtool: 'source-map',
  output: {
    filename: 'js/[name].[fullhash:8].js',
    clean: true
  },
  plugins: [
    cssExtractPlugin
  ],
  module: {
    rules: [
      sassLoader
    ]
  }
}
