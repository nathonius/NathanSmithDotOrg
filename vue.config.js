// vue.config.js
module.exports = {
    devServer: {
        port: 4000,
        disableHostCheck: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "vue$": "vue/dist/vue.min.js"
            }
        }
    }
}