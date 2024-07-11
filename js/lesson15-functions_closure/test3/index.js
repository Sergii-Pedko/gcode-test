/*Начинающий программист Петя во время написания своей программы столкнулся с необходимость отслеживать ее поведение. Для этого ему нужно выводить в консоль разные типы сообщений -  */ 
export const createLogger = () => {
  let myArr = [];

  function warn(text) {
    myArr.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  };

  function error(text) {
    myArr.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(text) {
    myArr.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(type) { //type принимает  - 'warn', 'error', 'log'
    if (type === undefined || myArr.length === 0) {

      // Cортировка в МАССИВЕ-ОБъектов
      return myArr.sort((a, b) => {
        return b.dateTime - a.dateTime});
    };

    const filterArray = myArr.filter((element) => {
      return (element.type === type)
    });
    // Cортировка в МАССИВЕ-ОБъектов - в одну строку БЕЗ return
    return filterArray.sort((a, b) => b.dateTime - a.dateTime);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log( logger1.getRecords() ); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log( logger1.getRecords('log') ); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log( logger1.getRecords('error') ); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]

console.log( logger1.getRecords('warn') ); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]
// -------------------------------------------------------------------

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log( logger2.getRecords('error') ); // ===> []
console.log( logger2.getRecords('warn') ); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

console.log( logger2.getRecords() ); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// -------------------------------------------------------

const logger3 = createLogger();
console.log( logger3.getRecords('error') ); // ===> []
console.log( logger3.getRecords() ); // ===> []