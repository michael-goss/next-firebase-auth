import { useContext } from "react"
import { AuthContext } from "../authContext"
import ContentStyles from "./styles/ContentStyles"

export default function Content() {
  const { user } = useContext(AuthContext)

  return (
    <ContentStyles>
      {!!user ? <h3>Login successful 🚀</h3> : <h3>Login necessary 🤦‍♂️</h3>}
    </ContentStyles>
  )
}
