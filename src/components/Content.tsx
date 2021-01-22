import { useContext } from "react"
import { AuthContext } from "../authContext"

export default function Content() {
  const { user } = useContext(AuthContext)

  return (
    <>{!!user ? <h3>Successfully logged in.</h3> : <h3>Login necessary.</h3>}</>
  )
}
