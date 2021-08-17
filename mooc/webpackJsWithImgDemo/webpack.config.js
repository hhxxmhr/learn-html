let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {publicPath: '../'}
                }, 'css-loader']
                // 因为打包后的main.css在css文件下，所以他访问别的资源的话，就需要配置一下正确的路径啦
                // 这里配置publicPath就可以让URL里面的路径变成 ../xxx.jpg,这样就正确了
                // background: url(e50b0f21cf3454860d1748cd93e3de11.jpg) no-repeat;
            },
            {
                // 意义：如果没有处理的话，发不上去就找不到图片
                // 1、将图片从源码中复制一份到发布目录dist里面，
                // 2、将图片的地址替换为打包后的正确路径
                test: /\.(jpg|png|gif)$/,
                // use: 'file-loader'
                // 将复制的图片也单独放到一个image文件里
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'image/[name].[ext]',
                        esModule: false
                    }
                }
            },
        ]
    },
    plugins: [
        // 在html文件里面通过<script src="main.js"></script>引入js文件
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        // 这个只需要在output的时候输出就行了，不需要引入
        // 服从output指挥，放在dist目录下
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}