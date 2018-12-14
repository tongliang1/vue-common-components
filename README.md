#### vue CDN 公共组件
问题：为什么要有vue CDN 公共组件
答：在我们项目中或者说在许多项目中会使用到一种功能比如：导入导出；
这些应该会在我们的各个项目中出现，所以我们才有CDN解决这件事情。
#### 目录介绍
node_modules文件夹 是所有的依赖项比如：vue vue-loader等等；
src文件夹项目所有的逻辑处理；
components文件夹是所有的公共组件
index.js webpack文件打包入口
package.json npm init 生成的里面是我们项目的所有依赖项的名称，用npm install来下载
webpack.config.js  webpack打包配置文件
#### 本项目用法
把所有的你想要的组件放在src的的components下,然后在index.js中引入组件看以下代码示例：
```
import helloComponent from "./components/Hello.vue"; 引入的你想要的组建
window.helloComponent=helloComponent;把引入的组件名称挂载到window上
建议：
window.component={
    helloComponent:helloComponent
}
目前只想到挂载到window上，后期有办法在改
```
以上完结后运行npm run build 进行打包，打包完毕之后会出现dist文件，把dist下的build.js上传到CDN中去
#### webpack 配置文件详解
```
var path = require('path')  require是node的一个方法，用来引入某些模块比如（fs，path，等等）
module.exports 模块导出，导出的是一个对象
entry：'./src/index.js' //webpack 入口
output //webpack 出口
output.path //想把webpack生成的放在哪儿
output.filename 生成的名字
module 对象 是决定了如何处理项目中不同类型的模块。
module.rules 一组规则，与创建模块时的请求匹配。这些规则可以修改模块的创建方式。他们可以将加载器应用于模块，或修改解析器。
module.rules:[
{
    test: /\.vue$/,  //webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.vue' 的路径」时用vue-loader转换下
    loader: 'vue-loader',//在webpack加vue的开发模式中，所谓的.vue文件浏览器也是无法解析的，那么，所谓的vue-loader也就就懂了，它只是一个让浏览器认识.vue文件的工具，
    options: {  //它可以具有options字符串或对象的属性。此值将传递给加载程序，加载程序应将其解释为加载程序选项。
        loaders: {
        'scss': 'vue-style-loader!css-loader!sass-loader', //css 类型是scss用css-loader转换下
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        }
    }
 }
 ]
 剩下的请看webpack.config.js中有解释。涉及肯定不全，请阅读webpack官方文档
```
#### 项目中用法
在vue项目中的index.html标签中引入cdn地址，在你需要这个公共组件中的页面中引入以下代码 
```
components: { helloComponent:window.helloComponent}
components vue 初始化组件  window.helloComponent 在你CDN项目挂载在window上的名字
用标签的形式展示出来请看以下代码
 <hello-component :fileds="exportFiles" @exportFile="uploadSectionFile" ref="control"></hello-component>
```
