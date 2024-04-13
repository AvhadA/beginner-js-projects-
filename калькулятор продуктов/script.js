'use strict';

let nameInput   = document.querySelector('#name');
let price  = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add    = document.querySelector('#add');
let table  = document.querySelector('#table');
let total  = document.querySelector('#total');

add.addEventListener('click', function() {
    let newTr = document.createElement('tr');
    allowEdit(createCell(newTr, nameInput.value, 'name'));
    allowEdit(createCell(newTr, price.value, 'price'));
    allowEdit(createCell(newTr, amount.value, 'amount'));
    createCell(newTr, amount.value*price.value, 'cost');
    createCell(newTr, 'удалить', 'remove').addEventListener('click', function() {
        this.parentElement.remove();
        recountTotal();
    });

    table.appendChild(newTr);
    recountTotal();

});



function createCell(tr, value, name) { 
    let td = document.createElement('td');
    td.classList.add(name);
    td.textContent = value;
    tr.appendChild(td);
    return td;

}

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
    let sum = 0;
	if (costs) {
		for (let elem of costs) {
            sum += Number(elem.textContent);
        }
	}
    total.textContent = sum;
}

function allowEdit(td) {
	td.addEventListener('dblclick', function() {
        let text = td.textContent;
        td.textContent = '';

		let input = document.createElement('input');
        input.value = text;
        td.appendChild(input);

        input.addEventListener('keypress', function(event) {
            if (event.code == 'Enter') {
                td.textContent = this.value;
                
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let tdPrice = td.parentElement.querySelector('.price');
                    let tdAmount = td.parentElement.querySelector('.amount');
                    let tdCost = td.parentElement.querySelector('.cost');
                    
                    tdCost.textContent = tdPrice.textContent*tdAmount.textContent;
                    recountTotal(); 

                }
            }
        });
	});
}