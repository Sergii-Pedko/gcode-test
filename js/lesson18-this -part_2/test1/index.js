/* Ф-ция будет присылать приглашение всем гостям, которые достигли 18 лет  */ 


export let event = {
  guests: [
    {name: 'BORIS', email: 'b@gmail.com', age: 77},
    {name: 'Vasya', email: 'v@gmail.com', age: 17},
    {name: 'Serg',  email: 's@gmail.com', age: 50},
  ],
  message: 'Welcome to the party!',

  getInvitations(){
    //                      Деструктур
    return this.guests.filter(({age})=>{
      return (age >=18);
    //        Деструктур  
    }).map(({name, email}) =>{
      return {
              email: email,        
              message: `Dear ${name}! ${this.message}`,
              };
    });
  }
};
