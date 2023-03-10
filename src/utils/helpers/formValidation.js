export function validateField(fieldName, fieldValue, formValidation) {

  let fieldValidationErrors = formValidation.formErrors
  let formType = formValidation.formType

  let firstNameValid = formValidation.firstNameValid
  let lastNameValid = formValidation.lastNameValid
  let dateOfBirthValid = formValidation.dateOfBirthValid
  let emailValid = formValidation.emailValid
  let phoneNumberValid = formValidation.phoneNumberValid
  let salaryValid = formValidation.salaryValid

  switch (fieldName){
    case 'firstName':
      firstNameValid = fieldValue.length > 0
      fieldValidationErrors.firstName = firstNameValid ? '' : 'Please enter a valid first name'
      break;
    case 'lastName':
      lastNameValid = fieldValue.length > 0
      fieldValidationErrors.lastName = lastNameValid ? '' : 'Please enter a valid last name'
      break;
    case 'dateOfBirth':
      dateOfBirthValid = fieldValue.length > 0
      fieldValidationErrors.dateOfBirth = dateOfBirthValid ? '' : 'Please enter a valid date of birth'
      break;
    case 'email':
      emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
      break;
    case 'phoneNumber':
      phoneNumberValid = fieldValue.length > 9;
      fieldValidationErrors.password = phoneNumberValid ? '' : 'Please enter a valid phone number'
      break;
    case 'salary':
      salaryValid = fieldValue.length > 0
      fieldValidationErrors.salaryValid = salaryValid ? '' : 'Please enter a valid monthly salary'
      break;
    default:
      break;
  }

  let formValid = false;
  if(formType === 'Employee'){
    if((firstNameValid && lastNameValid) && dateOfBirthValid){
      if((emailValid && phoneNumberValid) && salaryValid) {
        formValid = true;
      }
    }
  }

  return { firstNameValid, lastNameValid, dateOfBirthValid, emailValid, phoneNumberValid, salaryValid, fieldValidationErrors, formValid}
}