/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2; // For example, adding them and returning the result
}

function addNumbers() {
    // Get the values from the HTML form controls and convert them to numbers
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    // Perform the addition
    let result = addNumber1 + addNumber2;

    // Call the add function with the values and assign the result to the 'sum' element
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2; // for example subtracting them and returning results
}

function subtractNumbers() {
    // Get the values from the HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Perform the subtraction
    let result = subtractNumber1 - subtractNumber2;

    // Set the result to the 'difference' element
    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

// Arrow function named 'multiply' to perform multiplication
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    const product = multiply(factor1, factor2);

    // Set the result to the 'product' element
    document.querySelector('#product').value = product;
};

// Add a click event listener to the button 'multiplyNumbers'
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

// Function declaration 'divide' to perform division
function divide(dividend, divisor) {
    if (divisor === 0) {
        return "Cannot divide by zero";
    }
    return dividend / divisor;
}

const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);

    if (isNaN(dividend) || isNaN(divisor)) {
        document.querySelector('#quotient').value = "Please enter valid numbers";
        return;
    }

    const result = divide(dividend, divisor);

    // Display the result in the 'quotient' input field
    document.querySelector('#quotient').value = result.toFixed(2); // Display result with 2 decimal places
};

// Add a click event listener to the button 'divideNumbers'
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
// Declare and instantiate a variable to store the current date
const currentDate = new Date();

// Declare a variable to hold the current year
let currentYear;

// Using the currentDate variable, call the built-in getFullYear() method/function and assign it to the currentYear variable
currentYear = currentDate.getFullYear();

// Assign the currentYear variable to an HTML form element with an ID of 'year'
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
document.querySelector('#array').textContent = numbersArray.join(', ');

/* Output Evens Only Array */
const oddNumbers = numbersArray.filter((number) => number % 2 === 1);
document.querySelector('#odds').textContent = oddNumbers.join(', ');

/* Output Sum of Org. Array */
const evenNumbers = numbersArray.filter((number) => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');

/* Output Multiplied by 2 Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

/* Output Sum of Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');

// Assign the result to the HTML element with an ID of 'sumOfMultiplied'
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
