export default function checkRangeBonus() {
	let block = document.querySelector('.ordering_bonuses')
	let range = block?.querySelector('.bonuses__field')
	let checkbox = block?.querySelector('.wrap-checkbox__checkbox')

	if (block) {
		if (checkbox) {

			if (checkbox.checked) {
				if (range) {
					range.classList.add('show')
				}
			} else {
				if (range) {
					range.classList.remove('show')
				}
			}

			checkbox.addEventListener('click', function () {
				if (checkbox.checked) {
					if (range) {
						range.classList.add('show')
					}
				} else {
					if (range) {
						range.classList.remove('show')
					}
				}

				if (range.style.maxHeight) {
					range.style.maxHeight = null
				} else {
					range.style.maxHeight = range.scrollHeight + "px"
				}
			})
		}

	}

}