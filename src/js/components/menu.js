import select from '../settings';

const menu = () => {
  const element = document.querySelector(select.pageContainer);
  const html = 'Hello from menu';
  element.innerHTML = html;
};
export default menu;
