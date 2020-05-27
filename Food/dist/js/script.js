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

	//Modal 

	const modalTriggerBtns = document.querySelectorAll('[data-modal]'),
		  modalCloseBtn = document.querySelector('[data-close]'),
		  modal = document.querySelector('.modal');

		const openModal = () => {
			modal.classList.add('show');
			modal.classList.remove('hide');
			document.body.style.overflow = 'hidden';
			clearInterval(modalTimerId);
		};

		modalTriggerBtns.forEach((item) => {
			item.addEventListener('click', openModal);
		});
		
		const closeModal = () => {
			modal.classList.add('hide');
			modal.classList.remove('show');
			document.body.style.overflow = '';
		};

		modalCloseBtn.addEventListener('click', closeModal);
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.code === "Escape" && modal.classList.contains('show')) {
				closeModal();
			}
		});

		const modalTimerId = setTimeout(openModal, 5000);

		// проверяем если доскролили в конец показываем модал и удаляем наблюдение
		const showModalByScroll = () => {
			if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
				openModal();
				window.removeEventListener('scroll', showModalByScroll);
			}
		};

		//событие на скрол
		window.addEventListener('scroll', showModalByScroll);

		//Используем классы для карточек 
		class MenuCard {
			constructor(src, alt, title, descr, price, parent){
				this.src = src;
				this.alt = alt;
				this.title = title;
				this.descr = descr;
				this.price = price;
				this.parent = document.querySelector(parent);
				this.transfer = 27;
				this.changeToUAH();
			}

			changeToUAH() {
				this.price = this.price * this.transfer;
			}

			render() {
				const element = document.createElement('div');
				element.innerHTML = `<div class="menu__item">
					<img src=${this.src} alt=${this.alt}>
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">${this.descr}</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
				</div>`;
				this.parent.append(element);
			}
		}
		new MenuCard(
			'img/tabs/vegy.jpg',
			'vegy',
			'Меню "Фитнес"',
			'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
			9,
			'.menu .container'
			).render();

			new MenuCard(
				'img/tabs/elite.jpg',
				'elite',
				'Меню “Премиум”',
				'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
				19,
				'.menu .container'
				).render();

			new MenuCard(
				'img/tabs/post.jpg',
				'post',
				'Меню "Постное"',
				'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
				12,
				'.menu .container'
				).render();
});