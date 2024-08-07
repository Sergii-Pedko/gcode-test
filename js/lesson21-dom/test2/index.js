export let getTitleElement = () => {
  let titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

console.log( getTitleElement() );

export let getInputElement = () => {
  let inputElem = document.querySelector('[type="text"]');
  console.dir(inputElem);
  return inputElem;
};


console.log( getInputElement() );
