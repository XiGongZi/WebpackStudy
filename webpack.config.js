const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    entry:path.join(__dirname,'./src/js/main.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,"./dist")
    },
    devServer:{
        open:true,
        port:3001,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlPlugin({
            //创建一个内存中生成html的插件
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html',
        }),
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
          { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
        ]
      }
}