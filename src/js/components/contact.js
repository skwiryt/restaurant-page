import select from '../settings';

const contact = () => {
  const element = document.querySelector(select.pageContainer);
  const html = 'Hello from contact';
  element.innerHTML = html;
};
export default contact;
