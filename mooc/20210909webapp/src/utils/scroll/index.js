import {INIT_STATE, CHANGED_STATE} from "./constants";
import DEFAULTS from "./defaults";

class Scroll {
    // 改变样式的el元素、滚过页面高度多少、滚动轴容器、事件监听的元素（不总是和滚动轴容器一致，当滚动轴在html/body上的时候，就是document.XXXXXX）
    constructor(options, scrollContainer, eventEl = scrollContainer) {
        // 滚动条所在的容器
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;
        // 具体要做出的改变
        this.optons = {...DEFAULTS, ...options};
        // 设置初始状态
        this.setState(INIT_STATE);
        // 绑定事件
        this.bindEvent();
    }

    // 设置状态
    setState(state) {
        this.state = state
    }

    // 绑定事件
    bindEvent() {
        const {change, reset} = this.optons;
        this.eventEl.addEventListener('scroll', () => {
            // 需要利用状态 限制scroll的多次执行
            if (this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.optons.point) {
                if (typeof change === 'function') {
                    change();
                }
                this.setState(CHANGED_STATE);
            } else if (this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.optons.point) {
                if (typeof reset === 'function') {
                    reset();
                }
                this.setState(INIT_STATE);
            }
        }, false);
    }
}

export default Scroll;