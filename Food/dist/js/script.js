'use script';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

        const hideTabContent = () => {
            tabsContent.forEach(item => {
                //item.style.display = 'none';
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        };

        const showTabContent = (i = 0) => {
            //tabsContent[i].style.display = 'block';
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        };
        
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        });

        //Timer

        const deadline = '2020-12-27';

        const getTimeRemaining = (endtime) => {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor(t / (1000 * 60 * 60) % 24),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

            return {
                t: t,
                days,
                hours,
                minutes,
                seconds
            };
        };

        // добавление ноля в дату 
        const getZero = (num) => {
            if (num >=0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        };

        const setClock = (selector, endtime) => {
            // получяем элементы html со страницы
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                // запускаем ф-цию
                timeInterval = setInterval(updateClock, 1000); 

            // ининциализация разовая
            updateClock();

            // функция для получение разницы времени
            // обновление времени на странице
            function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        };

    setClock('.timer', deadline); 
});