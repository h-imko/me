import NiceSelect from "nice-select2/dist/js/nice-select2"

export default function customSelect() {
	let arrSelectDefault = document.querySelectorAll('.default-select')

	arrSelectDefault.forEach(function (item) {
		let isFilterItem = Boolean(item.closest(".item-filter"))
		new NiceSelect(item, { selectedtext: "Выбрано", placeholder: isFilterItem ? "Все" : "Ничего не выбрано" })
	})
}