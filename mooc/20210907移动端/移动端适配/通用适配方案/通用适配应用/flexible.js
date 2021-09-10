(function () {
    'use strict';
    /*通用适配是在简单适配的原理之上的进一步加工*/
    /*dpr的数值，影响viewport里的缩放值*/
    const docEl = document.documentElement;
    // 设置最大宽度和最小宽度，到一定宽度之后，字体就不再变化
    const maxWidth = '540';
    const minWidth = '320';
    // 获取name=viewport的meta标签元素
    const viewportEl = document.querySelector('meta[name=viewport]');
    // 获取dpr
    let dpr = window.devicePixelRatio || 1;
    dpr = dpr > 3 ? 3 : (dpr > 2 ? 2 : 1);
    console.log(dpr);
    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('data-max-width', maxWidth);
    docEl.setAttribute('data-min-width', minWidth);
    // 缩放
    const scale = 1 / dpr;
    // viewportEl的content
    const content = `width=device-width,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`
    console.log(content);
    // 设置viewportEl的content
    if (viewportEl) {
        viewportEl.setAttribute('content', content);
    } else {
        // 添加元素
        let meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'content');
        document.head.appendChild(meta);
    }

    setRemUnit();
    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        // 固定系数
        const ratio = 18.75;
        // 视口宽度
        let viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;
        // viewWidth 和最大宽度、最小宽度的关系
        console.log(viewWidth);
        if (maxWidth && maxWidth * dpr < viewWidth) {
            viewWidth = maxWidth * dpr;
        } else if (minWidth && minWidth * dpr > viewWidth) {
            viewWidth = minWidth * dpr;
        }
        // html的字体大小
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})()