const sassLoader = require('../loaders/sass.loader.js')
const assetLoader = require('../loaders/asset.loader.js')

module.exports = {
  name: 'webpack-development-config',
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    hot: true,
    compress: false,
    liveReload: true, // ToDo: disable liveReload for HTML files
    historyApiFallback: true,
    watchFiles: ['./src/**/*.njk']
  },
  watchOptions: {
    ignored: ['**/node_modules', '**/config']
  },
  stats: {
    errors: true,
    warnings: true,
    colors: true,
    builtAt: true
  },
  module: {
    rules: [sassLoader, assetLoader]
  }
}
