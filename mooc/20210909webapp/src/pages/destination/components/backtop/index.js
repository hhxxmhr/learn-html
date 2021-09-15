import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('destination-content');
const backtopEl = document.querySelector('.destination-layout .backtop');
new Backtop(backtopEl, scrollContainer.offsetHeight, scrollContainer)