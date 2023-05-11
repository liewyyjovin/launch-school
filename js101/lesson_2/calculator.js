/* eslint-disable max-statements */
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// eslint-disable-next-line max-lines-per-function
function calculator() {
  // 1. Welcome!
  prompt('Welcome to calculator!');

  // 2. Ask for first number
  prompt("What's the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    console.log('that was not a number... please try again');
    number1 = readline.question();
  }

  // 3. Ask for second number
  prompt("What's the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    console.log('that was not a number... please try again');
    number2 = readline.question();
  }
  // 4. Ask which operation they would like to use
  prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');
    operation = readline.question();
  }
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

  // 5. Ask the user if he/she would like to perform another calculation.
  prompt('Your calculation is complete - would you like to start another session?');
  let decision = readline.question();

  while (!['yes', 'no'].includes(decision)) {
    prompt("I don't understand - please answer yes or no to proceed.");
    decision = readline.question();
  }

  switch (decision) {
    case 'yes':
      calculator();
      break;
    case 'no':
      console.log("This calculator session has ended, thank you for your time!");
      break;
  }
}

calculator();


