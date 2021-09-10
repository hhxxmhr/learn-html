let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // webpack 入口文件
    entry: {
        index: './src/index.js',
        list: './src/list.js'
    },
    // webpack 出口文件
    output: {
        // 输出的目录
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件名
        filename: 'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            // 模版文件,两个作用  1、帮webpack识别art文件  2、是webpack和art-template之间的接口，让art-template去干活
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            }

        ]
    },
    plugins: [
        // 自动将依赖注入html模版，并输出最终的html文件到目标目录
        // 在html文件里面通过<script src="main.js"></script>引入js文件
        new HtmlWebpackPlugin({
            template: './src/index.art',
            filename: 'index.art',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/list.art',
            filename: 'list.html',
            chunks: ['list']
        }),
    ]
}