const QUESTION = require('./calculator_messages.json');
const READLINE = require('readline-sync');
const LANGUAGE = 'en';

function prompt(key) {
  let message = question(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function question(question, lang = 'en') {
  return QUESTION[lang][question];
}

// 1. Welcome!
prompt('welcome');

while (true) {

  // 2. Ask for first number
  prompt('firstQuestion');
  let number1 = READLINE.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = READLINE.question();
  }

  // 3. Ask for second number
  prompt('secondQuestion');
  let number2 = READLINE.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = READLINE.question();
  }
  // 4. Ask which operation they would like to use
  prompt('thirdQuestion');
  let operation = READLINE.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = READLINE.question();
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
  prompt('calculateAgain');
  let decision = READLINE.question();

  if (decision[0].toLowerCase() !== 'y') break;
}