import { useState } from 'react'

import Button from '../common/Button';
import EmployeeList from './EmployeeList';
import NewEntity from './NewEntity';
import ProductList from './ProductList';
import TaskList from './TaskList';


function Entity({pageTitle}) {

  //Modal
  const [showModal, setShowModal] = useState(false);

  const showModalClick = ( event ) => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const newEntityModal = <NewEntity onClose={handleCloseModal} type={pageTitle} />

  return (
    <>
      <div className="m-3">
        <div className="flex flex-row justify-end p-1">
          <Button primary className="p-3" onClick={showModalClick}>Add {pageTitle}</Button>
        </div>
        <div className="m-5">
          { pageTitle === 'Employee' && <EmployeeList /> }
          { pageTitle === 'Task' && <TaskList /> }
          { pageTitle === 'Product' && <ProductList />}
        </div>
      </div>
      { showModal && newEntityModal }
    </>
  )
}

export default Entity
