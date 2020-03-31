import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLayout from "../components/gridLayout"


export default ({ data }) => {
 
  return (
    <Layout>
      <SEO title="designers" />
      <h1>Créateurs</h1>
      <GridLayout posts={data.allWordpressPost.edges}/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: {fields: [date], order: DESC}, filter: {categories: {elemMatch: {slug: {eq: "createurs"}}}}) {
      edges {
        node {
          id
          jetpack_featured_media_url
          title
          excerpt
          slug
          date
        }
      }
    }
  }
`
