module.exports = {
  name: 'webpack-development-config',
  mode: 'development',
  devServer: {
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
    hot: true,
    compress: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: ['node_modules/**']
    }
  }
}
