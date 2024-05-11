import Swiper from 'swiper/bundle'

export default function cardSlider() {

	let swiperThumb = new Swiper(".card__slider-thumb .swiper", {
		spaceBetween: 13,
		slidesPerView: 5,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
		navigation: {
			prevEl: '.thumb-prev',
			nextEl: '.thumb-next',
		},
		breakpoints: {
			1024: {
				spaceBetween: 10
			},
			1440: {
				spaceBetween: 13
			}
		}
	})

	let swiper = new Swiper(".card__slider-big .swiper", {
		spaceBetween: 10,
		slidesPerView: 1,
		navigation: {
			prevEl: '.card-slider__prev',
			nextEl: '.card-slider__next',
		},
		thumbs: {
			swiper: swiperThumb,
		},
		breakpoints: {
			320: {
				pagination: {
					el: '.card-slider__pagination',
					type: 'fraction'
				},
				scrollbar: {
					el: '.swiper-scrollbar',
					hide: false,
					draggable: true,
				},
			},
			1024: {
				spaceBetween: 10
			},
			1440: {
				spaceBetween: 10
			}
		}

	})

	return swiper


}