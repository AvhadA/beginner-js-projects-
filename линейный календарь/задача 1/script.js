
"use strict";

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth()+1;


let date = new Date(year, month, 0);


let monthArray = ['январь','ферваль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
let  heading = document.createElement('div');

heading.textContent = monthArray[date.getMonth()] + ' ' + date.getFullYear();
heading.classList.add('heading');
document.body.prepend(heading);



let ul = document.createElement('ul');
ul.classList.add('list');


for (let i = 1; i<= date.getDate(); i++) {
    let item = document.createElement('li');
        item.classList.add('item');
    item.textContent = i;
    if (i == now.getDate()) {
        item.classList.add('red');
    }
    ul.appendChild(item);
}

heading.insertAdjacentElement('afterend', ul);




let blockMonthChange = document.createElement('div');
blockMonthChange.classList.add('link');

let previousMonth = document.createElement('a');

previousMonth.textContent = 'Предыдущий месяц';


blockMonthChange.appendChild(previousMonth);

let nextMonth = document.createElement('a');

nextMonth.textContent = 'Следующий месяц';


blockMonthChange.appendChild(nextMonth);

heading.insertAdjacentElement('afterend', blockMonthChange);



previousMonth.addEventListener('click', searchDatePrevious);
nextMonth.addEventListener('click', searchDateNext);

function  searchDatePrevious(){
    ul.innerHTML =' ';
    heading.textContent = '';
    month--;
    let date = new Date(year, month, 0);
    
    for (let i = 1; i<= date.getDate(); i++) {
        let item = document.createElement('li');
        item.classList.add('item');
        item.textContent = i;
        
        ul.appendChild(item);
    }
    heading.textContent = monthArray[date.getMonth()] + ' ' + date.getFullYear();
  
    
}

function searchDateNext() {
    ul.innerHTML =' ';
    heading.textContent = '';
    month++;
    let date = new Date(year, month, 0);
    
    for (let i = 1; i<= date.getDate(); i++) {
        let item = document.createElement('li');
        item.classList.add('item');
        item.textContent = i;
        
        ul.appendChild(item);
    }
    heading.textContent = monthArray[date.getMonth()] + ' ' + date.getFullYear();
  
}




