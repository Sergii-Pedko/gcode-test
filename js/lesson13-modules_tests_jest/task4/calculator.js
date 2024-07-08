// Создайте функцию, которая будет возвращать квадрат минимального по модулю числа.

export const calc = expression => {
  if (typeof expression !== 'string') {
    return null;
  }
// Деструктуризация массва  
  const [a, operation, b] = expression.split(' ');
//      ['2',  '+' ,  '3']  

  let result;

  switch (operation) {
    case '+':
      result = +a + +b; // 'УНАРНЫЙ ПЛЮС' - превращает Строку в ЧИСЛО
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('10 + 5')); // '10 + 5 = 15'
//console.log(calc('10 - 5')); // '10 - 5 = 5'
//console.log(calc('10 * 5')); // '10 * 5 = 50'
//console.log(calc('10 / 5')); // '10 / 5 = 2'
//console.log(calc(10 / 5));   // null
