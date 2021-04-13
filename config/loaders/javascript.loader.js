/**
 * Transpiles JavaScript files using Babel.
 * https://github.com/babel/babel-loader
 */
const babelLoader = {
  loader: 'babel-loader',
  options: require('../.babelrc')
}


module.exports = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: babelLoader
}
