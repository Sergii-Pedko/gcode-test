// Ф-ция считывает число из дата атрибута и записывает квадрат этого числа в другой дата атрибут-data-squared-number

export let squaredNumbers =()=> {
  let dataList = document.querySelectorAll('.number');
  
  for (let i = 0; i < dataList.length; i++) {
    dataList[i].setAttribute('data-squared-number', dataList[i].dataset.number**2);
  };
};

//squaredNumbers();



