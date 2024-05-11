/**
 *	@description Блокирует {@link true} или разблокирует {@link false}  прокрутку страницы
 * @param {Boolean} action
 */
function toggleNoscrollBody(action) {
	function disable() {
		document.body.style.setProperty("--scroll-position", `${window.pageYOffset}px`)
		document.body.style.setProperty("--scrollbar-width", `${window.innerWidth - document.documentElement.clientWidth}px`)
		document.body.classList.add('noscroll')
	}

	function enable() {
		document.body.classList.remove('noscroll')
		window.scrollTo({
			top: document.body.style.getPropertyValue('--scroll-position')
				.replace('px', ""),
			left: 0,
			behavior: "instant"
		})
	}

	function toggle() {
		if (document.body.classList.contains('noscroll')) {
			enable()
		} else {
			disable()
		}
	}

	if (typeof action !== "undefined") {
		if (action) {
			disable()
		} else {
			enable()
		}
	} else {
		toggle()
	}
}
/**
 *
 * @param {Event} event
 * @param {Array.<Element>} targets
 * @returns
 */
function ifClickInside(event, ...targets) {
	return targets.reduce(function (accumulator, currentValue, index, array) {
		return accumulator + event.composedPath().includes(currentValue)
	}, false)
}

/**
 *
 * @param {Splide} splide
 * @param {HTMLElement} arrows
 */
function bindSplideArrows(splide, arrows) {
	let arrow_prev = arrows.querySelector(".splide__arrow--prev")
	let arrow_next = arrows.querySelector(".splide__arrow--next")

	function setArrowsState(current_index = 0) {
		arrow_prev.toggleAttribute("disabled", current_index == 0)
		arrow_next.toggleAttribute("disabled", current_index == splide.Components.Slides.getLength() - splide.options.perPage)
	}

	arrow_prev.addEventListener("click", function () {
		splide.go('<')
	})

	arrow_next.addEventListener("click", function () {
		splide.go('>')
	})

	splide.on("moved", setArrowsState)
	splide.on("mounted", setArrowsState)

	setArrowsState()
}

function headerHeightToCSS() {
	document.querySelector(':root').style.setProperty('--header-height', `${document.querySelector('header')?.getBoundingClientRect().height}px`)
}

function isVarName(name) {
	if (typeof name !== 'string') {
		return false
	}

	if (name.trim() !== name) {
		return false
	}

	try {
		new Function(name, 'var ' + name)
	} catch (_) {
		return false
	}

	return true
}

let breakpoints = (() => {
	let style = getComputedStyle(document.documentElement)
	return {
		mobile: parseInt(style.getPropertyValue("--mobile")),
		tablet: parseInt(style.getPropertyValue("--tablet")),
		laptop: parseInt(style.getPropertyValue("--laptop"))
	}
})()

function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options
	}

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString()
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey
		let optionValue = options[optionKey]
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue
		}
	}

	document.cookie = updatedCookie
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

export { toggleNoscrollBody, ifClickInside, bindSplideArrows, headerHeightToCSS, isVarName, breakpoints, setCookie, getCookie }