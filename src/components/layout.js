/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 200px auto 200px;
`

const Main = styled.main`
  max-width: 960px;
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


  return (
    <Grid>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        <div>
          <FontAwesomeIcon icon={faFacebook} size='2x'/>
          <FontAwesomeIcon icon={faInstagram} size='2x'/>
          <FontAwesomeIcon icon={faLinkedin} size='2x'/>
          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        

        </div>
        <p>© {new Date().getFullYear()}  - Ana Kelly Magazine - Tous droits réservés</p>
      </Footer>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
