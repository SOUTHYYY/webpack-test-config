const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = require('postcss-preset-env')
// Consts
const { BUILD_DIRECTORY, SOURSE_DIRECTORY } = require('../constants')

/**
 * ТИПЫ КОНФИГОВ WEBPACK
 * Object
 * Function
 * Promise
**/

module.exports = () => {
    return {
        entry: SOURSE_DIRECTORY,
        output: {
            path: BUILD_DIRECTORY,
            filename: 'bundle.js'
        },
        mode: 'none',
        entry: './src/index.js',
        plugins: [
            // Каждый плагин вызывается как конструктор
            new HtmlWebpackPlugin({
                template: './static/index.html',
                title: 'Webpack 🚀'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/i,
                    use: {
                        loader: 'babel-loader',
                    }
                },
                { //TODO: прокачать загрузку стилей
                    test: /\.css$/i,
                    use: ['style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
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
                        }
                    ],
                }
            ],
        }
    };
};