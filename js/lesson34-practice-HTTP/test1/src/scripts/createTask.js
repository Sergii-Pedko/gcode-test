import { renderTasks } from './renderer.js';
import { createTask } from "./tasksGateway.js";

export const onBtnClick = () => {
  const taskInputELem = document.querySelector('.task-input');

  if (!taskInputELem.value) {
    return;
  }

  const taskData = {
    text: taskInputELem.value,
    done: false,
  }

  createTask(taskData)
    .then(() => renderTasks())

  taskInputELem.value = '';
};
