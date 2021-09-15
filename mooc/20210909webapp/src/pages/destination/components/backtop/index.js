import Backtop from 'components/backtop';

const scrollContainer = document.querySelector('.main-layout');
const backtopEl = document.querySelector('.destination-layout .backtop');
new Backtop(backtopEl, scrollContainer.offsetHeight, scrollContainer)