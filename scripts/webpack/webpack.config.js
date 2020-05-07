const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Consts
const { BUILD_DIRECTORY, SOURSE_DIRECTORY, PROJECT_ROOT } = require('./constants')

let cleanOptions = {
    verbose: true,
    root: PROJECT_ROOT
}

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
        devtool: false,
        entry: './src/index.js',
        plugins: [
            // Каждый плагин вызывается как конструктор
            new HtmlWebpackPlugin({
                template: './static/index.html',
                title: 'Webpack 🚀'
            }),
            new CleanWebpackPlugin({ BUILD_DIRECTORY, cleanOptions }),
            new MiniCssExtractPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        }
    };
};