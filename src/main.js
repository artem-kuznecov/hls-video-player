require('../public/css/general.styles.css')

/*
 * Утилитарная функция
 * Переводит количество секунд в двусимвольную строку типа '89' или '01'
 */
function convertTime(seconds) {
	const min = Math.floor(seconds / 60)
	const sec = Math.floor(seconds % 60)

	return {
		min: min > 9 ? `${min}` : `0${min}`,
		sec: sec > 9 ? `${sec}` : `0${sec}`
	}
}
/*
 * ====================== Объявление переменных ======================
 */

const { changeInput } = require('./slider')

// Тестовый поток
const videoSource =
	'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'

// Окно воспроизведения видео
const video = document.getElementById('video')

// Меню управления воспроизведением
const controls = document.querySelector('#controls')

// Кнопка воспроизведения
const playPauseBtn = document.querySelector('#play-pause-btn')

// Кнопка смены режима просмотра (маленькое окно/полный экран)
const modeToggleBtn = document.querySelector('#mode-toggle-btn')

// Отображение текущего времени воспроизведения
const metricsSpan = document.querySelector('#metrics')

// Ползунок перемотки видео
const slider = document.querySelector('#slider')

// Кнопки быстрой перемотки
const remoteBtns = document.querySelectorAll(
	'#remote-btn-left, #remote-btn-right'
)

// Кнопка включения/отключения звука
const muteBtn = document.querySelector('#mute-btn')

// Ползунок переключения громкости
const volume = document.querySelector('#volume-btn')

// Общая длительность видео в секундах (обновляется при обновлении буфера)
var videoDuration = null

if (Hls.isSupported()) {
	var hls = new Hls()
	hls.loadSource(videoSource)
	hls.attachMedia(video)

	// * Обновление буфера HLS => увеличение длины индикатора буфера
	hls.on(Hls.Events.BUFFER_APPENDED, function () {
		const buffered = (video.buffered.end(0) / video.duration) * 100
		const bufferedPercetage =
			localStorage.isFullscreen == 'true' ? buffered * 0.65 : buffered

		document.querySelector('#buffer').style.width = `${bufferedPercetage}%`
	})

	// * Отключение субтитров
	hls.subtitleDisplay = false
}

// * Первый фрейм полностью загрузился => определяется длина видео
video.addEventListener('loadeddata', () => {
	videoDuration = `${convertTime(video.duration).min}:${
		convertTime(video.duration).sec
	}`

	// * Скрытие лоадера и показ контейнера просмотра
	document.querySelector('#loader').classList.toggle('hide')
	document.querySelector('#player-wrapper').classList.toggle('hide')

	// * Обновление показателя длины видео и текущего времени просмотра
	metricsSpan.innerHTML = `00:00/${videoDuration}`
})

$(document).ready(function () {
	// * Градиент области ползунка
	changeInput()
	$(slider).on('input', changeInput)

	// * Обновление ползунка слайдера в зависимости от длины видео
	if (video.duration) slider.setAttribute('max', video.duration)
	$(slider).val(0)

	// * Установка изначального режима просмотра в стандартный режим (не полноэкранный)
	localStorage.isFullscreen = false
})

/*
 * ====================== Громкость и уровень звука ======================
 */

// Переключение громкости
volume.addEventListener('input', function () {
	video.volume = volume.value

	if (volume.value == 0) {
		muteBtn.classList.toggle('fa-volume-xmark')
		muteBtn.classList.toggle('fa-volume-high')
	} else if (muteBtn.classList.contains('fa-volume-xmark')) {
		muteBtn.classList.toggle('fa-volume-xmark')
		muteBtn.classList.toggle('fa-volume-high')
	}
})

// Включение/отключение звука
muteBtn.addEventListener('click', function () {
	video.muted = !video.muted

	if (video.muted) {
		// * Сохранение значения звука (при включении звука обратно значение сохранится)
		localStorage.setItem('volume', volume.value)
		volume.value = 0
	} else volume.value = localStorage.volume

	muteBtn.classList.toggle('fa-volume-xmark')
	muteBtn.classList.toggle('fa-volume-high')
})

/*
 * ====================== Управление режимом просмотра ======================
 */

// Анимация скрытия меню управления видео в полноэкранном режиме
function animateControlsFullscreen() {
	controls.style.bottom = '0'
	setTimeout(() => {
		if (localStorage.isFullscreen == 'true')
			controls.style.bottom = `-${controls.offsetHeight}px`
	}, 1500)
}

// Выход из полноэкранного режима по нажатию Escape
// и возможность поставить видео на паузу нажатием пробела
$(document).keyup(function (e) {
	switch (e.key) {
		case 'Escape':
			if (localStorage.isFullscreen == 'true') $(modeToggleBtn).trigger('click')
			break
		case ' ':
			$(playPauseBtn).trigger('click')
			break
		case 'ArrowLeft':
			$('#remote-btn-left').trigger('click')
			break
		case 'ArrowRight':
			$('#remote-btn-right').trigger('click')
			break
		default:
			break
	}
})

// Переключение режима воспроизведения
modeToggleBtn.addEventListener('click', function () {
	// * Восстановление стиля меню управления и изменение режима просмотра
	if (localStorage.isFullscreen == 'true') {
		document.removeEventListener('mousemove', animateControlsFullscreen)
		controls.style.bottom = '0'
		localStorage.setItem('isFullscreen', false)
	} else {
		controls.style.bottom = `-${controls.offsetHeight}px`
		document.addEventListener('mousemove', animateControlsFullscreen)
		localStorage.setItem('isFullscreen', true)
	}

	// * Все элементы, которым необходимо изменить отображение
	const elementsToUpdate = document.querySelectorAll(
		'#player-wrapper, #video, #controls'
	)

	// * Изменение класса режима просмотра
	elementsToUpdate.forEach(element => {
		element.classList.toggle('fullscreen')
		element.classList.toggle('smallscreen')
	})

	// * Изменение иконки смены режима просмотра
	modeToggleBtn.classList.toggle('fa-compress')
	modeToggleBtn.classList.toggle('fa-expand')
})

// Функция остановки/продолжения воспроизведения видео
function togglePlay() {
	if (video.paused || video.ended) video.play()
	else video.pause()
	// * Изменение иконки плей/пауза
	playPauseBtn.classList.toggle('fa-play')
	playPauseBtn.classList.toggle('fa-pause')
}
playPauseBtn.addEventListener('click', togglePlay)

/*
 * ====================== Метрики воспроизведения ======================
 */

// Отображение прошедшего времени видео
video.addEventListener('timeupdate', function () {
	// * Текущее время видео
	const currentSeconds = convertTime(video.currentTime).sec
	const currentMinutes = convertTime(video.currentTime).min

	// * Вывод времени просмотра в блок под видео
	metricsSpan.innerHTML =
		currentMinutes + ':' + currentSeconds + '/' + videoDuration

	// * Изменение положения ползунка
	$(slider).val(video.currentTime.toFixed(0))
	$(slider).trigger('input')
})

// Отзывчивость ползунка
$(slider).on('change', function () {
	video.currentTime = $(this).val()
	$(slider).trigger('input')
})

// Кнопки быстрой перемотки
$(remoteBtns).each(function () {
	$(this).on('click', function () {
		let dirNumber = video.currentTime

		// * Изменение времени просмотра в меньшую или большую сторону
		if ($(this).data('direction') == 'backward') dirNumber -= 10
		else dirNumber += 10

		if (dirNumber < 0) dirNumber = 0

		dirNumber = Number(dirNumber.toFixed(0))

		// * Установка нового текущего времени просмотра
		video.currentTime = dirNumber
	})
})
