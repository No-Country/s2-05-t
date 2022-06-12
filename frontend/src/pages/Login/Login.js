import { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputError from '../../components/InputError/InputError'
import InputPassword from '../../components/InputPassword/InputPassword'
import InputText from '../../components/InputText/InputText'
// import useUser from '../../hooks/useUser'
import errorsReducer, {
  initialValuesErrors
} from '../../reducers/errorsReducers'
import signReducer, { initialValues } from '../../reducers/signReducer'
import './Login.css'
import { loginUser } from '../../services/user.services'

export default function Login () {
  const [state, dispatch] = useReducer(signReducer, initialValues)
  const [errors, dispatchErrors] = useReducer(
    errorsReducer,
    initialValuesErrors
  )
  // const { login, loading, error } = useUser()

  // getUser().then(res => {
  //   console.log(res.data)
  // })

  // loginUser(state).then(res => {
  //   console.log(res.data)
  // })

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    loginUser(state)
      .then(res => {
        res.data.token && navigate('/')
      })
      .catch(err => {
        dispatchErrors({ name: 'error', value: err.response.data.message })
        console.log('password incorrecto')
        alert('password incorrecto')
      })
  }

  const handleOnBlur = e => {
    if (!e.target.value.length) {
      dispatchErrors({
        name: e.target.name,
        value: 'Para poder iniciar sesion necesitas llenar los espacios.'
      })
    } else {
      dispatchErrors({ name: e.target.name, value: '' })
    }
  }

  const handleChange = e => {
    dispatch({ name: e.target.name, value: e.target.value })
  }

  return (
    <section className='Sign'>
      <h1 className='Sign-title'>Bienvenido a App Food</h1>
      <form className='Sign-form form box-shadow-light' onSubmit={handleSubmit}>
        <h2 className='Sign-form_title'>Inicie sesión para continuar</h2>
        <InputText
          inputName='email'
          labelName='Correo Electrónico'
          value={state.email}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        <InputError error={errors.email} />
        <InputPassword
          inputName='password'
          labelName='Contraseña'
          value={state.password}
          onChange={handleChange}
          onBlur={handleOnBlur}
        />
        {/* <InputError error={errors.password || error.message} /> */}
        <InputError error={errors.password} />
        <button
          className='Sign-form_button button color-red background-yellow'
          // disabled={loading || errors.isError}
          disabled={!state.email || !state.password}
        >
          Iniciar Sesión
        </button>
        <Link to='/register' className='Sign-form_link'>
          No tienes cuenta? Registrate {'->'}
        </Link>
      </form>
    </section>
  )
}
