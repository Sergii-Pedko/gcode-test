/* Сравнение ЧИСЕЛ */
const a = 17;
const b = 5;
console.log(`a > b:`, a > b);       //true
console.log(`a <= b:`, a <= b);      //false
console.log(`a == b:`, a == b);      //false
console.log(`a != b:`, a != b);       //true

/* Сравнение СТРОК */
console.log(`'a' < 'b':`, 'a' < 'b');  //true (какая "буква в алфавите дальше, та и больше")
console.log(`'ab' > 'a':`, 'ab' > 'a');     //true (где больше символов в строке, та и больше")

/* При сравнении переменных РАЗНЫХ типов они ПРЕОБРАЗУЮТСЯ в ЧИСЛА */
console.log(`'17' > 1:`, '17' > 1);     //true

/* СТРОГОЕ сравнение - Сравниваем "ЗНАЧЕНИЕ" и "ТИП ДАННЫХ" */
console.log(`17 === 1:`, 17 === 1);        //false
console.log(`17 === 17:`, 17 === 17);      //true
console.log(`17 === '17':`, 17 === '17');   //false
console.log(`17 === true:`, 17 === true);   //false

console.log(`'0' === '':`, '0' === '');      //false

console.log(`true === false:`, true === false);     //false
console.log(`true === true:`, true === true);       //true

console.log(`null === undefined:`, null === undefined);   //false
console.log(`false === 0:`, false === 0);    //false

/* НЕСТРОГОЕ сравнение  - Сравниваем ТОЛЬКО "ЗНАЧЕНИЕ"*/
console.log(`17 == '17':`, 17 == '17');            //true
console.log(`'0' == '':`, '0' == '');              //false
console.log(`0 == '':`, 0 == '');                   //true
console.log(`null == undefined:`, null == undefined); //true
console.log(`false == 0:`, false == 0);               //true

/* ОСТОРОЖНО c null и undefined */
console.log(`undefined == null:`, undefined == null);  //true
console.log(`undefined == 0:`, undefined == 0);      //false
console.log(`null == 0:`, null == 0);                //false
console.log(`undefined < 0:`, undefined < 0);         //false
console.log(`undefined > 0:`, undefined > 0);         //false