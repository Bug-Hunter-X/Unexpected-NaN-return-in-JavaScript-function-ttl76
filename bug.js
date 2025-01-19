function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1;
  } else {
    return x + 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1));  // Output: -1
console.log(foo(0));   // Output: 1
console.log(foo(10));  //Output: 11

//The bug is that the function does not handle NaN or undefined values. 
//When the function receives NaN or undefined, it returns NaN which can lead to unexpected behavior