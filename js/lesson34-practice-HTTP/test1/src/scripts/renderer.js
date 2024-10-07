import { getTasksList } from "./tasksGateway.js";

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  getTasksList()
    .then(tasksList => {
      return tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
          const listItemElem = document.createElement('li');
          listItemElem.classList.add('list-item');

          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          checkbox.checked = done;
          checkbox.classList.add('list-item__checkbox');
          checkbox.dataset.id = id;

          const spanElem = document.createElement('span')
          spanElem.classList.add('list-item__span')
          spanElem.append(text)

          if (done) {
            listItemElem.classList.add('list-item_done')
            spanElem.classList.add('list-item_done__span');
          } else {
            listItemElem.classList.remove('list-item_done')
            spanElem.classList.remove('list-item_done__span');
          }

          const deleteBtnElem = document.createElement('button')
          deleteBtnElem.classList.add('list-item__btn')
          deleteBtnElem.textContent = 'x'
          deleteBtnElem.dataset.id = id;
          listItemElem.append(checkbox, spanElem, deleteBtnElem);

          return listItemElem;
        });
    })
    .then(tasks => {
      listElem.textContent = '';
      listElem.append(...tasks)
    })
};
