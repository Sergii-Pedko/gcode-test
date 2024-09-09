import { onCheckboxSelect } from './toogleCheckbox.js';
import { onBtnClick } from './createTask.js';

export const initHandlers = () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onCheckboxSelect);

  const createBtn = document.querySelector('.create-task-btn');
  createBtn.addEventListener('click', onBtnClick);
};
