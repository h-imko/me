export default function showModal(selector) {
	let modal = document.querySelector(`${selector}`)
	if (modal) {
		modal.classList.add('modal--visible')
	}
}

// window.showModal = function (selector){
//     let modal = document.querySelector(`${selector}`);
//     if (modal){
//         modal.classList.add('modal--visible');
//     }
// }