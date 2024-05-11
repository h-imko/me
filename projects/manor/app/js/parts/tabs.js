export default function tabs(selector) {
	document.querySelectorAll(`${selector}`).forEach(wrapperBlockTabs => {
		let tabs = wrapperBlockTabs.querySelectorAll(".nav-tab")
		let tabPanes = wrapperBlockTabs.querySelectorAll(".tab-pane")
		if (tabs) {
			for (let i = 0; i < tabs.length; i++) {

				tabs[i].addEventListener("click", function (e) {
					e.preventDefault()
					let activeTabAttr = e.target.getAttribute("data-tab")

					for (let j = 0; j < tabs.length; j++) {
						let contentAttr = tabPanes[j].getAttribute("data-tab-content")

						if (activeTabAttr === contentAttr) {
							tabs[j].classList.add("tab--active")
							tabPanes[j].classList.add("active")
						} else {
							tabs[j].classList.remove("tab--active")
							tabPanes[j].classList.remove("active")
						}
					};
				})
			}
		}
	})
}