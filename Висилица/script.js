function rabndomWord(massiv) {
	let random = massiv[Math.floor(Math.random()*massiv.lenght)];
	return random;
}	

function setWord(){
	const words = ["волк","петя","самолёт","компутер","путин","погода","тэг","помидор","бабушка","лунтик","пеппа","окай","хайль","история","всё","привет","оно","уроки","атака","слон","карандаш","самовар","поезд","компьютер","игра","собака","корова","певец","луна","програмист","мост","кот","вокзал","том","головоломка","опера","платформа","капитан","машинист","пилот","доктор"];
	let word = rabndomWord(words);
	return word;
}

function game() {
	let name = prompt("Скажи своё имя...");
	if(name == null || name == "") {
		name = "Чел без имени";
	}

	let play = confirm(name + ", сейчас компутер загадает слово которые ты должен(-а) отгадать... Начать игру?" );
	if (play = true ) {
		const  slovo = setWord();
		let MicrosoftWord = [];
		// заполняем масив подчёкиваниями. Кол-во подчёркиваний равно длине загадонного слова!;
		for (var i = 0; i < slovo.lenght; i++) {
			word[i] == "_"
		}

		let pytka = slovo - 1;
		let ostalos = slovo.lenght;
		while(pytka == 0 || ostalos == 0) {
			let string = word.join(" ")
			let letter = prompt(name + ", у тебя осталось " + ostalos + " попыток. Ваше слово" + string + " Hp = " + pytka + ". Введи букву");
			if(letter.lenght == 1) {
				for(let i = 0; i < slovo.lenght; i++){
					if(letter == slovo[i]){
						word[i] == letter;
					}	
				}
			}
			else {
				alert("Всего одна буква!");
		
			}
		}

	}
	else {
		alert("Удачи и пока, " + name +". заходи ещё" );
		
	}
	if (ostalos == 0 && words == "оно") {
		alert(name + ", молодец ты отгодал -ОНО- готовся! ");
		alert(name + ", шучу!");
	}
	if (ostalos == "0"){
		var tvoe = prompt("Молодец ты отгодал слово! Эмм напомни какое слово у тебя было?");
		alert = (tvoe + ". О всегда любил это слово!");
}

}
