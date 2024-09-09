let counterElem = document.querySelector('.counter'); 
let counterValueElem = document.querySelector('.counter__value');
   

let onCounterChange = (event) =>{
  let isButton = event.target.classList.contains('counter__button');
  
  if (!isButton) {  
    return;  
  };
  let action = event.target.dataset.action; 
  let oldValue = Number(counterValueElem.textContent);
  let newValue = (action == 'decrease') ? oldValue - 1 : oldValue + 1;
  counterValueElem.textContent = newValue;
  localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', onCounterChange);

let onStorageChange = (event) =>{
  counterValueElem.textContent = event.newValue; 
};

window.addEventListener('storage', onStorageChange);

let onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue')  || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
