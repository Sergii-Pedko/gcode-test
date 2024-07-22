/*Опишите функцию, которая принимает числа как аргументы (мы НЕ ЗНАЕМ - сколько будет аргументов) и возвращает сумму квадратов этих чисел 
-------------------------------------------------------
1) В СТРЕЛОЧН Ф-циях Массив arguments -> необходимо СРАЗУ загонять в аргументы ф-ции
                                          Методом rest - иначе СТРЕЛ Ф-ция его НЕ видит
                                                 
    2) НО, если мы захотим ЭКСПОРТИРОВАТЬ ф-цию: export let muFunc = (...arguments) => { } 
      то получим ОШИБКУ: 
                        Недопустимое использование "arguments". Модули автоматически находятся в строгом режиме. 

      Для этого - загоняем Методом-rest Псевдомассив с любым Другим названием*/ 

export let sumOfSquares = (...arg) => {
  console.log(arg); // [2, 3, 4]

  return arg.reduce((prev, elem) =>{
    return prev + elem**2;
  },0);
};


console.log( sumOfSquares(2, 3, 4) ); // 2*2 + 3*3 + 4*4 = 29
