import { deleteTask } from "./tasksGateway.js";
import { renderTasks } from "./renderer.js";

export const onDeleteBtnClick = event => {
  const taskId = event.target.dataset.id

  deleteTask(taskId)
    .then(() => renderTasks())
}