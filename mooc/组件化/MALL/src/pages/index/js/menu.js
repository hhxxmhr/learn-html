(function () {
    // 利用冒泡机制对li进行事件监听
    let ul = document.getElementById('banner-nav-ul');
    let lis = ul.getElementsByTagName('li');
    let menus = document.querySelectorAll('.menus-box .menu');
    let bannerNav = document.getElementById('banner-nav');
    // 此处不能使用enter，因为它不冒泡
    ul.onmousemove = function (ev) {
        if (ev.target.tagName.toLowerCase() === 'li') {
            //当前点击的这个元素添加current样式
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            ev.target.className = 'current';
            let t = ev.target.getAttribute('data-t');
            // 匹配data-t属性值是t的menu
            let targetMenu = document.querySelector('.menus-box .menu[data-t=' + t + ']');
            // 给targetMenu添加上current样式，其他的没有，即排他思想
            for (let i = 0; i < menus.length; i++) {
                menus[i].className = 'menu';
            }
            targetMenu.className = 'menu current';
        }
    }

    // 当鼠标离开大盒子的时候，菜单关闭;清除两个地方的current样式
    bannerNav.onmouseleave = function () {
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
            menus[i].className = 'menu';
        }
    }
})()