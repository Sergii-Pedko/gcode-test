export function mult(x){
  return function(y){ 
    return x * y;
  };
};
console.log( mult(5)(4) ); 

export function twice(arg){
  return mult(arg)(2); 
};
console.log(twice(7)); 

export function triple(arg){
  return mult(arg)(3); 
};
console.log(triple(9));
