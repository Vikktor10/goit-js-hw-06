const buttonElDecr = document.querySelector('[data-action="decrement"]');
const buttonElIncr = document.querySelector('[data-action="increment"]');
const buttonEl = document.querySelector('#value');
let counterValue = 0;

buttonElDecr.addEventListener('click', () => {
  counterValue = Number(buttonEl.textContent) - 1;
  buttonEl.textContent = counterValue;
  console.log('Button was clicked');
});

buttonElIncr.addEventListener('click', () => {
  counterValue = Number(buttonEl.textContent) + 1;
  buttonEl.textContent = counterValue;
  console.log('Button was clicked');
});

// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
