const refs = {
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  input: document.querySelector("#controls > input"),
  boxes: document.getElementById("boxes"),
};

refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", onDestroyBtn);
refs.input.addEventListener("change", onInputChange);

function onCreateBtn() {
  if (refs.input.value === "") {
    alert("Please, insert a quantity of boxes");
  } else {
    refs.boxes.append(createBoxes(refs.input.value));
  }
}

function onDestroyBtn() {
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  // создаем пустой елемент
  const fragment = document.createDocumentFragment();
  let baseBoxSize = 30;

  // в цикле перебираем амоунт создавая дивы и добавляя свойства
  for (let i = 1; i <= amount; i += 1) {
    console.log(baseBoxSize);
    const divEl = document.createElement("div");
    divEl.style.width = baseBoxSize + "px";
    divEl.style.height = baseBoxSize + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divEl);
    baseBoxSize += 10;
  }

  return fragment;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
