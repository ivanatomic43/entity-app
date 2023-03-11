import TaskForm from './forms/TaskForm';
import EmployeeForm from './forms/EmployeeForm';
import OrderForm from './forms/OrderForm';
import ManagerForm from './forms/ManagerForm';

function NewEntity({onClose, type}) {

  let content;

  if (type === 'Employee'){
    content = <EmployeeForm  type={type} onClose={onClose}/>
  } else if (type === 'Manager'){
    content = <ManagerForm type={type} onClose={onClose} />
  } else if (type === 'Task') {
    content = <TaskForm type={type} onClose={onClose} />
  } else if (type === 'Order'){
    content = <OrderForm type={type} onClose={onClose}/>
  }

  return (
    <>
      {content}
    </>
  )
}

export default NewEntity
