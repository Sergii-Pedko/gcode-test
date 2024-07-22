/*Опишите объект кошелька, который будет содержать информацию о транзакциях, и возможность возвращать максимальную и минимальную транзакцию  */ 

export let wallet = {
  transactions: [1, 5, 69, 337, 3], //Массив с трансакциями

  getMax(){ //МАксимальная трансакция
    return Math.max.apply(null, this.transactions);
  },

  getMin(){ //Мин. трансакция
    return Math.min(...this.transactions);
  }
};
