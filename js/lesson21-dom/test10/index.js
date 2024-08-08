export let finishForm = ()=> {
  let form = document.querySelector('.login-form'); 

  let inpLogin = document.createElement('input');
  inpLogin.setAttribute('type', 'text');
  inpLogin.setAttribute('name', 'login');
  form.prepend(inpLogin);

  let inpPass = document.querySelector('[name="password"]'); 
  inpPass.setAttribute('type', 'password');
  //console.log(inpPass);
};

//finishForm();



