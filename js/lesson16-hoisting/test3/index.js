/*Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет ф-ция, которая возвращает свой индекс в массиве  */ 
export const createArrayOfFunctions = number => {
  const arr = [];

  if (number === undefined) { //Если аргумент не передан, то вернуть пустой массив
    return arr;
  }else if (typeof(number) ==='string') { //Если передано не число, нужно вернуть null
    return null;
  } else {
    for (let index = 0; index < number; index++) {
      arr.push(function () {
        return index;
      });
    };
    return arr;
  };
};

console.log( createArrayOfFunctions(3) );      // [ƒ, ƒ, ƒ]
console.log( createArrayOfFunctions(3)[0]() ); // 0
console.log( createArrayOfFunctions(3)[1]() ); // 1
console.log( createArrayOfFunctions(3)[2]() ); // 2