/**
 * 轮播图的特效
 */
(function () {
    // 轮播--得到元素
    let carousel = document.getElementById('carousel');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    // 设置小圆点样式--得到元素
    let circle = document.getElementById('circle');
    let lis = circle.getElementsByTagName('li');
    // 定时器自动轮播--得到元素
    let banner = document.getElementById('banner');

    // 克隆第一张图片
    let node = carousel.firstElementChild.cloneNode(true);
    // 追加上树
    carousel.appendChild(node);

    // 函数节流的锁
    let lock = true;

    // 当前显示的图片的序号，从0开始
    let idx = 0;
    //右按钮事件监听
    right.onclick = rightBtnHandler;

    // 右按钮的事件触发函数
    function rightBtnHandler() {
        // 判断节流所的状态，如果是关闭的，那就什么都不做
        if (!lock) return;
        // 关锁
        lock = false;
        carousel.style.transition = 'transform .5s ease 0s';
        idx++;
        carousel.style.transform = 'translateX(' + -16.666 * idx + '%)';
        // 判断是否到了最后一张图片，如果是的话，就要瞬间移动回来
        if (idx > 4) {
            setTimeout(function () {
                // 去除掉过渡
                carousel.style.transition = 'none';
                // 删除transform属性
                carousel.style.transform = 'none';
                // 全局序号变为0
                idx = 0;
            }, 500)
        }
        // 设置小圆点
        setCircles();
        // 开锁，动画结束之后开锁
        setTimeout(function () {
            lock = true;
        }, 500);
    }

    //左按钮事件监听
    left.onclick = function () {
        if (!lock) return;
        lock = false;
        // 左按钮很特殊，要先写if语句，而不是idx--
        if (idx === 0) {
            // 去除掉过渡
            carousel.style.transition = 'none';
            // 拉动（瞬移动到最后）
            carousel.style.transform = 'translateX(' + -16.666 * 5 + '%)';

            // 改变idx的值
            idx = 4;
            // 小技巧，延时0毫秒非常有用，可以让刚刚发生的瞬移发生之后，再把过渡加上
            setTimeout(function () {
                carousel.style.transition = 'transform .5s ease 0s';
                carousel.style.transform = 'translateX(' + -16.666 * 4 + '%)';
            }, 0)
        } else {
            idx--;
            // 拉动
            carousel.style.transform = 'translateX(' + -16.666 * idx + '%)';
        }
        // 函数节流
        setTimeout(function () {
            lock = true;
        }, 500);
        // 设置小圆点
        setCircles();
    }

    // 设置小圆点current在谁身上，序号为idx的小圆点才有current类名，其他li都没有
    function setCircles() {
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
            // todo idx % 5 这里的技巧，如果只使用idx,在右按钮里面存在idx=5的情况
            // 1\2\3\4处以5的余数都是它本身，但是5除以5等于0了
            // 这里%5的目的就是为了右按钮他有一瞬间，idx会成为5，500毫秒之后才变为0
            if (i === idx % 5) {
                lis[i].className = 'current';
            }
        }
    }


    // 事件委托，小圆点的监听
    circle.onclick = function (ev) {
        if (ev.target.tagName.toLowerCase() === 'li') {
            // 改变idx
            idx = ev.target.getAttribute('data-n');
            // 拉动
            carousel.style.transform = 'translateX(' + -16.666 * idx + '%)';
            // 小圆点
            setCircles();
        }
    }

    // 定时器，自动轮播
    let timer = setInterval(rightBtnHandler, 2000);
    // 鼠标进入，轮播暂停
    banner.onmouseenter = function () {
        clearInterval(timer);
    }
    // 鼠标离开，轮播开始
    banner.onmouseleave = function () {
        // 设表先关
        clearInterval(timer);
        timer = setInterval(rightBtnHandler, 2000);
    }
})()