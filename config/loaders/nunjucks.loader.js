module.exports = {
  test: /\.(njk|nunjucks|html)$/i,
  use: [
    {
      loader: 'simple-nunjucks-loader',
      options: {  }
    }
  ]
}
