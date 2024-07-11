/*Создайте ф-цию, которая будет создавать независимые счетчики */ 

export function makeCounter(n = -1) { // зададим Аргумент ПО УМОЛЧАНИЮ

  let count = n;
  
  return function makeCounterInner() {
    return count = count + 1;
  };
}


const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 0
console.log(counter1()); // 2
console.log(counter2()); // 1

