// 引入公共header里的 index.js 文件
import Header from 'components/header';
// 引入搜索框组件
import 'components/searchbox'


const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header');
new Header(headerEl, 0, scrollContainer)