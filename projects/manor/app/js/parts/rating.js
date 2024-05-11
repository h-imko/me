import raterJs from 'rater-js'
export default function setRating() {
	let rating = document.querySelectorAll('.rating-stars')
	if (rating.length > 0) {
		rating.forEach(function (el) {
			raterJs({
				starSize: 21,
				readOnly: true,
				element: el,
				step_size: 0.1,
				showToolTip: false,
			})
		})
	}
}