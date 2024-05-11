export default function anchorReviews() {
	let link = document.querySelector('.count-reviews__link')
	let anchor = document.querySelector('#card-tab-reviews')

	if (link) {
		link.addEventListener('click', function () {
			if (anchor) {
				document.querySelectorAll('.nav-tabs-card .nav-tab').forEach(function (tab) {
					tab.classList.remove('tab--active')
				})
				anchor.click()
			}
		})
	}


	let linkMobile = document.querySelector('.count-reviews__link-mobile')
	let anchorMobile = document.querySelector('#card-tab-reviews-mobile')

	if (linkMobile) {
		linkMobile.addEventListener('click', function () {
			if (anchorMobile) {
				document.querySelectorAll('.card__accordeons-mobile .accordeon').forEach(function (accordeon) {
					accordeon.querySelector('.accordeon__btn').classList.remove('active')
				})
				anchorMobile.querySelector('.accordeon__btn').click()
			}
		})
	}


	function scrollToAnchor(link) {

		let smoothLink = document.querySelector(`${link}`)
		if (smoothLink) {
			smoothLink.addEventListener('click', function (e) {
				e.preventDefault()
				goAnchor(smoothLink)
			})
		}

		function goAnchor(link) {
			let href = link.getAttribute('href').substring(1)

			if (href) {
				let scrollTarget = document.getElementById(href)
				let topOffset = 150 // если не нужен отступ сверху
				let elementPosition = scrollTarget.getBoundingClientRect().top
				let offsetPosition = elementPosition - topOffset

				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth'
				})
			}
		}

	}

	scrollToAnchor('.grid-card__right .count-reviews__link')
	scrollToAnchor('.grid-card__right .count-reviews__link-mobile')

}