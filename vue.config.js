const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
const path = require('path')
module.exports = {
  //不生成map文件
  productionSourceMap: false,

  publicPath: BASE_URL,

  // 关闭eslint代码检查
  lintOnSave: false,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        //注意：试过不能使用别名路径
        path.resolve(__dirname, './src/assets/less/base.less'),
      ]
    }
  }
}
