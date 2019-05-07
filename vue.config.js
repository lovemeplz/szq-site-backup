module.exports = {
  publicPath: '', // 部署应用包时的基本 URL
  filenameHashing: true, // 静态文件哈希开启
  outputDir: 'dist', // 打包文件生成目录
  assetsDir: 'assets', // 打包文件内静态资源(包括css, js, fonts)生成目录
  lintOnSave: true, // default: true,
  indexPath: 'index.html', // default: 'index.html'
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
