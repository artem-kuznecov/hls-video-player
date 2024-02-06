// * ====================== Реализация отзывчивого ползунка перемотки в Chrome ======================
// * Из-за отсутствия в webkit аналога ::-moz-range-progress, необходимо было реализовать самостоятельно

// * При изменении положения ползунка (событие input) меняется градиент области ползунка
const changeInput = () => {
	const val =
		($('#slider').val() - $('#slider').attr('min')) /
		($('#slider').attr('max') - $('#slider').attr('min'))
	const percent = val * 100

	$('#slider').css(
		'background-image',
		// prettier-ignore
		'-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + percent + '%, #ff3232), ' + 'color-stop(' + percent +'%, transparent)' + ')'
	)
}

module.exports = { changeInput }
