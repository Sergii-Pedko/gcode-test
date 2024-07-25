/*Представь, что ты разрабатываешь сайт, где люди могут делать заказы в интернет магазине. 
Для такого ресурса нужно будет создать сущность (класс) Order, которая будет отображать и хранить данные о заказах. 
Создай этот класс и добавьте в него указанные поля */ 
export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city  = city;
    this.type  = type;

    /*Cв-ва заданные ПО УМОЛЧАНИЮ - в Агрументы конструктора НЕ идут
    ----------------------------------------------------------------  */ 
    this.id = Math.random().toString().slice(2,8);

    this.dateCreated = new Date(); /*При создании заказа должна проставляться
                                                               датасоздания заказа */
    this.dateConfirmed = 0; //ИЗНАЧАЛЬНО Дата подтверждения заказа
    this.isConfirmed = false; //Изначально заказ НЕ подтвержден

  };

  checkPrice(){
    if (this.price > 1000) {
      return true;
    };
    return false;
  };

  confirmOrder(){ /*должен проставлять ордер в статус -confirmed = true
                                                      (если заказ не был подтвержден раньше)
                   и дату конфирма ставить в текущую */ 
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
    };

    this.dateConfirmed = new Date();              
  };

  isValidType(){
    if (this.typе === 'Buy' || this.typе === 'Sell') {
      return true;
    };
    return false;
  };
};

let order = new Order(1001, 'Kiev', 'хуй', '012345');
console.log(order);

console.log( order.checkPrice() );
console.log( order.isValidType() );

order.confirmOrder();
console.log(order);

  