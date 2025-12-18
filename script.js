'use strict';

const input = document.querySelector('.input-box');
const addBtn = document.querySelector('.add-btn');
const listContainer = document.querySelector('.list');

let count = 0;
//////////////////////////////////////

addBtn.addEventListener('click', function () {
    count++;
    const data = input.value;
    console.log(data);
    if (input.value === '') {
        alert('you have to write s.th');
        input.value = '';
        return;
    }
    const html = `<li class="li"><button class="check">⚪</button>${count}. ${data}<button class="close">&times</button></li>`;
    listContainer.insertAdjacentHTML('afterend', html);
    //clear input box
    input.value = '';


    const checkBtn = document.querySelector('.check');
    checkBtn.addEventListener('click', function (e) {
        checkBtn.parentElement.classList.toggle('checked');
        if (checkBtn.textContent === '⚪') checkBtn.textContent = '🔘';
        else checkBtn.textContent = '⚪';
    });

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function () {
        closeBtn.parentElement.remove();
    })
});

