import { useState } from "react"

import { useAddTaskMutation } from "../../store/apis/tasksApi"
import { validateField } from "../../utils/helpers/formValidation"

import Input from "../../common/Input"
import Button from "../../common/Button"
import Modal from "../../common/Modal"
import { useFetchEmployeesQuery } from "../../store"
import Dropdown from "../../common/Dropdown"


function Task({type, onClose}) {

  const [ addTask, results] = useAddTaskMutation();

  const [ formData, setFormData ] = useState({
    title: '',
    description: '',
    employee: ''
  })

  const [ formValidation, setFormValidation ] = useState({
    titleValid: false,
    descriptionValid: false,
    employeeValid: false,
    formErrors: { title: '', description: '', employee: ''},
    formValid: false,
    formType: type
  })

  const { title, description, employee } = formData;

  const handleOnChange = (event) => {
    console.log(event.target);
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))

    setFormValidation((prevState) => ({
      ...prevState,
      titleValid: validateField(event.target.id, event.target.value, formValidation).titleValid,
      descriptionValid: validateField(event.target.id, event.target.value, formValidation).descriptionValid,
      employeeValid: validateField(event.target.id, event.target.value, formValidation).employeeValid,
      formValid: validateField(event.target.id, event.target.value, formValidation).formValid
    }))
  }

  //Dropdown
  const [selected, setSelected] = useState(null);

  //Fetching employees..
  const { data, error,  isFetching } = useFetchEmployeesQuery();

  let employeeData;
  if(isFetching){
    employeeData = [];
  } else if(error) {
    employeeData = [];
  } else {
    employeeData = data;
  }

  const handleSelect = (option, event) => {
    setSelected(option);

    setFormData((prevState) => ({
      ...prevState,
      employeeId: option.id
    }))
  };

  const onSubmit = () => {
    addTask(formData);
  }

  return (
    <Modal hasForm={true} modalTitle={`Create ${type}`} onClose={onClose} onSubmit={onSubmit}>
    <div className="grid grid-rows-4 grid-flow-row p-2">
      <div>
        <Input labelName="Title" inputType="text" id="title" name="title" value={title} onChange={handleOnChange} validationError={formValidation.formErrors.title} />
      </div>
      <div>
        <Input labelName="Description" inputType="text" id="description" name="description" value={description} onChange={handleOnChange} validationError={formValidation.formErrors.description}  />
      </div>
      <div>
       { employeeData &&  <Dropdown options={employeeData} value={selected} onChange={handleSelect}  /> }
      </div>
      <div className="m-2">
        <Button orange rounded primary className="p-3 w-full hover:bg-gray-300">Add {type}</Button>
      </div>
    </div>
    </Modal>
  )
}

export default Task
