import React, { useEffect, useState } from 'react'
import { loginAdmin} from '../../services/admin.services'
import { useNavigate } from 'react-router-dom'

export  function LoginFormAdmin () {
  const [token, setToken] = useState(()=>{
    return window.localStorage.getItem('token')
  })
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
        navigate('/dashboard')
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
      navigate('/dashboard')
    }
  }, [token, navigate])

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <h1 className='m-10 font-bold text-3xl'>Login Admin</h1>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
          <div className='w-[250px] m-4'>

            <label className='self-start'>Email</label>
            <input
            required
              className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm  '
              type='email'
              name='email'
              value={admin.email}
              onChange={e => setAdmin({ ...admin, email: e.target.value })}
            />
          </div>
          <div className='w-[250px] m-4'>
            <label>Password</label>
            <input
              required
              className='focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2  ring-1 ring-slate-200 shadow-sm'
              type='password'
              name='password'
              value={admin.password}
              onChange={e => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <button type='submit' className='px-5 py-3 bg-lime-500 m-4 shadow-sm rounded-md '>Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  )
}
