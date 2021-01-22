import React from "react"

interface LoginButtonProps {
  onClick: () => void
}

export default function LoginButton({ onClick }: LoginButtonProps) {
  const buttonRatio = 191 / 46
  const buttonWidth = 150
  const buttonHeight = buttonWidth / buttonRatio

  return (
    <img
      src="btn_google_signin_light_normal_web.png"
      alt="Google Sign In Button"
      width={buttonWidth}
      height={buttonHeight}
      onClick={onClick}
    />
  )
}
