export default function footerAccordeon() {
	let arrMenu = document.querySelectorAll('.footer-column .footer__accordeon')
	if (arrMenu.length > 0) {
		arrMenu.forEach(function (item) {
			let btnOpen = item.querySelector('.footer__name-mobile')
			let hiddenMenu = item.querySelector('.footer__drop-mobile')

			btnOpen.addEventListener('click', function () {
				this.classList.toggle('open')
				hiddenMenu.classList.toggle('opened')
			})
		})
	}
}