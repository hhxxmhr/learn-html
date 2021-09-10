const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    //ERROR in ./src/index.css 1:5
    // Module parse failed: Unexpected token (1:5)
    // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
    // See https://webpack.js.org/concepts#loaders
    // > body {
    // |     background-color: red;
    // | }
    //  @ ./src/index.js 1:0-20
    module: {
        rules: [
            /*{
                test: /\.css$/,
                loader: 'css-loader'
            }*/
            /*{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //use后面既可以是一个对象，也可以是一个数组，没有option的参数配置的话，可以直接数组
                // 从右向左实现，注意顺序
            }*/
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
                //use后面既可以是一个对象，也可以是一个数组，没有option的参数配置的话，可以直接数组
                // 从右向左实现，注意顺序
            }
        ]
    },
    plugins: [
        // 在html文件里面通过<script src="main.js"></script>引入js文件
        new HtmlWebpackPlugin({
            template: 'index.art',
            filename: 'index.art'
        }),
        // 这个只需要在output的时候输出就行了，不需要引入
        // 服从output指挥，放在dist目录下
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}
// 1、以上就可以将index.js打包到dist目录下面
// 2、但是还需要将css文件引入到index.html 里,所以引入插件
// 3、识别不了.css文件，需要再配置loader
// 4、webpack打包成功，虽然识别了css模块，但是没有处理，要么<style>内敛标签引入，要么<link>引入。
// 所以现在还需要一个style-loader,<style></style>方式
// 5、如果想要是<link>方式引入css文件，就使用MiniCssExtractPlugin这个插件
// 5.1 此时loader那里就有需要修改，不再使用style.loader,而是MiniCssExtractPlugin.loader