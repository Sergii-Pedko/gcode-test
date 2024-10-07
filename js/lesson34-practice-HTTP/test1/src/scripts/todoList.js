import { onCheckboxSelect } from './toogleCheckbox.js';
import { onBtnClick } from './createTask.js';
import { onDeleteBtnClick } from "./deleteTask.js";

export const initHandlers = () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', event => {
    if (event.target.localName === 'input') {
      return onCheckboxSelect(event)
    }

    return onDeleteBtnClick(event)
  });

  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', onBtnClick);
};
