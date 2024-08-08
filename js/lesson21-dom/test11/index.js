export let manageClasses =()=> {
  let li1 = document.querySelector('.one');
  let li2 = document.querySelector('.two');
  let li3 = document.querySelector('.three');
  let li4 = document.querySelector('.four');

  li1.classList.add('selected');     // ДОБАВИТЬ class 
  li2.classList.remove('selected');  // УДАЛИТЬ class
  li3.classList.toggle('three_done'); // ЕСЛИ класс ЕСТЬ - УДАЛИТЬ, если НЕТ - ДОБАВИТЬ

  if (li4.classList.contains('some-class')) {// ЕСЛИ classList СОДЕРЖИТ КЛАСС class="some-class" - возвращает true/false
    li4.classList.add('another-class'); 
	}; 

  // console.log(li1);
  // console.log(li2);
  // console.log(li3);
  // console.log(li4);
  
};

//manageClasses();


/*
 <ul class="list">
      <li class="one">1</li>
      <li class="two selected">2</li>
      <li class="three three_done">3</li>
      <li class="four some-class">4</li>
    </ul>
*/ 

		


  