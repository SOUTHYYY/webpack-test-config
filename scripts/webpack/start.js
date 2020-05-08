// Core
const webpack = require('webpack');
const chalk = require('chalk');
const devServer = require('webpack-dev-server')
const hot = require('webpack-hot-middleware')

// Config 
const getDevConfig = require('./config/webpack.dev');

// Constants
const { HOST, PORT } = require('./constants')

// Utils
const { choosePort } = require('./utils')

const compiler = webpack(getDevConfig());

(async () => {
    try {
        choosePort(PORT)
            .then((port) => {
                if (!port) {
                    console.log(chalk.yellowBright('It\'s possible ti run the app'))
                    return
                }
                const server = new devServer(compiler, {
                    host: HOST,
                    port: port,
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

                server.listen(port, HOST, () => {
                    console.log(
                        `${chalk.greenBright('Server is listening on ✅')} ${chalk.greenBright(
                            `http://${HOST}:${port}`
                        )}`
                    )
                })
            })
    } catch (err) {
        console.log(chalk.redBright('Error!'))
        console.error(error.message || error)
    }

})()