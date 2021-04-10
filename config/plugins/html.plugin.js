const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = new HTMLWebpackPlugin({
  template: 'home.html',
  filename: 'index.html'
})
