
// src/ lists.ts

/**
 * Lists module demonstrating array manipulation in TypeScript
 * Contains functions for processing and analyzing arrays
 */

/**
 * Processes a list of numbers by sorting and filtering
 * @param numbers - Array of numbers to process
 * @returns Processed array (sorted in descending order, filtered for numbers > 5)
 */
export function processList(numbers: number[]): number[] {
  // Use array methods to process the list

  // 1. Filter numbers greater than 5
  const filteredNumbers = numbers.filter(num => num > 5);

  // 2. Sort in descending order
  const sortedNumbers = filteredNumbers.sort((a, b) => b - a);

  return sortedNumbers;
}

/**
 * Calculates the total sum of all numbers in an array
 * @param numbers - Array of numbers to sum
 * @returns The total sum of all numbers
 */
export function calculateTotal(numbers: number[]): number {
  // Use reduce to calculate the sum
  return numbers.reduce((sum, num) => sum + num, 0);
}

/**
 * Finds the maximum value in an array of numbers
 * @param numbers - Array of numbers to search
 * @returns The maximum value in the array
 */
export function findMax(numbers: number[]): number {
  // Handle empty array case
  if (numbers.length === 0) {
    throw new Error("Cannot find maximum in empty array");
  }

  // Use Math.max with spread operator to find maximum
  return Math.max(...numbers);
}

/**
 * Finds the minimum value in an array of numbers
 * @param numbers - Array of numbers to search
 * @returns The minimum value in the array
 */
export function findMin(numbers: number[]): number {
  // Handle empty array case
  if (numbers.length === 0) {
    throw new Error("Cannot find minimum in empty array");
  }

  // Use Math.min with spread operator to find minimum
  return Math.min(...numbers);
}

/**
 * Creates a new array with unique values (removes duplicates)
 * @param items - Array of items with possible duplicates
 * @returns New array with only unique values
 */
export function removeDuplicates<T>(items: T[]): T[] {
  // Use Set to remove duplicates and convert back to array
  return Array.from(new Set(items));
}
