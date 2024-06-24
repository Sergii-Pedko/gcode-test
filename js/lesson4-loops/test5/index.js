// Строка из чисел

let n = 7;
let sum = '';

for (let i = 1; i < n + 1; i++) {
    console.log(String(i));
    sum = sum + String(i)
};

console.log(sum);