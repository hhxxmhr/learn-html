import './backtop.css'
import 'icons/iconfont.css'
import Scroll from "../../utils/scroll";

class Backtop {
    // 改变样式的el元素、滚过页面高度多少、滚动轴容器、事件监听的元素（不总是和滚动轴容器一致，当滚动轴在html/body上的时候，就是document.XXXXXX）
    constructor(el, point, scrollContainer, eventEl = scrollContainer) {
        this.el = el;
        // 滚动条所在的容器
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        new Scroll({
            point,
            change: () => {
                this.show();
            },
            reset: () => {
                this.hide();
            }
        }, scrollContainer)
        // 绑定事件
        this.bindEvent();
    }

    // 绑定事件
    bindEvent() {
        console.log(this.el)
        // 点击事件
        this.el.addEventListener('click', () => {
            this.scrollTo();
        }, false);
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top: top,
            left: left,
            behavior: 'smooth'
        })
    }

    // 显示
    show() {
        this.el.classList.remove('backtop-hidden');
    }

    // 隐藏
    hide() {
        this.el.classList.add('backtop-hidden');
    }

}

export default Backtop;