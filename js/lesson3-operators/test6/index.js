

/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

const activeUser = anotherUser || defaultUserName;
console.log(activeUser); //anonymus

const hasAccess = isAdmin || isLoggedIn;
console.log(hasAccess); //true

const isTruthy = message < anotherMessage;
console.log(isTruthy); //true

const isFalsy = !isLoggedIn;
console.log(isFalsy); //false

const isNotTrue = typeof message === 'number';
console.log(isNotTrue); //false

const isTrue = typeof message !== 'boolean'
console.log(isTrue); //true





