import { createContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import jwtDecode from 'jwt-decode'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const [user, setUser] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('token', null)

  const enviarToken = (newtoken) => {
    return setToken(newtoken)
  }

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token)
      setUser(decoded)
      console.log(decoded)
    }
  }, [user, token])

  const value = {
    user,
    token,
    enviarToken
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
