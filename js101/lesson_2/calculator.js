const readline = require('readline-sync');

// Abstracting out prompts
function prompt(message) {
  console.log(`=> ${message}`);
}

// The method Number.isNaN() takes any JavaScript value and
//returns boolean true if value is NaN, false if not.
// We check whether Number(number) is NaN since calling
// Number() on non-numeric string evaluates to NaN

// String.prototype.trimstart method helps to get copy of
// number string with leading whitespace removed.

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome!
prompt('Welcome to calculator!');

// Ask the user for the first number
prompt("What's the first number?");
let number1 = readline.question();


while (invalidNumber(number1)) {
  console.log('that was not a number... please try again');
  number1 = readline.question();
}


// Ask the user for the second number
prompt("What's the second number?");
let number2 = readline.question();


while (invalidNumber(number2)) {
  console.log('that was not a number... please try again');
  number2 = readline.question();
}


// Ask the user for an operation to perform
prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = readline.question();
}

// Perform the operation on the two numbers
let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

console.log(`The result is ${output}`);
