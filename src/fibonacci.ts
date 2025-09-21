
// src/fibonacci.ts

/**
 * fibonacci.ts
 * This module contains a recursive function to calculate
 * Fibonacci numbers and utility to generate a sequence.
 */

/**
 * Recursive Fibonacci function
 * @param n - The position in the Fibonacci sequence (0, 1, 2, ...)
 * @returns The nth Fibonacci number
 *
 * Explanation:
 * - If n is 0 → return 0 (base case 1)
 * - If n is 1 → return 1 (base case 2)
 * - Otherwise → return fibonacci(n-1) + fibonacci(n-2)
 */
export function fibonacci(n: number): number {
  if (n <= 1) {          // Base case: if n is 0 or 1,
    return n;            // return n directly (fib(0)=0, fib(1)=1)
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case: sum of previous two Fibonacci numbers
}

/**
 * Generate a Fibonacci sequence from 0 up to n
 * @param n - The last position in the sequence
 * @returns An array containing the Fibonacci sequence up to n
 *
 * Example:
 * generateFibonacciSequence(5) → [0, 1, 1, 2, 3, 5]
 */
export function generateFibonacciSequence(n: number): number[] {
  const sequence: number[] = [];     // Initialize an empty array to store the sequence
  for (let i = 0; i <= n; i++) {    // Loop from 0 up to and including the input number n
    sequence.push(fibonacci(i));     // Calculate the Fibonacci number for each index and add to array
  }
  return sequence;                   // Return the complete sequence array
}

