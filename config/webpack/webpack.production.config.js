const path = require('path')
const sassLoader = require('../loaders/sass.loader.js')(false)
const assetLoader = require('../loaders/asset.loader.js')(false)
const cssExtractPlugin = require('../plugins/cssExtract.plugin.js')


module.exports = {
  name: 'webpack-production-config',
  mode: 'production',
  target: ['web', /* 'es5' */],
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: ({ chunk: { name } }) => `js/${ name === 'common' ? 'app' : name }.[fullhash:8].js`,
    clean: true
  },
  stats: {
    assets: true,
    groupAssetsByChunk: true,
    errors: true,
    warnings: true,
    colors: true,
    builtAt: true,
    publicPath: true
  },
  plugins: [
    cssExtractPlugin
  ],
  module: {
    rules: [
      sassLoader,
      assetLoader
    ]
  }
}
