'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input-box');
    const addBtn = document.querySelector('.add-btn');
    const listContainer = document.querySelector('.list');

    //////////////////////////////////////
    const render = function (data) {
        return `    <input type="checkbox" class="checkbox">
                    <span>${data}</span>
                     <button class="close">&times</button>
                     <button class="edit">|||</button>
                    `;
    };

    const addTask = function () {
        const data = input.value.trim();
        if (!data) {
            alert('you have to write s.th');
            input.value = '';
            return;
        };
        const li = document.createElement('li');
        li.textContent = data;
        li.innerHTML = render(data)
        listContainer.appendChild(li);
        input.value = '';
    };

    addBtn.addEventListener('click', addTask);
});

