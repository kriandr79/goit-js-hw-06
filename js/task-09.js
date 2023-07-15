const refs = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onFormSubmit);

function onFormSubmit() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
