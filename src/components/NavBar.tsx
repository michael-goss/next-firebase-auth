import React, { useContext } from "react"
import { firebase } from "../firebase"
import { AuthContext } from "../authContext"
import AuthLogin from "./AuthLogin"

export default function NavBar() {
  const { user } = useContext(AuthContext)

  const handleLogOut = async () => {
    await firebase.auth().signOut()
  }

  return (
    <>
      <h1>Next Firebase Auth</h1>
      {!!user ? <button onClick={handleLogOut}>Log Out</button> : <AuthLogin />}
    </>
  )
}
