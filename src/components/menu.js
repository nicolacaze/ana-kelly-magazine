import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuContainer = styled.ul`
  display: grid;
  grid-template-columns: ${props =>
    props.isVertical ? "1fr" : "1fr 1fr 1fr 1fr"};
  padding: 3rem 1rem;
  height: 3rem;
  margin: 0;
`

const MenuItem = styled.li`
  list-style: none;
  justify-self: center;
  font-size: 1.2rem;
  padding: 1rem 0.5rem;
  a {
    text-decoration: none;
    color: #000;
  }
  &:hover {
    border-bottom: 1px solid #000;
  }
`

const Menu = ({ isVertical }) => (
  <MenuContainer isVertical={isVertical}>
    <MenuItem>
      <Link to="/designers">Créateurs</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/encounters">Rencontres</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/advice">Conseils</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/about">À propos</Link>
    </MenuItem>
  </MenuContainer>
)

Menu.propTypes = {
  isVertical: PropTypes.bool,
}

Menu.defaultProps = {
  isVertical: false,
}

export default Menu
