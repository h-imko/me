export default function headerFixed() {
	let header = document.querySelector('.header-fixed')
	let headerStatic = document.querySelector('.header-static')

	window.addEventListener('scroll', function () {
		const scrolled = window.pageYOffset || document.documentElement.scrollTop

		if (scrolled >= 338) {
			header.classList.add('scroller')
		} else {
			header.classList.remove('scroller')
		}

		if (scrolled >= 10) {
			headerStatic.classList.add('scroller')
		} else {
			headerStatic.classList.remove('scroller')
		}

	})

}