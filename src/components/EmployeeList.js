import { useFetchEmployeesQuery } from '../store/apis/employeesApi'

import Table from '../common/Table';

function EmployeeList() {

  const { data, error } = useFetchEmployeesQuery();

  let content;
  let tableConfig;
  let keyFn;

  if(error) {
    content = <div>Error loading employees.</div>
  } else if(data) {
    if (data){
      tableConfig =  [
        {
          label: "First Name",
          render: (employee) => employee.firstName
        },
        {
          label: "Last Name",
          render: (employee) => employee.lastName
        },
        {
          label: "Email",
          render: (employee) => employee.email
        },
        {
          label: "Phone Number",
          render: (employee) => employee.phoneNumber
        },
        {
          label: "Date of Birth",
          render: (employee) => employee.dateOfBirth
        },
        {
          label: "Monthly Salary",
          render: (employee) => employee.salary + "$"
        }
      ]

      keyFn = (employee) => {
        return employee.id;
      }
    }
  }

  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn}  /> }
     { error && content }
    </div>
  )
}

export default EmployeeList
