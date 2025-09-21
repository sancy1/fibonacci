
// src/ recursion.ts

/**
 * Recursion module demonstrating recursive functions in TypeScript
 * Contains Fibonacci sequence and factorial calculation implementations
 */

/**
 * Calculates the Fibonacci number at a given position using recursion
 * @param n - The position in the Fibonacci sequence (non-negative integer)
 * @returns The Fibonacci number at the given position
 * @throws Error if n is negative
 */
export function fibonacci(n: number): number {
  // Input validation - ensure n is a non-negative integer
  if (n < 0) {
    throw new Error("Fibonacci sequence is not defined for negative numbers");
  }

  // Base cases: Fibonacci(0) = 0, Fibonacci(1) = 1
  
  

  // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Calculates the factorial of a number using recursion
 * @param n - The number to calculate factorial for (non-negative integer)
 * @returns The factorial of the given number
 * @throws Error if n is negative
 */
export function factorial(n: number): number {
  // Input validation - ensure n is a non-negative integer
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}
