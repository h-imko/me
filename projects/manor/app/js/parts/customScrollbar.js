import Scrollbar from 'smooth-scrollbar'

export default function customScrollbar(block) {
	let items = document.querySelectorAll(`${block}`)
	if (items.length > 0) {
		items.forEach(function (item) {
			Scrollbar.init(item, {
				alwaysShowTracks: true,
			})
		})
	}
}