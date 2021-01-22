import React, { useState } from "react"
import { firebase } from "../firebase"
import LoginButtonStyles from "./styles/LoginButtonStyles"

export default function LoginButton() {
  const [btnImgSrc, setBtnImgSrc] = useState(
    "btn_google_signin_light_normal_web.png"
  )

  const buttonRatio = 191 / 46
  const buttonWidth = 150
  const buttonHeight = buttonWidth / buttonRatio

  const handleLogin = async () => {
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
    <LoginButtonStyles
      src={btnImgSrc}
      alt="Google Sign In Button"
      width={buttonWidth}
      height={buttonHeight}
      onClick={handleLogin}
      onMouseOver={() =>
        setBtnImgSrc("btn_google_signin_light_pressed_web.png")
      }
      onMouseOut={() => setBtnImgSrc("btn_google_signin_light_normal_web.png")}
    />
  )
}
