const defaultResult = 0;
let currentResult = 0;

function add(num1, num2){
  const result = num1 + num2;   
  return result;
}

currentResult = add(4,2);

// let calculationDescription = ` (${defaultResult} + 10) / 2 * 15 - 7`;

outputResult(currentResult, calculationDescription);