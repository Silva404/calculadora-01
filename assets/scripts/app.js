const defaultResult = 0;
let currentResult = 0;

function add(num1, num2){
  const result = num1 + num2;   
  return result;
}

add(defaultResult, currentResult);
add(1,2);

currentResult = (defaultResult + 10) / 2 * 15 - 7;

let calculationDescription = ` (${defaultResult} + 10) / 2 * 15 - 7`;

outputResult(currentResult, calculationDescription);