import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import DOMPurify from 'dompurify'

const BlogPostLayout = styled.div`
  figure {
    width: 80%;
    margin: 2rem auto;
  }
  img {
    width: 100%;
    height: auto;
  }
`

export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node;
  const { sanitize } = DOMPurify;
  DOMPurify.setConfig({
    FORBID_ATTR: ['style', 'class'],
    FORBID_TAGS: ['br']
  });
  DOMPurify.addHook('uponSanitizeElement', node => node.innerHTML === '&nbsp;' ? node.remove() : node);

  return (
    <Layout>
      <BlogPostLayout>
        <SEO title="home" />
        <Menu />
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: sanitize(post.content) }} />
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