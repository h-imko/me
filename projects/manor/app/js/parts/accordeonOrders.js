export default function accordeonOrders(selector) {
	let accordeons = document.querySelectorAll(`.order`)
	let i
	for (i = 0; i < accordeons.length; i++) {
		accordeons[i].querySelector('.order__btn-open .btn-open-order').addEventListener("click", function () {
			this.classList.toggle("active")
			let panel = this.closest('.order').querySelector('.list-items-order')
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px"
			}
			panel.classList.toggle('open')
		})
	}
}