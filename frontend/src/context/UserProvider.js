import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const [user, setUser] = useLocalStorage('token', null)

  const login = token => {
    setUser(token)
  }

  const value = {
    user,
    login
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
