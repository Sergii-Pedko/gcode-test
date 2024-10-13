const baseUrl = 'https://6703a904ab8a8f89273115aa.mockapi.io/api/v1/users';

const loginForm = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const formElems = document.querySelectorAll('.form-input');
Array.from(formElems).map((input) => input.addEventListener('input', () => {
  submitBtnElem.disabled = !loginForm.reportValidity();
}));

 
const addUser = (userData) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((result) => alert(JSON.stringify(result)))
    .then(() => loginForm.reset());
};

const onSubmit = (event) => {
  event.preventDefault();
  const { email, name, password } = Object.fromEntries(new FormData(loginForm));

  const userData = {
    email,
    name,
    password,
  };

  addUser(userData);
};

loginForm.addEventListener('submit', onSubmit);

