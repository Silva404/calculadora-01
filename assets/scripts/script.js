const calculator = document.getElementById(".calculator");
const keys = document.getElementById(".calculator__keys");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    
    if (!action) {
      console.log("number key!");
    }
    
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide" 
    ) {
      console.log("operator key!")  
    }
    
    if (action === 'decimal') {
      console.log('decimal key!')
    }
    
    if (action === 'clear') {
      console.log('clear key!')
    }
    
    if (action === 'calculate') {
      console.log('equal key!')
    }
  };
})

// verificando os tipos de dados do botões clicados.

const key = e.target;
const action = key.dataset.action;


