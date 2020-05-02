const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput(){
  return parseInt(userInput.value);
} 

function createAndWriteOutput(operator, resultbeforeCalc, calcNumber) {
  const calcDescription = `${resultbeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentenfier,
  prevResult,
  operationNumber,
  newResult,
) {
  const logEntry = {
    operation: operationIdentenfier, 
    prevResult: prevResult,
    number: operationNumber,
    result: newResult 
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  
  currentResult += enteredNumber;0
  createAndWriteOutput('+', initialResult, enteredNumber);  
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
} 

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
} 

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
} 

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;  
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
} 

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);