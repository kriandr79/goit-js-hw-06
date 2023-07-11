const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

inputElement.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== "") {
    outputElement.textContent = event.currentTarget.value;
  } else {
    outputElement.textContent = "Anonymous";
  }
}
