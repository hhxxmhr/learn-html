window.addEventListener('load', function () {
    // 获取元素
    let arrowL = document.querySelector('.arrow-l');
    let arrowR = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');
    let width = focus.offsetWidth;

    focus.addEventListener('mouseenter', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        // 鼠标移入清除定时器
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        // 开启定时器
        timer = setInterval(function () {
            // 手动调用点击事件
            arrowR.click();
        }, 2000);
    });

    // 3、动态生成小圆圈 有几张图片 就生成几个⭕️
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('.circle');
    for (let i = 0; i < ul.children.length; i++) {
        // 创建一个li
        let li = document.createElement('li');
        li.setAttribute('index', i);
        // 添加到ol里面
        ol.appendChild(li);
        // 在生成的同时 给小圆点添加点击事件
        li.addEventListener('click', function () {
            // 排他思想
            // 干掉所有小li 清除current类名
            // 后来克隆了一个图片，所以是length-1
            for (let j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            // 留下我自己 设置current类名
            this.className = 'current';

            // 点击小圆圈的时候，移动图片，就是移动ul
            // ul的移动距离：小圆圈的索引号 * 图片的宽度
            // 小圆圈的索引号 = 点击的时候可以给他设置属性
            let index = this.getAttribute('index');
            // 当点击了某个小圆点，就把这个小圆点的索引号给num.circle
            num = index;
            circle = index;
            // 向左移动，所以要加负号
            animate(ul, -index * width)

        });
    }
    // 让第一个小圆点实心
    ol.children[0].className = 'current';

    //6、克隆第一张图片（li）放到ul末尾
    let cloneNode = ul.children[0].cloneNode(true);
    ul.appendChild(cloneNode);

    // 7、点击右侧按钮，图片滚动一张,控制着下一张图片的播放
    let num = 0;
    // 8、控制小圆点,相当于小圆点的索引
    let circle = 0;
    // 9、节流阀变量，目的是不让点击过快，图片滑动过快，当动画执行结束之后，才可以继续进行；即回调函数
    let flag = true;

    arrowR.addEventListener('click', function () {
        if (flag) { // nidhuopaizaoweishenme yaozizheli
            flag = false; // 关闭节流阀
            // 如果走到最后一张图片（复制的第一张），此时ul应该快速的复原，left改为0
            if (num === ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * width, function () {
                flag = true; // 开启节流阀
            });
            // 8、点击右侧按钮，小圆圈跟随一起变化，可以再声明一下变量控制小圆圈的播放
            circle++;
            // 如果circle走到了最后一张图片（复制的图片），就复原
            if (circle === ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });

    arrowL.addEventListener('click', function () {
        if (flag) {
            flag = false;
            // 如果是第一张图片左滑之后，会走到最后一张图片（复制的第一张）
            if (num === 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * width + 'px';
            }
            num--;
            animate(ul, -num * width, function () {
                flag = true;
            });
            // 点击zuo侧按钮，小圆圈跟随一起变化，可以再声明一下变量控制小圆圈的播放
            circle--;
            // 如果circle<0,说明是第一张图片,那小圆圈要改为最后1个小圆圈
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    });

    function circleChange() {
        // 排他思想
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下我自己 设置current类名
        ol.children[circle].className = 'current';
    }

    // 自动播放功能
    let timer = setInterval(function () {
        // 手动调用点击事件
        arrowR.click();
    }, 2000);
})