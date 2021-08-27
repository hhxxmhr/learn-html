import './slider.css'
import BaseSlider from "./module/base";

// todo 看看轮播图
new BaseSlider(document.querySelector('.slider'), {
    initialIndex: 1,
    animation: true,
    speed: 300,
    autoplay: 0
})