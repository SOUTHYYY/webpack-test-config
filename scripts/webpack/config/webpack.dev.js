const merge = require('webpack-merge')
const {loadDevCss} = require('../modules')

// Configuration
const getCommonConfig = require('./webpack.common')


module.exports = () => {
    return merge(
        getCommonConfig(),
        {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        },
        loadDevCss()
    );
};