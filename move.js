function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let currentStyle = 0;
        if (attr === 'opacity') {
            currentStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            currentStyle = parseInt(getStyle(obj, attr));
        }
        let speed = (iTarget - currentStyle) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (currentStyle === iTarget) {
            clearInterval(obj.timer);
        } else {
            if (attr === 'opacity') {
                obj.style.filter = 'alpha(opacity:' + currentStyle + ')';
                obj.style[attr] = (currentStyle + speed) / 100;
            } else {
                obj.style[attr] = currentStyle + speed + 'px';
            }
        }
    }, 30);
}
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}