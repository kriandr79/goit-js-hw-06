const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

inputElement.addEventListener("change", onInputChange);

function onInputChange() {
  textElement.style.fontSize = inputElement.value + "px";
}

// вызываем функцию сразу чтобы синхронизировать размер текста со значением импута по умолчанию
onInputChange();
