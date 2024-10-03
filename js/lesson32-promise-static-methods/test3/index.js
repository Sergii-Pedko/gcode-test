// дописать код

export const makePromise = (numb) => {
  let promise = new Promise(resolve =>{
    resolve(numb);
  });

  return promise;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
