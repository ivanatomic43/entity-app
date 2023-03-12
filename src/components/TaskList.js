import { useFetchTasksQuery } from '../store/apis/tasksApi'

import Table from '../common/Table';

function TaskList() {

  //Table content
  const { data, error } = useFetchTasksQuery();

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
          label: "Employee",
          render: (task) => task.employeeId
        }
      ]

      keyFn = (task) => {
        return task.id;
      }
    }
  }
  
  return (
    <div>
     {(data && tableConfig) && <Table data={data} config={tableConfig} keyFn={keyFn} /> }
     { error && content }
    </div>
  )
}

export default TaskList
