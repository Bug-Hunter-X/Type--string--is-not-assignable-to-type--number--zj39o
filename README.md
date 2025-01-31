# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: Type 'string' is not assignable to type 'number'.  This error occurs when you try to pass a string argument to a function that expects a number.

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. Observe the compilation error indicating the type mismatch.

## Solution

The solution involves ensuring that the arguments passed to the `add` function are of the correct type (number).  This can be achieved through various methods including type checking, type guards, or input validation.