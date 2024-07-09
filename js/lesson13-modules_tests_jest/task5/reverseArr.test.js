import {reverseArray} from '../../lesson7-arrays_methods/test12/index.js'; 

describe(  // Метод - для сразу НЕСКОЛЬКИХ проверок ф-ции
  'Проверка ф-ции, которая возвращает реверсный МАССИВ', // Любое описание 
  () => {  // Ф-ция которая и ОПИСЫВАЕТ Проверку кода
    const testSuites  = [ //Тестовые наборы
      {
        inArr: [11, 4, 8, 3], //Входящие данные -ключи придумываем ЛЮБЫЕ
        expected: [3, 8, 4, 11]  //То, что ОЖИДАЕМ получить
      },
      {
        inArr: '1, -10, 20', //Если передать string 
        expected: null 
      },
      {
        inArr: [],//Если передать пустой массив 
        expected: []  
      }
    ];

    testSuites.forEach(({inArr, expected}) => { //загоняем проверки в метод перебора массива-объектов
      it( // или test() -> это одно и то же!!!
        `Входящий Массив: ${inArr}, ожидаю : ${expected}`, //Описание теста
        () => {
          let result = reverseArray(inArr); //Выполняем ф-цию
      
          expect(result).toEqual(expected);  
        }
      );
    });
  }
);

/*npm test js/lesson13-modules_tests_jest/task5/reverseArr.test.js

> test
> jest js/lesson13-modules_tests_jest/task5/reverseArr.test.js

  console.log      
    [ 3, 8, 4, 11 ]

      at Object.log (js/lesson7-arrays_methods/test12/index.js:17:9)

  console.log
    []

      at Object.log (js/lesson7-arrays_methods/test12/index.js:18:9)

  console.log
    [ 50, 100 ]

      at Object.log (js/lesson7-arrays_methods/test12/index.js:19:9)

  console.log
    null

      at Object.log (js/lesson7-arrays_methods/test12/index.js:20:9)

 PASS  js/lesson13-modules_tests_jest/task5/reverseArr.test.js
  Проверка ф-ции, которая возвращает реверсный МАССИВ
    √ Входящий Массив: 11,4,8,3, ожидаю : 3,8,4,11 (14 ms)
    √ Входящий Массив: 1, -10, 20, ожидаю : null
    √ Входящий Массив: , ожидаю :  (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.59 s, estimated 3 s
Ran all test suites matching /js\\lesson13-modules_tests_jest\\task5\\reverseArr.test.js/i.
*/
