import './tab.css'

import {getData} from 'api/getData'

const URL = "https://www.imooc.com/api/mall-wapApp/destination/content";

class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll('.tab-item');
    }

    // 设置激活样式
    setItemActive(index) {
        // 排他法
        for (const itemEl of this.itemEls) {
            itemEl.classList.remove('tab-item-active');
        }
        this.itemEls[index].classList.add('tab-item-active');
    }

    // 设置样式并获取相应的数据
    to(index) {
        // todo 取消上一次请求--当一连点击了好几次tab的时候，并不能确定最终返回的数据是最后一次点击的
        if (this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort();
        }

        this.setItemActive(index);
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`);
        return this.dataPromise;
    }
}

export default Tab;