export default function modalVideo() {
	let videos = document.querySelectorAll('.card__item-video')
	let modalVideo = document.querySelector('.modal-video')
	if (videos.length > 0) {
		videos.forEach(function (video) {
			video.addEventListener('click', function () {
				if (modalVideo) {
					modalVideo.classList.add('modal--visible')
					modalVideo.querySelector('iframe').src = `${this.getAttribute('data-video')}` + '?autoplay=1'
				}
			})
		})
	}

	if (modalVideo) {
		modalVideo.querySelector('.modal__close').addEventListener('click', function () {
			modalVideo.classList.remove('modal--visible')
			modalVideo.querySelector('iframe').src = ''
		})
	}

	window.addEventListener('click', function (e) {
		const target = e.target
		if (!target.closest('.modal-video .body-modal') && !target.closest('.card__item-video')) {
			if (modalVideo) {
				modalVideo.querySelector('iframe').src = ''
			}
		}
	})

}