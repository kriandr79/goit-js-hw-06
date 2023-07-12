const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

inputElement.addEventListener("change", onInputChange);

function onInputChange(event) {
  textElement.style.fontSize = event.target.value + "px";
}
