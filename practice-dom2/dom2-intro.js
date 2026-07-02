function changeDom() {
  const list = document.querySelector('ul#kazoeuta');
  if (list) {
    const hasYacht = Array.from(list.children).some((item) => item.textContent === 'ヨット');
    if (!hasYacht) {
      const yachtItem = document.createElement('li');
      yachtItem.textContent = 'ヨット';
      list.appendChild(yachtItem);
    }
  }
  const image = document.querySelector('img#bluemoon');
  if (image) {
    image.setAttribute('src', 'bluemoon.jpg');
  }
  const paragraph = document.querySelector('p#takudai');
  if (paragraph) {
    const existingLink = paragraph.nextElementSibling;
    if (existingLink && existingLink.tagName === 'A') {
      existingLink.remove();
    }
    const link = document.createElement('a');
    link.textContent = '拓殖大学HP';
    link.setAttribute('href', 'https://www.takushoku-u.ac.jp');
    paragraph.insertAdjacentElement('afterend', link);
  }
  const listToRemove = document.querySelector('ul#kassen');
  if (listToRemove) {
    listToRemove.remove();
  }
  const primary = document.querySelector('p#primary');
  if (primary) {
    const existingColorList = primary.nextElementSibling;
    if (existingColorList && existingColorList.tagName === 'UL') {
      existingColorList.remove();
    }
    const colorList = document.createElement('ul');
    ['赤', '緑', '青'].forEach((color) => {
      const colorItem = document.createElement('li');
      colorItem.textContent = color;
      colorList.appendChild(colorItem);
    });
    primary.insertAdjacentElement('afterend', colorList);
  }
}
const button = document.querySelector('button#henkou');
if (button) {
  button.addEventListener('click', changeDom);
}
