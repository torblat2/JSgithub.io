function thema() {
	let color = $('#color>option:selected').text();

	if (color == "Светлая тема") {
		$('body').css('background','white');
		$('body').css('color','black');
	}
	else if(color == "Тёмная тема"){
		$('body').css('background','black');
		$('body').css('color','white');
	}
	else {
		$('body').css('background','green');
		$('body').css('color','orange');
	}
}