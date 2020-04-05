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
      div:first-child {
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

const Header = ({ siteTitle, toggleSideDrawer }) => {
  if(window.innerWidth < 1000) {
    return (
      <HeaderContainer>
        <nav>
          <div>
            <DrawerToggleButton crossVersion={false} toggleSideDrawer={toggleSideDrawer} />
          </div>
          <div>
            <h1>
              <Link to="/">
                {siteTitle}
              </Link>
            </h1>
          </div>
        </nav>
      </HeaderContainer>
    )
  }
  return (
    <HeaderContainer>
      <nav>
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
  toggleSideDrawer: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
