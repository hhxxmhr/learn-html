let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    mode: 'development',
    entry: './src/pages/index/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        // 自动补全（可以省略的）扩展名
        extensions: ['.js'],
        // 路径别名
        alias: {
            api: resolve('src/api'),
            fonts: resolve('src/assets/fonts'),
            images: resolve('src/assets/images'),
            styles: resolve('src/assets/styles'),
            components: resolve('src/components'),
            pages: resolve('src/pages')
        }
    },
    // 不同模块的文件处理规则
    module: {
        rules: [
            // css，后者处理的结果前者，嵌入到我们的页面中
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
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 小于10k的图片转成base64编码的dataURL字符串写到代码中
                    limit: 10000,
                    // 其他的图片转移到
                    name: 'image/[name].[ext]',
                    esModule: false
                }

            },
            // 字体文件
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
        // 在html文件里面通过<script src="main.js"></script>引入js文件
        // 依赖注入模版
        new HtmlWebpackPlugin({
            template: './src/pages/index/index.art',
            filename: 'index.html'
        }),
    ]
}