import { renderTasks } from './renderer.js';
import { updateTask } from "./tasksGateway.js";

export const onCheckboxSelect = event => {
  const taskId = event.target.dataset.id
  const text = event.target.nextSibling.data
  const done = event.target.checked;

  const updatedTaskData = {
    text,
    done
  }

  updateTask(taskId, updatedTaskData)
    .then(() => renderTasks())
};
