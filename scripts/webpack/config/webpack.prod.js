const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')

// Consts
const { BUILD_DIRECTORY, PROJECT_ROOT } = require('../constants')

// Confing
const getCommonConfig = require('./webpack.common')

let cleanOptions = {
    verbose: true,
    root: PROJECT_ROOT
}

module.exports = () => {
    return  merge(getCommonConfig(), {
        mode: 'production',
        devtool: false,
        entry: './src/index.js',
        plugins: [ new CleanWebpackPlugin({ BUILD_DIRECTORY, cleanOptions }) ]
    });
};