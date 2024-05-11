import tippy from 'tippy.js'

export default function showCashback() {
	let template = document.querySelector('template.tippy-content')
	if (!template) {
		return
	}
	let ttp = tippy(".card__slider-big.card-slider .icon-cashback", {
		content: template.innerHTML,
		allowHTML: true,
		trigger: 'click',
		placement: 'top-end',
		maxWidth: 454,
		interactive: true,
	})[0]

	ttp.popper.querySelector(".tippy-closer").addEventListener("click", () => {
		ttp.hide()
	})

	ttp.show()
}