export default function createTag(tagName, id, className, textInput) {
  let tag = tagName;
  tag = document.createElement(tagName);
  tag.setAttribute('id', id);
  tag.setAttribute('class', className);
  tag.textContent = textInput;
//   tag.innerHTML = htmlInput;
  return tag;
}
