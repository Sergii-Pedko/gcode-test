export let getTitle = ()=>{
  let title = document.querySelector('.title');
  return title.textContent;
};
console.log( getTitle() );


export let getDescription = ()=>{
  let about = document.querySelector('.about');
  return about.innerText;
};
console.log( getDescription() );


export let getPlans = ()=>{
  let plans = document.querySelector('.plans');
  return plans.innerHTML;
};
console.log(getPlans() );


export let getGoal = ()=>{
  let goal = document.querySelector('.goal');
  return goal.outerHTML;
};
console.log( getGoal() );

  