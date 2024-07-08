//  возводит в квадрат все элементы входящего массива чисел - экспортируется по именни
let myArr1 = [2, 4, 6]

                /*Экспортируем в jest - calculator.test.js */ 

export function getSquaredArray(arr) {
  return arr.map(elem => {
    return elem **2;
  });
};

console.log( getSquaredArray(myArr1) ); // [4, 16, 36]
// ---------------------------------------------------------------

// фильтрует входящий массив чисел, оставляет только нечетные - экспортируется по именни
let myArr2 = [1, 2, 3, 4, 5]

export let getOddNumbers = arr => arr.filter(elem => elem % 2 === 1);

console.log( getOddNumbers(myArr2) ); // [1, 3, 5]
// ---------------------------------------------------------------
// сумма двух чисел
let getSum = (a, b) => a + b;

console.log( getSum(2, 3) ); // 5

export default getSum; // Экспортируем дефолтно- все по умолчанию
