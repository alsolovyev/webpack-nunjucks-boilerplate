const HTMLWebpackPlugin = require('html-webpack-plugin')


module.exports = new HTMLWebpackPlugin({
  template: './src/home.html',
  filename: 'index.html'
})
