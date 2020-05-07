// Core
const webpack = require('webpack');
const chalk = require('chalk');
const devServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')

// Config 
const getConfig = require('./webpack.config');

// Constants
const { HOST, PORT } = require('./constants')

const compiler = webpack(getConfig());


const server = new devServer(compiler, {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    overlay: true,
    quiet: true,
    clientLogLevel: 'none',
    noInfo: true,
    after: (app) => {
        app.use(
            hot(compiler, {
                log: false
            })
        )
    }
})

server.listen(PORT, HOST, (error) => {

    console.log(
        `${chalk.greenBright('Server is listening on ✅')} ${chalk.greenBright(
            `http://${HOST}:${PORT}`
        )}`
    )
})