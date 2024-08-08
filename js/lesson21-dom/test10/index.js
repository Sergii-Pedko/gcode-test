export let finishForm = ()=> {
  let form = document.querySelector('.login-form'); 
  let inpLogin = document.createElement('input');
  inpLogin.setAttribute('type', 'text');
  inpLogin.setAttribute('name', 'login');
  form.prepend(inpLogin);

  let inpPass = form[1]; 
  inpPass.setAttribute('type', 'password');
};

//finishForm();



