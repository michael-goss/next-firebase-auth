import styled from "styled-components"

const NavBarStyles = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  color: var(--primary_contrast);
  background-color: var(--primary);

  .title {
    grid-column-start: 2;
    padding: 0.5rem 0;
    font-size: 2rem;
  }

  .auth-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export default NavBarStyles
