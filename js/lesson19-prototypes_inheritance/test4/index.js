/*Объект пользователя */ 

let user = {
  firstName: 'John',
  lastName: 'Doe',

  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  
  set fullName(value){  
    let [elem1, elem2] = value.split(' ');

    this.firstName = elem1;
    this.lastName =  elem2
  },
};

export default user;

console.log(user.fullName); 

user.fullName = 'Вася Пупкин'; // это работает СЕТТЕР


console.log(user); 
  