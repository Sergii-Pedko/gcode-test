/*Попрактикуемся с работой ивент лупа. Нужно исправить порядок чисел, выведенных в консоль
НАЧАЛЬНЫЙ КОД 
-------------
export const printing = () => {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  console.log(3);

  setTimeout(function () {
    console.log(4);
  }, 0);

  setTimeout(function () {
    console.log(5);
  }, 2000);

  console.log(6);
};*/ 


export const printing = () => {
  console.log(1);

  setTimeout(function () {
    console.log(5);
  }, 1000);

  console.log(2);

  setTimeout(function () {
    console.log(4);
  }, 0);

  setTimeout(function () {
    console.log(6);
  }, 2000);

  console.log(3);
};

printing(); //1; 2; 3; 4; 5; 6