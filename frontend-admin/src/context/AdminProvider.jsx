import { createContext } from 'react'
// import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { useLocalStorage } from '../hook/useLocalStorage'
export const AdminContext = createContext()

export default function AdminProvider ({ children }) {
  const [admin, setAdmin] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('token', null)

  const enviarToken = token => {
    return setToken(token)
  }
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token)
      setAdmin(decoded)
    } else {
      setAdmin(null)
    }
  }, [token])

  const value = {
    admin,
    token,
    enviarToken
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}
