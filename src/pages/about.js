import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 2rem 0;
  padding 0 0 1rem;
`

const about = props => {
  console.log(props);

  return (
    <Layout>
      <SEO title="home" />
      <Menu />
      <Title>À propos</Title>
      
    </Layout>
  )
}


export default about

export const pageQuery = graphql`
  query {
    wordpressPage(id: {eq: "cd5b61b0-280c-5df7-938f-055283715a69"}) {
      id
      date
      slug
      title
      content
    }
  }
`
