// 进化
// 简单函数的动画封装 obj目标对象 target 目标位置
// 性能优化： 给不同放入元素指定不同的定时器
// 利用元素的属性
// 好处：1、避免了let interval声明变量，不再去内存里开辟空间了，obj已经存在，给他添加一个属性interval
// 2、每个元素都有自己的专属定时器，而不是每一个元素的定时器都叫interval
function animate(obj, target, callback) {
    // 当我们不断的点击按钮 这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方案就是：让我们元素只有一个定时器执行
    // 即：先清除之前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.interval);
    obj.interval = setInterval(function () {
        // 缓慢动画：步长值写在定时器里面
        // 需要将步长值取整，否则到达不了终点
        // 步长的值可能正值（往右走），可能负值（往左走）。
        // 正值：向上取整；负值：向下取整
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft === target) {
            // 停止动画 = 清除定时器
            clearInterval(obj.interval);

            // 回调函数写到定时器结束里面
            /*if (callback) {
                callback(); // 函数调用
            }*/
            callback && callback();
        }
        // 匀速动画：当前位置每次加1
        // obj.style.left = obj.offsetLeft + 1 + 'px';
        // 缓慢动画：把每次加1 这个步长值改为一个慢慢变小的值  步长：（目标值-现在的位置）/10  这也是步长公式
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}