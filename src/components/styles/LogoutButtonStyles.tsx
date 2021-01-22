import styled from "styled-components"
import LoginButtonStyles from "./LoginButtonStyles"

const LogoutButtonStyles = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: var(--primary_contrast);
  color: var(--primary);

  &:hover {
    cursor: pointer;
    background-color: var(--primary_light);
  }
`

export default LogoutButtonStyles
