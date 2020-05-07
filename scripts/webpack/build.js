// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config 
const getConfig = require('./webpack.config');

const compiler = webpack(getConfig());

compiler.run((error, stats) => {
    if (error) {
        // Ошибка конфигурации
        console.error(error.stack || error)

        if (error.details) {
            console.error(error.details)
        }

        return null
    }
    
    const info = stats.toString({
        hash: true,
        colors: true,
        version: true,
        env: true,
        modules: false,
        entrypoints: false
    });
    console.log(chalk.greenBright('✅ Build completed'));
    console.log(info);

    if(stats.hasErrors()) {
        // Ошибка во время компиляции (битый импорт, ошибка синтаксиса, etc)
        console.log(chalk.redBright('🚫 Error!'));
    }

    if(stats.hasWarnings()) {
        // Ворнинг во время компиляции
        console.log(chalk.yellowBright('⚠️ Warning!'));
    }
});