import IMask from "imask"
export default function maskPhone() {
	let arrInput = document.querySelectorAll(`.mask-phone`)
	if (arrInput.length > 0) {
		arrInput.forEach(function (item) {
			IMask(item, {
				mask: '+{7} (000) 000-00-00'
			})
		})
	}
}