import { useDeleteEmployeeMutation, useFetchEmployeesQuery } from '../store/apis/employeesApi'

import Table from '../common/Table';

function EmployeeList() {

  const { data, error } = useFetchEmployeesQuery();
  const [ deleteEmployee, deleteEmployeeResults ] = useDeleteEmployeeMutation();

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

  const handleDelete = (id) => {
    deleteEmployee(id);
  }

  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn} onDelete={handleDelete} /> }
     { error && content }
    </div>
  )
}

export default EmployeeList
