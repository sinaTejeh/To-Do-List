'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.input-box');
    const addBtn = document.querySelector('.add-btn');
    const listContainer = document.querySelector('.list');

    //////////////////////////////////////
    const render = function (data) {
        const html = `  <li class="li">
                        <button class="check">
                        <img src="/img/1.png" class="image">
                        </button>
                      ${data}
                        <button class="close">&times</button>
                    </li>`;
        listContainer.insertAdjacentHTML('afterend', html);
    };

    let x = 0;
    const checkTask = function (btn, img) {
        if (x == 0) {
            img.src = '/img/3.png';
            x = 1;
        } else {
            img.src = '/img/1.png';
            x = 0;
        }
        btn.parentElement.classList.toggle('checked');
    }

    addBtn.addEventListener('click', function () {
        const data = input.value.trim();
        console.log(data);
        if (!input.value) {
            alert('you have to write s.th');
            input.value = '';
            return;
        };
        render(data);
        //clear input box
        input.value = '';


        const checkBtn = document.querySelector('.check');
        const image = document.querySelector('.image');
        checkBtn.addEventListener('click', function () {
            checkTask(checkBtn, image);
        });

        const closeBtn = document.querySelector('.close');
        closeBtn.addEventListener('click', function () {
            closeBtn.parentElement.remove();
        });
    });

})

