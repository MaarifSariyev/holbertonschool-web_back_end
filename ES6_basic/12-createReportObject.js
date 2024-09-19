export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, 
    },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length; 
    },
  };
}
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
}; 
