const { src, dest, watch, parallel, series } = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browsersync = require('browser-sync').create()
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const del = require('del')
const includefile = require('gulp-file-include')
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')
const newer = require('gulp-newer')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')

const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')


function html() {
	return src('app/*.html')
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "HTML",
				message: error.message
			}))
		}))
		.pipe(includefile())
		.pipe(dest('../../src/assets/static/manor/'))
		.pipe(browsersync.stream())
}

function styles() {
	return src([
		'node_modules/swiper/swiper.scss',
		'node_modules/swiper/swiper-bundle.css',
		'node_modules/nice-select2/dist/css/nice-select2.css',
		'node_modules/nouislider/dist/nouislider.css',
		'node_modules/air-datepicker/air-datepicker.css',
		'app/scss/style.scss'
	])
		.pipe(sourcemaps.init())
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "CSS",
				message: error.message
			}))
		}))
		.pipe(scss({ // конвертируем scss в css
			outputStyle: 'compressed'// сжатая версия css
		}).on('error', scss.logError))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 3 versions'], // префиксы для 10 последних версий браузера
			grid: true, // префиксы для грида
			flexbox: true, // префиксы для флекса
		}))
		.pipe(sourcemaps.write())
		.pipe(dest('app/css/')) // путь куда создаем преобразованный файл
		.pipe(dest('../../src/assets/static/manor/css/'))
		.pipe(browsersync.stream()) // обновление страницы
}

function scripts() {
	return src([ // перечисляем последовательность скриптов
		// 'node_modules/swiper/swiper-bundle.min.js',
		// 'node_modules/imask/../../src/assets/static/manor/imask.js',
		// 'node_modules/smoothscroll-polyfill/../../src/assets/static/manor/smoothscroll.js',
		// 'node_modules/smooth-scrollbar/../../src/assets/static/manor/smooth-scrollbar.js',
		// 'node_modules/nice-select2/../../src/assets/static/manor/js/nice-select2.js',
		// 'node_modules/fslightbox/index.js',
		// 'node_modules/rater-js/index.js',
		// 'node_modules/tingle.js/../../src/assets/static/manor/tingle.js',
		'app/**/*.js'
	])
		.pipe(plumber({
			errorHandler: notify.onError(error => ({
				title: "JS",
				message: error.message
			}))
		}))
		// .pipe(concat('scripts.min.js')) // создаем общий файл для всех скриптов
		// // .pipe(uglify()) // сжимаем файл
		// .pipe(dest('app/js/')) // выгружаем новый объединееный файл
		// .pipe(dest('../../src/assets/static/manor/js/'))
		.pipe(browsersync.stream()) // обновление страницы
}

// Сжатие картинок
function images() {
	return src('app/img/**/*')
		.pipe(newer('../../src/assets/static/manor/img/'))
		.pipe(imagemin({ verbose: true }))
		.pipe(dest('../../src/assets/static/manor/img/'))
}

function fonts() {
	src('app/fonts/*.ttf')
		.pipe(ttf2woff())
		.pipe(dest('../../src/assets/static/manor/fonts/'))


	return src('app/fonts/*.ttf')
		.pipe(ttf2woff2())
		.pipe(dest('../../src/assets/static/manor/fonts/'))
}

function browserSync() {
	browsersync.init({
		server: {
			baseDir: "../../src/assets/static/manor/",
		}
	})
}

function watching() { // следим за файлами проекта
	watch(['app/**/*.html'], html).on('change', browsersync.reload) // следим за всеми файлами html
	watch(['app/scss/**/*.scss', 'app/parts/**/*.scss'], styles) // следим за всеми файлами scss и запуск функции styles
	watch(['app/**/*.js', '!app/js/**/*.min.js'], webpackBuild)
	watch(['app/img/**/*'], images)
	watch(['app/js/main.js'], webpackBuild)
}

function webpackBuild() {
	return src('app/js/main.js')
		.pipe(webpackStream(webpackConfig), webpack)
		.pipe(dest('../../src/assets/static/manor/js/'))
		.pipe(browsersync.stream())
}

// Сбор готового проекта
function build() {
	return src([
		'app/*.html',
		'app/css/style.min.css',
		'app/fonts/*.{woff,woff2}',
		'app/js/scripts.min.js',
	], { base: 'app' })
		.pipe(includefile())
		.pipe(dest('dist'))
}

function clearDist() { // Удаление папки dist
	return del('dist')
}

// exports.fontsStyle = fontsStyle;
exports.styles = styles
exports.watching = watching
exports.browserSync = browserSync
exports.images = images
exports.clearDist = clearDist
exports.html = html
exports.fonts = fonts
exports.webpackBuild = webpackBuild


exports.build = series(clearDist, images, build, fonts)
exports.default = parallel(styles, html, watching, browserSync)

exports.dev = series(clearDist, images, build, parallel(styles, html, webpackBuild, fonts, watching, browserSync))
