import React, { useEffect, useState, createContext, ReactNode } from "react"
import { firebase, app } from "./firebase"

interface ContextProps {
  user: firebase.User | null
}

export const AuthContext = createContext<ContextProps>({ user: null })

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
