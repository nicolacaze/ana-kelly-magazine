import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import DrawerToggleButton from './drawerToggleButton.js'


const HeaderContainer = styled.header`
  justify-self: center;
  align-self: center;
  h1 {
    a {
      font-size: 3rem;
      color: #000;
      text-decoration: none;
    }
  }
`
const MenuContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0;
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

const Menu = () => (
  <MenuContainer>
    <MenuItem>
      <Link to='/designers'>
        Créateurs
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to='/encounters'>
        Rencontres
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to='/advice'>
        Conseils
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to='/about'>
        À propos
      </Link>
    </MenuItem>
  </MenuContainer>
)

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <nav>
        <div>
          <DrawerToggleButton />
        </div>
        <div>
          <h1>
            <Link to="/">
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
