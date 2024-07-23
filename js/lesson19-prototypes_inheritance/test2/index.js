/*Функция должна принимать объект, как единственный аргумент и вернуть массив собственных свойств объекта. Методы в результат попасть не должны */ 

export function getOwnProps(obj) {
  let resArr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
      resArr.push(key);  
    };
  };
  return resArr;  
};
