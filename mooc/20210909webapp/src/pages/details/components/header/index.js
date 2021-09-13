// 引入公共header里的 index.js 文件
import Header from 'components/header';

const scrollContainer = document.getElementById('detail-page');
const headerEl = scrollContainer.querySelector('.header');
new Header(headerEl, 0, scrollContainer)