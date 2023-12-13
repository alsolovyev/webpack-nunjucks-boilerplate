const path = require('path')
const { SOURCE_DIR } = require('../constants')
const createThreadLoader = require('../utils/createThreadLoader')

/**
 * Runs the following loaders in a worker pool.
 * https://github.com/webpack-contrib/thread-loader.
 */
const threadLoader = createThreadLoader({
  name: 'TS Pool'
})

/**
 * Transpiles JavaScript files using Babel.
 * https://github.com/babel/babel-loader
 */
const babelLoader = {
  loader: 'babel-loader',
  options: require('../.babelrc')
}

/**
 * Transpiles TypeScript files into JavaScript.
 * https://github.com/TypeStrong/ts-loader
 */
const typescriptLoader = {
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    happyPackMode: true,
    context: SOURCE_DIR,
    configFile: path.resolve(process.cwd(), 'config', 'tsconfig.json')
  }
}

module.exports = {
  test: /\.ts(x?)$/i,
  exclude: /node_modules/,
  use: [threadLoader, babelLoader, typescriptLoader]
}
