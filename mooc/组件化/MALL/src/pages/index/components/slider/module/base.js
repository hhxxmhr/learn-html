import {ELEMENT_NODE_TYPE} from './constants'
import DEFAULTS from "./defaults";

class BaseSlider {
    constructor(el, options) {
        if (el.nodeType !== ELEMENT_NODE_TYPE) {
            throw new Error('实例化的时候，请传入DOM元素');
        }

        // 实际参数，自定义的参数覆盖默认参数
        this.options = {
            ...DEFAULTS,
            ...options
        }

        // 获取dom
        const sliderEl = el;
        let sliderContentEl = sliderEl.querySelector('.slider-content');
        let sliderItemEls = sliderContentEl.querySelectorAll('.slider-item');

        // 添加到this上，为了在方法中使用
        this.sliderEl = sliderEl;
        this.sliderContentEl = sliderContentEl;
        this.sliderItemEls = sliderItemEls;

        // 图片最大索引和最小索引
        this.minIndex = 0;
        this.maxIndex = sliderItemEls.length - 1;
        // 当前索引
        this.currentIndex = this.getCorrectedIndex(this.options.initialIndex);

        // 每个slider-item的宽度（即每次移动的距离）
        this.itemWidth = this.sliderItemEls[0].offsetWidth;
        this.init();
    }

    // 初始化
    init() {
        // 为每个slider-item设置宽度
        this.setItemsWidth();
        // 为slider-content设置宽度
        this.setContentWidth();
        // 切换到初始索引initialIndex
        this.move(this.getDistance());
        // 开启动画
        if (this.options.animation) {
            this.openAnimation();
        }
        // 自动切换
        if (this.options.autoplay) {
            this.autoplay();
        }
    }

    autoplay() {
        const {autoplay} = this.options;
        if (autoplay <= 0) return;
        this.pause();
        this.timer = setInterval(() => {
            this.next();
        }, autoplay);
    }

    // 暂停自动切换(当鼠标移动到上面的时候)
    pause() {
        clearInterval(this.timer);
    }

    // 切换下一张
    next() {
        this.to(this.currentIndex + 1)
    }

    // 切换上一张
    pre() {
        this.to(this.currentIndex - 1)
    }

    // 根据索引切换图片
    to(index) {
        let correctedIndex = this.getCorrectedIndex(index);
        if (correctedIndex === this.currentIndex) return;
        this.currentIndex = correctedIndex;
        // 计算距离
        const distance = this.getDistance();
        // 判断是否有动画，再去移动
        if (this.options.animation) {
            this.moveWithAnimation(distance);
        } else {
            this.move(distance);
        }
    }

    openAnimation() {
        this.sliderContentEl.classList.add('slider-animation');
    }

    // 关闭动画
    closeAnimation() {
        this.setAnimationSpeed(0);
    }

    // 设置切换动画速度
    setAnimationSpeed(speed = this.options.speed) {
        this.sliderContentEl.style.transitionDuration = `${speed}ms`
    }

    // 获取移动的距离
    getDistance(index = this.currentIndex) {
        return -this.itemWidth * index;
    }

    // 不带动画的移动，瞬间移动
    move(distance) {
        this.sliderContentEl.style.transform = `translate3d(${distance}px,0px,0px)`
    }

    //带动画的移动
    moveWithAnimation(distance) {
        this.setAnimationSpeed();
        this.move(distance);
        // 监听动画结束之后，动画速度还要变成0，否则会对不带动画的移动产生影响
        this.sliderContentEl.addEventListener('transitionend', () => {
            this.closeAnimation();
        }, false);
    }

    setItemsWidth() {
        for (let sliderItemEl of this.sliderItemEls) {
            sliderItemEl.style.width = this.itemWidth + 'px';
        }
    }

    setContentWidth() {
        this.sliderContentEl.style.width = `${this.itemWidth * this.sliderItemEls.length}px`
    }

    // 获取修正后的图片索引值
    getCorrectedIndex(index) {
        // 如果小于最小的索引，就划到最大索引那张
        if (index < this.minIndex) {
            return this.maxIndex;
        }
        if (index > this.maxIndex) {
            return this.minIndex;
        }
        return index;
    }
}

export default BaseSlider;