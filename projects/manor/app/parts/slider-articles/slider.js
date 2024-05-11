import Swiper from 'swiper/bundle'
export default function sliderArticles() {
	new Swiper('.slider-articles .swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			320: {
				slidesPerView: 1.45,
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
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	})
}