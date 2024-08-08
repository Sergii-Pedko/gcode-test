// .parentNode - РОДИТЕЛЬСКИЙ Узел для ТЕКУЩЕГО ЭЛЕМЕНТА

export let getSection =(num)=> {
  let span = document.querySelector(`span[data-number="${num}"]`);
  //console.log(span);
  //console.log(span.parentNode);
  return span.parentNode.dataset.section;
};


//console.log( getSection(5) );
