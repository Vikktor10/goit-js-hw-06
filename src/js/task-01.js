//---------Задание 1---------------

const categElem = document.querySelector('#categories').children;
console.log('Number of categories:', categElem.length);
for (const elem of categElem) {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElem}`);
}

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
