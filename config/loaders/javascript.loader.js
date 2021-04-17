const createThreadLoader = require('../utils/createThreadLoader')


/**
 * Runs the following loaders in a worker pool.
 * https://github.com/webpack-contrib/thread-loader.
 */
const threadLoader = createThreadLoader({
  name: 'JS Pool'
})


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
  use: [
    threadLoader,
    babelLoader
  ]
}
