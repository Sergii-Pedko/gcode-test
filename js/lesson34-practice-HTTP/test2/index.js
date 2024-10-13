let baseUrl = 'https://6703a904ab8a8f89273115aa.mockapi.io/api/v1/users';
/* На ресурсе - users Объект должен иметь вид 
{
  id: '1',
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
} 
  
При решении задачи №3 - БД-users была изменена и имеет вид:
[
      {
        "id": "1",
        "email": "Eda42@hotmail.com",
        "name": "Erik",
        "password": "gold"
        },
        { "id": "2", "email": "Jeromy.Larson70@yahoo.com", "name": "Wilbert", "password": "Trace" }
    ]

Чтобы данная задача №2 - правильно отрабатывала - БД-users
 НЕОБХОДИМО ПРИВЕСТИ К НАЧАЛЬНОМУ СОСТОЯНИЮ стр. 4-8*/ 



export function getUsersList() { /* Ф-ция должна сделать запрос на сервер за всеми 
                            пользователями и вернуть промис с массивом пользователей */
  return fetch(baseUrl)
    .then(response =>{
    return response.json(); /*Преобразуем СТРОЧНЫЙ ответ в ОБЪЕКТ- с которым можно 
                              работать этот Object передадим по ЦЕПОЧКЕ-then*/ 
  });  
}

export function getUserById(userId) { /* Ф-ция  должна сделать запрос на сервер
                                         за указанным пользователем и вернуть промис с объектом пользователя*/
  return fetch(`${baseUrl}/${userId}`)
  .then(response => response.json()); /*Cтрел.функ: Если ОДНА СТРОКА ->
                                        УБРАТЬ: return-стр.15 и {}*/ 
}

export function createUser(userData) { /* Ф-ция должна принимать объект
  пользователя и создать такого пользователя на сервере. Должна возвращать промис*/
  return fetch(baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(userData)
  });                                        
  
}

export function deleteUser(userId) { /* Ф-ция  должна принимать id пользователя 
  и удалить пользователя с таким id. Должна возвращать промис*/
  return fetch(`${baseUrl}/${userId}`, { method: 'DELETE'});
  
}

export function updateUser(userId, userData) { /*Ф-ция  должна принимать id 
  пользователя как первый аргумент и объект пользователя как второй аргумент. ОБновить даннык на сервере */
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body: JSON.stringify(userData)
    });
  
}

// Для проверки - ВСЕ examples - ЗАКОМЕНТИТЬ !!!!
// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

getUserById('2').then(userData => {
  console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
});

const newUserData = {
  email: 'cool@email.com',
  firstName: 'Iron',
  lastName: 'Man',
  age: 42,
};

createUser(newUserData).then(() => {
  console.log('User created');
});

const updatedUserData = {
  email: 'new@email.com',
  firstName: 'John',
  lastName: 'Doe',
  age: 17,
};

updateUser('1', updatedUserData).then(() => {
  console.log('User updated');
});

deleteUser('2').then(() => {
  console.log('User deleted');
});


