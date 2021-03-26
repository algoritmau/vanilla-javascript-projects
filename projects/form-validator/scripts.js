const form = document.getElementById('form');
const formInputs = form.querySelectorAll('.form__input');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmationInput = document.getElementById(
  'password-confirmation'
);

function validateForm(e) {
  e.preventDefault();

  checkRequired(formInputs);

  checkLength(usernameInput, 8, 24);
  checkLength(passwordInput, 8, 24);

  checkEmail(emailInput);

  checkPasswordMatch(passwordInput, passwordConfirmationInput);
}

function displayError(input, errorMessage) {
  input.parentElement.classList.remove('success');
  input.parentElement.classList.add('error');
  input.nextElementSibling.textContent = errorMessage;
  input.nextElementSibling.style.visibility = 'visible';
}

function displaySuccess(input) {
  input.parentElement.classList.remove('error');
  input.parentElement.classList.add('success');
  input.nextElementSibling.style.visibility = 'hidden';
}

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() == '') {
      displayError(input, `${input.name} is required.`);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    displayError(
      input,
      `${input.name} must contain at least ${min} characters.`
    );
  } else if (input.value.length > max) {
    displayError(input, `${input.name} must be ${max} characters max.`);
  } else {
    displaySuccess(input);
  }
}

function checkEmail(input) {
  if (!isValidEmail(emailInput.value)) {
    displayError(emailInput, 'Email is invalid.');
  } else {
    displaySuccess(input);
  }
}

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkPasswordMatch(input, input2) {
  if (input.value != input2.value) {
    displayError(input2, `${input.name} must match.`);
  } else {
    displaySuccess(input2);
  }
}

// Event Listeners
form.addEventListener('submit', validateForm);
