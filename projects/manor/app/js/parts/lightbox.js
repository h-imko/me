import fsLightbox from 'fsLightbox'
export default function lightbox() {
	refreshFsLightbox()
	if (fsLightbox) {
		fsLightbox.props.types = ['image', 'video']
	}

	let btnLoopCard = document.querySelector('.enlarge-photo')
	if (btnLoopCard) {
		btnLoopCard.addEventListener('click', function () {
			document.querySelector('.card__slider-big .swiper-slide.swiper-slide-active a img').click()
		})
	}
}