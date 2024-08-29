/* Напишите функцию, которая посчитает разницу между двумя датами
    Функция должна вернуть разницу в формате: 275d 2h 58m 16s 
    
      1 секунда  = 1 000 милисекунд
      1 м = 60 с = 60 000 милисекунд
      1 ч = 60м = 3 600 000 милисекунд
      1 д = 24 часа = 86 400 000 милисекунд

    арифметически ДЕЛЕНИЕ С ОСТАТКОМ (деление по модулю)  
    Пусть a и b — целые числа, причём b не равно 0. Деление с остатком
    a («делимого») на b («делитель») означает нахождение таких целых чисел
    q и r, что выполняется равенство:
                              a = b *q + r 

в JS - ДЕЛЕНИЕ С ОСТАТКОМ (деление по модулю) - это операция, при которой ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ - ЯВЛЯЕТСЯ ОСТАТКОМ ОТ ДЕЛЕНИЯ - (a % b ) = r.

                          нам в задаче еще необходимо корме остатка-r
     необходимо найти q = (a - r)/b - это и есть ПОЛНОЕ кол-во дней, часов, мин, сек*/

export let getDiff = (startDate, endDate)=>{
  //Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше
  let timeStep = Math.abs(endDate.getTime() - startDate.getTime());

  let restMsDays = (timeStep % 86400000);
  console.log(restMsDays); //66 488 587 - остаток-МС от дней
  
  let days = (timeStep - restMsDays) / 86400000; //605
  console.log(days);
  console.warn('********************');

  let restMsHours = (restMsDays %  3600000);
  console.log(restMsHours); //1 688 587 - остаток-МС от часов
  
  let hours = (restMsDays - restMsHours) / 3600000; //18
  console.log(hours);
  console.warn('********************');

  let restMsMin = (restMsHours %  60000);
  console.log(restMsMin); //8 587 - остаток-МС от минут
  
  let min = (restMsHours - restMsMin) / 60000; //28
  console.log(min);
  console.warn('********************');

  let restMsSec = (restMsMin %  1000);
  console.log(restMsSec); //587 - остаток-МС от секунд
  
  let sec = (restMsMin - restMsSec) / 1000; //8
  console.log(sec);
  console.warn('********************');

  return `${days}d ${hours}h ${min}m ${sec}s`; // 605d 18h 28m 8s
};
 //                         год   мес число  час  мин сек)
let res = getDiff( new Date(2023,  0,  1,    21,  30, 10), new Date() );

console.log(res);
