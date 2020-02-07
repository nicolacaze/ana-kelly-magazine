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
// import "./layout.css"

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

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 200px auto 200px;
  `

  const Main = styled.main`
    max-width: 800px;
    width: 100%;
    justify-self: center;
  `

  const Footer = styled.footer`
    background-color: beige;
    padding: 1rem 3rem;
  `

  return (
    <Grid>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()}  - Ana Kelly Magazine - Tous droits réservés
      </Footer>
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
