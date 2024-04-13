let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
    if (event.code == 'Enter') {
        let item = document.createElement('li');

            let task = document.createElement('span');
            task.textContent = input.value;
            task.addEventListener('dblclick', function() {
                let text = this.textContent;
                this.textContent = '';
                let inputItem = document.createElement('input');
                inputItem.value = text;
                this.appendChild(inputItem);

                let self = this;
                inputItem.addEventListener('keypress', function(event) {
                    if (event.code == 'Enter') {
                        self.textContent = this.value;
                    }
                });
                
            });
            item.appendChild(task);

            let remove = document.createElement('span');
            remove.classList.add('remove');
            remove.textContent = 'удалить';
            remove.addEventListener('click', function() {
                this.parentElement.remove();
            });
            item.appendChild(remove);
                
            let mark = document.createElement('span');
            mark.classList.add('mark');
            mark.textContent = 'сделано';
            mark.addEventListener('click', function() {
                task.classList.add('done');
            });
    
            item.appendChild(mark);
    
            this.value = '';
    

        list.appendChild(item);

        
        
        
    }
});


