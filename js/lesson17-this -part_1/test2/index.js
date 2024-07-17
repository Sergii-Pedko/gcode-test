/*Создайте объект, который будет запрашивать у пользователя номер телефона для обратного звонка  */ 

export const callbackPrompt = {
  message : 'Tell me tour telephone number',
  showPrompt(){
    let phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },

  showDeferredPrompt(ms){
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
