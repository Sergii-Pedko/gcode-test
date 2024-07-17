/*Опишите объект, который будет содержать информацию о пользователе и метод, что возвращает полное имя пользователя  */ 


export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.getFullName());