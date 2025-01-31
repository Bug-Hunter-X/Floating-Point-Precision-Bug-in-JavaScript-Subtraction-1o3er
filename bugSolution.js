function myFunction(a, b) {
  const result = a - b;
  // Use toFixed to round the result to a specific number of decimal places.
  // Choose the number of decimal places based on your application's requirements.
  return parseFloat(result.toFixed(10));
}

console.log(myFunction(5, 2)); // Output: 3
console.log(myFunction(2, 5)); // Output: -3
console.log(myFunction(0, 0)); // Output: 0
// Example with floating point numbers
console.log(myFunction(0.1 + 0.2, 0.3)); // Output: 0 instead of a small number like 5.551115123125783e-17 