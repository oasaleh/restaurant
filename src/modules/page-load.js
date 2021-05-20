function createHeader(sectionID, headerID, titleClassName, nameOrTitle) {
  const section = document.createElement('section');
  section.setAttribute('id', sectionID);
  const header = document.createElement('header');
  header.setAttribute('id', headerID);
  const title = document.createElement('p');
  title.setAttribute('class', titleClassName);
  title.textContent = nameOrTitle;
  header.appendChild(title);
  section.appendChild(header);
  return section;
}

function loadPage() {
  const content = document.getElementById('content');
  // header
  const section = createHeader('header', 'title-bar', 'title', 'Halal Guys');
  content.appendChild(section);
}
export default loadPage;
