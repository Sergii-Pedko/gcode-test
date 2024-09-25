/*ЗАДАЧА - failedPromise должен зареджектить ошибку new Error('Oops, error!'); */ 

const failedPromise = new Promise((resolve, reject) => { //1) Cоздаем Promise
  // reject('Oops, error!'); - так тоже работает: 'Oops, error!'
  reject(new Error('Oops, error!')); //  Error: Oops, error!
});

/* выведите в консоль ошибку в ф-ции onError
    2) ВЫПОЛНЯЕМ Promise - цепочка вызовов с МЕТОДАМИ then() и catch() */

failedPromise.catch(function onError(error) {
  console.log(error);
});
// ----------------------------------------------------------------------