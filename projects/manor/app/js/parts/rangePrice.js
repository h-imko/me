import noUiSlider from 'nouislider'

export default function filterPrice() {

	let itemRange = document.querySelectorAll('.item-filter__price')

	if (itemRange.length > 0) {
		itemRange.forEach(function (item) {
			let fieldRange = item.querySelector('.field-range')
			let minInp = item.querySelector('.min-val-filter')
			let maxInp = item.querySelector('.max-val-filter')
			let minVal = Number(minInp.dataset.min)
			let maxVal = Number(maxInp.dataset.max)
			let arrInp = [minInp, maxInp]
			let minCurrentVal = minInp.dataset.mincurrent
			let maxCurrentVal = maxInp.dataset.maxcurrent

			noUiSlider.create(fieldRange, {
				start: [minCurrentVal ?? minVal, maxCurrentVal ?? maxVal],
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

			arrInp.forEach(function (input, handle) {
				input.addEventListener('change', function () {
					fieldRange.noUiSlider.setHandle(handle, this.value)
				})
			})

			fieldRange.noUiSlider.on('update', function (values, index) {
				if (minCurrentVal == "initialized") {
					arrInp[0].value = values[0]
				}
				if (maxCurrentVal == "initialized") {
					arrInp[1].value = values[1]
				}
			})

			if (typeof minCurrentVal !== "undefined") {
				minInp.value = minCurrentVal
				minCurrentVal = "initialized"
			} else {
				minCurrentVal = "initialized"
			}

			if (typeof maxCurrentVal !== "undefined") {
				maxInp.value = maxCurrentVal
				maxCurrentVal = "initialized"
			} else {
				maxCurrentVal = "initialized"
			}
		})
	}
}