for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 ==0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz"); 
  } else if (i % 3 == 0) {
    console.log("Fizz"); 
  } else {
    console.log(i);
  }
}






// const calculator = document.querySelector(".calculator");
// const keys = calculator.querySelector(".calculator__keys");

// keys.addEventListener("click", event => {
//   if (event.target.matches("button")) {};
// })

// // verificando os tipos de dados do botões clicados.

// const key = e.target;
// const action = key.dataset.action;

// if (!action) {
//   console.log("number key!");
// }

// if (
//   action === "add" ||
//   action === "subtract" ||
//   action === "multiply" ||
//   action === "divide" 
// ) {
//   console.log("operator key!")  
// }

// if (action === 'decimal') {
//   console.log('decimal key!')
// }

// if (action === 'clear') {
//   console.log('clear key!')
// }

// if (action === 'calculate') {
//   console.log('equal key!')
// }

