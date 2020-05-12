exports.loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.woff2$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ]
  }
})