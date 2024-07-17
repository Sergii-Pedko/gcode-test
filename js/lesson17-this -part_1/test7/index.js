/*Опишите объект, который будет содержать информацию о пользователе и метод, что возвращает полное имя пользователя */ 

export const user = {
  firstName: 'John',
  lastName: 'Doe',

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  },

  setFullName_1(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
  },

  setFullName(fullName){
    let arrName = fullName.split(' '); // ['Stepan', 'Korniyenko']
    
     this.firstName = arrName[0];
     this.lastName = arrName[1];
  },
};

console.log( user.getFullName() );
// --------------------------------------

user.setFullName_1('Sergii', 'Pedko');

console.log(user);
// {firstName: 'Sergii', lastName: 'Pedko', getFullName: ƒ, setFullName_1: ƒ, setFullName: ƒ}
// ---------------------------------------

user.setFullName('Stepan Korniyenko');
console.log(user);
//{firstName: 'Stepan', lastName: 'Korniyenko', getFullName: ƒ, setFullName_1: ƒ, setFullName: ƒ}