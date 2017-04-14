var numbers = document.getElementsByClassName("num");
var calcInput = document.getElementsByClassName("calc-input")[0];
var x=""
var y=""
var answer=false
var currentoperator=""
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function(event) {
		if(answer===true){
			calcInput.innerHTML=""
			answer=false
		}
		calcInput.innerHTML += event.target.innerHTML;
		console.log(calcInput);
	});
}
// var operatorRow = document.getElementsByClassName("operator-row");
// console.log(operatorRow.length)
var operator = document.getElementsByClassName("operator");
operator[0].addEventListener("click", function(){
	currentoperator=operator[0].innerHTML;
	if(x!=""){
		y=calcInput.innerHTML;
		x=calculateContinue(x,y,currentoperator);

	}else{
	x=calcInput.innerHTML;
	calcInput.innerHTML="";
}

})
operator[1].addEventListener("click", function(){
	currentoperator=operator[1].innerHTML;
	if(x!=""){
		y=calcInput.innerHTML;
		x=calculateContinue(x,y,currentoperator);

	}else{
	
	x=calcInput.innerHTML;
	calcInput.innerHTML="";	
}

})
operator[2].addEventListener("click", function(){
	currentoperator=operator[2].innerHTML;
	if(x!=""){
		y=calcInput.innerHTML;
		x=calculateContinue(x,y,currentoperator);

	}else{
	x=calcInput.innerHTML;
	calcInput.innerHTML="";	
}
})
operator[3].addEventListener("click", function(){
	currentoperator=operator[3].innerHTML;
	if(x!=""){
		y=calcInput.innerHTML;
		x=calculateContinue(x,y,currentoperator);

	}else{
	x=calcInput.innerHTML;
	calcInput.innerHTML="";	
}
})
operator[4].addEventListener("click", function(){
	
	y=calcInput.innerHTML;
	calculate(x,y,currentoperator)

})

// for(var i=0;i<operator.length;i++){
	

// 	operator[i].addEventListener("click", function(){
	
// 		if(x===""){
			
// 		x=calcInput.innerHTML;
// 		calcInput.innerHTML="";	
// 		var currentoperator=operator[i].innerHTML;
// 		console.log(currentoperator)
// 	}else{
// 		y=calcInput.innerHTML;
// 		calcInput.innerHTML="";
		
// 		calculate(x,y,operator[i])
// 	}
		
// 	});
// 	// var currentoperator=operator[].innerHTML
// 	// 		console.log(currentoperator)
// }

function calculate(x, y, operator) {
	console.log(x)
	console.log(y)
	console.log(operator)
	answer=true;
	if(operator==="-"){
		calcInput.innerHTML=parseInt(x)-parseInt(y)
		x=0;
		y=0;
		currentoperator=""
	}
	if(operator==="+"){
		calcInput.innerHTML=parseInt(x)+parseInt(y)
		x=0;
		y=0;
		currentoperator=""
	}
	if(operator==="x"){
		calcInput.innerHTML=parseInt(x)*parseInt(y)
		x=0;
		y=0;
		currentoperator=""
	}
	if(operator==="/"){
		calcInput.innerHTML=parseInt(x)/parseInt(y)
		x=0;
		y=0;
		currentoperator=""
	}

}
function calculateContinue(x, y, operator) {
	console.log(x)
	console.log(y)
	console.log(operator)
	answer=true;
	if(operator==="-"){
		calcInput.innerHTML=parseInt(x)-parseInt(y)
		x=parseInt(calcInput.innerHTML);
		return x;
	}
	if(operator==="+"){
		calcInput.innerHTML=parseInt(x)+parseInt(y)
		x=parseInt(calcInput.innerHTML);
		return x;
	}
	if(operator==="x"){
		calcInput.innerHTML=parseInt(x)*parseInt(y)
		x=parseInt(calcInput.innerHTML);
		return x;
	}
	if(operator==="/"){
		calcInput.innerHTML=parseInt(x)/parseInt(y)
		x=parseInt(calcInput.innerHTML);
		return x;
	}

}
