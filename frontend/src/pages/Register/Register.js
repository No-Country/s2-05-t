import { useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import signReducer, { initialValues } from '../../reducers/signReducer.js'
// import useUser from '../../hooks/useUser'
import InputText from '../../components/InputText/InputText'
import InputPassword from '../../components/InputPassword/InputPassword'
import InputError from '../../components/InputError/InputError'
import errorsReducer, {
  initialValuesErrors,
  errorsMessages
} from '../../reducers/errorsReducers'
import { getUser, createUser } from '../../services/user.services'

export default function Register () {
  const [state, dispatch] = useReducer(signReducer, initialValues)
  const [errors, dispatchErrors] = useReducer(
    errorsReducer,
    initialValuesErrors
  )
  const [isClient, setIsClient] = useState([])

  const message = 'El usuario ya existe'

  const navigation = useNavigate()

  const client = aux => {
    getUser().then(res => {
      console.log(res.data.map(user => user.email))
      const email = res.data.map(user => user.email)
      if (email.includes(aux)) {
        return setTimeout(() => {
          alert(message)
          navigation('/login')
        }, 3000)
      } else {
        createUser(state).then(res => {
          console.log(res.data)
          navigation('/login')
        })
        return true
      }
    })
    isClient.includes(aux)
      ? console.log('ya existe el email')
      : setIsClient(isClient => [...isClient, aux])
    return true
  }

  // const { register, loading, error } = useUser()

  const handleChange = e => {
    dispatch({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    client(state.email)
    return true
  }

  const onBlur = e => {
    if (!e.target.value.length) {
      dispatchErrors({ name: e.target.name, value: errorsMessages.emptyInput })
    } else if (
      e.target.name === 'passwordRepeated' &&
      state.password !== state.passwordRepeated
    ) {
      dispatchErrors({ name: 'general', value: errorsMessages.passNotEqual })
    } else if (
      e.target.name === 'passwordRepeated' &&
      state.password === state.passwordRepeated
    ) {
      dispatchErrors({ name: 'general', value: '' })
    } else {
      dispatchErrors({ name: e.target.name, value: '' })
    }
  }

  return (
    <section className='Signup'>
      <h1 className='Signup-title'>Bienvenido a App Food</h1>
      <form
        className='form box-shadow-light Signup-form'
        onSubmit={handleSubmit}
      >
        {isClient.length === 0 && (
          <h2 className='Signup-form_title'>Registrese para continuar</h2>
        )}

        {isClient.length > 0 && isClient.find(user => user === state.email) && (
          <h2 className='Signup-error'>El usuario ya existe</h2>
        )}

        <InputText
          inputName='name'
          labelName='Nombre'
          onChange={handleChange}
          value={state.nombre}
          onBlur={onBlur}
        />
        <InputError error={errors.name} />
        <InputText
          inputName='surname'
          labelName='Apellido'
          onChange={handleChange}
          value={state.apellido}
          onBlur={onBlur}
        />
        <InputError error={errors.surname} />
        <InputText
          inputName='email'
          labelName='Correo Electrónico'
          onChange={handleChange}
          value={state.email}
          onBlur={onBlur}
        />
        <InputError error={errors.email} />
        <InputPassword
          inputName='password'
          labelName='Contraseña'
          onChange={handleChange}
          value={state.password}
          onBlur={onBlur}
        />
        <InputError error={errors.password} />
        <InputPassword
          inputName='passwordRepeated'
          labelName='Repita La Contraseña'
          onChange={handleChange}
          value={state.passwordRepeated}
          onBlur={onBlur}
        />
        <InputError error={errors.passwordRepeated} />
        {/* <InputError error={errors.general || error.message} /> */}
        <InputError error={errors.general} />
        <button
          className='button background-yellow color-red'
          // disabled={loading || errors.isError}
          disabled={errors.isError}
        >
          Registrarse
        </button>
        <Link to='/login' className='Signup-form_link'>
          Ya tenes cuenta? Accede aca {'->'}
        </Link>
      </form>
    </section>
  )
}
