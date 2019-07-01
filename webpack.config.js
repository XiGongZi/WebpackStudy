const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
// import VueResource from 'vue-resource';


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
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            "jquery":"jquery",
            "window.jQuery":"jquery"
        }),
    ],
    module: { // 这个节点，用于配置 所有 第三方模块 加载器 
        rules: [ // 所有第三方模块的 匹配规则
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
          { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
          { test: /\.(jpg|png|gif|bmp|jpeg|ico)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
          { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
        ]
      }
}