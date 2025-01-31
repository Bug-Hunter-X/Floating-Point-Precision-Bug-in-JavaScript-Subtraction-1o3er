# Floating-Point Precision Bug in JavaScript Subtraction

This repository demonstrates a subtle bug in JavaScript related to floating-point precision when performing subtraction.  While often imperceptible, this can lead to unexpected results in calculations involving very small differences.

## The Bug

The `bug.js` file contains a simple subtraction function.  While it appears to work correctly for most inputs, it can yield inaccurate results when dealing with floating-point numbers that produce a very small difference after subtraction.  This inaccuracy stems from the inherent limitations of floating-point representation in JavaScript.

## The Solution

The `bugSolution.js` file offers a solution to mitigate this issue.  The approach may vary depending on the context.  This solution uses `toFixed` to limit the precision of the result and avoid some inaccuracies caused by floating-point limitations.