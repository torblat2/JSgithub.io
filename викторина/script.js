let data = [
	{quest: "Япония = ", ans: "аниме"},
	{quest: "Пять землекопов копают за 5ч 5м сколько надо землекопов чтобы выкопать 100м", ans: "пять"},	
	{quest: "Hello", ans: "привет"},	
	{quest: "Смысл жизни", ans: "незнаю"},	
	{quest: "Гражданская", ans: "оборона"},	
];

let score = 0;
let name = "";
const length = data.length;


function question(){
	$('#div').append('<h1>' + data[0].quest +'</h1>');
	$('#div').append('<input type="text" id= "answer" autofocus="true"><input type="submit" onclick="check()">');
}


function check() {
	// проверяем ответ
	let answer = $('#answer').val().toLowerCase();
	if(answer == data[0].ans) {
		score++ 
	}

	//удаляем использованый вопрос
	data.shift();

	//удаляем вопрос и поле
	$('#div').empty();

	if(data.length != 0){
		//выводим новый вопрос
		question()
	}
	else theEnd();
}
function theEnd(){
	$('#div').append('<h1>' + name +', ты набрал'+ score + '/' +  length + ' очков!' );
	if (score == 0) {
		$('#div').append(name + " ты серьёзно?:/");
	}
		if (score == 1) {
		$('#div').append(name + " плохо");
	}
		if (score == 2) {
		$('#div').append(name + " два очка это круто");
	}
		if (score == 3) {
		$('#div').append(name + " троешник");
	}
		if (score == 4) {
		$('#div').append(name + " совсем чуть чуть");
	}
			if (score == 5) {
		$('#div').append(name + " молодец!");
	}
			if (score >= 6) {
		score = 0
		$('#div').append(name + " Чёртов читер");
		score = 0
	}
	
	
	if(name == "undertale" || name == "андертэйл") {
		name =  "Чара"
	}	
	
}

function start(){
	//получаем и устанавливаем имя
	 name = $('#name').val();
	if (name == '') name = 'безымянный';

	// удалить всё со страницы 
	$('#div').empty();

	//запускаем функцию с вопросами

	question(data[0].quest);

}
