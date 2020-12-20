let fullScreenBtn = document.querySelectorAll('.full-screen-btn');
const modalWindow = document.querySelector('.modal-window');
let container = document.querySelectorAll('.container');
let isModalActive = false;

for (let i = 0; i < fullScreenBtn.length; i++) {
	fullScreenBtn[i].addEventListener('click', function () {
	 	modalWindow.classList.toggle('active');
	 	fullScreenBtn[i].innerHTML = '<img src="assets/icons/screen.svg">';
	 	isModalActive = !isModalActive;
	 	if (isModalActive === true) {
	 		container[i].classList.add('full');
	 		modalWindow.appendChild(container[i]);
	 	} else {
	 		fullScreenBtn[i].innerHTML = '<img src="assets/icons/fullscreen.svg">';
	 		container[i].classList.remove('full');
	 		modalWindow.removeChild(container[i]);
	 		document.body.appendChild(container[i]);
	 	}
	})
}

let mapNav = document.querySelectorAll('.map-nav');
let mapNavBtn = document.querySelectorAll('.map-nav-btn');
let closeBtn = document.querySelectorAll('.close-btn');
let index = 1;

for (let i = 0; i < mapNavBtn.length; i++) {
	mapNavBtn[i].addEventListener('click', function () {
	 	mapNav[i].classList.add('visible');
	 	mapNav[i].style.zIndex = index;
	 	index++;
	});
	closeBtn[i].addEventListener('click', function () {
    mapNav[0].classList.remove('visible');
    mapNav[1].classList.remove('visible');
    mapNav[2].classList.remove('visible');

  });
}
