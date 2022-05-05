const screenDiv = document.querySelector('#screen');
screenDiv.textContent = "";
let currentNumber = 0;
let lastOperator = "equals";

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach (numButton => numButton.addEventListener('click', numberPress));

const addButton = document.querySelector('#plus');
addButton.addEventListener('click', addition);

const subtractButton = document.querySelector('#minus');
subtractButton.addEventListener('click', subtraction);

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', multiplication);

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', division);

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equals);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear)

function addition () {
    evaluateTwo();
    screenDiv.textContent = "";
    lastOperator = "plus";
}

function subtraction () {
    evaluateTwo();
    screenDiv.textContent = "";
    lastOperator = "minus";
}

function multiplication () {
    evaluateTwo();
    screenDiv.textContent = "";
    lastOperator = "multiply";
}

function division () {
    evaluateTwo();
    screenDiv.textContent = "";
    lastOperator = "divide";
}

function equals () {
    evaluateTwo();
    screenDiv.textContent = (Math.round((currentNumber + Number.EPSILON) * 1000) / 1000).toString(10);
    lastOperator = "equals";
}

function clear () {
    screenDiv.textContent = "";
    currentNumber = 0;
    lastOperator = "equals";
}

function evaluateTwo () {
    switch (lastOperator) {
        case "equals":
            currentNumber = parseInt(screenDiv.textContent);
            break;
        case "plus":
            currentNumber += parseInt(screenDiv.textContent);
            break;
        case "minus":
            currentNumber -= parseInt(screenDiv.textContent);
            break;
        case "multiply":
            currentNumber *= parseInt(screenDiv.textContent);
            break;
        case "divide":
            currentNumber /= parseInt(screenDiv.textContent);
    }
}

function numberPress (e) {
    numStr = this.textContent;
    screenDiv.textContent += numStr;
}

