import {getAdults} from '../../lesson8-objects_basis/test7/index.js'; 

describe(  // Метод - для сразу НЕСКОЛЬКИХ проверок ф-ции
  'Проверка ф-ции, которая найдет в объекте всех людей, которым >= 18 лет>', // Любое описание 
  () => {  // Ф-ция которая и ОПИСЫВАЕТ Проверку кода
    const testSuites  = [ //Тестовые наборы
      {
        text: 'Ожидаю Объект, где возраст >= 18 лет',
        inObj: {'John Doe': 19, Tom: 17, Bob: 18 },  //Входящие данные -ключи придумываем ЛЮБЫЕ 
        expectedObj: {'John Doe': 19, Bob: 18}  //То, что ОЖИДАЕМ получить
      },
      {
        text: 'Ожидаю Объект, где возраст >= 18 лет',
        inObj: {Ann: 56, Andrey: 7},  
        expectedObj: { Ann: 56}
      },
      {
        text: 'Ожидаю ПУСТОЙ Объект',
        inObj: {}, 
        expectedObj: {}
      }
    ];

    testSuites.forEach(({inObj, expectedObj, text}) => { //загоняем проверки в метод перебора массива-объектов
      
      it( // или test() -> это одно и то же!!!

        `Результат: ${text}`, //Описание теста
        () => {
          let result = getAdults(inObj); //Выполняем ф-цию
      
          expect(result).toEqual(expectedObj);  
        }
      );
    });
  }
);

/*npm test js/lesson13-modules_tests_jest/task5/getAdults.test.js

> test
> jest js/lesson13-modules_tests_jest/task5/getAdults.test.js

  console.log
    { 'John Doe': 19, Bob: 18 }

      at Object.log (js/lesson8-objects_basis/test7/index.js:16:9)

  console.log
    { Ann: 56 }

      at Object.log (js/lesson8-objects_basis/test7/index.js:18:9)

 PASS  js/lesson13-modules_tests_jest/task5/getAdults.test.js
  Проверка ф-ции, которая найдет в объекте всех людей, которым >= 18 лет>
    √ Результат: Ожидаю Объект, где возраст >= 18 лет (17 ms)
    √ Результат: Ожидаю Объект, где возраст >= 18 лет (1 ms) 
    √ Результат: Ожидаю ПУСТОЙ Объект

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.461 s
Ran all test suites matching /js\\lesson13-modules_tests_jest\\task5\\getAdults.test.js/i.
*/
