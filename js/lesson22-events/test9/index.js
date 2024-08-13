/*     СОБЫТИЕ - onchange 
                         применимо для ЭЛЕМЕНТОВ - где нужно выбрать "ОДИН" из
                        "Нескольких" вариантов:
   Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано. 
   Для текстовых элементов это означает, что событие произойдёт не при каждом 
                          вводе, а ПРИ ПОТЕРЕ ФОКУСА.
                           Например, пока вы набираете что-то в текстовом поле ниже – события нет. Но как только вы уведёте фокус на другой элемент, например, нажмёте кнопку – произойдёт событие onchange.
     
 -----------------------------------------------------------------------------
   Для остальных же элементов: select, input type=checkbox/radio/range оно
                              CРАБАТЫВАЕТ СРАЗУ при выборе значения!!!    
      <select">
        <option>Яблоко</option>  <!--[0]-->
        <option>Груша</option>   <!--[1]-->
      </select>
	 --------------------------------------------------------------------------*/

document.querySelector('.task-status').addEventListener('change', (event)=>{
  console.log(event); //Event {isTrusted: true, type: 'change', target: input.task-status, currentTarget:input.task-status, eventPhase: 2, …}

  console.log(event.target); // <input type="checkbox" class="task-status" />

  console.log(event.target.checked); /*Если ГАЛОЧКА СТОЙТ - true
                                       если НЕТ - false */
});   



