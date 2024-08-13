/*задание Не соответствует разметке-html

ОТМЕНА Обработчика на ПЕРВОМ клике  - можно в обработчик третим аргументом добавить - {once:true}, но боту это НЕ нравится*/ 

let btn = document.querySelector('.single-use-btn');

let funcHandler = (event)=>{
  console.log('clicked');

  event.target.removeEventListener('click', funcHandler);
};

btn.addEventListener('click', funcHandler);


  