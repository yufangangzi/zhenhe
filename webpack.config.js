var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //打包的入口文件  String|Object
    entry: {
        './common/main': path.resolve(__dirname,'src/index.js'),
        './jquery/jq': ['jquery']
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
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
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })//loader: 'style-loader!css-loader'//添加对样式表的处理
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
        //new webpack.optimize.CommonsChunkPlugin({
        //    name: 'commons', // 这公共代码的chunk名为'commons'
        //    filename: '[name].bundle.js', // 生成后的文件名，虽说用了[name]，但实际上就是'commons.bundle.js'了
        //    minChunks: 3, // 设定要有4个chunk（即4个页面）加载的js模块才会被纳入公共代码。这数目自己考虑吧，我认为3-5比较合适。
        //})
    ],
    externals: {
        jquery: 'window.$'
    },





};
