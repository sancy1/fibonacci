// src/web.ts

/**
 * web.ts
 * This file connects the Fibonacci logic to a simple Bootstrap-based webpage.
 * It serves as the bridge between the user interface (HTML) and the application logic (Fibonacci calculations).
 */

// Import the function that generates Fibonacci sequences from the fibonacci module
// Note: I'm importing from the compiled JavaScript file (.js) not the TypeScript source (.ts)
import { generateFibonacciSequence } from "./fibonacci.js";

/**
 * Handles form submission, calculates Fibonacci sequence, and updates the page.
 * This is the core function that processes user input and displays results.
 * @param event - The form submission event object containing details about the submit action
 */
function handleFormSubmit(event: Event): void {
  // Prevent the default form submission behavior which would reload the page
  // This allows for a dynamic single-page application experience
  event.preventDefault(); 

  // Get reference to the input field where user enters the number
  // Using type assertion (as HTMLInputElement) to tell TypeScript the exact element type
  const inputElement = document.getElementById("fibInput") as HTMLInputElement;
  
  // Get reference to the div where we'll display the results
  // Using type assertion to specify it's a div element
  const resultElement = document.getElementById("result") as HTMLDivElement;

  // Convert the user's input from string to integer with base 10 (decimal)
  // parseInt extracts a number from the text input value
  const n = parseInt(inputElement.value, 10);

  // Validate the user input:
  // 1. Check if it's Not a Number (isNaN) - meaning conversion failed
  // 2. Check if it's a negative number (n < 0)
  if (isNaN(n) || n < 0) {
    // If validation fails, show an error message using Bootstrap's alert-danger styling
    resultElement.innerHTML =
      `<div class="alert alert-danger">Please enter a valid non-negative number.</div>`;
    // Exit the function early since we have invalid input
    return;
  }

  // If input is valid, call our Fibonacci function to calculate the sequence
  // This uses the recursive implementation imported from fibonacci.ts
  const sequence = generateFibonacciSequence(n);

  // Display the successful result using Bootstrap's alert-success styling
  // join(", ") converts the array of numbers to a comma-separated string
  resultElement.innerHTML =
    `<div class="alert alert-success">Fibonacci sequence up to ${n}: <br><strong>${sequence.join(", ")}</strong></div>`;
}

// Wait for the DOM (Document Object Model) to fully load before executing our code
// This ensures all HTML elements are available before we try to access them
document.addEventListener("DOMContentLoaded", () => {
  // Get reference to the form element on the page
  const form = document.getElementById("fibForm") as HTMLFormElement;
  
  // Attach our handleFormSubmit function to the form's submit event
  // This means handleFormSubmit will be called whenever the form is submitted
  form.addEventListener("submit", handleFormSubmit);
});