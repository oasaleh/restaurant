import { loadPage } from './modules/load';
import renderMenu from './modules/menu';
import renderContactUs from './modules/contact';

const menu = renderMenu();
const contactUs = renderContactUs();

function init() {
  loadPage();
}
init();

document.getElementById('Menu').addEventListener('click', () => {
  document.getElementById('contentWindow').innerHTML = '';
  document.getElementById('contentWindow').appendChild(menu);
});
document.getElementById('Catering').addEventListener('click', () => {
  document.getElementById('contentWindow').innerHTML = '';
  document.getElementById('contentWindow').appendChild(menu);
});
document.getElementById('ContactUs').addEventListener('click', () => {
  document.getElementById('contentWindow').innerHTML = '';
  document.getElementById('contentWindow').appendChild(contactUs);
});
