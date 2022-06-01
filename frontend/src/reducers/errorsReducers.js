export const initialValuesErrors = {
  name: '', surname: '', email: '', password: '', passwordRepeated: '', general: '', isError: false
}

export const errorsMessages = {
  emptyInput: 'No podremos registrarte si no rellenas los espacios',
  passNotEqual: 'Las contraseñas no coinciden'
}

export default function errorsReducer (state, error) {
  const isError = !!error.value.length
  console.log(isError)
  switch (error.name) {
    case 'name':
      return { ...state, name: error.value, isError }
    case 'surname':
      return { ...state, surname: error.value, isError }
    case 'email':
      return { ...state, email: error.value, isError }
    case 'password':
      return { ...state, password: error.value, isError }
    case 'passwordRepeated':
      return { ...state, passwordRepeated: error.value, isError }
    case 'general':
      return { ...state, general: error.value, isError }
    default:
      return state
  }
}
