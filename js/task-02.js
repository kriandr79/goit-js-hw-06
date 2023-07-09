const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Знаходимо в документі потрібний тег, куди буде вкладено список
const listContainerEl = document.querySelector("#ingredients");

// Базовий вариант
// const ingredientsList = ingredients.map((ingredient) => {
//   const listEl = document.createElement("li");
//   listEl.textContent = ingredient;
//   listEl.classList.add('item');
//   return listEl;
// });

// Функція перебору масиву та створення тегів li
const makeListItems = options => {
  return options.map(option => {
  const listEl = document.createElement("li");
  listEl.textContent = option;
  listEl.classList.add('item');
  return listEl;
});

}

// Створюємо масив інгридієнтів
const ingredientsList = makeListItems(ingredients);

// Добавляємо розпиляючі масив в <ul>
listContainerEl.append(...ingredientsList);
