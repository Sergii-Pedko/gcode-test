/*Создай ф-цию-reverseArray, которая будет принимать массив чисел и возвращать 
               зеркальный-реверсный массив. 
      Необходимо работать с копией исходного массива
      а) либо: arr.slice();
      б) лбо: arr.map(elem => elem); -> котрый создает НОВЫЙ массив по умолчанию
      */ 

export const reverseArray = (arr) => {
  if (Array.isArray(arr) === false) {
    return null;
  }else {
    // return arr.slice().reverse();
    return arr.map(elem => elem).reverse();
  };
};

console.log( reverseArray([11, 4, 8, 3]) ); // [3, 8, 4, 11]
console.log( reverseArray([]) ); // []
console.log( reverseArray([100, 50]) ); // [50, 100]
console.log( reverseArray(100, 50) ); // null