// src/asyncFunctions.ts

// src/asyncFunctions.ts

/**
 * AsyncFunctions module demonstrating asynchronous programming in TypeScript
 * Contains functions using async/await for asynchronous operations
 */

// Import the axios library for making HTTP requests
import axios from "axios";

/**
 * Fetches data from a URL using HTTP GET request
 * @param url - The URL to fetch data from
 * @returns The response data from the API
 * @throws Error if the request fails or response status is not OK
 */
// Define an asynchronous function that takes a URL string and returns a Promise
export async function fetchData(url: string): Promise<any> {
  // Begin try block to handle potential errors
  try {
    // Log the URL being fetched to the console
    console.log("Fetching data from: " + url);

    // Make an HTTP GET request to the specified URL with a 10-second timeout
    const response = await axios.get(url, { timeout: 10000 });

    // Check if the HTTP response status is in the success range (200-299)
    if (response.status >= 200 && response.status < 300) {
      // Return the response data if the request was successful
      return response.data;
    } else {
      // Throw an error if the HTTP status indicates a failure
      throw new Error("HTTP error! status: " + response.status);
    }
  // Catch block to handle any errors that occur during the request
  } catch (error: any) {
    // Initialize a default error message
    let errorMessage = "Unknown error occurred";

    // Check if the error is an object and not null/undefined
    if (error && typeof error === "object") {
      // Check if the error is a timeout error
      if (error.code === "ECONNABORTED") {
        // Set specific error message for timeout
        errorMessage = "Request timeout - server took too long to respond";
      // Check if the error has a response property
      } else if (error.response) {
        // Extract error message from response data or use default message
        errorMessage = error.response.data?.message || error.message || "Axios error";
      // Check if the error has a message property
      } else if (error.message) {
        // Use the error's message property
        errorMessage = error.message;
      }
    }

    // Throw a new error with a descriptive message including the original URL
    throw new Error("Failed to fetch data from " + url + ": " + errorMessage);
  }
}

/**
 * Fetches weather data for a specific location (free public API - no signup required)
 */
// Define an asynchronous function to fetch weather data with a default parameter
export async function fetchWeatherData(city: string = "London"): Promise<any> {
  // Begin try block
  try {
    // Define the API endpoint URL for weather data
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

    // Log the city for which weather data is being fetched
    console.log("Fetching weather data for: " + city);

    // Make an HTTP GET request to the weather API with a 10-second timeout
    const response = await axios.get(url, { timeout: 10000 });

    // Check if the HTTP response status is in the success range
    if (response.status >= 200 && response.status < 300) {
      // Return the weather data if the request was successful
      return response.data;
    } else {
      // Throw an error if the HTTP status indicates a failure
      throw new Error("HTTP error! status: " + response.status);
    }
  // Catch block to handle any errors
  } catch (error: any) {
    // Initialize a default error message
    let errorMessage = "Unknown error occurred";

    // Check if the error is an object
    if (error && typeof error === "object") {
      // Check if the error is a timeout error
      if (error.code === "ECONNABORTED") {
        // Set specific error message for timeout
        errorMessage = "Weather API timeout - server took too long to respond";
      // Check if the error has a response property
      } else if (error.response) {
        // Extract error message from response data or use default message
        errorMessage = error.response.data?.message || error.message || "Axios error";
      // Check if the error has a message property
      } else if (error.message) {
        // Use the error's message property
        errorMessage = error.message;
      }
    }

    // Throw a new error with a descriptive message
    throw new Error("Failed to fetch weather data: " + errorMessage);
  }
}

/**
 * Fetches random user data from a free public API
 */
// Define an asynchronous function to fetch random user data
export async function fetchRandomUser(): Promise<any> {
  // Begin try block
  try {
    // Define the API endpoint URL for random user data
    const url = "https://randomuser.me/api/";
    // Log that random user data is being fetched
    console.log("Fetching random user data");

    // Make an HTTP GET request to the random user API with a 10-second timeout
    const response = await axios.get(url, { timeout: 10000 });

    // Check if the HTTP response status is in the success range
    if (response.status >= 200 && response.status < 300) {
      // Return the user data if the request was successful
      return response.data;
    } else {
      // Throw an error if the HTTP status indicates a failure
      throw new Error("HTTP error! status: " + response.status);
    }
  // Catch block to handle any errors
  } catch (error: any) {
    // Initialize a default error message
    let errorMessage = "Unknown error occurred";

    // Check if the error is an object
    if (error && typeof error === "object") {
      // Check if the error is a timeout error
      if (error.code === "ECONNABORTED") {
        // Set specific error message for timeout
        errorMessage = "Random User API timeout";
      // Check if the error has a response property
      } else if (error.response) {
        // Extract error message from response data or use default message
        errorMessage = error.response.data?.message || error.message || "Axios error";
      // Check if the error has a message property
      } else if (error.message) {
        // Use the error's message property
        errorMessage = error.message;
      }
    }

    // Throw a new error with a descriptive message
    throw new Error("Failed to fetch random user data: " + errorMessage);
  }
}

/**
 * Simulates an asynchronous operation with a delay
 */
// Define a function that returns a Promise to simulate an asynchronous operation
export function simulateAsyncOperation(ms: number): Promise<void> {
  // Return a new Promise object
  return new Promise(resolve => {
    // Set a timeout to simulate an asynchronous delay
    setTimeout(() => {
      // Log that the async operation has completed
      console.log("Async operation completed after " + ms + "ms");
      // Resolve the Promise to indicate completion
      resolve();
    }, ms); // The delay duration in milliseconds
  });
}

/**
 * Executes multiple asynchronous operations in parallel using Promise.all
 */
// Define an asynchronous function to fetch data from multiple URLs in parallel
export async function fetchMultipleUrls(urls: string[]): Promise<any[]> {
  // Begin try block
  try {
    // Create an array of promises by mapping each URL to the fetchData function
    const promises = urls.map(url => fetchData(url));
    // Wait for all promises to resolve using Promise.all
    return await Promise.all(promises);
  // Catch block to handle any errors
  } catch (error: any) {
    // Throw a new error with a descriptive message
    throw new Error(
      "Failed to fetch multiple URLs: " + (error?.message || "Unknown error")
    );
  }
}

/**
 * Executes asynchronous operations sequentially
 */
// Define an asynchronous function to execute operations sequentially
export async function executeSequentially(operations: Array<() => Promise<any>>): Promise<any[]> {
  // Initialize an array to store the results of each operation
  const results: any[] = [];

  // Iterate over each operation in the operations array
  for (const operation of operations) {
    // Wait for the current operation to complete and get its result
    const result = await operation();
    // Add the result to the results array
    results.push(result);
  }

  // Return the array of results after all operations have completed
  return results;
}

console.log('\n')
console.log('\n')