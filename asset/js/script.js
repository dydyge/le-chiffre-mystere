let enterButton = document.getElementById('enterButton');
let againButton = document.getElementById('againButton');
let output = document.getElementById('outputText');
let formUser = document.getElementById('form-block');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let countMsg = document.getElementById('countUsers');
let countUser = 0;

function checkNumber(){
	
	let inputUser = document.getElementById('userInput').value;
	if(inputUser < 1 || inputUser > 100){
		output.innerHTML = "Attention, votre nombre doit être compris entre 1 et 100";
		input.value="";
	}
	else{
		countUser++;
	}
		if(inputUser > randomNumber){
		output.innerHTML = "Votre nombre est trop grand";
		countMsg.innerHTML = "Essai n° " + countUser;
		}
		if(inputUser < randomNumber){
		output.innerHTML = "Votre nombre est trop petit";
		countMsg.innerHTML = "Essai n° " + countUser;
		}
		if(isNaN(inputUser)){
		output.innerHTML = "Attention, ce n'est pas un nombre!";
		}
		
		if(inputUser == randomNumber){
		output.innerHTML = "Bravo, vous avez gagné en " + countUser + " essais!";
		output.style.color="#000836";
		formUser.style.backgroundImage="linear-gradient(to bottom, #ff1361, #c2006f, #7f106c, #3d1558, #000836)";
		countMsg.innerText="Une nouvelle partie, ça vous tente?";
		countMsg.style.color="#fff";
		enterButton.style.display="none";
		inputUser.value="";
		againButton.addEventListener('click', function(){
			location.reload();
		})
		}
		if(countUser == 10){
		countMsg.innerHTML = "Dommage! vous n'avez pas réussi à deviner mon nombre. Il s'agissait du " + randomNumber;
		formUser.style.backgroundImage="linear-gradient(180deg, rgba(0,8,54,1) 0%, rgba(0,124,249,1) 100%)";
		output.innerText=" ";
		inputUser.value="";
		enterButton.style.display="none";
		}
}


againButton.addEventListener('click', function(){
	location.reload();
	document.getElementById('userInput').value="";
})

enterButton.addEventListener('click', checkNumber);

