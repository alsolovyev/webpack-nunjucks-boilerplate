const typescriptLoader = require('../loaders/typescript.loader.js')
const forkTSChecker = require('../plugins/forkTSChecker.plugin.js')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  plugins: [forkTSChecker],
  module: {
    rules: [typescriptLoader]
  }
}
