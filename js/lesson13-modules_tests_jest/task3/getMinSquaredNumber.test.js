
/* it() (или test() - it-является элиасом внутри test - короче по сути это ОДНО И ТО ЖЕ !!) - ф-ция ТЕСТИРОВЩИК - принимает ТРИ Аргумента
          1)  '17 и в Африке 17' или  'Проверяем реверс строки7' => ОПИСАНИЕ ТЕСТА
          2)  () => {}  => Ф-ция которая и ОПИСЫВАЕТ Проверку кода
          3)  НЕобязательный параметр  - если мы тестируем АССИНХРОННЫЙ КОД => 10 ms
                                                                Cколько милисекунд ждать ответа 

it('17 и в Африке 17',
   () => {
  ЧТО хотим проверить
           expect(17).toEqual(18); заведомо ошибка
                      РАВНО(18) - сама ПРОВЕРКА
});

---------------------------------------------------------------------------------------------
toBe() - слабый метод - для сравнения ПРИМИТИВОВ
toEqual()) для сравнения Объектов  и Массивов
---------------------------------------------------------------------------------------------*/ 

// ф-ция-getSquare была экспортирована ДЕФОЛТНО - поэтому ИМПОРТИРУЕТСЯ вне фигурных скобок !!!

import getSquare from './getMinSquaredNumber.js'; 


describe(  // Метод - для сразу НЕСКОЛЬКИХ проверок ф-ции
  'Моя проверка ф-ции, которая возвращает Отфильтрованный МАССИВ', // Любое описание 
  () => {  // Ф-ция которая и ОПИСЫВАЕТ Проверку кода
    const testSuites  = [ //Тестовые наборы
      {
        inArr: [777, 3, -2, 6, 45, -20], //Входящие данные -ключи придумываем ЛЮБЫЕ
        expected: 4  //То, что ОЖИДАЕМ получить
      },
      {
        inArr: '1, -10, 20', //Если передать string 
        expected: null 
      },
      {
        inArr: [],//Если передать пустой массив 
        expected: null  
      }
    ];

    testSuites.forEach(({inArr, expected}) => { //загоняем проверки в метод перебора массива-объектов
      it( // или test() -> это одно и то же!!!
        `Входящий Массив: ${inArr}, ожидаю : ${expected}`, //Описание теста
        () => {
          let result = getSquare(inArr); //Выполняем ф-цию
      
          expect(result).toEqual(expected);  
        }
      );
    });
  }
);

/* npm test js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.test.js

> test
> jest js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.test.js

  console.log
    [ 777, 3, 2, 6, 45, 20 ]

      at log (js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.js:13:15)

  console.log
    4

      at Object.log (js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.js:20:9)

  console.log
    [ 777, 3, 2, 6, 45, 20 ]

      at log (js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.js:13:15)

 PASS  js/lesson13-modules_tests_jest/task3/getMinSquaredNumber.test.js
  Моя проверка ф-ции, которая возвращает Отфильтрованный МАССИВ
    √ Входящий Массив: 777,3,-2,6,45,-20, ожидаю : 4 (24 ms)
    √ Входящий Массив: 1, -10, 20, ожидаю : null (1 ms)
    √ Входящий Массив: , ожидаю : null (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        2.391 s, estimated 3 s
Ran all test suites matching /js\\lesson13-modules_tests_jest\\task3\\getMinSquaredNumber.test.js/i.

*/