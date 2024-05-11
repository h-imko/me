import IMask from "imask"
export default function maskNumber() {
	let arrInput = document.querySelectorAll(`.mask-number`)
	if (arrInput.length > 0) {
		arrInput.forEach(function (item) {
			IMask(item, {
				mask: Number
			})
		})
	}
}