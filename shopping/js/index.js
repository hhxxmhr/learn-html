// 页面加载完成的时候才执行
window.addEventListener('load', function () {
    // 当鼠标经过图片的时候，两个遮罩层显示
    let img = document.querySelector('.preview_image');
    let mask = document.querySelector('.mask');
    let bigger = document.querySelector('.bigger');
    img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        bigger.style.display = 'block';
    })
    img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        bigger.style.display = 'none';
    })
    // 放大镜黑跟着鼠标移动
    img.addEventListener('mousemove', function (e) {
        // 因为放大镜盒子是有定位的，他是以img盒子为基准；所以不是把鼠标的位置给放大镜，而是把鼠标在盒子里的位置给放大镜
        // 1、首先计算出鼠标在盒子里的位置，然后赋给放大镜
        // 得查看这个盒子是否有定位的父元素，如果有的话，就得到的不是盒子到浏览器的位置，而是盒子到定位父级的位置
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // 2 鼠标在盒子的中间；减去盒子高度的一半 50
        // 3、mask移动的距离
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        // 4、当遮罩层不在图片范围内，就让遮罩层位置固定
        if (maskX <= 0) {
            maskX = 0;
        }
            // maskX > (img.offsetWidth - mask.offsetWidth) 都是以左边为轴计算，当遮罩层在图片的最右边的时候，左边距离计算就是大框减去小框
        // 所以  img.offsetWidth - mask.offsetWidth 就是遮罩层的最大移动距离
        else if (maskX > (img.offsetWidth - mask.offsetWidth)) {
            maskX = img.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY > (img.offsetHeight - mask.offsetHeight)) {
            maskY = img.offsetHeight - mask.offsetHeight;
        }
        // 大图片的移动距离 = 遮罩层移动距离 * 大图片的最大移动距离 / 遮罩层的最大移动距离
        let big_img = document.querySelector('.big_img');
        big_img.style.left = -maskX * (big_img.offsetWidth - bigger.offsetWidth) / (img.offsetWidth - mask.offsetWidth) + 'px'
        big_img.style.top = -maskY * (big_img.offsetHeight - bigger.offsetHeight) / (img.offsetHeight - mask.offsetHeight) + 'px'
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

    });

    // 筋斗云
    let current = 0; // 作为筋斗云的起始位置
    let cloud = document.querySelector('.cloud');
    let navItems = document.querySelector('.navItems');
    let lis = navItems.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        // 鼠标经过，把当前li的位置作为目标值
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft);
        });
        // 鼠标离开，复原为0
        lis[i].addEventListener('mouseleave', function () {
            animate(cloud, current);
        });
        // 鼠标点击，起始位置改为当前点击li的位置
        lis[i].addEventListener('mouseleave', function () {
            current = this.offsetLeft;
        });
    }
})