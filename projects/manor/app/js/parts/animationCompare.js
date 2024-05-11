export default function animationCompare() {
	let btns = document.querySelectorAll('.item__compare, .card__compare')
	if (btns.length > 0) {
		btns.forEach((elem) => {
			elem.addEventListener('click', function () {
				this.classList.toggle('item__compare--selected')
			})
		})
	}
}