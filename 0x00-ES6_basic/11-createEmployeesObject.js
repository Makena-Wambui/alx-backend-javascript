export default function createEmployeesObject(departmentName, employees) {
  const employeesArray = [];

  const iterator = employees[Symbol.iterator]();

  let result = iterator.next();

  while (!result.done) {
    employeesArray.push(result.value);
    result = iterator.next();
  }
  // Computed property name using bracket notation
  return { [departmentName]: employeesArray };
}
