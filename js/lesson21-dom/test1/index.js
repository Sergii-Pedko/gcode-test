// Напиши код, который отрисует список дел. В этой задаче мы плотно поработаем с DOM

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];


const renderTasks = tasksList => {
  let ul = document.querySelector('.list'); //<ul> - Parent  

  tasksList.map(({text, done})=>{ 
    let li = document.createElement('li'); //Создаем пустой Child-Эл. - ТЭГ <li>
    li.classList.add('list__item'); /*ДОБАВИТЬ class="list__item" */

    let inpCheck = document.createElement('input'); //Создаем пустой Child-Эл. - ТЭГ <input>
    inpCheck.setAttribute('type', 'checkbox'); //устанавливаем АТРИБУТ - type="checkbox"
    inpCheck.classList.add('list__item-checkbox'); /*ДОБАВИТЬ class="list__item-checkbox" */


    if (done === true) {
      
      li.classList.add('list__item_done'); /*ДОБАВИТЬ class="list__item_done" */

      
      inpCheck.setAttribute('checked', 'checked'); /*устанавливаем АТРИБУТ -
                                                      Галочка стоит по умолчанию checked="checked" */ 
    };
    
      li.append(inpCheck); //Добавляем в <li>==> <input type="checkbox" class="  " />
      li.append(text); //Добавляем в <li>==> ТЕКСТ из массива-объектов 

      ul.append(li); //Добавляем ТЭГ <li> - как ДОЧЕРНИЙ ЭЛЕМЕНТ ТЭГа <ul>           
  });
};

renderTasks(tasks);