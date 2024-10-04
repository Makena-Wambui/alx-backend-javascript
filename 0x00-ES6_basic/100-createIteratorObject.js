export default function createIteratorObject(report) {
  // Lets destruct the report object
  const { allEmployees } = report;

  // Flatten the array of employees from all departments
  // We use Object.values to get the values of the allEmployees object,
  // which is an array of arrays of employees
  // We then use the flat method to flatten the array of arrays
  const employees = Object.values(allEmployees).flat();

  // Return an iterator over the flattened employees array
  const iterator = employees[Symbol.iterator]();

  return iterator;
}
