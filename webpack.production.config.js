var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //打包的入口文件  String|Object
    entry: path.resolve(__dirname, 'src/index.js'),
    output: { //配置打包结果     Object
        //定义输出文件路径
        path: path.resolve(__dirname, 'build'),
        //指定打包文件名称
        //filename: 'bundle.js'
        //带入哈希值清除缓存
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
        //new webpack.optimize.OccurenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("[name]-[hash].css")
        //new ExtractTextPlugin("style.css")
    ],





};
