import tippy from 'tippy.js'

document.addEventListener('DOMContentLoaded', function () {
	tippy('[data-tippy-content]')
	document.querySelectorAll(".card__title span").forEach(notLink => {
		tippy(notLink, {
			content: "Я не могу продемонстрировать этот проект"
		})
	})
})

