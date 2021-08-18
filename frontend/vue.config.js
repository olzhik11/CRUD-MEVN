
module.exports = {
    devServer: {
        host: 'localhost',
        proxy: 'http://localhost:5000'
    },

    transpileDependencies: [
      'vuetify'
    ]
}
