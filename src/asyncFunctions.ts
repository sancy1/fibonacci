// src/asyncFunctions.ts

/**
 * AsyncFunctions module demonstrating asynchronous programming in TypeScript
 * Contains functions using async/await for asynchronous operations
 */

import axios from "axios";

/**
 * Fetches data from a URL using HTTP GET request
 * @param url - The URL to fetch data from
 * @returns The response data from the API
 * @throws Error if the request fails or response status is not OK
 */
export async function fetchData(url: string): Promise<any> {
  try {
    console.log("Fetching data from: " + url);

    const response = await axios.get(url, { timeout: 10000 });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("HTTP error! status: " + response.status);
    }
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";

    if (error && typeof error === "object") {
      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout - server took too long to respond";
      } else if (error.response) {
        errorMessage = error.response.data?.message || error.message || "Axios error";
      } else if (error.message) {
        errorMessage = error.message;
      }
    }

    throw new Error("Failed to fetch data from " + url + ": " + errorMessage);
  }
}

/**
 * Fetches weather data for a specific location (free public API - no signup required)
 */
export async function fetchWeatherData(city: string = "London"): Promise<any> {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

    console.log("Fetching weather data for: " + city);

    const response = await axios.get(url, { timeout: 10000 });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("HTTP error! status: " + response.status);
    }
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";

    if (error && typeof error === "object") {
      if (error.code === "ECONNABORTED") {
        errorMessage = "Weather API timeout - server took too long to respond";
      } else if (error.response) {
        errorMessage = error.response.data?.message || error.message || "Axios error";
      } else if (error.message) {
        errorMessage = error.message;
      }
    }

    throw new Error("Failed to fetch weather data: " + errorMessage);
  }
}

/**
 * Fetches random user data from a free public API
 */
export async function fetchRandomUser(): Promise<any> {
  try {
    const url = "https://randomuser.me/api/";
    console.log("Fetching random user data");

    const response = await axios.get(url, { timeout: 10000 });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error("HTTP error! status: " + response.status);
    }
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";

    if (error && typeof error === "object") {
      if (error.code === "ECONNABORTED") {
        errorMessage = "Random User API timeout";
      } else if (error.response) {
        errorMessage = error.response.data?.message || error.message || "Axios error";
      } else if (error.message) {
        errorMessage = error.message;
      }
    }

    throw new Error("Failed to fetch random user data: " + errorMessage);
  }
}

/**
 * Simulates an asynchronous operation with a delay
 */
export function simulateAsyncOperation(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Async operation completed after " + ms + "ms");
      resolve();
    }, ms);
  });
}

/**
 * Executes multiple asynchronous operations in parallel using Promise.all
 */
export async function fetchMultipleUrls(urls: string[]): Promise<any[]> {
  try {
    const promises = urls.map(url => fetchData(url));
    return await Promise.all(promises);
  } catch (error: any) {
    throw new Error(
      "Failed to fetch multiple URLs: " + (error?.message || "Unknown error")
    );
  }
}

/**
 * Executes asynchronous operations sequentially
 */
export async function executeSequentially(operations: Array<() => Promise<any>>): Promise<any[]> {
  const results: any[] = [];

  for (const operation of operations) {
    const result = await operation();
    results.push(result);
  }

  return results;
}
