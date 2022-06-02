'use strict'
// http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const fs = require('fs')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {
    //     // 这里配置 '/api' 就等价于 target , 你在链接里访问 /api === http://localhost:54321
    //     '/api': {
    //       target: 'https://dsp.ja39.7890010.com',
    //       secure: true, // 如果是 https ,需要开启这个选项
    //       changeOrigin: true, // 是否是跨域请求?肯定是啊,不跨域就没有必要配置这个proxyTable了.
    //       pathRewrite: { // 重写路径  例如浏览器请求地址http://localhost:12345/xxx,实际请求的是你代理的地址：http:xxx/11111
    //         // 这里是追加链接,比如真是接口里包含了 /api,就需要这样配置.
    // 　　　　　　'^/api': '', // 和下边两种写法，因人而异根据需求。
    // 　　　　　　// 等价于    /api + /api  ==  http://localhost:54321/api
    // 　　　　　　// 如果写为 '^/api' : '/'
    // 　　　　　　// 等价于   /api + /  ==  http://localhost:54321/
    // 　　　　　　// 这里的 /api ==  http://localhost:54321
    // 　　　　}
    // 　　},
    //   '/ajax': {
    //         target: 'https://dsp.ja39.7890010.com',
    //         secure: true, // 如果是 https ,需要开启这个选项
    //         changeOrigin: true, // 是否是跨域请求?肯定是啊,不跨域就没有必要配置这个proxyTable了.
    //         pathRewrite: { // 重写路径  例如浏览器请求地址http://localhost:12345/xxx,实际请求的是你代理的地址：http:xxx/11111
    //           // 这里是追加链接,比如真是接口里包含了 /api,就需要这样配置.
    //   　　　　　　'^/ajax': '', // 和下边两种写法，因人而异根据需求。
    //   　　　　　　// 等价于    /api + /api  ==  http://localhost:54321/api
    //   　　　　　　// 如果写为 '^/api' : '/'
    //   　　　　　　// 等价于   /api + /  ==  http://localhost:54321/
    //   　　　　　　// 这里的 /api ==  http://localhost:54321
    //   　　　　}
    // 　　}
    // },
    // Various Dev Server settings

    // can be overwritten by process.env.HOST
    // if you want dev by ip, please set host: '0.0.0.0'
    host: 'localhost',
    port: 8894, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    useEslint: false,
    showEslintErrorsInOverlay: false,
    // https: {
    //     cert: fs.readFileSync(path.join(__dirname, 'pem/7296000_bendi.tydcdn.com.pem')),
    //     key: fs.readFileSync(path.join(__dirname, 'pem/7296000_bendi.tydcdn.com.key'))
    // },
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-source-map',
    cssSourceMap: false
  },

  build: {

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // View the bundle analyzer report after build finishes:
    // `npm run build:prod --report`
    bundleAnalyzerReport: process.env.npm_config_report || false,

    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}