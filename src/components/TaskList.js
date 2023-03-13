import { useState } from 'react';

import { useDeleteTaskMutation, useFetchTasksQuery } from '../store/apis/tasksApi'
import { useFetchEmployeesQuery } from '../store';
import { getEmployee } from '../utils/helpers/getEmployee';

import Table from '../common/Table';
import TaskForm from '../components/forms/TaskForm'

function TaskList() {

  //Table content
  const { data, error } = useFetchTasksQuery();
  const [ deleteTask ] = useDeleteTaskMutation();

  const [ showEdit, setShowEdit] = useState(false);
  const [ taskEditId, setTaskEditId ] = useState(null);

  const { data: employeesList } = useFetchEmployeesQuery();

  let content;
  let tableConfig;
  let keyFn;

  if(error) {
    content = <div>Error loading tasks.</div>
  } else if(data && employeesList) {
    if (data && employeesList){
      tableConfig =  [
        {
          label: "Title",
          render: (task) => task.title
        },
        {
          label: "Description",
          render: (task) => task.description
        },
        {
          label: "Assignee",
          render: (task) => {
            const assignee = getEmployee(task.employeeId, employeesList)
            return assignee.firstName + " " + assignee.lastName;
          }
        },
        {
          label: "Due Date",
          render: (task) => {
            const date = task.dueDate.split("T");
            const myDate = date[0].split("\"");
            return myDate;
          }
        }
      ]

      keyFn = (task) => {
        return task.id;
      }
    }
  }

  const handleDelete = (id) => {
    deleteTask(id);
  }

  const onEditOpen = (id) => {
    setShowEdit(true);
    setTaskEditId(id);
  }

  const onEditClose = () => {
    setShowEdit(false);
  }

  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn} onDelete={handleDelete} onEditClick={onEditOpen} /> }
     { error && content }
     { showEdit && <TaskForm onEditClose={onEditClose} type="Task" editMode="true" taskEditId={taskEditId} />}
    </div>
  )
}

export default TaskList
