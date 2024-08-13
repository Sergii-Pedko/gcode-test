/*<button class="pagination__page" data-page-number="1">КНОПКА-1</button>
      <button class="pagination__page" data-page-number="2">КНОПКА-2</button>
      <button class="pagination__page" data-page-number="3">КНОПКА-3</button>
*/ 

let btnArr = document.querySelectorAll('.pagination__page');

let handleClick = (event)=>{
  console.log(event.target); //соответствующая кнопка
  console.log(event.target.dataset); /*DOMStringMap {pageNumber: '1'} или 2 или 3*/

  console.log(event.target.dataset.pageNumber); /*'1' или 2 или 3*/

};

for (let i = 0; i < btnArr.length; i++) {
  btnArr[i].addEventListener('click', handleClick);
};



