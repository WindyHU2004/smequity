import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export const DEMO_EMAIL = 'janedoe@gmail.com'
export const DEMO_PASSWORD = 'XYZ@24'

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function login(email, password) {
    if (email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD) {
      setIsLoggedIn(true)
      return true
    }
    return false
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
