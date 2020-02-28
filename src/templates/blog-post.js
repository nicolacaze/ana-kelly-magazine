import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import  "./blog-post-styles.module.css"



export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  const removeWPstyling = content => content.replace(/(style="[^"]+")|(class="[^"]+")/g,'');

  return (
    <Layout>
      <SEO title="home" />
      <Menu />
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: removeWPstyling(post.content) }} />
      </div>
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