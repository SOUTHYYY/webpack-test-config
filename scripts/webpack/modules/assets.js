// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.setupHtml = () => ({
  plugins: [
    // Каждый плагин вызывается как конструктор
    new HtmlWebpackPlugin({
      template: './static/index.html',
      title: 'Webpack 🚀'
    })
  ],
})