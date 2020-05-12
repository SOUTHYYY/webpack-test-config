const env = require('postcss-preset-env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano')

const loadCss = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: 'css-loader',
  options: {
    sourceMap,
    modules: {
      // modules: true,
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    }
  }
})

// css-nano - минификация
const loadPostCss = ({ sourceMap = false, minify = false } = { sourceMap: false, minify: false }) => {
  const plugins = [
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

  if (minify) {
    plugins.push(cssnano)
  }

  return {
    loader: 'postcss-loader',
    options: {
      sourceMap,
      plugins
    }
  }

}

exports.loadDevCss = () => ({
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          loadCss({ sourceMap: true }),
          loadPostCss({ sourceMap: true, minify: false })
        ]
      }
    ]
  }
})

exports.loadProdCss = () => ({
  module: {
    rules: [{
      test: /\.css/,
      use: [
        MiniCssExtractPlugin.loader,
        loadCss({ sourceMap: false }),
        loadPostCss({ sourceMap: false, minify: true })
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[id].css',
      chunkFilename: 'css/[name].[id].css',
    })
  ]
})