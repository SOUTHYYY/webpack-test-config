const merge = require('webpack-merge')

// Configuration
const getCommonConfig = require('./webpack.common')


module.exports = () => {
    return merge(getCommonConfig(), {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
    });
};