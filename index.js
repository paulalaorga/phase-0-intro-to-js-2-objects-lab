function updateEmployeeWithKeyAndValue(employee, key, value) {
  
    let newEmployee = { ...employee };
    
    newEmployee[key] = value;
    
    return newEmployee;
  }
  
  let employee = {
    name: "Sam",
    address: "11 Broadway"
  };
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
  console.log(updatedEmployee); 
  
  updatedEmployee = updateEmployeeWithKeyAndValue(updatedEmployee, "address", "12 Broadway");
  console.log(updatedEmployee); 


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

    employee[key] = value;
  
   
    return employee;
  }

  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");
  console.log(employee); 
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "address", "12 Broadway");
  console.log(employee); 
  
function deleteFromEmployeeByKey(employee, key) {
    
    const clonedEmployee = { ...employee };
    delete clonedEmployee[key];
  
    return clonedEmployee;
  };

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;
}