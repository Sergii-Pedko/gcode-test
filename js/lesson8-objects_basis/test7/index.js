  // Создай функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет

  export const getAdults = obj => {
  let obj18 = {};
  for (let key in obj) {
    if (obj[key] >=18) { // ПЕребираем Исходный-объект;

      // Наполняем объект-obj18;
      //Ключ      ЗНАЧЕНИЕ объекта 
      obj18[key] = obj[key]; 
    };
  };
  return obj18;
};

console.log( getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }) ); // ==> { 'John Doe': 19, Bob: 18 }

console.log( getAdults({ Ann: 56, Andrey: 7 }) ); // ==> { Ann: 56 }