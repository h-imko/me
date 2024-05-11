export default function closeCookie() {
	let closeCookie = document.querySelectorAll('.block-cookie__btn, .block-cookie__btn-close')
	let windowCookie = document.querySelector('.block-cookie')

	if (closeCookie.length > 0) {
		closeCookie.forEach(function (btn) {
			btn.addEventListener('click', function () {
				if (windowCookie) {
					windowCookie.classList.add('hide')
				}
			})
		})
	}
}