import { firebase } from "../firebase"
import LogoutButtonStyles from "./styles/LogoutButtonStyles"

export default function LogoutButton() {
  const handleLogOut = async () => {
    await firebase.auth().signOut()
  }

  return <LogoutButtonStyles onClick={handleLogOut}>Log Out</LogoutButtonStyles>
}
