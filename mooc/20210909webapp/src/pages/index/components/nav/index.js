import './nav.css'
// 引入slider模版
import render from './nav.art';
import {getData} from 'api/getData';

// 获取nav的数据
getData('https://www.imooc.com/api/mall-wepApp/index/nav').then(data => {
    document.getElementById('index-nav').innerHTML = render({
        items: data
    });
});
