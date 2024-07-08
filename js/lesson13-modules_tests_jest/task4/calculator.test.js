
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

import {calc} from './calculator.js'; 


describe(  // Метод - для сразу НЕСКОЛЬКИХ проверок ф-ции
  'Проверка ф-ции - строчный калькулятор', // Любое описание 
  () => {  // Ф-ция которая и ОПИСЫВАЕТ Проверку кода
    const testSuites  = [ //Тестовые наборы
      {
        inString: '10 + 5', //Входящие данные -ключи придумываем ЛЮБЫЕ
        expected: '10 + 5 = 15'  //То, что ОЖИДАЕМ получить
      },
      {
        inString: '10 - 5', 
        expected: '10 - 5 = 5'
      },
      {
        inString: '10 * 5',
        expected: '10 * 5 = 50'
      },
      {
        inString: '10 / 5',
        expected: '10 / 5 = 2'
      },
      {
        inString: 10 + 5, 
        expected: null
      }
    ];

    testSuites.forEach(({inString, expected}) => { //загоняем проверки в метод перебора массива-объектов
      it( // или test() -> это одно и то же!!!
        `Входящая Строка: ${inString}, ожидаю CТОРКУ : ${expected}`, //Описание теста
        () => {
          let result = calc(inString); //Выполняем ф-цию
      
          expect(result).toEqual(expected);  
        }
      );
    });
  }
);

/* npm test js/lesson13-modules_tests_jest/task4/calculator.test.js

> test
> jest js/lesson13-modules_tests_jest/task4/calculator.test.js

 PASS  js/lesson13-modules_tests_jest/task4/calculator.test.js
  Проверка ф-ции - строчный калькулятор
    √ Входящая Строка: 10 + 5, ожидаю CТОРКУ : 10 + 5 = 15 (6 ms)
    √ Входящая Строка: 10 - 5, ожидаю CТОРКУ : 10 - 5 = 5 (1 ms)
    √ Входящая Строка: 10 * 5, ожидаю CТОРКУ : 10 * 5 = 50
    √ Входящая Строка: 10 / 5, ожидаю CТОРКУ : 10 / 5 = 2
    √ Входящая Строка: 15, ожидаю CТОРКУ : null (1 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.247 s
Ran all test suites matching /js\\lesson13-modules_tests_jest\\task4\\calculator.test.js/i.

*/