const successRequest = Promise.resolve({ name: 'Tom' });

successRequest
  .then(function onSuccess1(data) {
    // (1)
    throw new Error('Error with data'); //Имитируем-выбрасываем ОШИБКУ -> преходим в нижний-catch()
  })
  .catch(function onError1(error) {
    console.error('onError1', error.message); // onError1 Error with data
  });

const failRequest = Promise.reject(new Error('Something went wrong'));

failRequest
  .catch(function onError2(error) {
    console.error('onError2', error.message); // onError2 Something went wrong
    // (2)
    throw new Error('Server error'); //Имитируем-выбрасываем ОШИБКУ - следовательно - нижний-then() - игнорируется -> переходим в нижний-catch()
  })
  .then(function onSuccess2(data) {
    console.log('onSuccess2', data); // onSuccess2 - НЕ ВЫПОЛНЯЕТСЯ
  })
  .catch(function onError3(error) {
    console.error('onError3', error.message); // onError3 Server error
  });
