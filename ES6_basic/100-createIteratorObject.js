export default function createIteratorObject(report) {
  const employees = report.allEmployees; 
  const employeeList = [];

  
  for (const department in employees) {
    employeeList.push(...employees[department]);
  }

  return employeeList[Symbol.iterator]();
}
