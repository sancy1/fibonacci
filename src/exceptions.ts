
// src/exceptions.ts

/**
 * Exceptions module demonstrating error handling in TypeScript
 * Contains custom error classes and functions for throwing/handling exceptions
 */

/**
 * Custom error class for validation errors
 */
export class ValidationError extends Error {
  // Additional property for validation details
  public details: string;

  /**
   * Creates a new ValidationError instance
   * @param message - The error message
   * @param details - Additional details about the validation error
   */
  constructor(message: string, details: string = "") {
    super(message);
    this.name = "ValidationError";
    this.details = details;

    // Maintain proper stack trace for where my error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

/**
 * Custom error class for API errors with status code
 */
export class ApiError extends Error {
  // Additional property for HTTP status code
  public statusCode: number;

  /**
   * Creates a new ApiError instance
   * @param message - The error message
   * @param statusCode - HTTP status code associated with the error
   */
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

/**
 * Function that demonstrates throwing and handling various types of exceptions
 */
export function handleExceptions(): void {
  console.log("Demonstrating exception handling...");

  // Example 1: Throw and catch a standard Error
  try {
    console.log("\n1. Throwing a standard Error:");
    throw new Error("This is a standard error");
  } catch (error) {
    console.log("Caught error:", error instanceof Error ? error.message : "Unknown error");
  }

  // Example 2: Throw and catch a custom ValidationError
  try {
    console.log("\n2. Throwing a custom ValidationError:");
    throw new ValidationError("Invalid input data", "Input must be at least 5 characters long");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Caught ValidationError:", error.message, "- Details:", error.details);
    } else {
      console.log("Caught unknown error:", error instanceof Error ? error.message : "Unknown error");
    }
  }

  // Example 3: Throw and catch a custom ApiError
  try {
    console.log("\n3. Throwing a custom ApiError:");
    throw new ApiError("API request failed", 404);
  } catch (error) {
    if (error instanceof ApiError) {
      console.log("Caught ApiError: " + error.message + " (Status: " + error.statusCode + ")");
    } else {
      console.log("Caught unknown error:", error instanceof Error ? error.message : "Unknown error");
    }
  }

  // Example 4: Nested try-catch blocks
  console.log("\n4. Demonstrating nested try-catch blocks:");
  try {
    try {
      throw new ValidationError("Inner error");
    } catch (innerError) {
      console.log("Inner catch block:", innerError instanceof Error ? innerError.message : "Unknown error");
      // Re-throw the error to the outer catch block
      throw innerError;
    }
  } catch (outerError) {
    console.log("Outer catch block:", outerError instanceof Error ? outerError.message : "Unknown error");
  }

  // Example 5: Finally block demonstration
  console.log("\n5. Demonstrating finally block:");
  try {
    console.log("Try block executed");
    throw new Error("Error in try block");
  } catch (error) {
    console.log("Catch block executed:", error instanceof Error ? error.message : "Unknown error");
  } finally {
    console.log("Finally block always executes");
  }
}

/**
 * Validates user input and throws appropriate errors
 * @param input - The input to validate
 * @throws ValidationError if input is invalid
 */
export function validateInput(input: string): void {
  if (!input) {
    throw new ValidationError("Input cannot be empty");
  }

  if (input.length < 3) {
    throw new ValidationError("Input must be at least 3 characters long");
  }

  if (!/^[a-zA-Z0-9]+$/.test(input)) {
    throw new ValidationError("Input can only contain alphanumeric characters");
  }

  console.log("Input is valid: " + input);
}

/**
 * Safely parses JSON and handles parsing errors
 * @param jsonString - The JSON string to parse
 * @returns Parsed object or null if parsing fails
 */
export function safeParseJson(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    // Use type checking for the error
    const errorMessage = error instanceof Error ? error.message : "Unknown parsing error";
    console.log("JSON parsing failed: " + errorMessage);
    return null;
  }
}
