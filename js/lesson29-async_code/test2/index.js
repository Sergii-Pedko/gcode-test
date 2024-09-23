export const pinger = (count, period) => {
  // put your code here
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    i = i - 1; 
    if ( i > 0) {
      //console.log(i);
      
      console.log('Ping');

    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
//pinger(5, 1000); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval