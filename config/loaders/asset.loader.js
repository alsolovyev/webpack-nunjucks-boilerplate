module.exports = isDev => {
  return {
    test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|mp3)$/i,
    type: 'asset/resource',
    generator: {
      filename: `${ isDev ? '[name]' : '[path][name]' }.[hash:8][ext]`
    }
  }
}
