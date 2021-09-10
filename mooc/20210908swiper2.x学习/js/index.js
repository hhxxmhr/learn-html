// demo1
// let swiper = new Swiper('.swiper-container', {mode: 'vertical'});

//demo2
/*var mySwiper = new Swiper('.swiper-container', {
    progress: true,
    onProgressChange: function (swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            var slide = swiper.slides[i];
            var progress = slide.progress;
            swiper.setTransform(slide, 'translate3d(0px,0,' + (-Math.abs(progress * 1500)) + 'px)');
        }
    },
    onTouchStart: function (swiper) {
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.setTransition(swiper.slides[i], 0);
        }
    },
    onSetWrapperTransition: function (swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
            swiper.setTransition(swiper.slides[i], speed);
        }
    }
})*/

//demo3
/*
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    //Enable 3D Flow
    tdFlow: {}
})*/

//demo4
// var mySwiper = new Swiper('.swiper-container', {
//     //Enable Scrollbar
//     scrollbar: {
//         container: '.swiper-scrollbar',
//         hide: false,
//         draggable: true
//     }
// })

// tab 综合实例 demo5
// 获取导航栏
let tab = document.getElementById('tab');

const mySwiper = new Swiper('.swiper-container', {
    onSlideChangeStart: function (swiper) {
        console.log(swiper.activeIndex)
        for (let i = 0; i < tab.children.length; i++) {
            tab.children[i].classList.remove('tab-item-active')
        }
        tab.children[swiper.activeIndex].classList.add('tab-item-active')
    }
});

tab.addEventListener('click', function (ev) {
    console.log(ev.target)
    if (ev.target.tagName.toLowerCase() === 'a') {
        console.log(123)
        let index = ev.target.getAttribute('data-index');
        console.log(index)
        mySwiper.swipeTo(index);
        for (let i = 0; i < tab.children.length; i++) {
            tab.children[i].classList.remove('tab-item-active')
        }
        tab.children[index].classList.add('tab-item-active')
    }
}, false)
