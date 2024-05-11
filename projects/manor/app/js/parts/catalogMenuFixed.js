export default function catalogMenuFixed() {
	let btnsOpen = document.querySelectorAll('.header-fixed .btn-catalog-open')
	let menuCatalog = document.querySelector('.header-fixed .menu-catalog')

	if (btnsOpen.length > 0) {
		btnsOpen.forEach(function (btn) {
			btn.addEventListener('click', function () {
				this.classList.toggle('opened')
				if (menuCatalog) {
					menuCatalog.classList.toggle('show')
				}
			})

			document.addEventListener('click', function (event) {
				const target = event.target
				let its_btnOpen = target == btn
				if (!its_btnOpen) {
					btn.classList.remove('opened')
					menuCatalog.classList.remove('show')
				}
			})
		})
	}


}