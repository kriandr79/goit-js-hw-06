const refs = {
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  input: document.querySelector("#controls > input"),
  boxes: document.getElementById("boxes"),
};

refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", onDestroyBtn);

function onCreateBtn() {
  // змінюємо тип, на випадок якщо значення введено вручну
  const inputValue = Number(refs.input.value);
  
  if (inputValue === "") {
    alert("Please, insert a quantity of boxes");
  } else {
    // refs.boxes.append(createBoxes(inputValue));
    refs.boxes.insertAdjacentHTML("afterbegin", createBoxes(inputValue));
    // console.log(createBoxes(inputValue));
  }
}

function onDestroyBtn() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

// Вариант 1
// Функція повертає зібранний фрагмент, тобто потрібну кількість боксів, яка потім пушится на сторінку при в onCreateBtn
// function createBoxes(amount) {
   
//   // створюємо порожній елемент для наповнення
//   const fragment = document.createDocumentFragment();
//   const inputMin = Number(refs.input.min);
//   const inputMax = Number(refs.input.max);
//   const inputStep = Number(refs.input.step);
//   let baseBoxSize = 30;
 
//   // Перевіряємо введені значення. Якщо ок, то створюємо бокси (div)
//   if (amount < inputMin || amount > inputMax) {
//     alert(`Please, insert value between ${inputMin} and ${inputMax}!`);
//   } else {
  
//     for (let i = 1; i <= amount; i += inputStep) {
//       const divEl = document.createElement("div");
//       divEl.style.width = baseBoxSize + "px";
//       divEl.style.height = baseBoxSize + "px";
//       divEl.style.backgroundColor = getRandomHexColor();
//       fragment.appendChild(divEl);
//       baseBoxSize += 10;
//     }
//   }
//   return fragment;
// }

// Вариант 2
function createBoxes(amount) {
  // створюємо порожній елемент для наповнення
  const boxes = [];
  const inputMin = Number(refs.input.min);
  const inputMax = Number(refs.input.max);
  const inputStep = Number(refs.input.step);
  let baseBoxSize = 30;

  // Перевіряємо введені значення. Якщо ок, то створюємо бокси (div)
  if (amount < inputMin || amount > inputMax) {
    alert(`Please, insert value between ${inputMin} and ${inputMax}!`);
  } else {
    for (let i = 1; i <= amount; i += inputStep) {
      const color = getRandomHexColor();
      const divEl = `<div style="width: ${baseBoxSize}px; height: ${baseBoxSize}px; background-color: ${color};"></div>`;
      boxes.push(divEl);
      baseBoxSize += 10;
    }
    
  }
  return boxes.join("");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
