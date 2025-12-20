'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input-box');
    const addBtn = document.querySelector('.add-btn');
    const listContainer = document.querySelector('.list');

    //////////////////////////////////////
    const setLocalItems = function () {
        const tasks = Array
            .from(listContainer.querySelectorAll('li'))
            .map(li => ({
                text: li.querySelector('span').textContent,
                done: li.querySelector('.checkbox').checked,
            }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalItems = function () {
        const data = JSON.parse(localStorage.getItem('tasks')) || [];
        data.forEach(({ text, done }) => addTask(text, done, false));
    };

    const render = function (data, done = false) {
        return `    <input type="checkbox" class="checkbox" ${done ? 'checked' : ''}>
                    <span>${data}</span>
                    <button class="edit">|||</button>
                    <button class="close">&times</button>
                    <button class="apply">&times</button>
                    `;
    };

    const addTask = function (text, done = false) {
        const data = text || input.value.trim();
        console.log(data);
        if (!data) {
            alert('you have to write s.th');
            input.value = '';
            return;
        };

        const li = document.createElement('li');
        li.textContent = data;
        li.innerHTML = render(data, done);
        listContainer.appendChild(li);
        input.value = '';

        const closeBtn = li.querySelector('.close')
        const checkbox = li.querySelector('.checkbox');
        const editBtn = li.querySelector('.edit');
        const applyBtn = li.querySelector('.apply');

        closeBtn.addEventListener('click', function () {
            li.remove();
            setLocalItems();
        });

        checkbox.addEventListener('change', function () {
            const checked = checkbox.checked;
            li.classList.toggle('done', checked);
            setLocalItems();
        });

        editBtn.addEventListener('click', function () {
            if (checkbox.checked) return;
            input.value = li.querySelector('span').textContent;
            applyBtn.style.display = 'block';
            applyBtn.addEventListener('click', () => {
                li.querySelector('span').textContent = input.value;
                input.value = '';
                applyBtn.style.display = 'none';
                setLocalItems();
            });
            setLocalItems();
        });
        setLocalItems();
    };
    addBtn.addEventListener('click', () => addTask());
    getLocalItems();
});

