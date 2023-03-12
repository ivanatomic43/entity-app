import ReactDOM from 'react-dom'

function Modal({children, onClose, modalTitle, onSubmit, hasForm}) {

  const content = (
    <div className="modal">
      <div className="modalContainer">
        <div className="modalDialog">
          <div
            className="overlay"
            onClick={onClose}
            role="presentation"
          />
          <div className="dialog">
            <div className="content">
              <div className='modal-container bg-white p-3'>
                <h3 className='text-center text-black font-medium text-xl'>{modalTitle}</h3>
                  {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ModalContent = hasForm ? (<form onSubmit={onSubmit}>{content}</form>) : content

  return (
    ReactDOM.createPortal(ModalContent, document.body)
  )
}

export default Modal