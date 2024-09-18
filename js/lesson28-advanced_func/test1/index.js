/* Напишите функцию, которая в цепочке вызовов проводит математические операции с числом */ 

export const calc = value => {
  let result = value;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

//let res = calc(3).add(2).mult(4).div(10).subtract(5).result(); 
//console.log(res); // -3