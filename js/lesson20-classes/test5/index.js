/*работаем с ПРИВАТНЫМИ св-вами в class в JS (get/set)*/ 

export class User {
  constructor(id, name, sessionId) {
    
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  };
   

  get id() {
    return this._id; 
  };

  get name() {
    return this._name;
  };

  get sessionId() {
    return this._sessionId;
  };
};
// -----------------------------

// examples
const user_5 = new User('111', 'Tom', 'session-0001');
const user_6 = new User('222', 'Boris', 'session-0002');

// получить свойства можем
console.log(user_5.id); // ===> '111'
console.log(user_5.name); // ===> 'Tom'
console.log(user_5.sessionId); // ===> 'session-0001'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
console.log(`***************`);
/*----------------------------------------

Cоздаем КЛАСС - который будет оперировать МАССИВОМ-Объектов-экземпляров Класса-User*/ 


export class UserRepository {
  constructor(array) {
    this._users = Object.freeze(array); 
  };

  get users() {
    return this._users;
  }

  getUserNames() { // - для получения массива имен пользователей
    return this._users.map((elem) => {
      return elem.name;
    });
  };

  getUserIds() {// - для получения массива айдишников пользователей
    return this._users.map((elem) => {
      return elem.id;
    });
  };

  getUserNameById(id) {// - для получения имени пользователя, по его id-CПОСОБ №3
    for (let i = 0; i < this._users.length; i++) {          
      if (this._users[i].id === id) {
        return this._users[i]._name;
      };
    };
  };
};

//                            передаем Массив-объектов
let usersArray = new UserRepository([user_5, user_6]);

console.log(usersArray); /* [ {}, {} ]  */

// получить свойства можем
console.log(usersArray.getUserNames()); //['Тom', 'Boris']
console.log(usersArray.getUserIds());// ['111', '222']
console.log( usersArray.getUserNameById('111') );//'Tom'

// -----------------------------------------------------------------------


  