export default function mobilMenu() {
	const mobilMenu = document.querySelector('.mobile-catalog')
	let linksSubmenu = mobilMenu.querySelectorAll('.mobile-catalog__next')
	let linksBackSection = mobilMenu.querySelectorAll('.mobile-catalog__back-lvl button')
	let openMenu = document.querySelectorAll('.mobile-catalog-open')
	let closeMenu = document.querySelectorAll('.mobile-catalog__close')

	linksSubmenu.forEach(function (element) {
		element.addEventListener('click', function (event) {
			if (this.nextElementSibling) {
				event.preventDefault()
				this.nextElementSibling.classList.toggle('show')
			}
		})
	})

	linksBackSection.forEach(function (element) {
		element.addEventListener('click', function () {
			this.closest('.mobile-catalog__submenu').classList.remove('show')
			// document.querySelectorAll('.mobile-catalog__submenu').forEach(function (el){
			//     el.classList.remove('show')
			//     mobilMenu.classList.remove('open');
			// })
		})
	})

	if (openMenu.length > 0) {
		openMenu.forEach(function (btn) {
			btn.addEventListener('click', function (e) {
				if (mobilMenu) {
					e.preventDefault()
					mobilMenu.classList.add('open')
				}

				if (document.querySelector('.overlay-mobile-menu').classList.contains('open')) {
					document.querySelector('.overlay-mobile-menu').classList.remove('open')
				}

			})
		})
	}

	closeMenu.forEach(function (closeBtn) {
		closeBtn.addEventListener('click', function () {
			mobilMenu.classList.remove('open')
			document.querySelectorAll('.mobile-catalog__submenu.show').forEach(function (el) {
				el.classList.remove('show')
			})
		})
	})
}
