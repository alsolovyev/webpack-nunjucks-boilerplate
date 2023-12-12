const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

/**
 * Runs TypeScript type checker on a separate process.
 * https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
 */
module.exports = new ForkTsCheckerWebpackPlugin({
  // formatter: 'basic',
  typescript: {
    configFile: path.resolve(process.cwd(), 'config', 'tsconfig.json')
  },
  eslint: {
    files: ['./js/**/*.ts'],
    options: {
      baseConfig: require('../.eslintrc')
    }
  }
})
