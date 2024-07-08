// Создайте функцию, которая будет возвращать квадрат минимального по модулю числа.

let inArr = [777, 3, -2, 6, 45, -20]; // 4
// const notArr = '1, -10, 20'; //Если передать string 
// const emptyArr = []; //Если передать пустой массив 


let getSquare = arr => {
  if (Array.isArray(arr) === false || arr.length === 0) {
    return null;
  } else {
      let absArr = arr.map(elem => Math.abs(elem));
      console.log(absArr); // [777, 3, 2, 6, 45, 20]
            
      return Math.min(...absArr)**2; //Методом spread - передаем массив в Метод
    };

};

console.log( getSquare(inArr) ); // 4

export default getSquare; // Экспортируем дефолтно- все по умолчанию
