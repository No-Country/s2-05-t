import React, { useEffect, useState } from 'react'
import { loginAdmin } from '../../../services/admin.services'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

export default function LoginFormAdmin () {
  const [token, setToken] = useLocalStorage('token', null)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [admin, setAdmin] = useState({
    email: '',
    password: ''
  })
  console.log(token)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(admin)

    loginAdmin(admin)
      .then(res => {
        navigate('/admin/dashboard')
        setToken(res.data.token)
        console.log(res)
      })
      .catch(err => {
        console.log(err.response.data)
        setToken(null)
        setError(err.response.data.error)
      })
  }
  useEffect(() => {
    if (token) {
      navigate('/admin/dashboard')
    }
  }, [token, navigate])

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>

            <label>Email</label>
            <input
              className='input-admin'
              type='email'
              name='email'
              value={admin.email}
              onChange={e => setAdmin({ ...admin, email: e.target.value })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className='input-admin'
              type='password'
              name='password'
              value={admin.password}
              onChange={e => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}
