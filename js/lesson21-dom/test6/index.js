/*работаем с ПРИВАТНЫМИ св-вами в class в JS (get/set)*/ 

export let setButton = (buttonText) =>   {
  let body = document.querySelector('body');
  body.innerHTML = '<button>button text</button>';
  //body.textContent = '<button>button text</button>';
};

setButton();
  