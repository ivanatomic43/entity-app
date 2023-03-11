import Modal from "../../common/Modal"
import Input from "../../common/Input"
import Button from "../../common/Button"

function Order({type, onClose}) {
  return (
    <Modal hasForm={true} modalTitle={`Create ${type}`} onClose={onClose}>
    <div className="grid grid-rows-4 grid-flow-row p-2">
      <div>
        <Input labelName="Title" inputType="text" id="title" name="title"  />
      </div>
      <div>
        <Input labelName="Description" inputType="text" id="description" name="description"  />
      </div>
      <div>
        <Input labelName="Employee" inputType="text" id="employee" name="employee"  />
      </div>
      <div className="m-2">
        <Button orange rounded primary className="p-3 w-full hover:bg-gray-300">Add {type}</Button>
      </div>
    </div>
    </Modal>
  )
}

export default Order
