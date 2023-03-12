import { useEffect, useState } from 'react'
import Input from '../../common/Input'
import Button from '../../common/Button'
import Modal from '../../common/Modal'

import { validateField } from '../../utils/helpers/formValidation'
import { useAddEmployeeMutation, useFetchEmployeeQuery, useUpdateEmployeeMutation } from '../../store'

function EmployeeForm({type, onClose, onEditClose, editMode, employeeEditId}) {

  const [addEmployee, results] = useAddEmployeeMutation();
  const { data: employeeEdit, error, isFetching} = useFetchEmployeeQuery(employeeEditId);
  const [ updateEmployee, updateResults] = useUpdateEmployeeMutation();

  const [formValidation, setFormValidation] = useState({
    firstNameValid: false,
    lastNameValid: false,
    dateOfBirthValid: false,
    emailValid: false,
    phoneNumberValid: false,
    salaryValid: false,
    formErrors: { firstName: '', lastName: '', dateOfBirth: '', email: '', phoneNumber: '', salary: ''},
    formValid: false,
    formType: type
  });

  const [ formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    salary: ''
  })

  useEffect(()=> {
    if(editMode && employeeEdit){
      setFormData({
        id: employeeEdit.id,
        firstName: employeeEdit.firstName,
        lastName: employeeEdit.lastName,
        dateOfBirth: employeeEdit.dateOfBirth,
        email: employeeEdit.email,
        phoneNumber: employeeEdit.phoneNumber,
        salary: employeeEdit.salary
      })
    }
  }, [employeeEdit])

  const { firstName, lastName, dateOfBirth, email, phoneNumber, salary } = formData;

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value
    }))

    setFormValidation((prevState) => ({
      ...prevState,
      firstNameValid: validateField(event.target.id, event.target.value, formValidation).firstNameValid,
      lastNameValid: validateField(event.target.id, event.target.value, formValidation).lastNameValid,
      dateOfBirthValid: validateField(event.target.id, event.target.value, formValidation).dateOfBirthValid,
      emailValid: validateField(event.target.id, event.target.value, formValidation).emailValid,
      passwordValid: validateField(event.target.id, event.target.value, formValidation).passwordValid,
      formValid: validateField(event.target.id, event.target.value, formValidation).formValid
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addEmployee(formData);
    onClose();
  }

  const onEditSubmit = (event) => {
    event.preventDefault();

    updateEmployee(formData);
    onEditClose();
  }


  return (
    <Modal hasForm={true} modalTitle={ editMode ? `Edit ${type}`: `Create ${type}`} onClose={ editMode ? onEditClose : onClose } onSubmit={ editMode ? onEditSubmit : onSubmit} >
      <div className="grid grid-rows-4 grid-flow-row p-2">
        <div className="flex justify-between">
          <div>
            <Input labelName="First Name" inputType="text" id="firstName" name="firstName" value={firstName} onChange={handleOnChange} validationError={formValidation.formErrors.firstName} />
          </div>
          <div>
            <Input labelName="Last Name" inputType="text" id="lastName" name="lastName" value={lastName} onChange={handleOnChange} validationError={formValidation.formErrors.lastName} />
          </div>
        </div>
        <div>
          <Input labelName="Date of Birth" inputType="text" id="dateOfBirth" name="dateOfBirth" value={dateOfBirth} onChange={handleOnChange} validationError={formValidation.formErrors.dateOfBirth} />
        </div>
        <div>
          <Input labelName="Email address" inputType="text" id="email" name="email" value={email} onChange={handleOnChange} validationError={formValidation.formErrors.email} />
        </div>
        <div>
          <Input labelName="Phone Number" inputType="text" id="phoneNumber" name="phoneNumber" value={ phoneNumber} onChange={handleOnChange} validationError={formValidation.formErrors.phoneNumber} />
        </div>
        <div>
          <Input labelName="Monthly Salary" inputType="text" id="salary" name="salary" value={salary} onChange={handleOnChange} validationError={formValidation.formErrors.salary} />
        </div>
        <div className="m-2">
          <Button orange rounded primary className="p-3 w-full hover:bg-gray-300">{editMode ? `Save` : `Add ${type}` }</Button>
        </div>
      </div>
    </Modal>
  )
}

export default EmployeeForm
