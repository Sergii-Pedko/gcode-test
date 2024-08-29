let weekDaysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export let dayOfWeek = (date, days) =>{
  let day = new Date(date).getDate();
  // console.log(day); - 1
  
  let dateInFuture = new Date(date).setDate(day + days);//Tue Jan 15 2019 00:00:00 GMT+0200  - к 1 января + 14 дней = 15 января 
  let dayWeekInFuture = new Date(dateInFuture).getDay();/* 2 (Вторник)
                                            СЧИТАЕТСЯ от 0(воскресенье) до 6(суббота)  - 
                                            Работаем с массивом-weekDaysArr*/
  //console.log(dayWeekInFuture); //2
  
  return weekDaysArr.filter((elem, index) =>{
    if ((index === dayWeekInFuture)) {
      return elem;
    };
  }).join('');                                  
};
// Проще: return weekDaysArr[new Date(dateInFuture).getDay()]

//                                 год   янв числ
let res = dayOfWeek( new Date(2019,  0,  1), 14 );

console.log( res ); //ВТОРНИК -'Tu'


