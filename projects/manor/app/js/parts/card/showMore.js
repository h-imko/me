function showMoreCharacteristics() {
	let btns = document.querySelectorAll('.card__block-characteristics .block-characteristics__btn')
	let lists = document.querySelectorAll('.card__block-characteristics .list-characteristics')
	if (btns.length > 0) {
		btns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				// if (list){
				//     list.classList.toggle('active')
				// }
				this.closest('.block-characteristics').querySelector('.list-characteristics').classList.toggle('active')
				if (this.closest('.accordeon__panel')) {
					this.closest('.accordeon__panel').style.maxHeight = 100 + '%'
				}
				this.classList.toggle('clicked')
				if (this.classList.contains('clicked')) {
					this.innerHTML = 'Свернуть'
				} else {
					this.innerHTML = 'Показать все'
				}
			})
		})

	}

}

function showMoreDescription() {
	let btns = document.querySelectorAll('.card__block-descr .card-descr__btn')
	let list = document.querySelector('.card__block-descr .card__descr')
	if (btns.length > 0) {
		btns.forEach(function (btn) {
			btn.addEventListener('click', function () {
				// if (list){
				//     list.classList.toggle('active')
				// }
				let descr = this.closest('.card-descr').querySelectorAll('.card__descr')
				// this.closest('.card-descr').querySelector('.card__descr').classList.toggle('active');
				descr.forEach(function (des) {
					des.classList.toggle('active')
				})
				if (this.closest('.accordeon__panel')) {
					this.closest('.accordeon__panel').style.maxHeight = 100 + '%'
				}
				this.classList.toggle('clicked')
				if (this.classList.contains('clicked')) {
					this.innerHTML = 'Свернуть'
				} else {
					this.innerHTML = 'Показать все'
				}
			})
		})
	}
}

export { showMoreCharacteristics, showMoreDescription }