const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeCalcDescription(operator, resultBeforeCalc, userNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${userNumber}`;
  outputResult(currentResult, calcDescription)
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult,
) {

  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  }  

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber; 
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') { 
    currentResult -= enteredNumber;  
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') { 
    currentResult *= enteredNumber;  
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') { 
    currentResult /= enteredNumber;  
    mathOperator = '/';
  }    
  writeCalcDescription(mathOperator, initialResult, currentResult);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
  calculateResult('ADD');
}

function subtract(){
  calculateResult('SUBTRACT');
}

function multiply(){
  calculateResult('MULTIPLY');
}

function divide(){
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);



// function multiply(){
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;  
//   writeCalcDescription('*', initialResult, currentResult);
//   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
// }

// function divide(){
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;  
//   writeCalcDescription('/', initialResult, currentResult);
//   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
// }