function rabndomWord(massiv) {
	let random = massiv[Math.floor(Math.random()*massiv.length)];
	return random;
}	

function setWord(){
	const words = ["волк","петя","самолёт","компутер","путин","погода","тэг","помидор","бабушка","лунтик","пеппа","окай","хайль","история","всё","привет","оно","уроки","атака","слон","карандаш","самовар","поезд","компьютер","игра","собака","корова","певец","луна","програмист","мост","кот","вокзал","том","головоломка","опера","платформа","капитан","машинист","пилот","доктор","превысокомногорассмотрительствующий"];
	let word = rabndomWord(words);
	return word;
} 
let name  = "Ты"
let slovo = setWord();
let word = [];
for (let i = 0; i < slovo.length ; i++) {
	word[i] = "_"
}
let ostalos = slovo.length;
let errors = 0;
let wrong = [];
//функция которая устанавливает имя и создаёт тполя с вопросами
function getName(){
	let inp = $('#name').val()
	if (inp.length > 0) {
		name = inp;
	}
	$('body').empty();
	$('body').append('<div class="div">');
	$('.div').append('<h1>'+word.join(' ')+'</h1>');
	$('.div').append('<input id="ans">');
	$('#ans').focus();
	$('.div').append('<button onclick="game()">Отправить</button>');
	$('body').append('<canvas id="canv"></canvas>');
	$('#canv').attr({
		width: '1000',
		height:'700'
	});
	$('.div').height('115px')
}



function game() {
	let letter = $('#ans').val().toLowerCase();
	let ugadal = false

	for (var i = 0; i < slovo.length; i++) {
	  	 if(slovo[i] == letter){
	  	 	word[i] = letter.toUpperCase();
	  	 	ugadal = true;
	  	 	ostalos--;
	  	 }
	}

	if ( ugadal == false) {
		errors++;
		wrong.push(letter.toUpperCase())
		drawV(errors)
	}	


	if (ostalos == 0) {
		$('.div').empty()
		$('#canv').fadeOut(2000,function(){
			let canv = $('#canv');
			canv.clearCanvas();
			canv.drawArc({
				strokeStyle:'black',
				strokeWidth:5,
				x:400, y:250,
				radius: 30,
				start: 0, end:360,
				close:true
			})
			canv.drawLine({
				strokeStyle: 'black',
				strokeWidth: 5,
				x1:400, y1:280,
				x2:400, y2:400
			})
		

			canv.drawLine({
				strokeStyle: 'black',
				strokeWidth: 5,
				x1:400, y1:300,
				x2:450, y2:350

			})
		
		
			canv.drawLine({
				strokeStyle: 'black',
				strokeWidth: 5,
				x1:400, y1:300,
				x2:350, y2:350

			})
		
		
			canv.drawLine({
				strokeStyle: 'black',
				strokeWidth: 5,
				x1:400, y1:400,
				x2:350, y2:470

			})
				canv.drawLine({
				strokeStyle: 'black',
				strokeWidth: 5,
				x1:400, y1:400,
				x2:450, y2:470

			});
			canv.drawText({
	         fillStyle: 'red',
	         fontSize:20,
	         text: name+ ' выйграл и сбежал',
	         x:600, y:200
			});
		})		
		$('#canv').fadeIn(2000)
	}
	else if (errors == 10){
		let canv = $('#canv')
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:400,
			x2:450, y2:470

		});
		canv.drawText({
         fillStyle: 'red',
         fontSize:20,
         text: name,
         x:600, y:200
		});
			canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:500, y1:210,
			x2:600, y2:210,
			startArrow: true,
			arrowRadius: 20,
			arrowAngle: 45
		});
		$('.div').empty()
	

	}
	else {
		$('.div').empty();
		$('.div').append('<h1>'+word.join(' ')+'</h1>');
		$('.div').append('<p>' +wrong.join(', ')+'</p>');
		$('.div').append('<input id="ans">');
		$('#ans').focus();
		$('.div').append('<button onclick="game()">Отправить</button>');
	}
}

function drawV (elem) {
	let canv = $('#canv');
	if (elem == 1) {
		canv.drawRect({
			fillStyle: 'black',
			strokeStyle: 'black',
			strokeWidth: 3,
			width:150,
			height: 10,
			rounted:true,
			x:50 , y:500,
			fromCenter:false
		})
	}
	if (elem == 2){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 10,
			x1:100, y1:500,
			x2:100, y2:100

		})
	}
	if(elem == 3) {
		canv.drawRect({
			fillStyle: 'black',
			strokeStyle: 'black',
			strokeWidth: 3,
			width:350,
			height: 10,
			rounted:true,
			x:100 , y:100,
			fromCenter:false
		})
	}
	if (elem == 4){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 10,
			x1:400, y1:100,
			x2:400, y2:200

		})
	}
	if (elem == 5) {
		canv.drawArc({
		strokeStyle:'black',
		strokeWidth:5,
		x:400, y:210,
		radius: 30,
		start: 0, end:360,
		close:true
	})
	}
	if (elem == 6){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:240,
			x2:400, y2:400

		})
	}
	if (elem == 6){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:280,
			x2:400, y2:400
		})
	}
	if (elem == 7){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:300,
			x2:450, y2:350

		})
	}
	if (elem == 8){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:300,
			x2:350, y2:350

		})
	}
	if (elem == 9){
		canv.drawLine({
			strokeStyle: 'black',
			strokeWidth: 5,
			x1:400, y1:400,
			x2:350, y2:470

		})
	}


}













