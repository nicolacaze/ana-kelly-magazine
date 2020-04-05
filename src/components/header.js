import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import DrawerToggleButton from './drawerToggleButton.js'
import Menu from './menu.js'


const HeaderContainer = styled.header`
  justify-self: center;
  align-self: flex-start;
  padding: 2rem 1rem;
  nav {
    .nav-bar {
      display: none;
    }
    h1 {
      text-align: center;
      a {
        font-size: 3rem;
        color: #000;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 1000px) {
    justify-self: flex-start;
    width: 100%;
    nav {
      display: flex;
      .nav-bar {
        display: block;
        margin-right: 1rem;
      }
      .site-title {
        margin-right: 1rem;
      }
      h1 {
        text-align: start;
        margin-bottom: 0;
        line-height: 1.4;
        a {
          font-size: 1.8rem;
        }
      }
      .menu {
        display: none;
      }
    }
  }
  @media (max-width: 576px) {
    justify-self: flex-start;
    width: 100%;
    nav {
      h1 {
        a {
          font-size: 1.4rem;
        }
      }
    }
  }
`

const Header = ({ siteTitle, toggleSideDrawer }) => (
  <HeaderContainer>
    <nav>
      <div className='nav-bar' >
        <DrawerToggleButton crossVersion={false} toggleSideDrawer={toggleSideDrawer} />
      </div>
      <div>
        <h1 className='site-title'>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </nav>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  toggleSideDrawer: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
