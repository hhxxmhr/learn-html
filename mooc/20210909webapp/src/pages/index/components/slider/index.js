// 引入swiper的css文件，是通过npm安装的，所以在node_modules里面，
// 这个目录就直接写成这样就可以，webpack会去别名目录和node_modules里找
import 'swiper/swiper-bundle.min.css'
import './slider.css'

// 引入swiper的js文件
import Swiper from "swiper/swiper-bundle.min";

// https://www.swiper.com.cn/api/index.html
new Swiper('.swiper-container', {
    // 循环模式选项目
    loop: true,
    // 是否需要分页器
    pagination: {
        el: '.swiper-pagination'
    },
    // 是否需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // 是否需要滚动条
    /*scrollbar: {
        el: '.swiper-scrollbar'
    }*/
})