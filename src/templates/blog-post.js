import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

const BlogPostLayout = styled.div`
  img {
    width: 80%;
    height: auto;
  }
`

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  const removeWPstyling = content => content.replace(/(style="[^"]+")|(class="[^"]+")/g,'');

  return (
    <Layout>
      <BlogPostLayout>
        <SEO title="home" />
        <Menu />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: removeWPstyling(post.content) }} />
        </div>
      </BlogPostLayout>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`