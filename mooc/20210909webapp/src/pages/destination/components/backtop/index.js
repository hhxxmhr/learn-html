import Backtop from 'components/backtop';

const scrollContainer = document.getElementById('destination-page');
const backtopEl = scrollContainer.querySelector('.backtop');
new Backtop(backtopEl, window.innerHeight, scrollContainer)