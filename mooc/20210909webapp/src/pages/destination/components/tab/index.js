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
        this.setItemActive(index);
        return getData(`${URL}/${this.itemEls[index].dataset.id}`);// 获取是因为系统产生的原因呢
    }
}

export default Tab;