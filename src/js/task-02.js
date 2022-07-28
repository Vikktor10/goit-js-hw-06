const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const foodIngrEl = ingredients => {
  const newElement = document.createElement('li');
  newElement.textContent = ingredients;
  newElement.classList.add('item');
  return newElement;
};
const newElements = ingredients.map(foodIngrEl);

listEl.append(...newElements);

// Напиши скрипт, который для каждого элемента массива ingredients:

// +Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// +Добавит название ингредиента как его текстовое содержимое.
// +Добавит элементу класс item.
// +После чего вставит все <li> за одну операцию в список ul#ingredients.
