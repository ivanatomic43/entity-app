import { useState } from 'react'

import Button from '../common/Button';
import NewEntity from './NewEntity';


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
          This is {pageTitle} page.
        </div>
      </div>
      { showModal && newEntityModal }
    </>
  )
}

export default Entity
