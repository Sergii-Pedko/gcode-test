/*Создайте ф-ции, которые будут изменять число и запоминать результат */ 

let myNumber = 0; //В памяти по умолчанию должен храниться НОЛЬ

export function add(number) {// Функция-add должна принимать число и суммировать его с тем, что в памяти
  return myNumber = myNumber + number;
};

export function decrease(number) {//Функция-decrease должна принимать число и отнять его от того, что в памяти
  return myNumber = myNumber - number;
};

export function reset() {// Функция-reset должна сбрасывать память (устанавливать НОЛЬ )
  return myNumber = 0;
};

export function getMemo() {// Функция-getMemo должна вернуть число в памяти
  return myNumber;
};


console.log( add(3) ); // 0 + 3 = 3 -> myNumber
console.log(getMemo()); // возвращаем 3 -> myNumber

reset(); //Обнуляем myNumber

console.log( decrease(2) ); //После обнуления myNumber равен "НУЛЮ" а не "ТРЕМ" -> 0 - 2 = -2
console.log(getMemo()); // возвращаем -2 -> myNumber

console.log('*****************');
// -----------------------------------