export default function showMoreBrands() {
	let btns = document.querySelectorAll('.block-brands .block-brands__show-more .show-more__btn')
	let list = document.querySelectorAll('.block-brands .list-brands')
	if (btns.length > 0) {
		btns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				if (list.length > 0) {
					list.forEach(function (item) {
						item.classList.toggle('active')
					})
				}
				this.classList.toggle('clicked')
				if (this.classList.contains('clicked')) {
					this.innerHTML = `Скрыть <span class="show-more__icon"></span>`
				} else {
					this.innerHTML = `Показать еще <span class="show-more__icon"></span>`
				}
			})
		})

	}

}