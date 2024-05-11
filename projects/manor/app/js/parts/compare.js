import Swiper from 'swiper/bundle'

function sliderCategoryCompare() {
	new Swiper('.category-compare .swiper', {
		slidesOffsetAfter: 7,
		freeMode: true,
		slidesPerView: 'auto',
		navigation: {
			prevEl: '.prev-category-compare',
			nextEl: '.next-category-compare',
		}
	})
}

function compareSlider() {
	const sl1 = new Swiper('.compare__slider-items .swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			prevEl: '.compare__prev-slide',
			nextEl: '.compare__next-slide',
		},
		breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1600: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	})

	const sl2 = new Swiper('.column-compare__slider-characteristics .swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1600: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	})

	const sl3 = new Swiper('.fixed-slider-compare .swiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			prevEl: '.prev-slide-fixed',
			nextEl: '.next-slide-fixed',
		},
		breakpoints: {
			1024: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			1600: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}

	})

	const swipeAllSliders = (index) => {
		sl1.slideToLoop(index)
		sl2.slideToLoop(index)
		sl3.slideToLoop(index)
	}

	sl1.on('slideChange', () => swipeAllSliders(sl1.realIndex))
	sl2.on('slideChange', () => swipeAllSliders(sl2.realIndex))
	sl3.on('slideChange', () => swipeAllSliders(sl3.realIndex))
}

function alignStringsCompare(selector) {
	let strings = document.querySelectorAll(`${selector} .line-compare`).length
	for (let i = 1; i <= strings; i++) {
		let maxHeight = 0
		if (document.querySelectorAll(`${selector} [data-compare]`).length > 0) {
			document.querySelectorAll(`${selector} [data-compare="line${i}"]`).forEach(function (el) {
				if (el.offsetHeight > maxHeight) {
					maxHeight = el.offsetHeight
				}
			})
		}
		document.querySelectorAll(`${selector} [data-compare="line${i}"]`).forEach(function (el2) {
			el2.style.height = maxHeight + 'px'
		})
	}
}

function alignStringsCompareMobile(selector) {
	let strings = document.querySelectorAll(`${selector} .line-compare`).length
	for (let i = 1; i <= strings; i++) {
		let maxHeight = 0
		if (document.querySelectorAll(`${selector} [data-compare]`).length > 0) {
			document.querySelectorAll(`${selector} [data-compare="line${i}"]`).forEach(function (el) {
				if (el.offsetHeight > maxHeight) {
					maxHeight = el.offsetHeight
				}
			})
		}
		document.querySelectorAll(`${selector} [data-compare="line${i}"]`).forEach(function (el2) {
			if (el2.classList.contains('name-characteristic')) {
				el2.style.height = maxHeight + 10 + 'px'
			} else {
				el2.style.height = maxHeight + 'px'
			}
		})
	}
}

function headerCompare() {

	let compHeader = document.querySelector('.header-fixed-compare')
	let block = document.querySelector('.column-compare__bottom')

	window.addEventListener('scroll', function () {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop

		if (block) {
			if (scrolled >= block.getBoundingClientRect().y) {
				if (compHeader) {
					compHeader.classList.add('show')
				}
			} else {
				if (compHeader) {
					compHeader.classList.remove('show')
				}
			}
		}
	})

	// let observer = new IntersectionObserver((entries, ) => {
	//
	//     entries.forEach(entry => {
	//         if (entry.isIntersecting) {
	//             if (compHeader) {
	//                 compHeader.classList.add('show');
	//             }
	//         }
	//     })
	//
	// })
	//
	// if (block) {
	//     observer.observe(block)
	// }
}

