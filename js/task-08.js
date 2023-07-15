const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Hey! All fields must be filled! ;-)");
  } else {
    const user = {
      email: email.value,
      password: password.value,
    };
      console.log(user);
      event.currentTarget.reset();
  }
  
}
