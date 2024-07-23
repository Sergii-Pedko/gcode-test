/*Напишите конструктор, который будет создавать пользователей с определенными возможностями*/ 

export function User(name, age) {
  this.name = name;
	this.age = age;
};

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  } else if(newAge < 0){
    return false;
  } else if(newAge > 0){
    return newAge;
  };
};


let user = new User('John', 50); 

console.log(user); //User {name: 'John', age: 50}

user.sayHi(); // Hi, I am John
user.requestNewPhoto(); // New photo request was sent for John

console.log( user.setAge(20) ); // 20

console.log(user); //User {name: 'John', age: 20}