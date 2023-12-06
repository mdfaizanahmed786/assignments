/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

function checkAlphabeticalValues(str) {
  const regex = /[^a-zA-Z]/;
  return regex.test(str)
}

class Calculator {
  constructor(result = 0) {
    this.result = result;
  }
  add(num) {
   return this.result = this.result + num;
  }
  subtract(num) {
    return this.result = this.result - num;
  }
  multiply(num) {
    return this.result = this.result * num;
  }
  divide(num) {
    if(num===0) throw new Error("Can divide with zero")
    return this.result = this.result / num;
  }
  clear() {
    return this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(string) {
    this.result = string;
    this.result = this.result.replace(/\s/g,'');
      const expression = this.result;
      this.result = eval(expression);
      if(this.result == Infinity) throw new Error;
      else return this.result;
  }
}

module.exports = Calculator;
