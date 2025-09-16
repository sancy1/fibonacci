
// src/ classes.ts

/**
 * Person class representing a person with basic properties and methods
 */

/**
 * Base class representing a Person with basic properties and methods
 */
export class Person {
  // Private properties with type annotations for encapsulation
  private firstName: string;
  private lastName: string;
  private age: number;

  /**
   * Creates a new Person instance
   * @param firstName - The persons first name
   * @param lastName - The persons last name
   * @param age - The persons age (must be non-negative)
   */
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;

    // Validate age is non-negative
    if (age < 0) {
      throw new Error("Age cannot be negative");
    }
    this.age = age;
  }

  /**
   * Gets the full name of the person by combining first and last names
   * @returns The full name as a string
   */
  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  /**
   * Gets the age of the person
   * @returns The age as a number
   */
  public getAge(): number {
    return this.age;
  }

  /**
   * Sets a new age for the person with validation
   * @param newAge - The new age value (must be non-negative)
   */
  public setAge(newAge: number): void {
    if (newAge < 0) {
      throw new Error("Age cannot be negative");
    }
    this.age = newAge;
  }

  /**
   * Provides a string representation of the person
   * @returns A formatted string with person details
   */
  public toString(): string {
    return "Person: " + this.getFullName() + ", Age: " + this.age;
  }
}
