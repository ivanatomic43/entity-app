import { useEffect, useState } from "react"

import { useAddTaskMutation } from "../../store/apis/tasksApi"
import { validateField } from "../../utils/helpers/formValidation"
import { useFetchEmployeesQuery } from "../../store"
import { useFetchTaskQuery, useUpdateTaskMutation } from "../../store/apis/tasksApi";
import { getEmployee } from "../../utils/helpers/getEmployee";

import Input from "../../common/Input"
import Button from "../../common/Button"
import Modal from "../../common/Modal"
import Dropdown from "../../common/Dropdown"
import Calendar from "react-calendar"

import 'react-calendar/dist/Calendar.css';

function Task({type, onClose, onEditClose, editMode, taskEditId}) {

  const [ addTask, results] = useAddTaskMutation();
  const { data: taskEdit, editError } = useFetchTaskQuery(taskEditId);
  const [ updateTask, updateResults ] = useUpdateTaskMutation();
  const { data: employeeList, errorList } = useFetchEmployeesQuery();

  const [ formData, setFormData ] = useState({
    title: '',
    description: '',
    employee: '',
    dueDate: new Date()
  })

  const [ formValidation, setFormValidation ] = useState({
    titleValid: false,
    descriptionValid: false,
    employeeValid: false,
    dueDateValid: false,
    formErrors: { title: '', description: '', employee: '', dueDate: ''},
    formValid: false,
    formType: type
  })

  useEffect(() => {
    if(editMode && taskEdit){
      setFormData({
        id: taskEdit.id,
        title: taskEdit.title,
        description: taskEdit.description,
        employeeId: taskEdit.employeeId
      })

      if(employeeList) {
      const employeeForDropdown = getEmployee(taskEdit.employeeId, employeeList)
      setSelected(employeeForDropdown);
      }
    }
  }, [taskEdit])

  const { title, description, employee, dueDate } = formData;

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))

    setFormValidation((prevState) => ({
      ...prevState,
      titleValid: validateField(event.target.id, event.target.value, formValidation).titleValid,
      descriptionValid: validateField(event.target.id, event.target.value, formValidation).descriptionValid,
      employeeValid: validateField(event.target.id, event.target.value, formValidation).employeeValid,
      dueDateValid: validateField(event.target.id, event.target.value, formValidation).dueDateValid,
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

  const handleDateChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      dueDate: event
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    onClose();
  }

  const onEditSubmit = event => {
    event.preventDefault();

    updateTask(formData);
    onEditClose();
  }

  return (
    <Modal hasForm={true} modalTitle={ editMode ? `Edit ${type}` : `Create ${type}`} onClose={editMode ? onEditClose : onClose} onSubmit={ editMode ? onEditSubmit : onSubmit}>
    <div className="grid grid-rows-2 grid-flow-row p-1">
      <div>
        <Input labelName="Title" inputType="text" id="title" name="title" value={title} onChange={handleOnChange} validationError={formValidation.formErrors.title} />
      </div>
      <div>
        <Input labelName="Description" inputType="text" id="description" name="description" value={description} onChange={handleOnChange} validationError={formValidation.formErrors.description}  />
      </div>
      <div>
       { employeeData &&  <Dropdown options={employeeData} value={selected} onChange={handleSelect}  /> }
      </div>
      <div>
        <label className="text-xs ml-2 text-slate-500">Choose due date:</label>
        <Calendar className="bg-gray-200 m-2" id="dueDate" name="dueDate" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="m-2">
        <Button orange rounded primary className="p-3 w-full hover:bg-gray-300">{editMode ? `Save` : `Add ${type}`}</Button>
      </div>
    </div>
    </Modal>
  )
}

export default Task
