import Cleave from "cleave.js"
import 'cleave.js/dist/addons/cleave-phone.ru'
import "fslightbox"
import { FADE, LOOP, Splide } from "@splidejs/splide"
import Dropzone from "./_Dropzone"
import InputContollerGroup from "./_InputControllerGroup"
import Popup from "./_Popup"
import Quantity from "./_Quantity"
import Spoiler from "./_Spoiler"
import Animate from "./_Animate"
import SyncedInputs from "./_SyncedInputs"
import { breakpoints, getCookie, headerHeightToCSS, ifClickInside, setCookie } from "./_helpers"
import flatpickr from "flatpickr"
import "fslightbox"
import "simplebar"
import { Russian } from "flatpickr/dist/l10n/ru.js"

document.addEventListener('DOMContentLoaded', function () {
	initPopups()
	// initTabs()
	initPhoneMask()
	initQuantity()
	initSpoilers()
	initInputControllerGroups()
	initSyncedInputs()
	initDropzone()
	// initAnimates()
	initSliders()
	initDatepickers()
	initCookieNotification()
	initOrderBonusRange()
	initSelectFilter()
	initHeaderCatalog()
	initBeautifulButtons()
	setStartCatalogCategory()
	initLoader()
}, {
	once: true
})

window.addEventListener("load", function () {
	headerHeightToCSS()
}, {
	once: true
})


function initLoader() {
	let loader = document.querySelector(".loader")
	if (loader) {
		window.toggleLoader = function () {
			loader.classList.toggle("is-active")
		}
	}
}

function setStartCatalogCategory() {
	if (matchMedia(`(min-width: ${breakpoints.mobile}px)`).matches) {
		document.querySelector(".header__catalog__drop__categories__item input")?.click()
	}
}

function initBeautifulButtons() {
	document.querySelectorAll('[data-button-beautiful]').forEach(btn => {
		btn.addEventListener('mousemove', e => {
			let rect = e.target.getBoundingClientRect()
			let x = e.clientX - rect.left
			let y = e.clientY - rect.top
			btn.style.setProperty('--x', x + 'px')
			btn.style.setProperty('--y', y + 'px')
		})
	})
}

function initHeaderCatalog() {
	let catalog = document.querySelector(".header__catalog")
	let controller = document.querySelector("#header__catalog__controller")

	if (catalog && controller) {
		window.addEventListener("click", (event) => {
			if (!ifClickInside(event, catalog)) {
				controller.checked = false
			}
		})
	}
}

function initSelectFilter() {
	document.querySelectorAll("[data-select-filter-group]").forEach(group => {
		let items = group.querySelectorAll("[data-select-filter-key]")
		let master = group.querySelector("[data-select-filter-master]")

		function filter() {
			items.forEach(item => {
				let key = item.dataset.selectFilterKey
				item.toggleAttribute("hidden", master.value && (key != master.value))
			})
		}

		filter()
		master.addEventListener("change", filter)
	})
}

function initOrderBonusRange() {
	let input = document.querySelector(".order__bonus__inputgroup input[type=number]")
	let range = document.querySelector(".order__bonus__inputgroup input[type=range]")

	if (input && range) {
		input.addEventListener("change", () => {
			range.value = input.value
			range.dispatchEvent(new Event("input"))
		})
		range.addEventListener("input", () => {
			input.value = range.value
		})
	}
}

function initCookieNotification() {
	let node = document.querySelector(".cookie-notification")
	if (node) {
		if (getCookie("cookie-notification-checked")) {
			node.remove()
		} else {
			node.classList.add("is-active")
			node.querySelectorAll(".cookie-notification__button, .cookie-notification__selfcloser").forEach(closer => {
				closer.addEventListener("click", () => {
					setCookie("cookie-notification-checked", "true", {
						"max-age": node.dataset.maxAge
					})
					node.remove()
				})
			})
		}
	}
}

function initDatepickers() {
	document.querySelectorAll(".docs__filter__date__input input").forEach(input => {

		new flatpickr(input, {
			dateFormat: "d.m.Y",
			maxDate: input.max,
			minDate: input.min,
			"locale": Russian,
			disableMobile: false
		})
	})
}

function initSliders() {
	document.querySelectorAll(".main-slider__slider .splide").forEach(slider => {
		new Splide(slider, {
			pagination: true
		}).mount()
	})


	document.querySelectorAll(".detail__view").forEach(container => {
		let detailImgSplide = new Splide(container.querySelector(".detail__img .splide"), {
			pagination: false,
			type: FADE,
			arrows: false,
			breakpoints: {
				[breakpoints.mobile]: {
					pagination: true
				}
			}
		})

		let detailThumbsSplide = new Splide(container.querySelector(".detail__thumbs .splide"), {
			pagination: false,
			autoWidth: true,
			gap: 7,
			arrows: false
		})

		detailImgSplide.sync(detailThumbsSplide)
		detailImgSplide.mount()
		detailThumbsSplide.mount()

		detailThumbsSplide.Components.Slides.forEach(slide => {
			slide.slide.addEventListener("click", () => {
				detailThumbsSplide.go(slide.index)
			})
		})

	})
}

function initSyncedInputs() {
	SyncedInputs.findGroups().forEach(group => {
		new SyncedInputs(...group)
	})
}

function initDropzone() {
	window.dropzones = []
	document.querySelectorAll(".dropzone").forEach(dropzone => {
		new Dropzone(dropzone)
	})
}

function initAnimates() {
	window.animates = [...document.querySelectorAll("[data-animate-group]")].map(group => new Animate(group))
}

window.initQuantity = initQuantity
function initQuantity() {
	document.querySelectorAll(".quantity:not(.quantity--no-init):not(.is-initialized").forEach(item => {
		new Quantity(item)
		item.classList.add("is-initialized")
	})
}

function initInputControllerGroups() {
	InputContollerGroup.findGroups().forEach(group => {
		new InputContollerGroup(group)
	})
}

function initPhoneMask() {
	document.querySelectorAll('input[type=tel]').forEach(input => {
		input.setAttribute("pattern", ".{16,16}")
		new Cleave(input, {
			phone: true,
			phoneRegionCode: "RU",
			delimiter: "-",
			prefix: "+7",
			noImmediatePrefix: true
		})
	})
}

function initPopups() {
	window.popups = {}
	document.querySelectorAll("[data-popup]").forEach(popup => {
		window.popups[popup.dataset.popup] = new Popup(popup)
	})
}

window.initSpoilers = initSpoilers
function initSpoilers() {
	document.querySelectorAll('.spoiler:not(.is-initialized)').forEach(spoiler => {
		new Spoiler(spoiler)
	})
}