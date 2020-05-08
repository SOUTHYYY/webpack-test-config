module.exports = (api) => {
    const env = api.env()

    api.cache.never() //TODO:

    const plugins = ['@babel/plugin-proposal-class-properties']

    if (env === 'development') {
        plugins.push('react-hot-loader/babel')
    }
    /**
     * DEVELOPMENT (react-hot-loader)
     * OR
     * PRODUCTION (react-hot-loader не нужен)
    **/

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                    spec: true, // specification, делает код более медленным, но долее надежным
                    loose: false, // делает код более быстрым, но отходит от стандарта
                    modules: false, // Приводит код к единому модулю, пример - commonJS 'cjs' (Лучше держать в false)
                }
            ],
            [
                '@babel/preset-react'
            ]
        ],
        plugins: plugins
    }
}