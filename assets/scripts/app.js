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

function add(){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;  
  writeCalcDescription('+', initialResult, currentResult);
  writeToLog('+', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);