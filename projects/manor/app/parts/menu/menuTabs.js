export default function menuTabs(block) {

	let wrapperBlockTabs = document.querySelectorAll(`${block}`)

	if (wrapperBlockTabs.length > 0) {
		wrapperBlockTabs.forEach(function (item) {
			let tabs = item.querySelectorAll(".nav-tab")
			let tabPanes = item.querySelectorAll(".tab-pane")

			if (tabs) {
				for (let i = 0; i < tabs.length; i++) {

					tabs[i].addEventListener("mouseover", function (item2) {
						let activeTabAttr = item2.target.getAttribute("data-tab")

						for (let j = 0; j < tabs.length; j++) {
							let contentAttr = tabPanes[j].getAttribute("data-tab-content")

							if (activeTabAttr === contentAttr) {
								tabs[j].classList.add("active")
								tabPanes[j].classList.add("active")
							} else {
								tabs[j].classList.remove("active")
								tabPanes[j].classList.remove("active")
							}
						};
					})
				}
			}
		})
	}
}