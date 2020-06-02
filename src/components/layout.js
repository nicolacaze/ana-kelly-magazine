/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SideDrawer from "./sideDrawer"
import BackDrop from "./backDrop"

const Grid = styled.div``

const Main = styled.main`
  max-width: 1100px;
  width: 100%;
  justify-self: center;
  padding: 0 2rem;
`

const Footer = styled.footer`
  background-color: #000;
  color: #fff;
  opacity: 0.8;
  padding: 1rem 3rem;
  text-align: center;
`

const SocialContainer = styled.div`
  margin: 1rem 0 2rem;
  svg {
    margin-right: 1rem;
    color: #fff;
  }
`

const SocialIcon = ({ link, icon, size }) => (
  <a href={link}>
    <FontAwesomeIcon icon={icon} size={size} />
  </a>
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [state, setState] = useState({
    isSideDrawerVisible: false,
  })

  const toggleSideDrawerClickHandler = () => {
    setState(prevState => {
      return {
        isSideDrawerVisible: !prevState.isSideDrawerVisible,
      }
    })
  }

  const backDropClickHandler = () => {
    setState({
      isSideDrawerVisible: false,
    })
  }

  let backDrop

  if (state.isSideDrawerVisible) {
    backDrop = <BackDrop closeSideDrawer={backDropClickHandler} />
  }

  return (
    <Grid>
      {/* {backDrop}
      <SideDrawer toggleSideDrawer={toggleSideDrawerClickHandler} show={state.isSideDrawerVisible} /> */}
      <Main>{children}</Main>
      {/* <Footer>
        <SocialContainer>
          <SocialIcon link='https://www.instagram.com/anakellymagazine/' icon={faInstagram} size='2x' />
          <SocialIcon link='https://www.facebook.com/anakellymagazine/' icon={faFacebook} size='2x' />
          <SocialIcon link='https://www.linkedin.com/in/ana-kelly-6a8718168/' icon={faLinkedin} size='2x' />
          <SocialIcon link='mailto:anakellymagazine@gmail.com' icon={faEnvelope} size='2x' />
        </SocialContainer>
        <p>© {new Date().getFullYear()}  - Ana Kelly Magazine - Tous droits réservés</p>
      </Footer> */}
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
