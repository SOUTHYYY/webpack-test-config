// Core
const merge = require('webpack-merge')

// Consts
const { BUILD_DIRECTORY, SOURSE_DIRECTORY } = require('../constants')

// Modules 
const { loadJavaScript, setupHtml, loadCss } = require('../modules')


/**
 * ТИПЫ КОНФИГОВ WEBPACK
 * Object
 * Function
 * Promise
**/

module.exports = () => {
    return merge({
        entry: SOURSE_DIRECTORY,
        output: {
            path: BUILD_DIRECTORY,
            filename: 'bundle.js'
        },
        mode: 'none',
        entry: './src/index.js',
    },
        loadJavaScript.loadJavaSCript(),
        setupHtml.setupHtml(),
        loadCss.loadCss()
    );
};