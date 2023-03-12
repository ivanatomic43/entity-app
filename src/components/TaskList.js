import { useDeleteTaskMutation, useFetchTasksQuery } from '../store/apis/tasksApi'

import Table from '../common/Table';

function TaskList() {

  //Table content
  const { data, error } = useFetchTasksQuery();
  const [ deleteTask, deleteTaskResults] = useDeleteTaskMutation();

  let content;
  let tableConfig;
  let keyFn;

  if(error) {
    content = <div>Error loading tasks.</div>
  } else if(data) {
    if (data){
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
          render: (task) => task.employeeId
        },
        {
          label: "Due Date",
          render: (task) => task.dueDate
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

  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn} onDelete={handleDelete} /> }
     { error && content }
    </div>
  )
}

export default TaskList
