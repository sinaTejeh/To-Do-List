'use strict';

const input = document.querySelector('.input-box');
const addBtn = document.querySelector('.add-btn');
const listContainer = document.querySelector('.list');

//////////////////////////////////////
const render = function (data) {
    const html = `  <li class="li">
                        <button class="check">⚪</button>
                      ${data}
                        <button class="close">&times</button>
                    </li>`;
    listContainer.insertAdjacentHTML('afterend', html);
}

addBtn.addEventListener('click', function () {

    const data = input.value;
    console.log(data);
    if (input.value === '') {
        alert('you have to write s.th');
        input.value = '';
        return;
    }
    render(data);
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
    });
});

