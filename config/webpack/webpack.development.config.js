const chokidar = require('chokidar')
const sassLoader = require('../loaders/sass.loader.js')
const assetLoader = require('../loaders/asset.loader.js')


module.exports = {
  name: 'webpack-development-config',
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
    before: (app, server) => chokidar.watch('./src/**/*.njk').on('change', () => {
      server.sockWrite(server.sockets, 'content-changed')
    }),
    watchOptions: {
      ignored: ['node_modules/**']
    }
  },
  stats: {
    errors: true,
    warnings: true,
    colors: true,
    builtAt: true
  },
  module: {
    rules: [
      sassLoader,
      assetLoader
    ]
  }
}
