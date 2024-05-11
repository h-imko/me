import noUiSlider from 'nouislider'

export default function bonusRange() {

	let itemRange = document.querySelectorAll('.ordering_bonuses')

	if (itemRange.length > 0) {
		itemRange.forEach(function (item) {
			let fieldRange = item.querySelector('.bonus-range')
			let input = item.querySelector('.input-bonus')
			let minVal = Number(input.dataset.min)
			let maxVal = Number(input.dataset.max)

			noUiSlider.create(fieldRange, {
				start: minVal,
				connect: true,
				range: {
					'min': [minVal],
					'max': [maxVal]
				},
				format: {
					from: function (value) {
						return parseInt(value)
					},
					to: function (value) {
						return parseInt(value)
					}
				}
			})

			fieldRange.noUiSlider.on('update', function (values, handle) {
				input.value = values[handle]
			})

			fieldRange.noUiSlider.on('slide', function () {
				input.nextElementSibling.classList.add('top')
			})
		})
	}
}