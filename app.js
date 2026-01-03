let currentNum = "";
let currentOperator = "";

const appState = {
	num: null,
	operator: null,
	result: null
}

const operators = {
	add: "+",
	minus: "-",
	multi: "x",
	divide: "/"
}

let screen = document.querySelector("#screen");
let numBtns = document.querySelectorAll("[data-type='num']");
let funcBtns = document.querySelectorAll('[data-type="func"]');
let state = document.querySelector("#state");
let result = document.querySelector("#result");
const history = document.querySelector("#history")
screen.textContent = appState.result;
for(let i = 0; i < numBtns.length; i++) {
	numBtns[i].addEventListener("click", (e) => {
		if(appState.operator == "eval") {
			appState.num = null;
			appState.operator = null;
			appState.result = null;
		}
			currentNum += e.target.getAttribute("data-value");
			screen.textContent = currentNum;
	})
}



for(let i = 0; i < funcBtns.length; i++) {
	funcBtns[i].addEventListener("click", (e) => {
		currentOperator = e.target.getAttribute("data-value");
		if(appState.result == null) {
			appState.result = Number(currentNum) || 0;
			history.textContent += appState.result;
			currentNum = "";
		}
			appState.num = (currentNum) || null;
			console.log(222,appState.num)
			if(appState.num !== null) {
			history.textContent += ` ${operators[appState.operator]} ${appState.num}`;
			appState.result = operate(appState.result, Number(appState.num), appState.operator);
			appState.num = null;
			currentNum = "";
			screen.textContent = appState.result;
		}
		appState.operator = currentOperator;
	})
}



function operate(num1, num2, operator) {
	if(operator == "add") {
		return num1 + num2;
	} else if(operator == "minus") {
		return num1 - num2;
	} else if(operator == "multi") {
		return num1 * num2;
	} else if(operator == "divide") {
		return num1 / num2;
	} else if(operator == "eval") {
		return operate(appState.result, appState.num, appState.operator)

	}
}
