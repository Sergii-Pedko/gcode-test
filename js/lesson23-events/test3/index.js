const listElem = document.querySelector('.list');
// <ul class="list"></ul>


const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);


const createBtnElem = document.querySelector('.create-task-btn');
// <button class="btn create-task-btn">Create</button>
const input = document.querySelector('.task-input');
// <input class="task-input" type="text" /> 


const addTask = () => {
  if (!input.value) {
    return;
  }
  const newTask = {
    text: input.value,
    done: false,
    id: Date.now(),
  };
  tasks.push(newTask);
  input.value = '';
  renderTasks(tasks);
};

createBtnElem.addEventListener('click', addTask);

const toggleTask = event => {
  tasks.forEach(task => {
    if (task.id === +event.target.dataset.id) {
      if (task.done === false) {
        task.done = true;
      } else {
        task.done = false;
      }
    }
  });

  renderTasks(tasks);
};

listElem.addEventListener('click', toggleTask);
