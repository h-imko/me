import Swiper from 'swiper/bundle'

export default function categorySlider() {
	new Swiper('.slider-category .swiper', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			prevEl: '.slider-category__prev',
			nextEl: '.slider-category__next',
		},
		autoplay: {
			delay: 2000,
		},
		loop: true,
		speed: 500,
		breakpoints: {
			320: {
				slidesPerView: 1.38,
				spaceBetween: 10
			},
			450: {
				slidesPerView: 2.38,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 30,
			}
		}
	})
}