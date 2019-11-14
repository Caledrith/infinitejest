module.exports = {
  devServer: {
    // proxy: 'http://localhost:8000', develop url
    proxy: 'https://jshammon.com/',
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/infinitejest/'
    : '/',
  
}