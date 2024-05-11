export default function animationFieldForm() {
	let fields = document.querySelectorAll('.wrap-field')
	if (fields.length > 0) {
		fields.forEach(function (el) {
			let input = el.querySelector('.wrap-field__input')
			let label = el.querySelector('.wrap-field__name-field')

			if (input.value) {
				label.classList.add('top')
			}

			input.addEventListener('focus', function () {
				label.classList.add('top')
			})

			input.addEventListener('blur', function () {
				if (this.value != '') {
					return
				} else {
					label.classList.remove('top')
				}
			})
		})
	}
}
