var numbers = document.getElementsByClassName("num");
var calcInput = document.getElementsByClassName("calc-input")[0];

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event) {
		calcInput.innerHTML += event.target.innerHTML;
	});
}

var operator;

function calculate(x, y, operator) {

}
