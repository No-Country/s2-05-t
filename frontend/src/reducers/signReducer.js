export const initialValues = {
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  passwordRepeated: ''
}

export default function signReducer (state, change) {
  switch (change.name) {
    case 'name':
      return { ...state, nombre: change.value }
    case 'surname':
      return { ...state, apellido: change.value }
    case 'email':
      return { ...state, email: change.value }
    case 'password':
      return { ...state, password: change.value }
    case 'passwordRepeated':
      return { ...state, passwordRepeated: change.value }
    default:
      return state
  }
}
