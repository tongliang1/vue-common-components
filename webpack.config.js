
var path = require('path') //获取node路径
module.exports = {
  entry: './src/index.js', //webpack 入口
  output: { //webpack 出口
    path: path.resolve(__dirname, './dist'), //我们想要 bundle 生成到哪里
    publicPath: '/dist/', //
    filename: 'build.js' //生成的名字
  },
  module: { // module 对象  这些选项决定了如何处理项目中不同类型的模块。
    rules: [  //一组规则，与创建模块时的请求匹配。这些规则可以修改模块的创建方式。他们可以将加载器应用于模块，或修改解析器。
      {
        test: /\.vue$/,  //webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.vue' 的路径」时用vue-loader转换下
        loader: 'vue-loader',//在webpack加vue的开发模式中，所谓的.vue文件浏览器也是无法解析的，那么，所谓的vue-loader也就就懂了，它只是一个让浏览器认识.vue文件的工具，
        options: {  //它可以具有options字符串或对象的属性。此值将传递给加载程序，加载程序应将其解释为加载程序选项。
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader', //css 类型是scss用css-loader转换下
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'  //webback 运行时的预编译
    }
  },
  performance: { //配置性能提示的显示方式。例如，如果您的资产超过250kb，webpack将发出警告通知您。
    hints: false //配置性能提示开启关闭
  }
}

