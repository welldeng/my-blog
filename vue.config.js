module.exports = {
    configureWebpack: {
        plugins: [
        ]
    },
    chainWebpack: config => {
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use('./markdown-loader/loader')
            .loader('./markdown-loader/index.js')
            .end()
    }
}