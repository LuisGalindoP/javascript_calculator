var num1 = "";
var num2 = "";
var operator;
var clicked = false;

//PRESS BUTTONS
function press(num) {
    if (clicked == false) {
        num1 = num1 + String(num);
        console.log("NUM1", num1);
        document.querySelector("#result").innerText = num1;
    }else {
        num2 = num2 + String(num);
        console.log("NUM2", num2);
        document.querySelector("#result").innerText = num2;
    }
}

// OPERATORS
function plus() {
    operator = "+";
    clicked = true;
}
function min() {
    operator = "-";
    clicked = true;
}
function mult() {
    operator = "*";
    clicked = true;
}
function div() {
    operator = "/";
    clicked = true;
}

//CALCULATIONS
function calculate() {
    if (operator == "+") {
        result = parseFloat(num1) + parseFloat(num2);
    }else if (operator == "-") {
        result = parseFloat(num1) - parseFloat(num2);
    }else if (operator == "*") {
        result = parseFloat(num1) * parseFloat(num2);
    }else {
        result = parseFloat(num1) / parseFloat(num2);
    }
    // console.log(result);
    document.querySelector("#result").innerText = result;
    num1 = "";
    num2 = "";
    clicked = false;
}


//RELOAD
function reload() {
    window.location.reload()
}


