const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const randomDelay = (from, to) => from + Math.random() * (to - from);

/* Напоминалочка ПРО СТРЕЛОЧНЫЕ Ф-ции:
                                    Если ОДНА СТРОКА -> УБИРАTЕТСЯ : return и {}
                                    Если ОДИН АРГУМЕНТ -> УБРАТЬ: ()
*/ 

const request = url =>
  new Promise(resolve => {
    const delay = randomDelay(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, delay);
  });

export const getUserASAP = userId => {
  const usersUrl = servers.map(serverUrl => `${serverUrl}/${userId}`);

  const requests = usersUrl.map(userUrl => request(userUrl));
  
  return Promise.race(requests);
};

/// getUserASAP('user-id1').then(res => console.log(res));
/*  {
      userData: {name: 'Tom', age: 17},
      source: 'https://server.com/au/user-id1'}
    }  
*/ 