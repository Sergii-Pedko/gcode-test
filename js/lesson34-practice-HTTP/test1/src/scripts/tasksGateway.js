const baseUrl = 'https://63453f7539ca915a69f9a53e.mockapi.io/api/v1/tasks'

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
}

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  })
}

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  })
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  })
}