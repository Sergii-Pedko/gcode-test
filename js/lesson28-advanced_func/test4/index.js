// const add3 = value => value + 3;
// const square = value => value * value;
// const half = value => value / 2;

export const compose = (...functions) =>
  value => {
    return functions.reduce((acc, func) => func(acc), value);
  };

// const result = compose(add3, square, half);

// console.log(result(2));
  