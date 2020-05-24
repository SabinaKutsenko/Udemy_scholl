'use strict';

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');

function myAnimation() {
	let pos = 0;

	let id = setInterval(frame, 10);

	function frame () {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
	btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(e){
	if (event.target && event.target.tagName == 'BUTTON') {
		console.log(event);
	}
	if (event.target && event.target.classList.contains('first')) {
		console.log("First Button");
	}
	if (event.target && event.target.matches('button.first')) {
		console.log("Hello First Button");
	}
});