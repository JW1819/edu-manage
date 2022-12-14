const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        // ws: true,
        changeOrigin: true // 把请求头中的host配置为target
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        // ws: true,
        changeOrigin: true // 把请求头中的host配置为target
      }

    }
  }
})
