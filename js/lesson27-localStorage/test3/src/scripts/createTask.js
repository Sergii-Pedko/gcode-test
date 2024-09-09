import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onBtnClick = () => {
  const taskInputELem = document.querySelector('.task-input');

  if (!taskInputELem.value) {
    return;
  }
  const tasksList = getItem('tasksList') || [];

  const newTasksList = tasksList.concat({
    text: taskInputELem.value,
    done: false,
    id: Math.random().toString(36).slice(2),
  });

  taskInputELem.value = '';

  setItem('tasksList', newTasksList);

  renderTasks();
};
