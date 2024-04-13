"use strict";
let input = document.querySelector('input');
let simbols = document.querySelectorAll('.simbol');
let letters = document.querySelectorAll('.letter');
let space = document.querySelector('.space');
let del = document.querySelector('.delete');
let capsLock = document.querySelector('.caps-lock');
console.log(capsLock);

capsLock.addEventListener('click', function () {
    for( let letter of letters) {
        letter.classList.toggle('capslock');
        
    }
});

for (let simbol of simbols) {
    simbol.addEventListener('click', function() {
        input.value += simbol.textContent;
       
    });
}
for (let letter of letters) {
    letter.addEventListener('click', function() {
        
        if (letter.classList.contains('capslock')) {
            input.value += letter.textContent.toUpperCase();
        } else {
            input.value += letter.textContent;
        }
    });
}

space.addEventListener('click', function() {
    input.value += ' ';
    
});

del.addEventListener('click', function() {
    input.value = input.value.slice(0, input.value.length-1);
});







