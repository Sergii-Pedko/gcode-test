/*----------------------------------------------------------------  
внутри JSON => СТОРОКОВЫЕ ДАННЫЕ берем в ДВОЙНЫЕ КАВЫЧКИ -  иначе JSON будет НЕКОРРЕКТНЫМ - при преобразовании в Объект (стр. 15) - ОШИБКА!!! 

let json_Uncorrect = '{model: "Nokia", price: 2000}';

let json_CorrectString = '{"model": "Nokia", "price": 2000}';
---------------------------------------------------------- */ 

  let json_Uncorrect = '{model: "Nokia", price: 2000}';
  let json_Correct = '{"model": "Nokia", "price": 2000}';


export let parseUser = string => {
  try {
    return JSON.parse(string); //преобразуем в Объект - если JSON-Корректный
  } catch (error) {
    return null; //если JSON-НЕкорректный
  };
};

/*ДЛя проверки - закомментим выполнение ф-ции

console.log( parseUser(json_Correct) ); // {model: 'Nokia', price: 2000}
console.log(parseUser(json_Uncorrect) ); //null

*/ 
