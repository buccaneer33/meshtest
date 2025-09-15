const validationErrorsText: {[key: string]: string} = {
  required: 'Field is reqired',
  email: 'Plaese enter valid email',
  pattern: "Please enter valid value",
  minlength: 'Entered valie is too short',
  maxlength: 'Entered valie is too long',
  min: 'Entered value is too small',
  max: 'Ebtered value is too big'
}

export function getErrorText(errorKey: string): string {
  if(errorKey && Object.keys(validationErrorsText).includes(errorKey)){
    return validationErrorsText[errorKey];
  } else {
    return '';
  }
}
