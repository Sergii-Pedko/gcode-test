
// Напишите функцию, которая будет снимать деньги со счета определенного клиента и возвращать остаток на счете. Если денег на счете недостаточно функция будет возвращать -1

//     index =   0       1       2
let myClients  = ['Ann', 'John', 'User']; //Имена клиентов
let myBalances = [1400,    87,     -6]; //балансы счетов колинтов соответственно
/* amount =                50 
    сумма, 
    которую хочет снять John = 50

1) После выполнения Ф-ции - остаток на счету у John = 87 - 50 = 37
2) ИЗМЕНЕННЫЙ balances = [1400,    37,     -6]; 
----------------------------------------------------------------------------*/   

console.log(myClients.indexOf('User')); // 2 - index(первый) Элемента-'User', или -1, если такого Элемента нет в массиве.   
  
export function withdraw(clients, balances, client, amount) {

  let restOnBallanceBefore = balances[clients.indexOf(client)]; //87
  console.log(restOnBallanceBefore);

  if (restOnBallanceBefore > amount) {
    let restOnBallanceAfter = restOnBallanceBefore - amount; //87 - 50 = 37
    
    // for (let i = 0; i < balances.length; i++) {
    //   if (balances[i] === restOnBallanceBefore) {
    //     balances[i] = restOnBallanceAfter; 
    //   };        
    // };
    // Аналогичная запись через Метод-map
    let newArr = balances.map(elem => {
      return (elem === restOnBallanceBefore) ? elem = restOnBallanceAfter : elem; 
    });

    balances = newArr;

    console.log(balances); // Измененный массив-balances [1400, 37, -6]

    return restOnBallanceAfter; //37
  
  }else {
    return -1;
  };  
};

console.log( withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50) );

       