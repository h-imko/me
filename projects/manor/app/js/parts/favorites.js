export default function favorites() {
	let btns = document.querySelectorAll('.item__favorites, .card__favorites, .item-cart__favorites')
	if (btns.length > 0) {
		btns.forEach((elem) => {
			elem.addEventListener('click', function () {
				this.classList.toggle('item__favorites--selected')
				if (this.classList.contains('item__favorites--selected')) {
					this.classList.add('animation')
				} else {
					this.classList.remove('animation')
				}
			})
		})
	}
}