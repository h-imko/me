export default function autoHeightTextarea() {
	document.querySelectorAll('textarea.autoheight').forEach(el => {
		el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px')
		el.classList.add('auto')
		el.addEventListener('input', e => {
			el.style.height = 'auto'
			el.style.height = (el.scrollHeight) + 'px'
		})
	})
}