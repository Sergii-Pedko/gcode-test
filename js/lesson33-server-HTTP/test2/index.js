const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export function getTasksList() {
  // put your code here
  return fetch(baseUrl)
    .then(response => response.json())
}

/*данный URL-при добавлении напр. /3 (id) - отдает СРАЗУ - Обект с данным id

    https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks/3

    {"id": "3","text": "123","description": "description 3", ...} */ 
export function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}/${taskId}`)
    .then(response => response.json())
}

// Для проверки вызов ф-ций - ЗАКОМЕНТИТЬ
// getTasksList().then(tasksList => {
//   console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
// });

// getTaskById('2').then(taskData => {
//   console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
// });

