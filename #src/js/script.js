let burger = document.querySelector('.menu-burger__burger');
let menuBurger = document.querySelector('.bottom-header__list');

burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	menuBurger.classList.toggle('active');
})