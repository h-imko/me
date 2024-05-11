import ISpin from 'ispin'
import IMask from 'imask'

export default function counerItems() {
	let inputs = document.querySelectorAll('.input-counter:not(.is-initialized)')
	if (inputs.length > 0) {
		inputs.forEach(el => {
			new ISpin(el, {
				wrapperClass: 'ispin-wrapper',
				buttonsClass: 'ispin-button',
				step: 1,
				min: 1,
				max: 99,
				pageStep: 10,
				disabled: false,
				wrapOverflow: false,
				parse: Number,
				format: String
			})

			IMask(
				el,
				{
					mask: Number,
					min: 1,
					max: 999,
				})
			el.classList.add("is-initialized")
		})
	}
}