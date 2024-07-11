/*<p>Создай ф-цию, которая будет возвращать калькуляторы с памятью</p> */ 

export const createCalculator = () => {
  let myNumber = 0;
  let add = number => {
    myNumber = myNumber + number;
  }; 
  let decrease =number => {
    myNumber = myNumber - number;
  };
  let reset = () => {
    myNumber = 0;
  };
  let getMemo = () => {
    return myNumber;
  };
  return {
    add,
    decrease,
    reset,
    getMemo
  };
};









