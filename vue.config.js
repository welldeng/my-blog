module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/vue-manage/' : '/',
    configureWebpack: {
        plugins: []
    },
    chainWebpack: config => {
        config.module
            .rule('markdown')
            .test(/\.md$/)
            .use('./markdown-loader')
            .loader('./markdown-loader/index.js')
            .end()
    }
}
