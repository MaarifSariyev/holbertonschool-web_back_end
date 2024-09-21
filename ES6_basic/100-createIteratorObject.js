export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];
  for (const department in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, department)) {
      employeeList.push(...employees[department]);
    }
  }
  return employeeList[Symbol.iterator]();
}
