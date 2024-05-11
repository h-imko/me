import Swiper from 'swiper/bundle'

export default function bigSlider() {
	new Swiper('.big-slider .swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
		},
		speed: 800,
		loop: true,
		pagination: {
			el: '.big-slider__pagination',
			clickable: true,
		},
		navigation: {
			prevEl: '.big-slider__prev-slide',
			nextEl: '.big-slider__next-slide',
		},
	})
}