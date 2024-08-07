/*работаем с ПРИВАТНЫМИ св-вами в class в JS (get/set)*/ 

export let setButton = (buttonText) =>   {
  let body = document.querySelector('body');
  body.innerHTML = `<button>${buttonText}</button>`;
  //body.textContent =  `<button>${buttonText}</button>`;
};

setButton('button text');

  