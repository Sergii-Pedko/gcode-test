// Повесьте обработчик события 'click' ВСЕ кнопки с классом -btn

let btnArr = document.querySelectorAll('.btn');

console.log(btnArr); //NodeList(2) [button.btn, button.btn]

let handleClick = (event)=>{
  console.log(event.target); // Получим соответствующую кнопку
  
  console.log(event.target.textContent); // Получим Текст кнопки
};

for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener(`click`, handleClick); 
};




  