const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    mode: 'development',
    // webpack 入口文件
    entry: {
        // 可以省略了后面的/index.js
        index: './src/pages/index',
        destination: './src/pages/destination'
    },
    // webpack 输出路径
    output: {
        // 输出的目录
        path: resolve('dist'),
        // 输出的文件名
        filename: 'js/[name].js'
    },
    // source-map,调试用的，出错的时候直接定位到原始代码，而不是转换后的代码
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        // 自动补全（可以省略）的扩展名
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            icons: resolve('src/assert/icons'),
            styles: resolve('src/assert/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages'),
            utils: resolve('src/utils')
        }
    },
    // 不同类型模块的处理规则
    module: {
        rules: [
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 模版文件
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            // 图片
            {
                test: /\.(jpg|jpe?g|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    // 小于10k的图片转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            },
            // 字体
            {
                test: /\.(woff2?|eto|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    // 小于10k的图片转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'fonts/[name].[ext]',
                    esModule: false
                }
            },
        ]
    },
    plugins: [
        // 因为配置时entry是多入口文件，所以在plugins里面需要加上chunks
        // 在html文件里面通过<script src="main.js"></script>引入js文件
        // 自动将依赖注入html模版，并输出最终的html文件到目录文件夹
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.art',
            filename: 'index.html',
            // 区分index.html页面只会引入index.js
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/destination/destination.art',
            filename: 'destination.html',
            // 只会引入自己响应的index.js
            chunks: ['destination']
        }),

    ]
}