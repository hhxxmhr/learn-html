// 样式
import './main.css'
// 组件
import Tab from "../tab";
import Content from "../content";
import 'components/loading'
import {get, set} from 'utils/sessionStorage.js'

const contentEl = document.getElementById('destination-content');
const content = new Content(contentEl);
const tabEl = document.querySelector('.tab');
const tab = new Tab(tabEl);
const tabItemEls = tabEl.querySelectorAll('.tab-item');


//事件委托,冒泡机制
tabEl.addEventListener('click', function (ev) {
    if (ev.target.tagName.toLowerCase() === 'li' && ev.target.classList.contains('tab-item')) {
        content.setLoading();
        const index = ev.target.dataset.id - 1;
        const storageName = `destination_content_${index}`;
        const storageContent = get(storageName);
        // 从本地缓存里面取数据
        if (storageContent) {
            // 直接取得数据就不用发送请求了
            tab.setItemActive(index);
            content.setData(storageContent);
        } else {
            tab.to(index).then(data => {
                data = [
                    {
                        url: 'https://user-files.xipaijs.com/63c518f7-ee56-4f08-a20a-f7608e162335/e4974a20-c810-4f04-8739-4f8409338547.jpg',
                        text: '超级'
                    },
                    {
                        url: 'https://user-files.xipaijs.com/6fe8a347-778a-4c51-9d27-2cf2cd1dfb7d/9a1e67e8-5f6a-486f-88bd-46850cded174.jpg',
                        text: '无敌'
                    },
                    {
                        url: 'https://user-files.xipaijs.com/fe122db8-f73e-4f49-bd7b-083732f1701c/689c2877-6e33-49e1-a96f-104ee53f419c.jpg',
                        text: '大大'
                    },
                    {url: 'https://user-files.xipaijs.com/generated/default-avatars/default5.jpg', text: '可爱'}
                ]

                content.setData(data);
                set(storageName, data)
            })
        }


    }
}, false);

tabItemEls[0].click();