/**
 * Creats SVG sprite.
 * https://github.com/JetBrains/svg-sprite-loader
 */
const spriteLoader = {
  loader: 'svg-sprite-loader',
  options: {}
}

/**
 * Optimizes svg images with svgo.
 * https://github.com/svg/svgo-loader
 */
const svgoLoader = {
  loader: 'svgo-loader',
  options: {}
}

module.exports = {
  test: /\.svg$/,
  use: [spriteLoader, svgoLoader]
}
