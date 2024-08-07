export let getItemsList = () => {
  let elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

console.log( getItemsList() );

export let getItemsArray = () => {
  let elementsList = document.querySelectorAll('.tool');
  let elementsArray = Array.from(elementsList);

  console.dir(elementsArray);
  return elementsArray;
};

console.log( getItemsArray() );




