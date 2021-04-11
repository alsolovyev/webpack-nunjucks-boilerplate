const chokidar = require('chokidar')
const cssLoader = require('../loaders/css.loader.js')(true)


module.exports = {
  name: 'webpack-development-config',
  mode: 'development',
  target: 'web',
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 8080,
    hot: true,
    compress: true,
    historyApiFallback: true,
    before: (app, server) => chokidar.watch('./src/**/*.njk').on('change', () =>
      server.sockWrite(server.sockets, 'content-changed')),
    watchOptions: {
      ignored: ['node_modules/**']
    }
  },
  module: {
    rules: [
      cssLoader
    ]
  }
}
