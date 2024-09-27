// Напиши функцию, которая продолжит выполнение цепочки промисов через указанное время

export let delay = milSec => {
  // 1) CОЗДАЕМ  Promise______ func   c
  let promise = new Promise (resolve => {
    // Ассинхроннный код- setTimeout()
    setTimeout(() => {
      resolve();
    }, milSec);      
  });
  return promise; // возвращаем Объект-Promise 
};

delay(3000).then(() => console.log('Done'));
// строка 'Done' появиться в консоли через 3 секунды

