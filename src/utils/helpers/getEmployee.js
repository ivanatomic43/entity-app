export function getEmployee(id, employeesList){
  const details = employeesList.find((item) => item.id === id);
  return details ||  "None";
}

