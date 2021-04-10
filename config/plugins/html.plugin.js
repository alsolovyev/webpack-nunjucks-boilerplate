const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = new HTMLWebpackPlugin({
  template: 'home.njk',
  filename: 'index.html'
})
