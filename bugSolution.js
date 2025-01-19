function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1;
  } else if (isNaN(x) || x === undefined) {
    return -2; // Return a specific value for NaN or undefined
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(0));   // Output: 1
console.log(foo(10));  //Output: 11
console.log(foo(NaN));  // Output: -2
console.log(foo(undefined)); // Output: -2