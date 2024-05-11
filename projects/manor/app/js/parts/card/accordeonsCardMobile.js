export default function accordeonsCardMobile() {
	let accordeons = document.querySelectorAll(".accordeon__btn")
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