export default function mobileFilter() {
	let body = document.querySelector('body')
	let btnOpen = document.querySelector('.btn-filter-mobile')
	let filters = document.querySelector('.mobile-filters')
	let btnClose = document.querySelector('.mobile-filters .mobile-filters__close')
	if (btnOpen) {
		btnOpen.addEventListener('click', function () {
			if (filters) {
				filters.classList.add('opened')
				body.classList.add('no-scroll')
			}
		})
	}

	if (btnClose) {
		btnClose.addEventListener('click', function () {
			if (filters) {
				filters.classList.remove('opened')
				body.classList.remove('no-scroll')
			}
		})
	}

}