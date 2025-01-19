# Unexpected NaN Return in JavaScript Function

This repository demonstrates a common JavaScript bug: a function that fails to handle `NaN` and `undefined` inputs gracefully.  The function `foo` works correctly for `null`, negative numbers, and positive numbers but returns `NaN` for invalid input, which can cause issues in larger applications.

## Bug

The original `foo` function doesn't explicitly check for `NaN` or `undefined` values, leading to unexpected `NaN` outputs when these values are passed as arguments.

## Solution

The solution introduces additional checks to explicitly handle `NaN` and `undefined` values. These checks enhance the robustness of the function, preventing unexpected `NaN` returns.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Open `bug.js` to see the buggy code.
4. Open `bugSolution.js` to see the fixed code.
5. Run the JavaScript files using Node.js or your preferred JavaScript environment. Observe the differences in output between the buggy and corrected versions when providing various inputs, including `NaN` and `undefined`.