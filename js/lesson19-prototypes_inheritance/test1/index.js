/* Ф-ция будет присылать приглашение всем гостям, которые достигли 18 лет  */ 


export let vehicle = { //Объект-РОДИТЕЛЬ
  name: 'Argo',
  move(){
    console.log(`${this.name} is moving`);
  },
  stop(){
    console.log(`${this.name} stopped`);
  },
};

export let ship = { //Объект-НАСЛЕДНИК

  __proto__: vehicle, /* Все Св-ва Объекта-vehicle -> cтали ДОСТУПНЫ в Объекте-ship*/

  startMachine(){
    console.log(`${this.name} lifting anchor up`); //name - из объекта-vehicleObj_Parent
    this.move(); //вызываем метод-move - из объекта-vehicleObj_Parent
  }, 

  stopMachine(){
    this.stop(); //вызываем метод-stop - из объекта-vehicleObj_Parent
    console.log(`${this.name} lifting anchor down`);
  }, 
};

ship.startMachine(); /*Argo lifting anchor up
                       Argo is moving */

ship.stopMachine(); /* Argo stopped
                       Argo lifting anchor down */