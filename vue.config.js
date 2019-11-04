module.exports = {
  devServer: {
    proxy: 'http://localhost:8000',
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/infinitejest/'
    : '/',
  
}