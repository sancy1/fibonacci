
// src/web.ts

/**
 * web.ts
 * This file connects the Fibonacci logic to a simple Bootstrap-based webpage.
 */

import { generateFibonacciSequence } from "./fibonacci.js";

/**
 * Handles form submission, calculates Fibonacci sequence, and updates the page.
 * @param event - The form submission event
 */
function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent page reload

  const inputElement = document.getElementById("fibInput") as HTMLInputElement;
  const resultElement = document.getElementById("result") as HTMLDivElement;

  const n = parseInt(inputElement.value, 10);

  if (isNaN(n) || n < 0) {
    resultElement.innerHTML =
      `<div class="alert alert-danger">Please enter a valid non-negative number.</div>`;
    return;
  }

  // Get Fibonacci sequence using our TypeScript function
  const sequence = generateFibonacciSequence(n);

  // Display the result in Bootstrap alert
  resultElement.innerHTML =
    `<div class="alert alert-success">Fibonacci sequence up to ${n}: <br><strong>${sequence.join(", ")}</strong></div>`;
}

// Attach event listener once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fibForm") as HTMLFormElement;
  form.addEventListener("submit", handleFormSubmit);
});
