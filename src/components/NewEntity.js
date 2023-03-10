import React, { useEffect } from 'react'

import Modal from '../common/Modal'
import Task from './forms/Task';
import Employee from './forms/Employee';
import Order from './forms/Order';
import Manager from './forms/Manager';

function NewEntity({onClose, type}) {

  let content;

  if (type === 'Employee'){
    content = <Employee  type={type} onClose={onClose}/>
  } else if (type === 'Manager'){
    content = <Manager type={type} onClose={onClose} />
  } else if (type === 'Task') {
    content = <Task type={type} onClose={onClose} />
  } else if (type === 'Order'){
    content = <Order type={type} onClose={onClose}/>
  }

  return (
    <>
      {content}
    </>
  )
}

export default NewEntity
