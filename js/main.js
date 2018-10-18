$(document).ready(function(){
    $(".available").hover(function(){
    	$(this).css("opacity", "1");
	},
	function(){
	    $(this).css("opacity", "0.5");
	});
	$("button").click(function(){
		$(".toBeHidden").hide();
	});
});

var count = 0;
var equation;
var correctSolution;
var userSolution = "";

function buttonPressNumbers(symbol) {
	equation += symbol;
	userSolution += symbol;
	setExpression();
}

function showComponents() {
	$("#expression").show();
	$("#keypad").show();
}

function setExpression() {
	document.getElementById('expression').innerHTML = "$$" + equation + "$$";
	MathJax.Hub.Queue(["Typeset",MathJax.Hub,document.getElementById('mathSection')]);	
}

function isCorrect() {
	if(userSolution == correctSolution) {
		document.getElementById('expression').innerHTML = "Správně";
	}
	else {
		document.getElementById('expression').innerHTML = "Špatně, napsal jste " + userSolution + ", správně je " + correctSolution;
	}
	userSolution = "";
	count++;
}

function scitaniDoDeseti() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.floor(Math.random()*10);
	var b = Math.ceil(Math.random()*(10 - a));
	correctSolution = a + b;
	equation = a.toString() + " + " + b.toString() + " = ";
	setExpression();
}

function scitaniPresDesitku() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.ceil(Math.random()*7 + 2);
	var b = Math.floor(Math.random()*(9-(11-a)+1)+(11-a));
	correctSolution = a + b;
	equation = a.toString() + " + " + b.toString() + " = ";
	setExpression();
}

function odcitaniDoDeseti() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.ceil(Math.random()*10);
	var b = Math.floor(Math.random()*a);
	correctSolution = a - b;
	equation = a.toString() + " - " + b.toString() + " = ";
	setExpression();
}

function nasobeniMalaNasobilka() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.ceil(Math.random()*10);
	var b = Math.ceil(Math.random()*10);
	correctSolution = a*b;
	equation = a.toString() + "\\cdot" + b.toString() + " = ";
	setExpression();
}

function deleniMalaNasobilka() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.ceil(Math.random()*10);
	var b = a*Math.ceil(Math.random()*10);
	correctSolution = b/a;
	equation = b.toString() + ":" + a.toString() + " = ";
	setExpression();
}

function rovnice() {
	if(count == 0) {
		showComponents();
	}
	var a = Math.ceil(Math.random()*10);
	var b = a*Math.floor(Math.random()*10)*Math.pow(-1, Math.floor(Math.random()*2));
	var c = (a*Math.floor(Math.random()*10)+b)*Math.pow(-1, Math.floor(Math.random()*2));
	correctSolution = (c+(-1*b))/a;
	equation = ((a == 1) ? "" : a.toString()) + "x " + ((b > 0) ? "+" : "") + ((b == 0) ? "" : b.toString()) + " = " + c + "; x = ";
	setExpression();
}