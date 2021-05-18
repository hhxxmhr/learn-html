window.addEventListener('load', function () {
    // 1、获取元素
    let focus = document.querySelector('.focus'); // 大盒子
    let ul = focus.children[0]; // 移动的对象
    // 获得focus的宽度
    let focusWidth = focus.offsetWidth;
    // 小圆点
    let ol = focus.children[1];

    // 2、利用定时器自动轮播图图片
    let index = 0;
    let timer = setInterval(function () {
        index++;
        let x = -index * focusWidth;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + x + 'px)';
    }, 2000);

    // 图：   图三 图一 图二 图三 图一
    // index：-1   0    1   2   3
    // 等着过渡效果完成之后，再去判断，监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend', function () {
        // 如果走到了最后一张图片，快速移动转为图一
        if (index >= 3) {
            index = 0;
            // 清除过渡
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度，移动图片
            let x = -index * focusWidth;
            ul.style.transform = 'translateX(' + x + 'px)';
        } else if (index < 0) {
            // 如果反方向划到了图三，就立刻快速移动到图三
            index = 2;
            // 清除过渡
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度，移动图片
            let x = -index * focusWidth;
            ul.style.transform = 'translateX(' + x + 'px)';
        }

        // 3、小圆点跟随变换
        // 将ol里面li带有current类名的选出来去掉类名 remove
        // 让当前索引号 的小li加上current add
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    });

    // 4、手指滑动轮播图
    let startX = 0; // 初始x
    let moveX = 0; // 移动x
    let flag = false; // 用户手指是否移动过
    // 触摸元素 touchstart:获取手指初始坐标
    ul.addEventListener('touchstart', function (e) {
        // 清除定时器
        clearInterval(timer);
        startX = e.targetTouches[0].pageX;
    });
    // 移动手指 touchmove:计算手指的移动距离，并且移动盒子
    ul.addEventListener('touchmove', function (e) {
        flag = true; // 用户手指移动
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：盒子原来的位置 + 手指移动的距离
        let x = -index * focusWidth + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + x + 'px)';
        e.preventDefault(); // 阻止滚动屏幕的执行
    });

    // 5、手指离开 根据移动距离去判断是回弹还是播放上一张/下一张
    ul.addEventListener('touchend', function (e) {
        if (flag) {
            // 如果移动距离大于50，我们就播放上一张/下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑，播放上一张，moveX是正值
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                let x = -index * focusWidth;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + x + 'px)';
            } else {
                // 回弹
                let x = -index * focusWidth;
                ul.style.transform = 'translateX(' + x + 'px)';
            }
        }

        // 手指离开的时候就重启定时器
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            let x = -index * focusWidth;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + x + 'px)';
        }, 2000);
    });

    // 返回顶部模块
    let back = document.querySelector('.back');
    let nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset >= nav.offsetTop) {
            back.style.display = 'block';
        } else {
            back.style.display = 'none';
        }
    });

    back.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})