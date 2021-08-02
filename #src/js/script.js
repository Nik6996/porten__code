//===============================================Burger==============================
let burger = document.querySelector('.menu-burger__burger');
let menuBurger = document.querySelector('.bottom-header__list');

burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	menuBurger.classList.toggle('active');
})


// ==============================================Slider=================================
if (document.documentElement.clientWidth <= 768) {
	let swipeContainer = document.querySelector('.list-product__body');

	swipeContainer.addEventListener('touchstart', touchStart, false);
	swipeContainer.addEventListener('touchmove', touchMove, false);

	let x1 = null;
	let y1 = null;

	function touchStart(event) {
		const firstTouch = event.touches[0];
		x1 = firstTouch.clientX;
		y1 = firstTouch.clientY;
		rollSlider();
	}
	function touchMove(event) {
		if (!x1 || !y1) {
			return false;
		}
		let x2 = event.touches[0].clientX;
		//let y2 = event.touches[0].clientY;
		let xDiff = x2 - x1;
		//let yDiff = y2 - y1;
		if (xDiff < 0) {
			count++;
			rollSlider();

		}
		if (xDiff > 0) {
			count--;
			rollSlider();
			if (count <= 0) {
				count = sumSlide
			}
		}
		if (count > sumSlide - 2) {
			count = -1;
		}
		// if (count < -2) {
		// 	count = sumSlide;
		// }

		console.log(count);
		// if (count < sumSlide) {
		// 	sliderLine.classList.add('left')
		// 	// sliderLine.classList.add('right');
		// 	//sliderLine.classList.remove('left');
		// }
		// if (count <= 1) {
		// 	sliderLine.classList.remove('left');
		// 	// sliderLine.classList.add('left');
		// }

		x1 = null;
		y1 = null;
	}


	const slide = document.querySelectorAll('cart');
	const sliderLine = document.querySelector('.list-product__slider-line');
	let count = 0;
	let width;
	let sumSlide = document.getElementsByClassName('slide').length;
	console.log(sumSlide);

	function init() {
		width = document.querySelector('.slide').offsetWidth;
		sliderLine.style.width = width * slide.length + 'px';

	}
	window.addEventListener('resize', init);


	function rollSlider() {
		sliderLine.style.transform = 'translate(-' + count * width + 'px) ';
		window.addEventListener('resize', init);
		init();
	}

}

