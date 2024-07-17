/*Опишите функцию, которая будет откладывать вызов на указанное количество времени  */ 
export function defer(func, ms) {
  return function () {
    setTimeout( () => func.call(this, ...arguments), ms);
  };
}


let obj19 = {
  name: 'Tom',
  sayHi(){
    console.log(`Hi, I am ${this.name}`);
  },
};

let obj20 = { name: 'ВАСЯ' };
let obj21 = { name: 'ПЕТЯ' };

console.log( defer(obj19.sayHi, 3000) ); /* ƒ () {
  setTimeout( () => func.call(this, ...arguments), ms);
} */

let result_5Func = defer(obj19.sayHi, 1000);

result_5Func.call(obj21) //Hi, I am ПЕТЯ
// ---------------------------------
result_5Func.call(obj20) //Hi, I am ВАСЯ