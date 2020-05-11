// Универсальная подгрузка SVG
// Подгрузка CSS & JS

module.loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issues: {
          test: /\.js$/,
        },
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: `./images/[name].[ext]`
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        issues: {
          test: /\.css$/,
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 0
              name: `./images/[name].[ext]`
            }
          }
        ]
      },
    ]
  }
})