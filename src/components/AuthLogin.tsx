import React from "react"
import { firebase } from "../firebase"
import LoginButton from "./LoginButton"

export default function AuthLogin() {
  const handleClick = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        console.log(`successfully signed in`)
      })
      .catch((error) => {
        console.log(`${error.code}: ${error.message}`)
      })
  }

  return (
    <>
      <LoginButton onClick={handleClick} />
    </>
  )
}
