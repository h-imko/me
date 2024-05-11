import AirDatepicker from 'air-datepicker'

export default function datepicker() {
	let datepickers = document.querySelectorAll(`.datepicker`)
	if (datepickers.length > 0) {
		datepickers.forEach(function (datepicker) {
			new AirDatepicker(datepicker)
		})
	}
}
