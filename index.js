const employee = {
  name: 'james',
  streetAddress: '16, northern bypass'
}

//console.log(employee.streetAddress);


const beforeEach = function () {
  for (const key in employee) {
    delete employee[key];
    }
  }
  
beforeEach();

let updateEmployeeWithKeyAndValue = function (employee, streetAddress, value) {
  return {
    ...employee,
    [streetAddress]: value
  };
}
updateEmployeeWithKeyAndValue();

beforeEach();

console.log(updateEmployeeWithKeyAndValue());

let destructivelyUpdateEmployeeWithKeyAndValue = function (employee, streetAddress, value) {
    employee[streetAddress] = value;
   return employee;
  };

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Sam', '12 Broadway')

beforeEach();

function deleteFromEmployeeByKey(employee, streetAddress) {
  const newEmployee = { ...employee };
  delete newEmployee[streetAddress];
  return newEmployee;
}

beforeEach();

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress) {
  delete employee[streetAddress];
  return employee;
}



