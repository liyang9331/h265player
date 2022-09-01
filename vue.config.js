const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // process.env.NODE_ENV === 'development'
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8502,
    open: true,
    hot: true, // 自动保存
    compress: true, //启用 gzip compression
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      '/api': {
        target: 'https://sppt.chfatech.com/sppt_pc', // 线上
        // target: 'https://sppt.chfatech.com/test_pc', // 测试环境
        // target: 'http://192.168.0.133:8084/sppt_pc',
        changeOrigin: true, // 是否跨域
        secure: true, // 设置支持https协议的代理
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // before: require('./mock/mock-server.js')
  },
})