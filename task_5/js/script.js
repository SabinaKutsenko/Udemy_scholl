"use strict";

function qwest() {
    return prompt('Как вы относитесь к технике apple?', '');
}

function start(fn) {
    let menu = document.querySelector('.menu');
    let menuPoints = document.querySelectorAll('.menu .menu-item');
    menu.insertBefore(menuPoints[2],menuPoints[1]);

    let addMenuPoint = document.createElement('li');
    addMenuPoint.textContent = 'Пятый пункт';
    addMenuPoint.classList.add('menu-item');
    menu.appendChild(addMenuPoint);

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";

    let title = document.getElementById('title');
    title.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";

    let adv = document.querySelector('.adv');
    let columns =document.querySelectorAll('.column');
    columns[1].removeChild(adv);

    let ans = fn();
    let showAns = document.getElementById('prompt');
    showAns.textContent = ans;
}

start(qwest);