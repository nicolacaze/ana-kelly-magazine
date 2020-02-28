import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


const SiteTitle = styled.header`
  justify-self: center;
  align-self: center;
  a {
    font-size: 3rem;
    color: #000;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <SiteTitle>
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </SiteTitle>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
