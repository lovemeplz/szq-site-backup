const path = require('path')
module.exports = {
  publicPath: '', // 部署应用包时的基本 URL
  filenameHashing: true, // 静态文件哈希开启
  outputDir: 'dist', // 打包文件生成目录
  assetsDir: 'assets', // 打包文件内静态资源(包括css, js, fonts)生成目录
  lintOnSave: true, // default: true,
  indexPath: 'index.html', // default: 'index.html'
  chainWebpack: chain => {
    chain
      .module
      .rule('svg')
      .include
      .add(path.resolve(__dirname, './src/icons'))
    chain.module
      .rule('svg')
      .uses
      .delete('file-loader')
    chain
      .module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    chain.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        options.limit = 1
        return options
      })
    // .options({
    //   limit: inlineLimit,
    //   name: `img/[name].[hash:8].[ext]`
    // })
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views'
      }
    }
  }
  // devServer: {
  //   proxy: 'http://localhost:8080'
  // }
}
