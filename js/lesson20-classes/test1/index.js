/* Конструктор объектов */ 

export class User { 
  constructor(data_name, data_age) {
    
    this.name = data_name;
    this.age  = data_age;
  };

  sayHi() {
      console.log(`Hi, I am ${this.name}`);
  };

  requestNewPhoto(){
    console.log(`New photo request was sent for ${this.name}`);
  };

  setAge(newAge) {
    this.age = newAge;  

    if (newAge >= 25) {
      return this.requestNewPhoto();
    } else if(newAge < 0){
      return false;
    } else if(newAge > 0){
      return newAge;
    };
  };

  static createEmpty(){ 
    return new User('', null);
  };
};

let user = new User('John', 50); 
user.sayHi(); 

console.log( user.setAge(20) );
console.log( user.setAge(26) ); 
console.log(user); 

console.log( User.createEmpty() ); //
