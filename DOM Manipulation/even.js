
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var max = 5;
var winner = false; 
var number = document.getElementById("numb");
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var reset = document.getElementById("reset");
var score = document.getElementById("score");
var playingTo = document.getElementById("play");
var p1Score = document.getElementById("p1");
var p2Score = document.getElementById("p2");


function re(){
	winner = false;
	scorePlayerOne = 0;
	scorePlayerTwo = 0;
	p1Score.textContent = scorePlayerOne;
	p2Score.textContent = scorePlayerTwo;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner"); 
}


playerOne.addEventListener("click", function(){
	if(!winner){
		scorePlayerOne++;
		p1Score.textContent = scorePlayerOne;
		if(scorePlayerOne === max){
			p1Score.classList.add("winner"); 
			winner = true;
			

		}

	}
});

playerTwo.addEventListener("click", function(){
	if(!winner){
		scorePlayerTwo++;
		p2Score.textContent = scorePlayerTwo;
		if(scorePlayerTwo === max){
			winner = true;
			p2Score.classList.add("winner"); 
		}

	}
});

reset.addEventListener("click", function(){
	re();	
});


numb.addEventListener("change", function(){
	var val = Number(number.value);
	if(val<=0){
		alert("The number must be greater than one");
	}else{
		max = val;
		playingTo.textContent = "Playing to: "+max;
		re();
	}

});


