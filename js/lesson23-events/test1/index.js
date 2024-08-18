// Напишите инструмент для демонстрации работы c формой

const emailInputElem = document.querySelector('#email');
const emailSpanElem = document.querySelector('.error-text_email');

const isRequired = value => (value ? undefined : 'Required');

const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const onEmailChange = event => {
  emailSpanElem.textContent = [isRequired, isEmail]
    .map(validator => validator(event.target.value))
    .filter(text => text)
    .join(', ');
};

emailInputElem.addEventListener('input', onEmailChange);

const passwordInputElem = document.querySelector('#password');
const passwordSpanElem = document.querySelector('.error-text_password');

const onPasswordChange = event => {
  passwordSpanElem.textContent = [isRequired]
    .map(validator => validator(event.target.value))
    .filter(text => text)
    .join(', ');
};

passwordInputElem.addEventListener('input', onPasswordChange);

const loginForm = document.querySelector('.login-form');

const onSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(loginForm));
  alert(JSON.stringify(formData));
};

loginForm.addEventListener('submit', onSubmit);


