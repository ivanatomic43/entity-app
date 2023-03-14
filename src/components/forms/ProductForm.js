import { useState } from 'react'

import { useAddProductMutation } from '../../store/apis/productsApi'

import Input from '../../common/Input'
import Modal from '../../common/Modal'
import Button from '../../common/Button'

function ProductForm({type, onClose}) {

  const [ addProduct, addProductError ] = useAddProductMutation();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 0
  })

  const { name, description, quantity } = formData;

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addProduct(formData);
    onClose();
  }

  return (
    <Modal hasForm={true} modalTitle={`Create ${type}`} onClose={onClose} onSubmit={onSubmit}>
    <div className="grid grid-rows-4 grid-flow-row p-2">
      <div>
        <Input labelName="Name" inputType="text" id="name" name="name" value={name} onChange={handleOnChange} />
      </div>
      <div>
        <Input labelName="Description" inputType="text" id="description" name="description" value={description} onChange={handleOnChange} />
      </div>
      <div>
        <Input labelName="Quantity" inputType="number" id="quantity" name="quantity" value={quantity} onChange={handleOnChange} />
      </div>
      <div className="m-2">
        <Button orange rounded primary className="p-3 w-full hover:bg-gray-300">Add {type}</Button>
      </div>
    </div>
    </Modal>
  )
}

export default ProductForm
