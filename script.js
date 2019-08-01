var num = 6; 
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var modeBtns = document.getElementsByClassName('mode');

var resetBtn = document.getElementById('reset');
var h1 = document.querySelector('h1');

init();
resetBtn.addEventListener('click',function() {
	setupModeButtons();
	reset();
	setupSquares();
})
function init() {
	setupModeButtons();
	reset();
	setupSquares();
}
function setupModeButtons() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener('click',function() {
			modeBtns[0].classList.remove('selected');
			modeBtns[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent === "EASY" ? num = 3: num = 6;
			reset();
		})
	}
}
function reset() {
	colors = getRandomColors(num);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	resetBtn.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
      	squares[i].style.display = "block";
      	squares[i].style.backgroundColor = colors[i];
      } else {
      	squares[i].style.display = "none";
      }
    }  
}
function setupSquares() {
	
	
	for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        var clickedColor = this.style.backgroundColor;
        
        if (clickedColor === pickedColor) {
        	
        	messageDisplay.textContent = "Correct!";
        	h1.style.background = pickedColor;
        	resetBtn.textContent = "Play Again?";
        	changeColors(pickedColor);
            
        } else {
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "#232323";	
        }
      })
    }
}
function getRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		 arr.push(randomColor());
	}
	return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);	
  return "rgb(" + r + ", " + g + ", " + b + ")";
} 
function pickcolor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function changeColors(col) {
	for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = col;
    }
}