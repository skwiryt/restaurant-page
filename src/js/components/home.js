import select from '../settings';

const home = () => {
  const homeElement = document.querySelector(select.pageContainer);
  const html = 'Hello from home';
  homeElement.innerHTML = html;
};
export default home;
