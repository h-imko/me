import sliderArticles from '../parts/slider-articles/slider.js'
import animationFieldForm from './parts/fields.js'
import bigSlider from './parts/bigSlider.js'
import sliderCategory from './parts/categorySlider.js'
import sliderItems from '../parts/slider-items/slider-items.js'
import { HvrSlider } from './parts/hvrSlider'
import customSelect from './parts/customSelect.js'
import customScroll from './parts/customScrollbar.js'
import selectTabs from './parts/selectTabs'
import rating from './parts/rating'
import footerAccordeon from "./parts/footerAccordeon"
import tabs from './parts/tabs'
import fixedHeader from './parts/headerFixed'
import sliderCard from './parts/card/slider'
import counterItems from "./parts/counterItems"
import textareaAutpheight from './parts/textareaAutoheight'
import readReviews from './parts/reviews'
import { showMoreCharacteristics, showMoreDescription } from './parts/card/showMore'
import accordeonsCardMobile from "./parts/card/accordeonsCardMobile"
import rangePrice from './parts/rangePrice'
import openFilterItem from './parts/openFilterItem'
import accordeon from './parts/accordeon'
import mobileFilter from "./parts/catalog/mobileFilter"
import menuTabs from "../parts/menu/menuTabs"
import catalogMenu from "./parts/catalogMenu"
import mobileMenu from "./parts/mobileMenu"
import lightbox from "./parts/lightbox"
import maskPhone from "./parts/maskPhone"
import bonusRange from "./parts/bonusRange"
import accordeonOrders from "./parts/accordeonOrders"
import mobilMenu from "../parts/mobile-catalog/mobileCatalog"
import { sliderCategoryCompare, compareSlider, alignStringsCompare, headerCompare, compareMobile, alignStringsCompareMobile, headerCompareMobile } from './parts/compare'
import maskNumber from "./parts/maskNumber"
import { openModal, closeModal } from "./parts/modals"
import popupMobileCard from "./parts/card/popupMobile"
import mobileSearch from "./parts/mobileSearch"
import closeCookie from "./parts/closeCookie"
import selectCity from "./parts/selectCity"
import catalogMenuFixed from "./parts/catalogMenuFixed"
import showMoreBrands from "../parts/brands/brands"
import favorites from "./parts/favorites"
import animationCompare from "./parts/animationCompare"
import checkRangeBonus from "./parts/checkRangeBonus"
import anchorReviews from "./parts/card/anchorReviews"
import showModal from "./parts/showModal"
import hideModal from "./parts/hideModal"
import datepicker from "./parts/datepicker"
import modalVideo from "./parts/modalVideo"
import showCashback from "./parts/tippy"

export {
	sliderArticles,
	animationFieldForm,
	bigSlider,
	sliderCategory,
	sliderItems,
	HvrSlider,
	customSelect,
	customScroll,
	selectTabs,
	rating,
	footerAccordeon,
	tabs,
	fixedHeader,
	sliderCard,
	counterItems,
	textareaAutpheight,
	readReviews,
	showMoreCharacteristics,
	showMoreDescription,
	accordeonsCardMobile,
	openFilterItem,
	accordeon,
	mobileFilter,
	menuTabs,
	catalogMenu,
	mobileMenu,
	lightbox,
	maskPhone,
	bonusRange,
	accordeonOrders,
	mobilMenu,
	sliderCategoryCompare,
	compareSlider,
	alignStringsCompare,
	headerCompare,
	compareMobile,
	alignStringsCompareMobile,
	headerCompareMobile,
	maskNumber,
	openModal,
	closeModal,
	popupMobileCard,
	mobileSearch,
	closeCookie,
	selectCity,
	catalogMenuFixed,
	showMoreBrands,
	favorites,
	animationCompare,
	checkRangeBonus,
	anchorReviews,
	showModal,
	hideModal,
	rangePrice,
	datepicker,
	modalVideo,
}


document.addEventListener('DOMContentLoaded', () => {
	bigSlider()
	sliderCategory()
	animationFieldForm()
	sliderItems()
	// hvrSlider();
	new HvrSlider('.item .hvr-images')
	sliderArticles()
	customSelect()
	customScroll('.select-city__list-shops')
	selectTabs('.block-select-city .default-select', '.select-city__list-shops')
	rating()
	tabs('.tabs-city')
	footerAccordeon()
	fixedHeader()
	sliderCard()
	counterItems()
	tabs('.card-tabs')
	textareaAutpheight()
	readReviews()
	showMoreCharacteristics()
	showMoreDescription()
	accordeonsCardMobile()
	rangePrice()
	openFilterItem()
	accordeon('.mobile-filters__filters .item-filter__name.name-btn')
	mobileFilter()
	menuTabs('.menu-catalog')
	catalogMenu()
	mobileMenu()
	lightbox()
	maskPhone()
	tabs('.ordering-tabs')
	bonusRange()
	accordeonOrders()
	mobilMenu()
	sliderCategoryCompare()
	compareSlider()
	alignStringsCompare('.column-compare__bottom')
	headerCompare()
	maskNumber()
	openModal()
	closeModal()
	popupMobileCard()
	mobileSearch()
	closeCookie()
	selectCity()
	customScroll('.menu-catalog__section')
	customScroll('.menu-catalog__tab-content')
	catalogMenuFixed()
	compareMobile()
	alignStringsCompareMobile('.compare-mobile__bottom')
	headerCompareMobile()
	showMoreBrands()
	favorites()
	animationCompare()
	checkRangeBonus()
	anchorReviews()
	datepicker()
	modalVideo()
	showCashback()
})