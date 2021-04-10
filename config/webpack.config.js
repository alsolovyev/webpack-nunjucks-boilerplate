const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common.config.js')
const developmentConfig = require('./webpack/webpack.development.config.js')
const productionConfig = require('./webpack/webpack.production.config.js')


module.exports = ({ development: isDev }) =>
  merge(commonConfig, isDev ? developmentConfig : productionConfig)
