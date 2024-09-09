import { renderTasks } from './renderer.js';
import { initHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
