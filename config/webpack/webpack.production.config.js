const { OUTPUT_DIR, PUBLIC_PATH } = require('../constants')
const sassLoader = require('../loaders/sass.loader.js')
const assetLoader = require('../loaders/asset.loader.js')
const cssExtractPlugin = require('../plugins/cssExtract.plugin.js')

module.exports = {
  name: 'webpack-production-config',
  mode: 'production',
  target: ['web' /* 'es5' */],
  devtool: 'source-map',
  output: {
    publicPath: PUBLIC_PATH,
    path: OUTPUT_DIR,
    filename: ({ chunk: { name } }) => `js/${name === 'common' ? 'app' : name}.[fullhash:8].js`,
    assetModuleFilename: '[path][name][hash:8][ext]',
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
  plugins: [cssExtractPlugin],
  module: {
    rules: [sassLoader, assetLoader]
  }
}
