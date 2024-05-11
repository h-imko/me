export default function readReviews() {
	let btns = document.querySelectorAll('.item-review__read-all-review')
	if (btns.length > 0) {
		btns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				this.closest('.item-review__text-review').querySelector('.text-review').classList.toggle('opened')
				this.classList.toggle('active')
				if (this.classList.contains('active')) {
					this.innerHTML = 'Свернуть отзыв'
				} else {
					this.innerHTML = 'Читать весь отзыв'
				}
			})
		})
	}
}