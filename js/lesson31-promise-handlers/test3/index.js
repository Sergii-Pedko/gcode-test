const successPromise = new Promise(resolve => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then(number => {
    console.log(number); //32- Приходит из successPromise
    
    const halfNumber = number / 2;  
    return halfNumber; /*возвращаем 32/2 = 16 
                         чтобы следующий подписчик-then-стр.18 принял нужные данные на входе */ 
  })
  .then(number => {
    console.log(number); //16
    
    const squaredNumber = number * number;
    return squaredNumber;/*возвращаем 16*16 = 256 
                         чтобы следующий подписчик-then-стр.25 принял нужные данные на входе */ 
  })
  .then(result => {
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then(number => {
    const number10 = number * 10;  
    return number10;
  })
  .then(result => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
