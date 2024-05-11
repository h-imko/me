
export default function mobileSearch() {
	let inputs = document.querySelectorAll('.mobile-open-search')
	let formSearch = document.querySelector('.mobile-search')
	let btnClose = document.querySelector('.mobile-search__close')
	if (inputs.length > 0) {
		inputs.forEach(function (item) {
			item.addEventListener('focus', function () {
				if (formSearch) {
					formSearch.classList.add('show')
					formSearch.querySelector('.mobile-search__input').focus()
				}
			})
		})
	}

	if (btnClose) {
		btnClose.addEventListener('click', function () {
			if (formSearch) {
				formSearch.classList.remove('show')
			}
		})
	}
}