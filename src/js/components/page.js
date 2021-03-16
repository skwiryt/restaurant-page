// import home from './home.js';
// import contact from './contact.js';
import select from '../settings';
import home from './home';
import menu from './menu';
import contact from './contact';

const page = () => {
  const pageElement = document.querySelector(select.pageContainer);
  const html = 'Hello from page';
  pageElement.innerHTML = html;
  const homeTrigger = document.querySelector(select.homeTrigger);
  homeTrigger.addEventListener('click', () => {
    console.log('home event fired');
    home();
  });
  const menuTrigger = document.querySelector(select.menuTrigger);
  menuTrigger.addEventListener('click', () => {
    console.log('menu event fired');
    menu();
  });
  const contactTrigger = document.querySelector(select.contactTrigger);
  contactTrigger.addEventListener('click', () => {
    console.log('contact event fired');
    contact();
  });
};

export default page;
