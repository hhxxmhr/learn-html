/**
 * 完美运动框架
 * @param obj 操作的对象
 * @param json 将原本的一个属性变为json格式传递，可以满足多个属性的变化控制
 * @param fnEnd 分阶段需要执行的函数
 */
function perfectStartMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let bStop = true;
        for (const attr in json) {
            let currentStyle;
            if (attr === 'opacity') {
                currentStyle = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                currentStyle = parseInt(getStyle(obj, attr));
            }
            let speed = (json[attr] - currentStyle) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 没有出现尚未完成的
            if (currentStyle !== json[attr]) {
                bStop = false;
            }

            if (attr === 'opacity') {
                obj.style.filter = 'alpha(opacity:' + currentStyle + ')';
                obj.style[attr] = (currentStyle + speed) / 100;
            } else {
                obj.style[attr] = currentStyle + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd) {
                fnEnd();
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