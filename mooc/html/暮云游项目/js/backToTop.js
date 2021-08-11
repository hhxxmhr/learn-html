(function () {
    let timer;
    let backToTop = document.getElementById('backToTop');
    backToTop.onclick = function () {
        // 设表先关
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer)
            }
        }, 20);
    }


    // 滚动监听
    window.onscroll = function () {
        let scrollTop = document.documentElement.scrollTop || window.scrollY;
        if (scrollTop === 0) {
            backToTop.style.display = 'none';
        }else {
            backToTop.style.display = 'block';
        }
    }
})()