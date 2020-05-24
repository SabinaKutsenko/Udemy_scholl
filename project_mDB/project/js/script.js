/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
/*-------------------------------------------------------------------------*/
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};
	
	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		form = document.querySelector('.add'),
		input = form.querySelector('.adding__input'),
		checkbox = form.querySelector('[type="checkbox"');
	
	const deleteAdv = (arr) => arr.forEach(element => element.remove());
	
	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};
	
	const sortArr = (arr) => {
		arr.sort();
	}; 
	
	const showList = (films, parent) => {
		parent.innerHTML = '';
		sortArr(films);
		films.forEach((film, i) => {
			parent.innerHTML += `<li class="promo__interactive-item">${i+1}) ${film}
										<div class="delete"></div></li>`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				films.splice(i, 1);
				showList(films, parent);
			});
		});
	};
	
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		if (input.value) {
			let newFilm = (input.value.length > 21) ? `${input.value.slice(0, 21)}...` : input.value;
			movieDB.movies.push(newFilm.charAt(0).toUpperCase() + newFilm.substr(1));
			if (checkbox.checked) console.log("Добавляем любимый фильм");
			showList(movieDB.movies, movieList);
			e.target.reset();
		}
	});
	
	// второй вариант удаления элементов
	//movieList.addEventListener('click', function(e) { 
	//	if (e.target.classList.contains('delete')) {
	//		const movieIndex = e.target.parentElement.textContent[0] - 1;
	//		movieDB.movies = [...movieDB.movies.slice(0, movieIndex), ...movieDB.movies.slice(movieIndex+1)];
	//		showList(movieDB.movies, movieList);
	//	}
	//});

	deleteAdv(adv);
	makeChanges();
	showList(movieDB.movies, movieList);
});
