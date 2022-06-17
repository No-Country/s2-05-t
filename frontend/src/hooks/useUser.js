import { useState, useContext } from 'react'
import { loginURL, registerURL } from '../configs/URLS'
import { UserContext } from '../context/UserProvider'

export default function useUser () {
  const [error, setError] = useState({ isError: false, message: '' })
  const [loading, setLoading] = useState(false)
  const { enviarToken, user } = useContext(UserContext)

  const login = (dataForm) => {
    setError({ isError: false, message: '' })
    setLoading(true)
    const body = JSON.stringify({
      email: dataForm.email,
      password: dataForm.password
    })
    return fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          return Promise.reject(new Error(user.error))
        }
        enviarToken(user.token)
        setLoading(false)
        return true
      })
      .catch(error => {
        console.error(error)
        setError({ isError: true, message: error.message || 'Ocurrio un error al iniciar sesión' })
        setLoading(false)
        return false
      })
  }

  const register = (dataForm) => {
    setError({ isError: false, message: '' })
    setLoading(true)
    delete dataForm.passwordRepeated

    return fetch(registerURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataForm)
    })
      .then(res => res.json())
      .then(userData => {
        if (userData.error) {
          return Promise.reject(new Error(userData.error))
        }
        setLoading(false)
        return true
      })
      .catch((err) => {
        console.error(err)
        setError({ isError: true, message: error.message || 'Ocurrio un error al iniciar sesión' })
        setLoading(false)
        return false
      })
  }

  return {
    login,
    register,
    user,
    loading,
    error
  }
}
