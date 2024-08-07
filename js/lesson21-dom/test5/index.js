/*работаем с ПРИВАТНЫМИ св-вами в class в JS (get/set)*/ 

export let setTitle = (text)=> {
  let elem = document.querySelector('.title');

  elem.textContent = text; 
  return elem;
};

console.log( setTitle('Vasya') );
  