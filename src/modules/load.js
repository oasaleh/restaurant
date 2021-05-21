import createTag from './utilities';
import renderMenu from './menu';
import renderFooter from './footer';

if (Node.prototype.appendChildren === undefined) {
  Node.prototype.appendChildren = function () {
    let children = [...arguments];

    if (children.length == 1 && Object.prototype.toString.call(children[0]) === '[object Array]') {
      children = children[0];
    }

    const documentFragment = document.createDocumentFragment();
    children.forEach((c) => documentFragment.appendChild(c));
    this.appendChild(documentFragment);
  };
}

function createSection() {
  const section = createTag('section', 'header');
  const header = createTag('header', 'title-bar', undefined, undefined);
  const p = createTag('p', undefined, 'title', 'Halal Guys');
  section.appendChild(header);
  header.appendChild(p);
  return section;
}

function renderNavBar() {
  const div = createTag('div', 'nav-bar', undefined);
  const item1 = createTag('button', 'Menu', 'nav bar item', 'Menu');
  //   const item2 = createTag('a', undefined, 'nav bar item', 'Locations');
  const item3 = createTag('button', 'Catering', 'nav bar item', 'Catering');
  //   const item4 = createTag('a', undefined, 'nav bar item', 'Shop');
  const item5 = createTag('button', 'ContactUs', 'nav bar item', 'Contact Us');
  item1.setAttribute('href', '');

  //   item2.setAttribute('href', '');
  item3.setAttribute('href', '');
  //   item4.setAttribute('href', '');
  item5.setAttribute('href', '');
  div.appendChildren(item1, item3, item5);
  return div;
}
function renderContentWindow() {
  const contentWindow = createTag('div', 'contentWindow');
  contentWindow.appendChildren(renderMenu());
  return contentWindow;
}

function loadPage() {
  const content = document.getElementById('content');
  const section = createSection();
  const div = renderNavBar();
  // const contentWindow = createTag('div', 'contentWindow');
  const contentWindow = renderContentWindow();
  const footer = renderFooter();
  content.appendChildren(section, div, contentWindow, footer);
  return contentWindow;
}

export { loadPage };
