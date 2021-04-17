const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common.config.js')
const developmentConfig = require('./webpack/webpack.development.config.js')
const productionConfig = require('./webpack/webpack.production.config.js')
const { IS_DEV_MODE } = require('./constants')


module.exports = merge(commonConfig, IS_DEV_MODE ? developmentConfig : productionConfig)
