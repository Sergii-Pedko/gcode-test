const numberDelay = (num, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, delay);
  });

const asyncNumber1 = numberDelay(1, 1000);
const asyncNumber2 = numberDelay(2, 2000);
const asyncNumber3 = numberDelay(3, 3000);

const numSum = numbers => numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers => numSum(numbers))
    .catch(() => Promise.reject(new Error(`Can't calculate`)));

//asyncSum(asyncNumber1, new Error(), asyncNumber3).then(res => console.log(res));

