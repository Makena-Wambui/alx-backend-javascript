export default function createReportObject(employeesList) {
  // employeesList is an objecct returned by the previous function: createEmployeesObject
  // It looks like this: { 'Engineering': [ 'John Doe', 'Jane Doe' ] }

  // This function returns an object,
  // containing the key 'allEmployees',
  // and a method property called getNumberOfDepartments.

  // allEmployees is a key.
  // Its value is an object containing the
  // department name and a list of all the employees in that department.
  // getNumberOfDepartments receives employeesList as an argument.
  // It returns the number of departments in the employeesList object.

  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      // Object.keys returns an array of a given object's own enumerable property names
      // So in this case, Object.keys(employeesList) returns an array of the department names
      // The length of this array is the number of departments,
      // Hence the length property is used to return the number of departments

      return Object.keys(employeesList).length;
    },
  };
}
