export default function mobileMenu() {
	let btnOpen = document.querySelector('.btn-mobile-menu')
	let mobileMenu = document.querySelector('.overlay-mobile-menu')
	let btnClose = document.querySelector('.mobile-menu__close')

	if (btnOpen) {
		btnOpen.addEventListener('click', function () {
			if (mobileMenu) {
				mobileMenu.classList.add('open')
			}
		})
	}

	if (btnClose) {
		btnClose.addEventListener('click', function () {
			if (mobileMenu) {
				mobileMenu.classList.remove('open')
			}
		})
	}

}