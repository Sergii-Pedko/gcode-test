export let createButton = (buttonText)=> { 
  let body = document.querySelector('body');
  let button = document.createElement('button');
  button.textContent = buttonText;
  
  body.append(button);
  
};

createButton('Send Email');
