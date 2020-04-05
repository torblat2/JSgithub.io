window.onload = function() {
	function getRandomNumber(size) {
		return Math.floor(Math.random()*size)
	}
	function getDistance(event, target){
		let difX = event.offsetX - target.x;
		let difY = event.offsetY - target.y;
		console.log(event)
		return Math.sqrt((difX*difX)+(difY*difY)) 
	}
	function getHint(distance){
		if (distance >= 500){
			return 'Ты от клада далеко'
		}
		else if(distance >= 350){
			return 'Ещё далеко но уже ближе'
		}
		else if (distance >= 200){
			return 'Уже ближе'
		}
		else if (distance >= 50){
			return 'Ты на верном пути!'
		}
		else if (distance >= 25){
			return 'Совесм чуть-чуть осталось!'
		}
		else if (distance = 13){
			return 'Нашёл!'
		}
	}
	

	let width = $('#map').width()
	let height = $('#map').height()
	let clicks = 20;

	// Создаём клад со случ. координатами
	let target = {
		x:getRandomNumber(width),
		y:getRandomNumber(height)
	};
//Установили курсор
	$('#map').css('cursor', 'pointer');
	//Добовляем картинки в обработчик кликов
	$('#map').click(function(event){
		//увеличиваем счётчик кликов
		clicks--;
		//Получаем растояние до места клика
		let distance = getDistance(event, target);
		let hint = getHint(distance);
		$('#distance').text(hint)
		$('#popytka').text('Ходов осталось:'+clicks)
		if (clicks <= 0){
			location.reload()
		}
		if (distance < 10) {

		}
	});
}