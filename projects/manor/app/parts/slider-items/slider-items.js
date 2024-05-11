import Swiper from 'swiper/bundle'
export default function sliderItems() {
	new Swiper('.slider-items .swiper', {
		slidesPerView: 4,
		spaceBetween: 30,
		navigation: {
			prevEl: '.slider-items__prev',
			nextEl: '.slider-items__next',
		},
		autoplay: {
			delay: 3000,
		},
		loop: true,
		speed: 500,
		breakpoints: {
			320: {
				slidesPerView: 1.38,
				spaceBetween: 10
			},
			600: {
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