// Напишите инструмент для демонстрации работы событий

let elemDiv = document.querySelector('.rect_div');   //div
let elemP = document.querySelector('.rect_p');       // p
let elemSpan = document.querySelector('.rect_span'); // span
let eventsListElem = document.querySelector('.events-list'); // <div class="rect events-list3">  

// КНОПКИ
let clearBtn = document.querySelector('.clear-btn'); // Clear
let removeHandlerBtn = document.querySelector('.remove-handlers-btn'); // Remove handleds
let attacHandlerBtn = document.querySelector('.attach-handlers-btn'); //Attach handleds


/*---------------- ПОГРУЖЕНИЕ а затем ВСПЛЫТИЕ СОБЫТИЙ ----------------

     По клику на квадрат в списке попадает список элементов, на которых сработали обработчики: Серый - на Погружении,  Зеленый - на Всплытии. 
            ---------------            ----------

    создаем ф-ции-хендлеры */

let logTarget = (text, color) => {
  eventsListElem.innerHTML = eventsListElem.innerHTML + 
  `<span style="color: ${color}; margin-left: 8px">${text}</span>`
};

// для фазы - ПОГРУЖЕНИЯ:
let logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
let logGreyP = logTarget.bind(null, 'P', 'grey');
let logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// для фазы - ВСПЛЫТИЯ:
let logGreenDiv = logTarget.bind(null, 'DIV', 'green');
let logGreenP = logTarget.bind(null, 'P', 'green');
let logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

/*Ф-ция ДОБАВЛЕНИЯ ВСЕХ обработчиков 
------------------------------------*/

let funcAddHandlers = () =>{
  /*чтобы Обработчик срабатывал на Фазе ПОГРУЖЕНИЯ:
                                третий  аргумент : {capture: true} или 
                                более упрощенно: true 
                                ---------------------------------------------- 

  на каждый Элемент по кллику - вешаем по 2 ОБРАБОТЧИКА!!! */
  elemDiv.addEventListener('click', logGreyDiv, {capture: true}); //на ПОГРУЖЕНИИ
  elemDiv.addEventListener('click', logGreenDiv); //на ВСПЛЫТИИ
  //Кликаем на DIV ==> Получаем: DIV |  DIV

  elemP.addEventListener('click', logGreyP, {capture: true}); //на ПОГРУЖЕНИИ
  elemP.addEventListener('click', logGreenP); //на ВСПЛЫТИИ
  //Кликаем на P ==> Получаем: DIV P  |  P DIV

  elemSpan.addEventListener('click', logGreySpan, {capture: true});//на ПОГРУЖЕНИИ
  elemSpan.addEventListener('click', logGreenSpan);//на ВСПЛЫТИИ
  //Кликаем на SPAN ==> Получаем:  DIV P SPAN | SPAN P DIV
};

funcAddHandlers(); // По умолчанию все обработчики должны быть включены

attacHandlerBtn.addEventListener('click', funcAddHandlers);  /*Подключаем Все обработчики по нажатию на кнопку
------------------------------------------------------------------------

Ф-ция УДАЛЕНИЯ ВСЕХ обработчиков 
---------------------------------*/ 

let funcRemoveHandlers = () =>{
  // removeEventListener - сработает на той же кнопке и на той же ф-ции - см. стр.46
  elemDiv.removeEventListener('click', logGreyDiv, {capture: true}); //на ПОГРУЖЕНИИ
  elemDiv.removeEventListener('click', logGreenDiv); //на ВСПЛЫТИИ

  elemP.removeEventListener('click', logGreyP, {capture: true}); //на ПОГРУЖЕНИИ
  elemP.removeEventListener('click', logGreenP); //на ВСПЛЫТИИ

  elemSpan.removeEventListener('click', logGreySpan, {capture: true});//на ПОГРУЖЕНИИ
  elemSpan.removeEventListener('click', logGreenSpan);//на ВСПЛЫТИИ
};

removeHandlerBtn.addEventListener('click', funcRemoveHandlers);/* УДАЛЯЕМ Все обработчики по нажатию на кнопку
------------------------------------------------------------------------

Ф-ция ОЧИСКИ содержимого <div class="rect events-list"> по нажатию на кнопку
---------------------------------  */ 

clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = ''; 
});
// ------------------------------------------------------------------------------
    

   

