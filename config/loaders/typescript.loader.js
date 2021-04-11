const path = require('path')

/**
 * Transpils JavaScript files using Babel.
 * https://github.com/babel/babel-loader
 */
const babelLoader = {
  loader: 'babel-loader',
  options: require('../.babelrc')
}


/**
 * Transpils TypeScript files to JavaScript.
 * https://github.com/TypeStrong/ts-loader
 */
const typescriptLoader = {
  loader: 'ts-loader',
  options: {
    context: path.resolve(process.cwd(), 'src'),
    configFile: path.resolve(process.cwd(), 'config', 'tsconfig.json')
  }
}


module.exports = {
  test: /\.ts(x?)$/i,
  exclude: /node_modules/,
  use: [
    babelLoader,
    typescriptLoader
  ]
}
