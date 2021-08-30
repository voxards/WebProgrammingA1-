const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const studentstatus = document.getElementById("studentstatus");
const empstatus = document.getElementById("empstatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const ageValue = age.value.trim();
  const studentstatusValue = studentstatus.value.trim();
  const empstatusValue = empstatus.value.trim();

  if (firstnameValue === "") {
    // show error
    // add error class (small)
    setErrorFor(firstname, "*First name is required");
  } else {
    // add success class
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    // show error
    // add error class (small)
    setErrorFor(lastname, "*Last name is required");
  } else {
    // add success class
    setSuccessFor(lastname);
  }




}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // form-control
  const small = formControl.querySelector("small");

  // add error message inside small tags
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
