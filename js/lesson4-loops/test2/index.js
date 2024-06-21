// Создай цикл, который посчитает произведение всех нечетных чисел от m до n включительно

let m = 1;
let n = 6; 
// 1 3 5
let result = 1;

for (let i = m; i < n; i++) {
  if (i % 2 === 1) { // При делении на 2 -> остаток 1 (НЕЧЕТНЫЙ)
    console.log(i); // 1 3 5 
    result = result * i;
  }
};

// console.log(`Result = ${result}`);
console.log(result);