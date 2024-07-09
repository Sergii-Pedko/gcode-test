import {withdraw} from '../../lesson7-arrays_methods/test7/index.js'; 

describe(  // Метод - для сразу НЕСКОЛЬКИХ проверок ф-ции
  'Проверка ф-ции, которая cнимает деньги сочета клиента и возвращает остаток', // Любое описание 
  () => {  // Ф-ция которая и ОПИСЫВАЕТ Проверку кода
    const testSuites  = [ //Тестовые наборы
      {
        inObj: {//Входящие данные -ключи придумываем ЛЮБЫЕ
          clients : ['Ann', 'John', 'User'],
          balances: [1400,    87,     -6],
          client: 'User',
          amount: 100
        },   
        expected: -1  //То, что ОЖИДАЕМ получить
      },
      {
        inObj: {
          clients : ['Ann', 'John', 'User'],
          balances: [1400,    87,     -6],
          client: 'Ann',
          amount: 100
        },
        expected: 1300 
      },
      {
        inObj: {
          clients : ['Ann', 'John', 'User'],
          balances: [1400,    87,     -6],
          client:'John',
          amount: 50
        },
        expected: 37 
      },
    ];

    testSuites.forEach(({inObj, expected}) => { //загоняем проверки в метод перебора массива-объектов
      it( // или test() -> это одно и то же!!!
        `Входящие данные: [ ${inObj.clients} ], [ ${inObj.balances} ], ${inObj.client}, ${inObj.amount} - ожидаю : ${expected}`, //Описание теста
        () => {
          let result = withdraw(inObj.clients, inObj.balances, inObj.client, inObj.amount); //Выполняем ф-цию
      
          expect(result).toEqual(expected);  
        }
      );
    });
  }
);

/*npm test js/lesson13-modules_tests_jest/task5/withdraw.test.js

> test
> jest js/lesson13-modules_tests_jest/task5/withdraw.test.js

  console.log
    2        

      at Object.log (js/lesson7-arrays_methods/test7/index.js:15:9)

  console.log
    87

      at log (js/lesson7-arrays_methods/test7/index.js:20:11)

  console.log
    [ 1400, 37, -6 ]

      at log (js/lesson7-arrays_methods/test7/index.js:37:13)

  console.log
    37

      at Object.log (js/lesson7-arrays_methods/test7/index.js:46:9)


  PASS  js/lesson13-modules_tests_jest/task5/withdraw.test.js
  Проверка ф-ции, которая cнимает деньги сочета клиента и возвращает остаток
    √ Входящие данные: [ Ann,John,User ], [ 1400,87,-6 ], User, 100 - ожидаю : -1 (22 ms)
    √ Входящие данные: [ Ann,John,User ], [ 1400,87,-6 ], Ann, 100 - ожидаю : 1300 (18 ms)
    √ Входящие данные: [ Ann,John,User ], [ 1400,87,-6 ], John, 50 - ожидаю : 37 (23 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.327 s
Ran all test suites matching /js\\lesson13-modules_tests_jest\\task5\\withdraw.test.js/i.
*/
