const bodyElem = document.querySelector('body');
const buttElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');
// console.log(bodyElem, buttElem, spanElem);
// buttElem.addEventListener('click', () => {
//   bodyElem.style.background = getRandomHexColor;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttElem.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  bodyElem.style.background = randomColor;
  spanElem.textContent = randomColor;
});

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color
//   и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
