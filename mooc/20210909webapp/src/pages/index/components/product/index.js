import './product.css'

import render from './items.art'
import {getData} from 'api/getData';

getData('https://www.imooc.com/api/mall-wepApp/index/product?icode=J6DDC8E3E7A8BF54C').then(data => {
    console.log(data)
    if (data === undefined) {
        data = [
            {
                id: 1,
                url: './images/product_1.jpg',
                name: 'Swiper的滑动方向，可设置为水平方向切换(horizontal)或垂直方向切换(vertical)。',
                price: 999
            },
            {
                id: 1,
                url: './images/product_2.jpg',
                name: 'webpack 的配置文件是项目根目录下的 webpack.config.js。当我们在执行打包命令 npx webpack 时，webpack 会自动寻找该文件并使用其配置信息进行打包。',
                price: 122
            },
            {
                id: 1,
                url: './images/product_1.jpg',
                name: '虽然啥配置代码都不写就直接打包操作着是很爽，但是在实际项目开发中 webpack 的默认配置可能并不是随时都适用，因此我们还是要学会去更改 webpack 的这些默认配置。',
                price: 343
            },
            {
                id: 1,
                url: './images/product_2.jpg',
                name: '可使用断点（breakpoints,4.5.0后）设置不同分辨率下的切换方向。',
                price: 543
            },
        ]
    }
    document.getElementById('product-list').innerHTML = render({
        items: data
    })
})