
// src/index.ts

// Import all the modules
import { Employee } from "./Employee";
import { Person } from "./Person";
import { calculateTotal, processList } from "./lists";
import { fetchData, simulateAsyncOperation, fetchWeatherData, fetchRandomUser } from "./asyncFunctions";
import { handleExceptions, validateInput } from "./exceptions";
import { factorial, fibonacci } from "./recursion";

/**
 * Helper function to safely get error message from unknown error type
 * @param error - The error object of type unknown
 * @returns A safe error message string
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

/**
 * Main function that demonstrates all required features
 */
async function main(): Promise<void> {
  // Display output to the terminal - Basic Requirement
  console.log("=== TypeScript Project Demonstrating All Requirements ===\n");

  // Demonstrate Recursion - Basic Requirement
  console.log("1. RECURSION DEMONSTRATION:");
  console.log("Fibonacci of 10: " + fibonacci(10));
  console.log("Factorial of 5: " + factorial(5) + "\n");

  // Demonstrate Classes - Basic Requirement
  console.log("2. CLASSES DEMONSTRATION:");
  const person = new Person("John", "Doe", 30);
  console.log(person.getFullName());

  const employee = new Employee("Jane", "Smith", 28, "E123", "Software Developer", 6000);
  console.log(employee.getEmployeeInfo());
  console.log("Annual Salary: $" + employee.calculateAnnualSalary() + "\n");

  // Demonstrate Lists - Basic Requirement
  console.log("3. LISTS DEMONSTRATION:");
  const numbers = [5, 2, 8, 1, 9, 3];
  const processed = processList(numbers);
  console.log("Original: " + numbers);
  console.log("Processed: " + processed);
  console.log("Total: " + calculateTotal(numbers) + "\n");

  // Demonstrate Asynchronous Functions - Basic Requirement
  console.log("4. ASYNC FUNCTIONS DEMONSTRATION:");
  try {
    // First API call - JSONPlaceholder
    const postData = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Fetched post title: " + postData.title);

    // Second API call - Weather data (free public API)
    const weatherData = await fetchWeatherData("London");
    console.log(
      "Current temperature in London: " +
        weatherData.current.temperature_2m +
        weatherData.current_units.temperature_2m
    );

    // Third API call - Random user data (free public API)
    const userData = await fetchRandomUser();
    const user = userData.results[0];
    console.log("Random user: " + user.name.first + " " + user.name.last + " (" + user.email + ")");

    await simulateAsyncOperation(1000);
    console.log("Async operation completed successfully\n");
  } catch (error) {
    // Use the helper function to safely get error message
    console.error("Error in async operation: " + getErrorMessage(error));
  }

  // Demonstrate Exception Handling - Additional Requirement
  console.log("5. EXCEPTION HANDLING DEMONSTRATION:");
  handleExceptions();

  // Validate input example
  try {
    validateInput("validInput123");
    console.log("Input validation passed");
  } catch (error) {
    console.log("Input validation failed: " + getErrorMessage(error));
  }
}

// Execute the main function
main().catch(error => {
  console.error("Unhandled error in main: " + getErrorMessage(error));
  process.exit(1);
});
