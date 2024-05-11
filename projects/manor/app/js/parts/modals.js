
function openModal() {
	let btnsOpen = document.querySelectorAll('[data-open-modal]')
	let modal
	if (btnsOpen.length > 0) {
		btnsOpen.forEach(function (btn) {
			btn.addEventListener('click', function (e) {

				e.preventDefault()
				let modalName = this.getAttribute('data-open-modal')
				modal = document.querySelector(`.${modalName}`)
				console.log(btn, modal)
				if (modal) {
					modal.classList.add('modal--visible')
				}
			})
		})
	}
}


function closeModal() {
	let btnsClose = document.querySelectorAll('[data-close-modal]')
	if (btnsClose.length > 0) {
		btnsClose.forEach(function (btn) {
			btn.addEventListener('click', function () {
				this.closest('.modal').classList.remove('modal--visible')
			})
		})
	}
}

window.addEventListener('click', function (e) {
	const target = e.target
	if (!target.closest('.modal__content') && !target.closest('[data-open-modal]')) {
		// document.querySelectorAll('.modal').forEach(function (el){
		//     el.classList.remove('modal--visible');
		// })
		if (target.closest('.modal')) {
			target.closest('.modal').classList.remove('modal--visible')
		}

	}
})

export { openModal, closeModal }