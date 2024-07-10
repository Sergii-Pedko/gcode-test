/*Создай ф-цию, которая будет строить сообщение с возможностью задавать часть сообщения.

Обрати внимание, что восклицательный знак - это НЕ часть сообщения, которое устанавливается через ф-цию  */ 

let message = 'Just learn it';

export const sendMessage = name => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

export const setMessage = text => {
  message = text /*Хочу переназвать(переопределить) ГЛОБАЛЬНУЮ Переменную
  let message = 'Just learn it'- стр.5 */ 
};

sendMessage('Ann'); //Ann, Just learn it! Your Gromcode

setMessage('Good job');
console.log(message); //Good job

sendMessage('Ann'); //Ann, Good job! Your Gromcode