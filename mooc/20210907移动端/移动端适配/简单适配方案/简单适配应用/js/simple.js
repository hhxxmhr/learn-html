(function () {
    'use strict';
    setRemUnit();
    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        // 固定系数
        const ratio = 18.75;
        // 视口宽度
        const docEl = document.documentElement;
        let viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;
        // html的字体大小
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})()