const env = require('postcss-preset-env')

exports.loadCss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                // цепочка плагинов postcss
                env({
                  stage: 0, // default: stage 2
                  features: {
                    'custom-media-queries': {
                      importFrom: [
                        {
                          // Оч крутая штука, стоит почитать
                          customMedia: {
                            '--phonePortrait':
                              '(width <= 414px)',
                            '--phoneLandscape':
                              '(width >= 415px) and (width <= 667px)',
                            '--tablePortrait':
                              '(width >= 668px) and (width <= 768px)',
                            'tableLandscape':
                              '(width >= 769px) and (width <= 1024px)',
                            '--desktopS':
                              '(width >= 1025px) and (width <= 1366px)',
                            '--desktopM':
                              '(width >= 1367px) and (width <= 1680px)',
                            '--desktopL':
                              '(width >= 1681px) and (width <= 1920px)',
                            '--desktopXL':
                              '(width >= 1921px)',
                          }
                        }
                      ]
                    }
                  }
                })
              ]
            }
          },
        ],
      },
    ],
  }
})