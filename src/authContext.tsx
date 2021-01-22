import React, { useEffect, useState, createContext, ReactNode } from "react"
import { firebase, app } from "./firebase"

// undefined: onAuthStateChanged hasn't been called
// null: user is not signed in
// User: user signed in
interface ContextProps {
  user: firebase.User | null | undefined
}

export const AuthContext = createContext<ContextProps>({ user: undefined })

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined)

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
