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

  validateForm();
});

function validateForm() {
  // get the values from the inputs
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const ageValue = age.value.trim();
  const studentstatusValue = studentstatus.value.trim();
  const empstatusValue = empstatus.value.trim();

  // First name condition
  if (firstnameValue === "") {
    // show error
    // add error class (small)
    error(firstname, "*First name is required");
  } else {
    // add success class
    success(firstname);
  }

  // Last name condtion
  if (lastnameValue === "") {
    // show error
    // add error class (small)
    error(lastname, "*Last name is required");
  } else {
    // add success class
    success(lastname);
  }

  // Email condition, including validation
  if (emailValue === '') {
    error(email, "*Email is required");
  } else if (!validateEmail(emailValue)) {
    error(email, "*Email is not valid");
  } else {
    success(email);
  }

  if (phoneValue === '') {
    error(phone, "*Phone number is required");
  } else if (!phoneValue.match(validatePhone)) {
    error(phone, "*Phone number invalid, please use format 04xx xxx xxx")
  } else {
    success(phone);
  }

}


// Error function
function error(input, message) {
  const formControl = input.parentElement; // form-control
  const small = formControl.querySelector("small");

  // add error message inside small tags
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

// Success Function
function success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Validate email function
function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// Validate phone
var validatePhone = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
