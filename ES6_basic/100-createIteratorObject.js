/**
 * Creates an iterator object that iterates through every employee in every department.
 * @param {Object} report - The report containing employees organized by department.
 * @returns {Iterator} An iterator for the employee list.
 */
export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];
  // Flatten the employee list from each department
  for (const department in employees) {
    employeeList.push(...employees[department]);
  }
  // Return an iterator for the flattened employee list
  return employeeList[Symbol.iterator]();
}
