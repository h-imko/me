export default function accordeon(selector) {
	let accordeons = document.querySelectorAll(`${selector}`)
	let i
	for (i = 0; i < accordeons.length; i++) {
		accordeons[i].addEventListener("click", function () {
			this.classList.toggle("active")
			let panel = this.nextElementSibling
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px"
			}
		})
	}
}