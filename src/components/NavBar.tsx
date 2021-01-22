import React, { useContext } from "react"
import { AuthContext } from "../authContext"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import NavBarStyles from "./styles/NavBarStyles"

export default function NavBar() {
  const { user } = useContext(AuthContext)

  return (
    <NavBarStyles>
      <h1 className="title">Next Firebase Authentication</h1>
      <div className="auth-button">
        {!!user ? <LogoutButton /> : <LoginButton />}
      </div>
    </NavBarStyles>
  )
}
