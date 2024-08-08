export let finishList = () => {
  let ul = document.querySelector('.list');
  let li5 = document.querySelector('.special');

  let li1 = document.createElement('li');
  li1.textContent = '1';
  ul.prepend(li1);

  let li8 = document.createElement('li');
  li8.textContent = '8';
  ul.append(li8);

  let li4 = document.createElement('li');
  li4.textContent = '4';
  li5.before(li4);

  let li6 = document.createElement('li');
  li6.textContent = '6';
  li5.after(li6);
};

//finishList();




