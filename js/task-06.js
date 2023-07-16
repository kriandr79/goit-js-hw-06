const inputElement = document.getElementById("validation-input");
const inputValidLength = Number(inputElement.dataset.length);

inputElement.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim().length !== inputValidLength) {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  } else {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  }
}
