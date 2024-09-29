class Calculator {
    add(value1 , value2){
        return value1 + value2;
    }

    subtract(value1 , value2){
        return value1 - value2;
    }

    multiply(value1, value2){
        return value1 * value2;
    }

    divide(value1, value2){
        if(value2 === 0){
            throw new Error("You can't divide in 0."); 
        }
        return value1/value2;
    }
}

const calc = new Calculator();

let firstValue = parseFloat(prompt("Enter a first value."));
let secondValue = parseFloat(prompt("Enter a second value."));

while(isNaN(firstValue) || isNaN(secondValue)){
     alert("Ops. You have to enter a number. Try again, please.")
     firstValue = parseFloat(prompt("Enter a first value."));
     secondValue = parseFloat(prompt("Enter a second value."));
}

console.log(`Add result: ${calc.add(firstValue, secondValue)}`);        
console.log(`Subtract result: ${calc.subtract(firstValue, secondValue)}`);    
console.log(`Multiply result: ${calc.multiply(firstValue, secondValue)}`);
try {
    console.log(`Divide result: ${calc.divide(firstValue, secondValue)}`);      
  } catch (error) {
    console.error(error.message);         
  }
