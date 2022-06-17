import { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import signReducer, { initialValues } from '../../reducers/signReducer.js'
import useUser from '../../hooks/useUser'
import InputText from '../../components/InputText/InputText'
import InputPassword from '../../components/InputPassword/InputPassword'
import InputError from '../../components/InputError/InputError'
import errorsReducer, { initialValuesErrors, errorsMessages } from '../../reducers/errorsReducers'

export default function Register () {
  const [state, dispatch] = useReducer(signReducer, initialValues)
  const [errors, dispatchErrors] = useReducer(errorsReducer, initialValuesErrors)
  const { register, loading, error } = useUser()
  const navigate = useNavigate()

  const handleChange = (e) => {
    dispatch({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const signuped = await register(state)
      signuped && navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }

  const onBlur = (e) => {
    if (!e.target.value.length) {
      dispatchErrors({ name: e.target.name, value: errorsMessages.emptyInput })
    } else if (e.target.name === 'passwordRepeated' && state.password !== state.passwordRepeated) {
      dispatchErrors({ name: 'general', value: errorsMessages.passNotEqual })
    } else if (e.target.name === 'passwordRepeated' && state.password === state.passwordRepeated) {
      dispatchErrors({ name: 'general', value: '' })
    } else {
      dispatchErrors({ name: e.target.name, value: '' })
    }
  }

  return (
    <section className='Signup'>
      <h1 className='Signup-title'>Bienvenido a App Food</h1>
      <form className='form box-shadow-light Signup-form' onSubmit={handleSubmit}>
        <h2 className='Signup-form_title'>Registrese para continuar</h2>
        <InputText inputName='name' labelName='Nombre' onChange={handleChange} value={state.nombre} onBlur={onBlur} />
        <InputError error={errors.name} />
        <InputText inputName='surname' labelName='Apellido' onChange={handleChange} value={state.apellido} onBlur={onBlur} />
        <InputError error={errors.surname} />
        <InputText inputName='email' labelName='Correo Electrónico' onChange={handleChange} value={state.email} onBlur={onBlur} />
        <InputError error={errors.email} />
        <InputPassword inputName='password' labelName='Contraseña' onChange={handleChange} value={state.password} onBlur={onBlur} />
        <InputError error={errors.password} />
        <InputPassword inputName='passwordRepeated' labelName='Repita La Contraseña' onChange={handleChange} value={state.passwordRepeated} onBlur={onBlur} />
        <InputError error={errors.passwordRepeated} />
        <InputError error={errors.general || error.message} />
        <button
          className='button background-yellow color-red'
          disabled={loading || errors.isError}
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
