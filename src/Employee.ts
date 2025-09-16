
// src/Employee.ts

// src/Employee.ts

/**
 * Employee class that extends Person, demonstrating inheritance
 * Adds employee-specific properties and methods
 */

import { Person } from "./Person";

/**
 * Employee class that extends Person, demonstrating inheritance
 * Adds employee-specific properties and methods
 */
export class Employee extends Person {
  // Additional properties specific to Employee
  private employeeId: string;
  private jobTitle: string;
  private monthlySalary: number;

  /**
   * Creates a new Employee instance
   * @param firstName - The employees first name
   * @param lastName - The employees last name
   * @param age - The employees age
   * @param employeeId - The employees unique ID
   * @param jobTitle - The employees job title
   * @param monthlySalary - The employees monthly salary (must be non-negative)
   */
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    employeeId: string,
    jobTitle: string,
    monthlySalary: number = 5000
  ) {
    // Call the parent class constructor
    super(firstName, lastName, age);

    // Initialize Employee-specific properties
    this.employeeId = employeeId;
    this.jobTitle = jobTitle;

    // Validate salary is non-negative
    if (monthlySalary < 0) {
      throw new Error("Salary cannot be negative");
    }
    this.monthlySalary = monthlySalary;
  }

  /**
   * Gets the employees ID
   * @returns The employee ID as a string
   */
  public getEmployeeId(): string {
    return this.employeeId;
  }

  /**
   * Gets the employees job title
   * @returns The job title as a string
   */
  public getJobTitle(): string {
    return this.jobTitle;
  }

  /**
   * Sets a new job title for the employee
   * @param newTitle - The new job title
   */
  public setJobTitle(newTitle: string): void {
    this.jobTitle = newTitle;
  }

  /**
   * Gets employee information as a formatted string
   * @returns Employee information string with ID and title
   */
  public getEmployeeInfo(): string {
    return "Employee ID: " + this.employeeId + ", Title: " + this.jobTitle;
  }

  /**
   * Calculates the annual salary based on monthly salary
   * @returns The annual salary (monthly salary × 12)
   */
  public calculateAnnualSalary(): number {
    return this.monthlySalary * 12;
  }

  /**
   * Provides a string representation of the employee
   * Overrides the parent class toString method
   * @returns A formatted string with employee details
   */
  public toString(): string {
    return (
      "Employee: " +
      this.getFullName() +
      ", ID: " +
      this.employeeId +
      ", Title: " +
      this.jobTitle +
      ", Salary: $" +
      this.monthlySalary +
      "/month"
    );
  }
}
