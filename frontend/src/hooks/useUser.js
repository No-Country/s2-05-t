import { useState } from 'react'
import { loginURL, registerURL } from '../configs/URLS'

export default function useUser () {
  const [error, setError] = useState({ isError: false, message: '' })
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const login = dataForm => {
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
        // Dejar hasta que se cambien la respuesta en el backend
        console.log(user)
        const messageErrorFromBackend = 'La contraseña no es correcta'
        if (user.message === messageErrorFromBackend) {
          return Promise.reject(new Error(messageErrorFromBackend))
        }
        setUser({ token: user.token })
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setError({
          isError: true,
          message: error.message || 'Ocurrio un error al iniciar sesión'
        })
        setLoading(false)
      })
  }

  const register = dataForm => {
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
        setUser(userData)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError({
          isError: true,
          message: error.message || 'Ocurrio un error al iniciar sesión'
        })
        setLoading(false)
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
