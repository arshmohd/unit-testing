function sum(a = 0, b = 0) {
  return a + b;
}

function subtract(a = 0, b = 0) {
  return a - b;
}

function divide(a = 0, b = 0) {
  if (b == 0) {
    throw new Error('Divide by 0 is not possible: ');
  }
  return a / b;
}

function multiply(a = 0, b = 0) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
