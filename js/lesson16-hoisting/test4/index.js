/*В последней строчке в переменную foo -  должно попасть значение 1  - меняем только var, let */ 

let foo = 1;

function bar() {
  if (!foo) { //этот if - НЕ СРАБОТАЕТ"
    foo = 10;
  };

  return foo; //1
}

 console.log( bar() ); // 1

foo = bar();

console.log(foo); // 1

export default foo; //  Переменную экспортируй из файла по умолчанию  