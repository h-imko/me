export default function selectContent(select, blockContent) {
	let fieldSelect = document.querySelector(`${select}`)
	let wrappContent = document.querySelectorAll(`${blockContent}`)
	if (fieldSelect) {
		if (wrappContent.length > 0) {
			wrappContent.forEach(function (item) {
				let itemData = item.dataset.qq
			})

			fieldSelect.addEventListener('change', function () {
				let selectVal = this.value
				wrappContent.forEach(function (item) {
					item.classList.remove('active')
					if (item.getAttribute('data-content') == selectVal) {
						item.classList.add('active')
					}
				})
			})
		}
	}
}