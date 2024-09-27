export const requestUserData = userId => {
  
  let reqest = new Promise ((resolve, reject) => {
    
    if (userId === 'broken') { 
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    }else {
      setTimeout(() => {
        resolve({ name: 'John', 
                  age: 17,
                  userId,
                  email: `${userId}@example.com`,
                });
        }, 1000);
    };        
  });
  return reqest;  
};

requestUserData('userid777').then(data => console.log(data)).catch(error => console.log(error));

requestUserData('broken').then(data => console.log(data)).catch(error => console.log(error));


