import Scrollbar from 'smooth-scrollbar'
export default function openFiltersItem() {
	let itemsFilter = document.querySelectorAll('.item-filter')
	if (itemsFilter.length > 0) {
		itemsFilter.forEach(function (item) {
			let btnShowAll = item.querySelector('.item-filter__all-filters')
			let listFilters = item.querySelector('.list-filters.scroll')

			if (btnShowAll) {
				btnShowAll.addEventListener('click', function (e) {
					e.preventDefault()
					this.classList.toggle('opened')

					if (this.classList.contains('opened')) {
						this.innerHTML = 'Свернуть'
					} else {
						this.innerHTML = 'Показать еще'
					}

					listFilters.classList.toggle('big-scroll')

					if (listFilters.classList.contains('big-scroll')) {
						Scrollbar.init(listFilters, {
							alwaysShowTracks: true,
						})
					} else {
						let scrollbar = Scrollbar.init(listFilters, {
							alwaysShowTracks: true,
						})
						scrollbar.scrollTo(0, 0, 0)
						scrollbar.destroy()
					}
				})
			}
		})
	}
}