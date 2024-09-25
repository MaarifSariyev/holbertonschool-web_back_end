/**
 * Represents a Holberton class.
 */
export class HolbertonClass {
  /**
   * Creates a new Holberton class.
   * @param {number} year - The year of the class.
   * @param {string} location - The location of the class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Gets the year of the class.
   * @returns {number} The year of the class.
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the class.
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }
}

/**
 * Represents a student at Holberton.
 */
export class StudentHolberton {
  /**
   * Creates a new student.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The class the student is in.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student.
   * @returns {string} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the class the student is in.
   * @returns {HolbertonClass} The class the student is in.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets a description of the student.
   * @returns {string} A description of the student.
   */
  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

/**
 * Creates a new Holberton class for the given year and location.
 * @param {number} year - The year of the class.
 * @param {string} location - The location of the class.
 * @returns {HolbertonClass} A new Holberton class.
 */
function createHolbertonClass(year, location) {
  return new HolbertonClass(year, location);
}

/**
 * Creates a new student with the given first name, last name, and class.
 * @param {string} firstName - The first name of the student.
 * @param {string} lastName - The last name of the student.
 * @param {HolbertonClass} holbertonClass - The class the student is in.
 * @returns {StudentHolberton} A new student.
 */
function createStudent(firstName, lastName, holbertonClass) {
  return new StudentHolberton(firstName, lastName, holbertonClass);
}

// Create some Holberton classes
const class2019 = createHolbertonClass(2019, 'San Francisco');
const class2020 = createHolbertonClass(2020, 'San Francisco');

// Create some students
const student1 = createStudent('Guillaume', 'Salva', class2020);
const student2 = createStudent('John', 'Doe', class2020);
const student3 = createStudent('Albert', 'Clinton', class2019);
const student4 = createStudent('Donald', 'Bush', class2019);
const student5 = createStudent('Jason', 'Sandler', class2019);

// Create a list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
