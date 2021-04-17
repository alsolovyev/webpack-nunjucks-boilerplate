const { IS_DEV_MODE } = require('../constants')
const createThreadLoader = require('../utils/createThreadLoader')


/**
 * Runs the following loaders in a worker pool.
 * https://github.com/webpack-contrib/thread-loader.
 */
const threadLoader = createThreadLoader({
  name: 'Sass Pool'
})


/**
 * Injects CSS into the DOM.
 * https://github.com/webpack-contrib/style-loader
 */
const styleLoader = {
  loader: 'style-loader',
  options: {  }
}


/**
 * Extracts CSS into separate files.
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 */
const miniCssExtractLoader = {
  loader: require('mini-css-extract-plugin').loader,
  options: {  }
}


/**
 * Interprets @import and url() like import/require() and will resolve them.
 * https://github.com/webpack-contrib/css-loader
 */
const cssLoader = {
  loader: 'css-loader',
  options: {  }
}


/**
 * Transforms styles with JS plugins.
 * https://github.com/webpack-contrib/postcss-loader
 */
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [ require('autoprefixer') ]
    }
  }
}


/**
 * Loads a Sass/SCSS file and compiles it to CSS.
 * https://github.com/webpack-contrib/sass-loader
 */
const sassLoader = {
  loader: 'sass-loader',
  options: {
    additionalData: `$isDev: ${IS_DEV_MODE}`
  }
}


module.exports = {
  test: /\.s[ac]ss$/i,
  use: [
    IS_DEV_MODE ? styleLoader : miniCssExtractLoader,
    threadLoader,
    cssLoader,
    !IS_DEV_MODE && postcssLoader,
    sassLoader
  ].filter(Boolean)
}
