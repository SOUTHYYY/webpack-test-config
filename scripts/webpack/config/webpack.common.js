// Core
const { DefinePlugin } = require('webpack')
const merge = require('webpack-merge')


// Consts
const { BUILD_DIRECTORY, SOURSE_DIRECTORY } = require('../constants')

// Modules 
const { loadJavaScript, loadImages, loadSvg, loadFonts, setupHtml } = require('../modules')

/**
 * ТИПЫ КОНФИГОВ WEBPACK
 * Object
 * Function
 * Promise
**/

module.exports = () => {
    const { NODE_ENV } = process.env
    return merge({
        entry: SOURSE_DIRECTORY,
        output: {
            path: BUILD_DIRECTORY,
            filename: 'js/bundle.js',
            // Плагины склеивают assets из корня 
            publicPath: '/'
        },
        plugins: [
            new DefinePlugin({
                __ENV__: JSON.stringify(NODE_ENV),
                __DEV__: NODE_ENV === 'development',
                __STAGE__: NODE_ENV === 'stage',
                __PROD__: NODE_ENV === 'production'
            })
        ]
    },
        loadJavaScript.loadJavaSCript(),
        loadImages.loadImages(),
        // ?? Посмотреть по поводу SVG
        // loadSvg.loadSvg(),
        loadFonts.loadFonts(),
        setupHtml.setupHtml(),
    );
};