/* NUMBERS */   /* NUMBERS */   /* NUMBERS */
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

/* OPERATORS */ /* OPERATORS */ /* OPERATORS */
const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
        updateScreen(calculationOperator);
    })
})

/* PERCENTAGES */   /* PERCENTAGES */   /* PERCENTAGES */
const percentage = document.querySelector(".percentage");

percentage.addEventListener('click', () => {
    currentNumber = parseFloat(currentNumber) / 100;
    updateScreen(currentNumber);
})

/* EQUAL SIGN */    /* EQUAL SIGN */    /* EQUAL SIGN */
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result  = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result  = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result  = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result  = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

/* TEN POWER */     /* TEN POWER */     /* TEN POWER */
const tenPow = document.querySelector(".tenPower");

tenPow.addEventListener('click', () => {
    currentNumber = parseFloat(currentNumber) * 100;
    updateScreen(currentNumber);
})

/* ALL CLEAR (AC) */    /* ALL CLEAR (AC) */    /* ALL CLEAR (AC) */
const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

/* DELETE */    /* DELETE */    /* DELETE */
const del = document.querySelector(".delete");

del.addEventListener("click", () => {
    console.log(currentNumber.length);
    if (currentNumber !== "0" && currentNumber.length !== 1) {
      currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    } else {
      currentNumber = "0";
    }

    updateScreen(currentNumber);
})

/* DECIMAL */   /* DECIMAL */   /* DECIMAL */
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
}