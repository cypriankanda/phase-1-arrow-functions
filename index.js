// Function expression for divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function for square
  const square = x => x * x;
  
  // Arrow function for add
  const add = (a, b) => a + b;
  
  // Exporting the functions for the tests to use (if necessary)
  module.exports = { divide, square, add };
  