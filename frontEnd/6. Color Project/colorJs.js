var difficulty = 6;
var newGame = false;

var colors = generateRandomColors(difficulty);
var guess = selectColor(colors.length);

var squares = document.querySelectorAll(".square");
var guessDisplay = document.querySelector("#guess");
var answer = document.querySelector("#answer");
var title = document.querySelector("h1");
var newB = document.querySelector("#newB");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");



init();

function init(){
guessDisplay.textContent = colors[guess];
fillSquares();
for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		
		if(this.style.backgroundColor === colors[guess]){
			answer.textContent = "Correct!";
			title.style.backgroundColor = colors[guess];
			changeColor();
			newB.textContent = "Play Again?";
			newGame = true;
		}else{
			this.style.backgroundColor = "#232323";	
			answer.textContent = "Try Again!";
		}

	});
}
}

easy.addEventListener("click", function(){
		difficulty = 3;
		easy.classList.add("clicked");
		hard.classList.remove("clicked");
		title.style.backgroundColor = "steelblue";
		reset();
	
});

hard.addEventListener("click", function(){
	
		difficulty = 6;
		easy.classList.remove("clicked");
		hard.classList.add("clicked");
		title.style.backgroundColor = "steelblue";
		reset();
	
});


newB.addEventListener("click", function(){
	if(newGame){
		newB.textContent = "New Colors";
		title.style.backgroundColor = "steelblue";
		newGame = false;
	}
	reset();
});


function fillSquares(){
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
		}else{
			squares[i].style.display = "none";
		}
	}
}

function reset(){
	colors = generateRandomColors(difficulty);
	guess = selectColor(colors.length);
	guessDisplay.textContent = colors[guess];
	answer.textContent = "";
	fillSquares();
}

function changeColor(){
	for(var j = 0; j<squares.length; j++){
				squares[j].style.backgroundColor = colors[guess];
			}
}

function selectColor(numb){
	var color = Math.floor((Math.random() * numb));
	return color;
}

function generateRandomColors(number){
var array = [];
for(var i = 0; i<number; i++){
	array.push("rgb("+selectColor(256)+", "+selectColor(256)+", "+selectColor(256)+")");
}
return array;
}