let texts = [
	'text1',
	'text2',
	'text3',
];
let k = 3;

let btnTextarea = document.querySelector('#text button');
let btnCreate = document.querySelector('#create');
let textarea = document.querySelector('#text textarea');
let notes = document.querySelector('#menu #notes');
let p = document.querySelector('p');
let removeText = document.querySelector('#remove');
let removes = document.querySelectorAll('.remove');
changeTextarea();
p.innerHTML = 'режим создания записи';
for (let remove of removes) {
    remove.addEventListener('click', function() {
        remove.parentElement.remove();
        removeText.innerHTML = 'запись успешно удалена';
    });
    
}

btnTextarea.addEventListener('click', function() {
    removeText.innerHTML = '';
    let mode = this.dataset.mode;
    if (mode =='create') {
        
        k++;
        texts.push(textarea.value);
        console.log(texts);
        let item = document.createElement('li');
        let open = document.createElement('span');
        open.classList.add('open');
        open.innerHTML = `запись ${k}`;
        item.appendChild(open);
        let remove = document.createElement('span');
        remove.classList.add('close');
        remove.innerHTML = ' X';
        item.appendChild(remove);
        remove.addEventListener('click', function() {
            remove.parentElement.remove();
            removeText.innerHTML = 'запись успешно удалена';
        });
        
        
        textarea.value = '';
        item.setAttribute('data-key', `${k}`);
        notes.appendChild(item);
        changeTextarea();
        
    }
    if (mode =='update') {
        
        let key = this.dataset.key;
        texts[key-1] = textarea.value;

    }
});

btnCreate.addEventListener('click', function(){
    btnTextarea.setAttribute('data-mode', 'create');
    p.innerHTML = 'режим создания записи';
    removeText.innerHTML = '';
});
    
    
    

function changeTextarea() {
    let items = document.querySelector('#menu #notes').children;
    for (let item of items) {
        
        item.addEventListener('click', function() {
            p.innerHTML = 'режим изменения текста записи';
            for (let item of items) {
                item.classList.remove('active');
            }
            textarea.value = texts[item.dataset.key - 1];
            item.classList.add('active');
            btnTextarea.setAttribute('data-mode', 'update');
            btnTextarea.setAttribute('data-key', `${item.dataset.key}`);
        });
    }
}

