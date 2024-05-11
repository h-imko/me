
export default function popupMobileCard() {
	let icons = document.querySelectorAll('.card__accordeons-mobile .item-characteristic__icon')
	if (icons) {
		icons.forEach(function (item) {
			item.addEventListener('click', function (e) {
				e.stopPropagation()
				this.querySelector('.item-characteristic__overlay').classList.add('show')
				let btnClose = this.querySelector('.close_item-characteristic')
				btnClose.addEventListener('click', function (event) {
					event.stopPropagation()
					this.closest('.item-characteristic__overlay').classList.remove('show')
				})
			})
		})
	}
}