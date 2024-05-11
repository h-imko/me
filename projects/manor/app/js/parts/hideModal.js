export default function hideModal(selector) {
	let modal = document.querySelector(`${selector}`)
	if (modal) {
		modal.classList.remove('modal--visible')
	}
}

// window.hideModal = function (selector){
//     let modal = document.querySelector(`${selector}`);
//     if (modal){
//         modal.classList.remove('modal--visible');
//     }
// }