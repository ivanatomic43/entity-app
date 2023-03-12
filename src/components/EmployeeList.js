import { useState } from 'react';
import { useDeleteEmployeeMutation, useFetchEmployeeQuery, useFetchEmployeesQuery } from '../store/apis/employeesApi'
import { useEmployee } from '../hooks/use-employee'

import Table from '../common/Table';
import EmployeeForm from '../components/forms/EmployeeForm';

function EmployeeList() {

  const { data, error } = useFetchEmployeesQuery();
  
  const [ deleteEmployee, deleteEmployeeResults ] = useDeleteEmployeeMutation();
  
  const [ showEdit, setShowEdit] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  
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

  const onEditOpen = (id) => {
    setShowEdit(true);
    setEditUserId(id);
  }

  const onEditClose = () => {
    setShowEdit(false);
  }

  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn} onDelete={handleDelete} onEditClick={onEditOpen} /> }
     { error && content }
     {showEdit && <EmployeeForm onEditClose={onEditClose} type="Employee" editMode="true" employeeEditId={editUserId}/>}
    </div>
  )
}

export default EmployeeList