function compareMobile() {

	// let sliders = document.querySelectorAll('.compare-mobile__top .block-slider');
	// if (sliders.length > 0){
	//     sliders.forEach(function (slider, index){
	//         new Swiper(slider.querySelector('.swiper'), {
	//             slidesPerView: 'auto',
	//             pagination: {
	//                 el: '.count-slide',
	//                 type: 'custom',
	//                 renderCustom: function (swiper, current, total) {
	//                     return current + ' из ' + (total - 1);
	//                 }
	//             },
	//         });
	//     })
	// }

	let sl1 = new Swiper(document.querySelector('.compare-mobile__top .swiper1'), {
		slidesPerView: 'auto',
		pagination: {
			el: '.count-slide',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return current + ' из ' + (total)
			}
		},
	})

	let sl2 = new Swiper(document.querySelector('.compare-mobile__top .swiper2'), {
		slidesPerView: 'auto',
		pagination: {
			el: '.count-slide',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				console.log(total)
				return current + ' из ' + (total)
			}
		},
	})

	let sl_ch1 = new Swiper(document.querySelector('.compare-mobile__bottom .swiper_ch1'), {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
	})

	let sl_ch2 = new Swiper(document.querySelector('.compare-mobile__bottom .swiper_ch2'), {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
	})


	let sl_fix1 = new Swiper(document.querySelector('.slider-fix1'), {
		slidesPerView: 'auto',
		pagination: {
			el: '.count-slide1',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return current + ' из ' + (total)
			}
		},
	})

	let sl_fix2 = new Swiper(document.querySelector('.slider-fix2'), {
		slidesPerView: 'auto',
		pagination: {
			el: '.count-slide2',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				console.log(total)
				return current + ' из ' + (total)
			}
		},
	})

	const swipeAllSliders1 = (index) => {
		sl1.slideToLoop(index)
		sl_ch1.slideToLoop(index)
		sl_fix1.slideToLoop(index)
	}

	sl1.on('slideChange', () => swipeAllSliders1(sl1.realIndex))
	sl_ch1.on('slideChange', () => swipeAllSliders1(sl_ch1.realIndex))
	sl_fix1.on('slideChange', () => swipeAllSliders1(sl_fix1.realIndex))

	const swipeAllSliders2 = (index) => {
		sl2.slideToLoop(index)
		sl_ch2.slideToLoop(index)
		sl_fix2.slideToLoop(index)
	}

	sl2.on('slideChange', () => swipeAllSliders2(sl2.realIndex))
	sl_ch2.on('slideChange', () => swipeAllSliders2(sl_ch2.realIndex))
	sl_fix2.on('slideChange', () => swipeAllSliders2(sl_fix2.realIndex))


	// let sliders2 = document.querySelectorAll('.fixed-slider-compare-mobile .block-slider');
	// if (sliders2.length > 0){
	//     sliders2.forEach(function (slider){
	//         new Swiper(slider.querySelector('.swiper'), {
	//             slidesPerView: 'auto',
	//             pagination: {
	//                 el: '.count-slide',
	//                 type: 'custom',
	//                 renderCustom: function (swiper, current, total) {
	//                     return current + ' из ' + (total - 1);
	//                 }
	//             },
	//         });
	//     })
	// }
	//
	// let sliders3 = document.querySelectorAll('.compare-mobile__bottom .block-slider');
	// if (sliders3.length > 0){
	//     sliders3.forEach(function (slider){
	//         new Swiper(slider.querySelector('.swiper'), {
	//             slidesPerView: 1,
	//             spaceBetween: 0,
	//         });
	//     })
	// }

	// const swipeAllSliders = (index) => {
	//     document.querySelector('.swiper1').slideToLoop(index);
	//     document.querySelector('.swiper2').slideToLoop(index);
	// };
	//
	// document.querySelector('.swiper1').on('slideChange', () => swipeAllSliders(document.querySelector('.swiper1').realIndex));
	// document.querySelector('.swiper2').on('slideChange', () => swipeAllSliders(document.querySelector('.swiper2').realIndex));

	// const swipeAllSliders = (index) => {
	//     sl1.slideToLoop(index);
	//     sl2.slideToLoop(index);
	//     sl3.slideToLoop(index);
	// };
	//
	// sl1.on('slideChange', () => swipeAllSliders(sl1.realIndex));
	// sl2.on('slideChange', () => swipeAllSliders(sl2.realIndex));
	// sl3.on('slideChange', () => swipeAllSliders(sl3.realIndex));

}

function headerCompareMobile() {
	let compHeader = document.querySelector('.header-fixed-compare-mobile')
	let block = document.querySelector('.compare-mobile__bottom')
	window.addEventListener('scroll', function () {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop

		if (block) {
			if (scrolled >= block.getBoundingClientRect().y) {
				if (compHeader) {
					compHeader.classList.add('show')
				}
			} else {
				if (compHeader) {
					compHeader.classList.remove('show')
				}
			}
		}

	})
}

function resizeWindow() {
	window.addEventListener('resize', () => {
		// alignStringsCompare('.column-compare__bottom');
		// alignStringsCompareMobile('.compare-mobile__bottom');
	})
}



export { sliderCategoryCompare, compareSlider, alignStringsCompare, headerCompare, compareMobile, alignStringsCompareMobile, headerCompareMobile, resizeWindow }