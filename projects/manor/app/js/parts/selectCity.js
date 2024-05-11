
export default function selectCity() {
	let panelSelectCity = document.querySelector('.popup-city')
	let closeBtns = document.querySelectorAll('.popup-city__ok, .popup-city__close, .list-city-mobile__close')
	let editCity = document.querySelectorAll('.popup-city__edit, .select-city__btn, .mobile-menu__select-city-btn')
	let listCity = document.querySelectorAll('.select-city__list-city, .list-city-mobile')


	if (editCity.length > 0) {
		editCity.forEach(function (btn) {
			btn.addEventListener('click', function () {
				if (listCity.length > 0) {
					listCity.forEach(function (city) {
						city.classList.add('show')
						panelSelectCity.classList.add('hide')
					})
				}
			})
		})
	}

	if (closeBtns) {
		closeBtns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				panelSelectCity.classList.add('hide')
				listCity.forEach(function (city) {
					city.classList.remove('show')
				})
			})
		})
	}

	window.addEventListener('click', e => {
		const target = e.target
		const btn1 = document.querySelector('.popup-city__edit')
		const btn2 = document.querySelector('.select-city__btn')
		const btn3 = document.querySelector('.mobile-menu__select-city-btn')
		const panel = document.querySelector('.select-city__list-city')
		const panel2 = document.querySelector('.list-city-mobile')

		const its_btn1 = target == btn1
		const its_btn2 = target == btn2
		const its_btn3 = target == btn3
		const its_panel = target == panel || panel.contains(target)
		const its_panel2 = target == panel2 || panel2?.contains(target)

		if (!its_btn1 && !its_btn2 && !its_btn3 && !its_panel && !its_panel2) {
			listCity.forEach(function (list) {
				list.classList.remove('show')
			})
		}
	})


}