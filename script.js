const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");


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

  if (ageValue < 16) {
    error(age, "*You must be aged 16 years or older to sign up");
  } else {
    success(age);
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

// Show Age value on slider
var slider = document.getElementById("age");
var output = document.getElementById("ageValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Validate age, must be over 16
function validateAge() {
  var age = document.getElementById("age").value;
  if (age === "") {
    return true;
  }
  // converting the age to a number
    age = parseInt(age,10);
  }

// Membership Fee Calculator

// Defining the function
function membershipCalculator() {
// Declaring 'ans' to variable element in the form with the ID 'answer'
  var ans = document.getElementById("answer");
  // Call another function that calculates the answer
  ans.value = calculatePrice();
}

// Calculate price function called earlier
function calculatePrice() {
// Let the discount be 0 at first
  let discount = 0;

  // Calling constant age from the html
  const age = Number(document.getElementById('age').value);
  // Age condition, if age is over 16 and under 20 apply 10% discount
  if (age >= 16 && age <= 20) {
    discount += 1;
  }
  // Student discount, if user is student apply 5% discount
  if (document.getElementById('student').checked) {
    discount += 0.5;
  }
  // Unemployed discount, if user is unemployed apply 40% discount
  if (document.getElementById('unemployed').checked) {
    discount += 4;
  }

  // Return the standard vrate of $10 per month - the discount price calculated through the conditions

  return 10 - discount;
}


// Diet Calculator

// Generate meal function
function generateMeal(event) {
    event.preventDefault();
    debugger;
    const calories = Number(document.getElementById("calories").value);
    const meals = Number(document.getElementById("meals").value);
    const anythingPlan3 = document.getElementById("anythingPlan3");
    const anythingPlan4 = document.getElementById("anythingPlan4");
    const veganPlan3 = document.getElementById("veganPlan3");
    const veganPlan4 = document.getElementById("veganPlan4");
    const vegetarianPlan3 = document.getElementById("vegetarianPlan3");
    const vegetarianPlan4 = document.getElementById("vegetarianPlan4");
    const noCurrentPlan = document.getElementById("noCurrentPlan");
    anythingPlan3.style.display = "none";
    anythingPlan4.style.display = "none";
    veganPlan3.style.display = "none";
    veganPlan4.style.display = "none";
    vegetarianPlan3.style.display = "none";
    vegetarianPlan4.style.display = "none";
    noCurrentPlan.style.display = "none";


// Anything diet plan with 3 meals, 1500-2000 calories
    if (
      document.getElementById("anything").checked &&
      calories >= 1500 &&
      calories <= 2000 &&
      meals == 3
    ) {
      anythingPlan3.style.display = "block";
    }

// Anything diet plan with 4 meals, 1500-2500 calories
    if (
      document.getElementById("anything").checked &&
      calories >= 1500 &&
      calories <= 2500 &&
      meals == 4
    ) {
      anythingPlan4.style.display = "block";
    }

// Vegan diet plan with 3 meals, 1500-2000 calories
    if (
      document.getElementById("vegan").checked &&
      calories >= 1500 &&
      calories <= 2000 &&
      meals == 3
    ) {
      veganPlan3.style.display = "block";
    }

// Vegan diet plan with 4 meals, 1500-2500 calories
    if (
      document.getElementById("vegan").checked &&
      calories >= 1500 &&
      calories <= 2500 &&
      meals == 4
    ) {
      veganPlan4.style.display = "block";
    }

// Vegetarian diet plan with 3 meals, 1500-2000 calories
  if (
    document.getElementById("vegetarian").checked &&
    calories >= 1500 &&
    calories <= 2000 &&
    meals == 3
  ) {
    vegetarianPlan3.style.display = "block";
  }


// Vegetarian diet plan with 3 meals, 1500-2000 calories
  if (
    document.getElementById("vegetarian").checked &&
    calories >= 1500 &&
    calories <= 2500 &&
    meals == 4
  ) {
    vegetarianPlan4.style.display = "block";
  }

  else {
    noCurrentPlan.style.display = "block";
  }
}
