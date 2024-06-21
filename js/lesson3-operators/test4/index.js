/* оператор || (OR) */
console.log(`false || true:`, false || true);                  //true
console.log(`false || true || false:`, false || true || false);  //ПЕРВЫЙ-true
console.log(`false || false || false:`, false || false || false);  //ПОСЛЕДНИЙ-false

/* оператор && (AND) */
console.log(`false && true:`, false && true);      //false
console.log(`false && true && false:`, false && true && false); //ПЕРВЫЙ-false
console.log(`true && true && true:`, true && true && true);   //ПОСЛЕДНИЙ-true

/*         Логические операторы могут применятся к любым типам данных /

 || находит Первое-true

 Изначально false  - Число 0; Пустая строка ""; null; undefined; NaN
 ----------------------------------------------------------------------*/

console.log(`'text' || false:`, 'text' || false);  //text (ПЕРВЫЙ-true)
console.log(`true || 'text':`, true || 'text');  //true (ПЕРВЫЙ-true)
console.log(`undefined || null || 0 || '' || null:`, undefined || null || 0 || '' || null); //null (ПОСЛЕДНИЙ-false)

const customAmount = null; //false
const defaultAmount = 17;  // true
//                false             true
const amount = customAmount || defaultAmount;  //17(ПЕРВЫЙ-true)
console.log('amount:', amount);

/* && находит Первое-false */

console.log(`'text' && false:`, 'text' && false);  //false (ПЕРВЫЙ-false)
console.log(`true && 'text':`, true && 'text'); //text (ПОСЛЕДНИЙ-true)
console.log(`undefined && null && 0 && '' && null:`, undefined && null && 0 && '' && null); //undefined(ПЕРВЫЙ-false)

/* оператор отрицания-HE (NOT) */
console.log(`!true:`, !true);   //false
console.log(`!false:`, !false);   // true
console.log(`!'text':`, !'text');  //false

console.log(`!!'text':`, !!'text');  //true - Двойной восклицательный знак хорош тем, что позволяет КОНВЕРТИРОВАТЬ любое выражение в логическое(БУЛЕВО) значение.